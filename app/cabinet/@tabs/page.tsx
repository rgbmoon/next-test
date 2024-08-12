'use client'

import { LoaderIcon } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { userGet, userUpdate } from '@/lib/api-user'
import { UserUpdateRequest } from '@/types/api'
import { enqueueSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { getDirtyValues } from '@/utils/form'
import { useRouter } from 'next/navigation'

type FormData = Omit<UserUpdateRequest, 'userId'>

const CabinetTabProfile = () => {
  const [isSubmit, setSubmit] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const userId = Number(Cookies.get('userId'))
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm<FormData>()

  useEffect(() => {
    const userId = Number(Cookies.get('userId'))
    setLoading(true)

    userGet({ userId })
      .then((response) => {
        reset(response)
      })
      .catch((error) => {
        if (error instanceof Error) {
          enqueueSnackbar(error.message, { variant: 'error' })
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [reset])

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmit(true)

      const filteredFields = getDirtyValues(dirtyFields, data)

      await userUpdate({ userId, ...filteredFields })

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

  if (isLoading) {
    return (
      <div className="my-auto flex w-full items-center justify-center gap-2 self-center">
        <LoaderIcon />
      </div>
    )
  }

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
          <Input
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
      {/* TODO: make checkbox component */}
      <div className="flex items-center gap-2">
        <Button type="submit" disabled={isSubmit}>
          Submit
        </Button>
        {isSubmit && <LoaderIcon width={24} height={24} />}
      </div>
    </form>
  )
}

export default CabinetTabProfile
