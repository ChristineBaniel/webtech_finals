import Link from 'next/link';

export default function Navbar() {
  return (
        <nav className="bg-[#F59E0]">
      <div className="container mx-auto px-4 py-3 bg-[#F59E0]">
        <div className="flex justify-between items-center">
          {/* Logo/Title Link */}
          <Link 
            href="/images/201571.png" 
            className="text-xl font-bold text-black hover:text-gray-100"
          >
            FaceLibrary
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link 
              href="/users" 
              className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-100 hover:bg-[#F59E0B]/90 transition-colors"
            >
              Users
            </Link>
            <Link 
              href="/posts" 
              className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-100 hover:bg-[#F59E0B]/90 transition-colors"
            >
              Posts
            </Link>
            <Link 
              href="/stats" 
              className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-100 hover:bg-[#F59E0B]/90 transition-colors"
            >
              Stats
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}