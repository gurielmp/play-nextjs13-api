import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Hei Wake up</h1>
      <h2>This is the home page</h2>
      <Link href="/posts">Go to Posts</Link>
      <br />
      <Link href="/albums">Go to Albums</Link>
    </div>
  )
}
