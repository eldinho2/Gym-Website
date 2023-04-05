import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="absolute text-center left-[12%] bg-transparent flex justify-evenly items-center z-10 h-36">
        <h1 className="flex font-bold text-3xl hover:cursor-pointer text-[#FCFCFC] relative">
          <Image className="right-[149px] bottom-[8px] absolute" width={30} height={10} src="/muscleBlue.png" alt="" />
          FLEXZONE
        </h1>
        <nav className="flex justify-between">
          <ul className="flex gap-8 ml-40 mr-60">
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Planos
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Galeria
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Treinadores
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Contato
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <FaFacebookSquare className="fill-white h-6 w-6 hover:cursor-pointer"/>
            <FaInstagram className="fill-white w-6 h-6 hover:cursor-pointer"/>
          </div>
        </nav>
    </header>
  )
}