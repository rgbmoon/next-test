import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page title',
  description: 'Home page description',
}

const Home = () => {
  return <div className="">Next blank app</div>
}

// TODO
// 1) Make user cabinet with hook forms
// 2) Make main page with posts
// 3) Make single post page with dynamic route

export default Home
