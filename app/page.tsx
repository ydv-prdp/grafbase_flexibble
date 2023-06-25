import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <section className='flex-start flex-col paddings mb-16'>
      <h3>Categories</h3>
      <h3>Posts</h3>
      <h3>Load More</h3>
    </section>
  )
}
