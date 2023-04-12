"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { HamburguerMenu } from "./HamburguerMenu";

export default function Header() {
  const referencia = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const header = referencia.current;

    function handleScroll() {
      if (header) {
        if (window.scrollY > 60) {
          header.classList.add("bg-[rgba(0,0,0,0.9)]");
          header.classList.add("h-16");
          header.classList.add("transition");
          header.classList.add("duration-500");
          header.classList.add("delay-150");
          header.classList.add("ease-in-out");
          header.classList.remove("bg-transparent");
        } else {
          header.classList.remove("bg-[rgba(0,0,0,0.9)]");
          header.classList.add("bg-transparent");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={referencia}
      className="flex justify-center items-center w-full fixed z-10 h-32 xl:h-20"
    >
      <div className="flex justify-evenly items-center">
        <h1 className="flex font-bold text-3xl hover:cursor-pointer text-[#FCFCFC] relative xl:text-lg">
          <Image
            className="right-[149px] bottom-[8px] xl:w-[20px] xl:right-[89px] xl:bottom-[7px] absolute"
            width={30}
            height={10}
            src="/muscleBlue.png"
            alt=""
          />
          FLEXZONE
        </h1>
          <nav className="flex justify-between xsm:hidden sm:hidden md:hidden">
            <ul className="flex gap-8 ml-40 mr-60 xl:gap-1 xl:mr-10 xl:ml-20">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Treinadores
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 decoration-[#55C5E9] hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Contato
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-6">
              <FaFacebookSquare className="fill-white h-6 w-6 hover:cursor-pointer" />
              <FaInstagram className="fill-white w-6 h-6 hover:cursor-pointer" />
            </div>
          </nav>
        <HamburguerMenu />
      </div>
    </header>
  );
}
