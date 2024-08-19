import { PostUpdateForm } from '@/app/cabinet/_components/post-update-form'
import { postsGet } from '@/lib/api-post'

const CabinetTabPostsUpdateModal = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
  // TODO: fix query error
  const posts = await postsGet({
    filters: { id: Number(id) },
  })

  return <PostUpdateForm defaultValues={posts[0]} />
}

export default CabinetTabPostsUpdateModal
