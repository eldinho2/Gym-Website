import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-[1400px] h-[800px]">
        <Image
          className=""
          quality={100}
          priority={true}
          fill={true}
          alt=""
          src={"/Rectangle.png"}
        />
        <h1 className="absolute top-[50%] left-[50%] text-[#FCFCFC]">
          Start your journey today
        </h1>
      </div>
    </main>
  );
}
