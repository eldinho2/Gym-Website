import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center mx-32 xsm:mx-0 lg:mx-10 md:mx-1 items-center w-full z-10 h-36">
      <div className="flex xsm:flex-col">
        <h1 className="xsm:text-center text-3xl hover:cursor-pointer text-[#FCFCFC] relative md:text-xl xsm:text-xs">
          <Image className="right-[137px] bottom-[8px] xsm:right-[159px] xsm:bottom-[-1px] md:right-[93px] md:bottom-[4px] absolute" width={30} height={10} src="/muscleBlue.png" alt="" />
          FLEXZONE
        </h1>
        <nav className="">
          <ul className="flex gap-8 ml-40 mr-60 xsm:flex-col xsm:ml-1 xsm:mr-1 xsm:gap-1 lg:ml-20 lg:mr-10 md:mr-1 md:gap-1">
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium md:text-xs md:px-1 md:py-1">
              Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium md:text-xs md:px-1 md:py-1">
              Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="https://github.com/eldinho2" target="_blank" className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium md:text-xs md:px-1 md:py-1">
              Copyright © Vinicius SG 2023
              </Link>
            </li>
          </ul>
        </nav>
        </div>
    </footer>
  )
}