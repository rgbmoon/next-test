'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { userLogin } from './actions'

type FormData = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await userLogin(data)
  }

  return (
    <form
      className="m-auto flex w-96 flex-col gap-4 rounded-lg border border-solid border-slate-100 p-2 shadow max-md:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        autoFocus
        label="Login"
        errors={errors}
        defaultValue="Vlad"
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
