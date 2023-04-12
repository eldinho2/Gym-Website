import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center mx-32 lg:mx-10 items-center w-full z-10 h-36">
      <div className="flex">
        <h1 className="text-3xl hover:cursor-pointer text-[#FCFCFC] relative">
          <Image className="right-[137px] bottom-[8px] absolute" width={30} height={10} src="/muscleBlue.png" alt="" />
          FLEXZONE
        </h1>
        <nav className="">
          <ul className="flex gap-8 ml-40 mr-60 lg:ml-20 lg:mr-10">
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
              <Link href="https://github.com/eldinho2" target="_blank" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Copyright © Vinicius SG 2023
              </Link>
            </li>
          </ul>
        </nav>
        </div>
    </footer>
  )
}