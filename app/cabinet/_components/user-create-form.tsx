'use client'

import { LoaderIcon } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { userCreate } from '@/lib/api-user'
import { UserCreateRequest } from '@/types/api'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = UserCreateRequest & {
  confirmPassword: string
}

export const UserCreateForm: FC = () => {
  const router = useRouter()
  const [isSubmit, setSubmit] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmit(true)

      const { confirmPassword, ...inputData } = data

      await userCreate(inputData)

      enqueueSnackbar('User created', { variant: 'success' })
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    } finally {
      setSubmit(false)
    }
  }

  const { ref: emailRef, ...emailFild } = register('email', {
    required: true,
    minLength: 4,
  })
  const { ref: passwordRef, ...passwordFild } = register('password', {
    required: true,
    minLength: 4,
  })
  const { ref: confirmPasswordRef, ...confirmPasswordFild } = register(
    'confirmPassword',
    {
      required: true,
      minLength: 4,
      validate: (value) =>
        value === getValues('password') || 'Password doesn`t matched',
    }
  )
  const { ref: firstNameRef, ...firstNameFild } = register('firstName', {
    required: true,
    minLength: 1,
  })
  const { ref: lastNameRef, ...lastNameFild } = register('lastName', {
    required: true,
    minLength: 1,
  })
  const { ref: isAdminRef, ...isAdminFild } = register('isAdmin')

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 max-md:flex-col">
        <Input
          label="Email"
          errors={errors}
          inputRef={emailRef}
          {...emailFild}
        />
        <div className="flex gap-2">
          <PasswordInput
            label="Password"
            errors={errors}
            inputRef={passwordRef}
            {...passwordFild}
          />
          <PasswordInput
            label="Confirm Password"
            errors={errors}
            inputRef={confirmPasswordRef}
            {...confirmPasswordFild}
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
      <Checkbox label="Is user admin?" inputRef={isAdminRef} {...isAdminFild} />
      <div className="flex items-center gap-2">
        <Button type="submit" disabled={isSubmit}>
          Submit
        </Button>
        {isSubmit && <LoaderIcon width={24} height={24} />}
      </div>
    </form>
  )
}
