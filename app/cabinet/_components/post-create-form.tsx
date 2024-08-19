'use client'

import { postCreate } from '@/lib/api-post'
import { PostsCreateRequest } from '@/types/api'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = PostsCreateRequest

export const PostCreateForm: FC = () => {
  const router = useRouter()
  const [isSubmit, setSubmit] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmit(true)

      await postCreate(data)

      enqueueSnackbar('Post created', { variant: 'success' })
      router.refresh()
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    } finally {
      setSubmit(false)
    }
  }

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    ></form>
  )
}
