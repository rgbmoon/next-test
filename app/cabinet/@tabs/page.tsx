'use client'

import { LoaderIcon } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = {
  email?: string
  password?: string
  isAdmin?: boolean
  firstName?: string
  lastName?: string
}

const CabinetTabProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const [isSubmit, setSubmit] = useState(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmit(true)
      // TODO await userLogin(data) make action
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
      <div className="flex gap-2 max-md:flex-col">
        <div className="flex grow flex-col gap-4">
          <Input
            label="Email"
            errors={errors}
            inputRef={emailRef}
            {...emailFild}
          />
          <Input
            label="Password"
            errors={errors}
            inputRef={passwordRef}
            {...passwordFild}
          />
        </div>
        <div className="flex grow flex-col gap-4">
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
