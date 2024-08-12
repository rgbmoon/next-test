import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page title',
  description: 'Home page description',
}

const Home = () => {
  return <div className="">Next blank app</div>
}

// TODO
// 1) Make user cabinet with hook forms - two variants: for admin and common user
// admin can edit another users and their posts, common user can edit his posts and user info
// 2) Make main page with posts
// 3) Make single post page with dynamic route

export default Home
