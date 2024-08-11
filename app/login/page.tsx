'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react'
import { LoaderIcon } from '@/components/icons/loader'
import { PasswordInput } from '@/components/ui/password-input'
import { LoginRequest } from '@/types/api'
import { login } from '@/lib/api-session'

type FormData = LoginRequest

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const [isSubmit, setSubmit] = useState(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmit(true)
      await login(data)
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

  const { ref: passwordRef, ...passwordField } = register('password', {
    required: true,
    minLength: 4,
  })

  return (
    <form
      className="m-auto flex w-96 flex-col gap-4 rounded-lg border border-solid border-slate-100 p-3 shadow max-md:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        autoFocus
        label="Login"
        errors={errors}
        defaultValue="vlad@mail.ru"
        inputRef={emailRef}
        {...emailFild}
      />
      <PasswordInput
        label="Password"
        errors={errors}
        defaultValue="1234"
        inputRef={passwordRef}
        {...passwordField}
      />
      <div className="flex items-center gap-2">
        <Button type="submit" disabled={isSubmit}>
          Submit
        </Button>
        {isSubmit && <LoaderIcon width={24} height={24} />}
      </div>
    </form>
  )
}

export default Login
