import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-white flex justify-between items-center px-10 py-6 fixed top-0 left-0 w-full ">
        <h1 className="font-bold text-3xl ">
            BizBud
            </h1>
        <ul className="flex justify-between items-center">
              <li className="mx-6 font-light transition-all duration-500 text-purple-500">
                <Link href={"/"}>
                    Home
                </Link>
            </li>
              <li className="mx-6 font-light transition-all duration-500 text-black hover:text-purple-500">
                <Link href={"/"}>
                    Services
                </Link>
            </li>
              <li className="mx-6 font-light transition-all duration-500 text-black hover:text-purple-500">
                <Link href={"/"}>
                    About
                </Link>
            </li>
              <li className="mx-6 font-light transition-all duration-500 text-black hover:text-purple-500">
                <Link href={"/"}>
                    Testimonials
                </Link>
            </li>
              <li className="mx-6 font-light transition-all duration-500 text-black hover:text-purple-500">
                <Link href={"/"}>
                    Cilents
                </Link>
            </li>
              <li className="mx-6 font-light transition-all duration-500 text-black hover:text-purple-500">
                <Link href={"/"}>
                    Contact
                </Link>
            </li>
        </ul>
        <button className="px-8 py-4 bg-purple-600 text-white rounded-full">
            Call now
        </button>
    </div>
  )
}
