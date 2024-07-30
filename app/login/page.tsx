'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = {
  login: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data)
  }

  // TODO: finish hook form validation

  return (
    <form
      className="m-auto flex w-96 flex-col gap-4 rounded-lg border border-solid border-slate-100 p-2 shadow max-md:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Login"
        autoFocus
        {...register('login', { required: true, minLength: 3 })}
      />
      <Input
        label="Password"
        {...register('password', { required: true, minLength: 4 })}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Login
