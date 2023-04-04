import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center items-center relative w-full h-[800px]">
        <Image
          className="object-cover"
          quality={100}
          priority={true}
          fill={true}
          alt=""
          src={"/Rectangle.png"}
        />
        <div className="absolute text-center text-[#FCFCFC]">
          <h1 className="font-bold text-7xl">
          COMECE SUA
          </h1>
          <h1 className="font-bold text-7xl">
            JORNADA <strong className="text-[#55C5E9]">HOJE</strong>
          </h1>
          <p className="text-base font-medium mt-4	">FlexZone é uma academia no centro de São Paulo. Venha se juntar a nós e comece a se aproximar do corpo dos seus sonhos.</p>
          <button className="bg-[#55C5E9] text-black font-medium text-base px-11 py-3 rounded-md mt-4 hover:cursor-pointer">Saiba Mais</button>
        </div>
        <section className="absolute mt-[700px] w-full h-[100px] bg-[rgba(0,0,0,0.3)]">
          <div className="flex justify-evenly">
          <Image
          className="object-contain"
          quality={100}
          priority={true}
          height={24}
          width={144}
          alt=""
          src={"/6292330cad752419f8ecfe74.png"}
        />
          <Image
          className=""
          quality={100}
          priority={true}
          height={24}
          width={144}
          alt=""
          src={"/rogue-og-removebg-preview.png"}
        />
          <Image
          className="object-contain"
          quality={100}
          priority={true}
          height={24}
          width={144}
          alt=""
          src={"/f26b3f87d75a110e1542ad10e45888a54de5878d.png"}
        />
          </div>
        </section>
      </section>
    </main>
  );
}