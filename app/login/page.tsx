'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { userLogin } from './actions'
import { enqueueSnackbar } from 'notistack'

type FormData = {
  email: string
  password: string
}

// TODO: make submitting UI/loader, disable submit button while submitting

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await userLogin(data)
    } catch (error) {
      // TODO: fix error that brokes variant
      enqueueSnackbar(error as string, { variant: 'error' })
    }
  }

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
        {...register('email', { required: true, minLength: 4 })}
      />
      <Input
        label="Password"
        errors={errors}
        defaultValue="1234"
        {...register('password', { required: true, minLength: 4 })}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Login
