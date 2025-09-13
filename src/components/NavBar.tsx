
const NavBar = () => {
  return (
    <div className='font-sans text-xl'>
      <nav className='bg-gray-800 p-3 fixed w-full text-white flex justify-between items-center'>
        <h2 className='font-bold text-2xl'><span className="text-4xl text-blue-500 hover:text-yellow-500">D</span>aily<span className="text-[#fe7062]"><span className="text-4xl">B</span>log</span></h2>

        <ul className="flex w-96 list-none justify-evenly">
            <li><a href="#" className="text-gray-200 hover:text-blue-500 hover:underline">Home</a></li>
            <li><a href="#" className="text-gray-200 hover:text-blue-500 hover:underline">About</a></li>
            <li><a href="#" className="text-gray-200 hover:text-blue-500 hover:underline">Blogs</a></li>
            <li><a href="#" className="text-gray-200 bg-blue-700 rounded-lg px-3 py-2 hover:bg-[#fe7062] hover:text-black transition">Add Blog</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
