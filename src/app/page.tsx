import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-transparent rounded-lg p-5 mb-4 shadow-sm">
      <div className="text-center text-black">
        <h1 className="text-5xl font-bold text-black-600 mb-10">FaceLibrary</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/users"
            className="px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-black bg-[#F59E0]-600 hover:bg-[#F59E0]-700 transition-colors duration-200"
          >
            Users
          </Link>
          <Link
            href="/posts"
            className="px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-black bg-[#F59E0]-600 hover:bg-[#F59E0]-700 transition-colors duration-200"
          >
            View Posts
          </Link>
          <Link
            href="/stats"
            className="px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-black bg-[#F59E0]-600 hover:bg-[#F59E0]-700 transition-colors duration-200"
          >
            View Stats
          </Link>
        </div>
      </div>
    </main>
  )
}