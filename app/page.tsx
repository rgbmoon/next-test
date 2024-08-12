import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page title',
  description: 'Home page description',
}

const Home = () => {
  return <div className="">Next blank app</div>
}

// TODO
// 1) Make users edit tab
// 2) make post constructor with different content types
// Admin can edit every post, common user can edit only his own posts
// 3) Make main page with posts
// 4) Make single post page with dynamic route

export default Home
