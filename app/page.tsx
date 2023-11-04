import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main> hello world <br />
      <Link href="users">Users!</Link> <br />
      <ProductCard />
    </main>
  )
}
