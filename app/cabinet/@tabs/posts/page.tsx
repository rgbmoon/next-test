import { userGet } from '@/lib/api-user'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Link } from '@/components/ui/link'
import { PostCard } from '../../_components/post-card'
import { postsGet } from '@/lib/api-post'

const CabinetTabPosts = async () => {
  const userId = cookies().get('userId')?.value
  const { isAdmin } = await userGet({ userId: Number(userId) })

  const posts = await postsGet()

  if (!isAdmin) {
    redirect('/cabinet')
  }

  return (
    <div className="flex w-full flex-col gap-2">
      {/* TODO: make posts filters, search, sort, pagination */}
      <div className="flex justify-end">
        <Link href="/cabinet/posts/create">Create post</Link>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1">
        {posts.map((post) => (
          <PostCard key={post.id} isAdmin={isAdmin} {...post} />
        ))}
      </div>
    </div>
  )
}

export default CabinetTabPosts
