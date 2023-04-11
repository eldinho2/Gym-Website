import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full z-10 h-36">
        <h1 className="flex font-bold text-3xl hover:cursor-pointer text-[#FCFCFC] relative">
          <Image className="right-[149px] bottom-[8px] absolute" width={30} height={10} src="/muscleBlue.png" alt="" />
          FLEXZONE
        </h1>
        <nav className="flex">
          <ul className="flex gap-8 ml-40 mr-60">
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Copyright © FlexZone 2022
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}