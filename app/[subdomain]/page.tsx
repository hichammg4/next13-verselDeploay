import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <div>
        <h1>start test</h1>
        <Link href="/contact" >
          <button style={{backgroundColor: "red"}}>
          contact

          </button>
      </Link>
      </div>
    </main>
  )
}
