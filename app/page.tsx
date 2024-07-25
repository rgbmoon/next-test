import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page title',
  description: 'Home page description',
}

const Home = () => {
  return <div className="">Next blank app</div>
}

// TODO
// 1) Make user cabinet
// 2) Make auth
// 3) Make auth middleware for cabinet
// 4) Make main page with posts
// 5) Make single post page with dynamic route

export default Home
