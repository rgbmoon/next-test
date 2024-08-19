'use client'

import { Confirm } from '@/components/ui/confirm'
import { postDelete, postUpdate } from '@/lib/api-post'
import { Post, PostsUpdateRequest } from '@/types/api'
import { getDirtyValues } from '@/utils/form'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = Omit<PostsUpdateRequest, 'id'>

type Props = {
  defaultValues: Post
}

export const PostUpdateForm: FC<Props> = ({ defaultValues }) => {
  const router = useRouter()
  const [isSubmit, setSubmit] = useState(false)
  const [isConfirmOpen, setConfirmOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({ defaultValues })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmit(true)

      const filteredFields = getDirtyValues(dirtyFields, data)

      await postUpdate({ id: defaultValues.id, ...filteredFields })

      router.refresh()
      enqueueSnackbar('Post updated', { variant: 'success' })
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    } finally {
      setSubmit(false)
    }
  }

  const onPostDelete = async () => {
    try {
      await postDelete({ id: defaultValues.id })

      router.back()
      // BUG: refresh doesn't work after route.back() call. It looks like an issue. setTimeot used as temporary fix
      setTimeout(() => {
        router.refresh()
      }, 0)

      enqueueSnackbar('Post deleted', { variant: 'success' })
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    } finally {
      setConfirmOpen(false)
    }
  }

  return (
    <>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      ></form>
      <Confirm
        title="Delete post?"
        isOpen={isConfirmOpen}
        onClose={() => {
          setConfirmOpen(false)
        }}
        onConfirm={onPostDelete}
      />
    </>
  )
}
