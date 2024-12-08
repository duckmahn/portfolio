import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      PORTFOLIO LANDING PAGE
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
      <h1 className="flex flex-col items-center justify-center">Tech Stack</h1>
      <div className="flex flex-col items-center justify-center">
        <h1>Next.js</h1>
        <h1>React</h1>
        <h1>Three.js</h1>
        <h1>Tailwind</h1>
        <h1>Drei</h1>
        <h1>Framer Motion</h1>
        <h1>Howler.js</h1>
        <h1>Gsap</h1>
      </div>
      <Link href="/3d">3D</Link>
    </div>
  )
}
