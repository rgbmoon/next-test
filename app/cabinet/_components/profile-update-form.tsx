'use client'

import { LoaderIcon } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { userUpdate } from '@/lib/api-user'
import { User, UserUpdateRequest } from '@/types/api'
import { getDirtyValues } from '@/utils/form'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = Omit<UserUpdateRequest, 'userId'>

type Props = {
  defaultValues: User
  isAdmin: boolean
}

export const ProfileUpdateForm: FC<Props> = ({ defaultValues, isAdmin }) => {
  const router = useRouter()
  const [isSubmit, setSubmit] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({ defaultValues })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmit(true)

      const filteredFields = getDirtyValues(dirtyFields, data)

      await userUpdate({ userId: defaultValues.userId, ...filteredFields })

      router.refresh()
      enqueueSnackbar('User updated', { variant: 'success' })
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    } finally {
      setSubmit(false)
    }
  }

  const { ref: emailRef, ...emailFild } = register('email', {
    minLength: 4,
  })
  const { ref: passwordRef, ...passwordFild } = register('password', {
    minLength: 4,
  })
  const { ref: firstNameRef, ...firstNameFild } = register('firstName', {
    minLength: 1,
  })
  const { ref: lastNameRef, ...lastNameFild } = register('lastName', {
    minLength: 1,
  })
  const { ref: isAdminRef, ...isAdminFild } = register('isAdmin')

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 max-md:flex-col">
        <div className="flex gap-2">
          <Input
            label="Email"
            errors={errors}
            inputRef={emailRef}
            {...emailFild}
          />
          <PasswordInput
            label="New password"
            errors={errors}
            inputRef={passwordRef}
            {...passwordFild}
          />
        </div>
        <div className="flex gap-2">
          <Input
            label="First Name"
            errors={errors}
            inputRef={firstNameRef}
            {...firstNameFild}
          />
          <Input
            label="Last Name"
            errors={errors}
            inputRef={lastNameRef}
            {...lastNameFild}
          />
        </div>
      </div>
      {isAdmin && (
        <Checkbox
          label="Is user admin?"
          inputRef={isAdminRef}
          {...isAdminFild}
        />
      )}
      <div className="flex items-center gap-2">
        <Button type="submit" disabled={isSubmit}>
          Submit
        </Button>
        {isSubmit && <LoaderIcon width={24} height={24} />}
      </div>
    </form>
  )
}
