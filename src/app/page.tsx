import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center items-center relative w-screen h-[725px]">
        <Image
          quality={100}
          priority={true}
          fill={true}
          alt=""
          src={"/Rectangle.png"}
        />
        <div className="absolute text-center text-[#FCFCFC]">
          <h1 className="font-bold text-7xl">COMECE SUA</h1>
          <h1 className="font-bold text-7xl">
            JORNADA <strong className="text-[#55C5E9]">HOJE</strong>
          </h1>
          <p className="text-base font-medium mt-4	">
            FlexZone é uma academia no centro de São Paulo. Venha se juntar a
            nós e comece a se aproximar do corpo dos seus sonhos.
          </p>
          <button className="bg-[#55C5E9] text-black font-medium text-base px-11 py-3 rounded-md mt-4 hover:cursor-pointer">
            Saiba Mais
          </button>
        </div>
        <section className="absolute mt-[700px] w-full h-[120px] bg-[rgba(0,0,0,0.3)]">
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
              className="object-contain"
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
      <section className="flex justify-center mt-16">
        <div className="flex flex-col text-[#FCFCFC] gap-2 xsm:ml-32">
          <h1 className="font-medium text-xl xsm:text-lg xsm:mx-20 lg:text-lg text-[#55C5E9]">
            Descubra mais
          </h1>
          <h1 className="font-medium text-5xl xsm:mx-20 xsm:text-3xl lg:text-4xl">Sobre Nós</h1>
          <p className="font-normal text-base h-[336px] w-[544px] xsm:text-sm xsm:w-[300px] xsm:h-[450px] xsm:mx-10 lg:text-sm lg:h-[250px]">
            Somos uma academia focada na comunidade, localizada no coração do
            centro da cidade. Nossa equipe se dedica a ajudar pessoas de todos
            os níveis de condicionamento físico a atingir seus objetivos e levar
            uma vida mais saudável e ativa. Na FlexZone, acreditamos no poder do
            exercício para transformar o corpo e a mente. É por isso que
            oferecemos uma ampla gama de equipamentos e aulas para atender a
            todas as necessidades e preferências de condicionamento físico. De
            levantamento de peso a cardio e ioga, temos algo para todos. Nossa
            equipe de instrutores certificados está aqui para apoiá-lo e
            motivá-lo a cada passo do caminho. Esteja você apenas começando sua
            jornada de condicionamento físico ou procurando levar seu
            treinamento para o próximo nível, temos o conhecimento e a
            experiência para ajudá-lo a ter sucesso.
          </p>
          <button className="bg-[#55C5E9] text-black font-medium text-base px-11 py-3 rounded-md mt-4 hover:cursor-pointer lg:mt-1">
            Saiba Mais
          </button>
        </div>
        <div className="flex ml-24 lg:w-[300px] lg:h-[450px]">
          <Image
            className="xsm:w-0 xsm:h-0"
            quality={100}
            priority={true}
            width={485}
            height={515}
            alt=""
            src={"/Rectangle 1.svg"}
          />
        </div>
      </section>
      <section className="flex justify-center text-[#FCFCFC] uppercase">
        <div className="flex justify-center items-center content-center flex-col mt-16 xsm:mx-10 xsm:text-center">
          <h1 className="font-medium text-xl xsm:text-lg   text-[#55C5E9]">
            estamos bem preparados para todos
          </h1>
          <h2 className="font-medium text-6xl mb-16 xsm:text-3xl">Por que escolher-nos?</h2>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className=" w-[1500px] lg:w-[1300px]">
          <ul className="lista-brilhante text-slate-50 flex flex-wrap justify-center items-center w-full">
            <li className="list-image-[url(/musculo.svg)] max-w-[508px] m-8 xsm:ml-20">
              <h1 className="font-medium text-4xl lg:font-normal lg:text-2xl lg:pb-4 xsm:text-xl text-[#FCFCFC]">
                verdadeira atmosfera de academia
              </h1>
              <p className="font-normal text-base lg:font-light lg:text-sm lg:w-[400px] xsm:text-xs xsm:w-[200px] text-[#fcfcfc9c]">
                Seja você um iniciante ou um atleta experiente, você se sentirá
                em casa em nosso ambiente inclusivo e acolhedor. Acreditamos que
                uma atmosfera de verdadeira academia é aquela que promove o
                crescimento e o desenvolvimento pessoal, e trabalhamos
                arduamente para criar esse tipo de cultura todos os dias.
              </p>
            </li>
            <li className="list-image-[url(/gym-svgrepo-com.svg)] max-w-[508px] m-8 xsm:ml-20">
              <h1 className="font-medium text-4xl lg:font-normal lg:text-2xl lg:pb-4 xsm:text-xl text-[#FCFCFC]">
                todos os tipos de equipamentos
              </h1>
              <p className="font-normal text-base lg:font-light lg:text-sm lg:w-[400px] xsm:text-xs xsm:w-[200px] text-[#fcfcfc9c]">
                Nossa academia está completamente equipada com os mais recentes
                e melhores equipamentos fitness. Desde máquinas de cardio até
                pesos livres, temos tudo o que você precisa para alcançar seus
                objetivos fitness. Se você prefere levantar, correr ou fazer
                algum treinamento intervalado de alta intensidade, encontrará o
                equipamento perfeito para seus treinos.
              </p>
            </li>
            <li className="list-image-[url(/instrutor.svg)] max-w-[508px] m-8 xsm:ml-20">
              <h1 className="font-medium text-4xl lg:font-normal lg:text-2xl lg:pb-4 xsm:text-xl text-[#FCFCFC]">
                instrutores experientes
              </h1>
              <p className="font-normal text-base lg:font-light lg:text-sm lg:w-[400px] xsm:text-xs xsm:w-[200px] text-[#fcfcfc9c]">
                Nossos instrutores são realmente incríveis! Com anos de
                experiência e uma paixão pelo fitness, eles estão dedicados a
                ajudar nossos membros a alcançarem seus objetivos. Se você quer
                perder peso, ganhar músculos ou simplesmente melhorar sua saúde
                e bem-estar em geral, nossos instrutores estão aqui para ajudar.
              </p>
            </li>
            <li className="list-image-[url(/levant.svg)] max-w-[508px] m-8 xsm:ml-20">
              <h1 className="font-medium text-4xl lg:font-normal lg:text-2xl lg:pb-4 xsm:text-xl text-[#FCFCFC]">
                acolhedor e profissional
              </h1>
              <p className="font-normal text-base lg:font-light lg:text-sm lg:w-[400px] xsm:text-xs xsm:w-[200px] text-[#fcfcfc9c]">
                Nossa academia se orgulha de ser um lar longe de casa para
                muitos atletas profissionais. Nós entendemos as exigências de
                treinamentos intensos e competições, e nos esforçamos para
                fornecer as melhores instalações e suporte possível para ajudar
                nossos membros atletas a atingir seu máximo potencial.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex justify-center text-[#FCFCFC]">
        <div className="flex justify-center items-center content-center flex-col mt-10 mb-7">
          <h1 className="font-medium text-xl xsm:text-2xl text-[#55C5E9]">
            PRIMEIRO TREINO GRÁTIS
          </h1>
          <h2 className="font-medium text-6xl xsm:text-2xl">PLANOS</h2>
        </div>
      </section>
      <section className="flex justify-center text-[#FCFCFC]">
        <div className="flex justify-center items-center gap-8 xsm:gap-1">
          <div className="flex flex-col justify-center items-center content-center text-center bg-[#FFFFFF1A] rounded-lg h-[526px] w-[352px] xsm:h-[300px] xsm:w-[120px] lg:h-[330px] lg:w-[200px]">
            <h1 className="m-6 font-medium text-3xl xsm:text-base xsm:m-0 lg:font-normal lg:text-2xl lg:m-1">
              BÁSICO
            </h1>
            <h2 className="m-6 font-semibold text-5xl xsm:text-sm xsm:m-0 lg:text-base lg:m-1">
              R$20
              <strong className="font-normal text-base text-[#FCFCFCCC]">
                /mes
              </strong>
            </h2>
            <ul className="xsm:list-image-none xsm:list-none xsm:ml-2 xsm:text-xs xsm:p-0 lg:ml-7 lg:text-xs lg:p-2 ml-10 p-0 list-image-[url(/aa.svg)]">
              <li className="mb-4 xsm:mb-[4px] lg:mb-1">
                <p>Acesso a todos os equipamentos da Academia</p>
              </li>
              <li className="mb-4 xsm:mb-[4px] lg:mb-1">
                <p>Tempo de treinamento ilimitado</p>
              </li>
              <li className="mb-4 xsm:mb-[4px] lg:mb-1">
                <p>1 entrada gratuita para um amigo a cada mês</p>
              </li>
              <li className="mb-4 xsm:mb-[4px] lg:mb-1">
                <p>Descontos em aulas fitness em grupo</p>
              </li>
            </ul>
            <button className="flex justify-center rounded-lg border xsm:px-1 xsm:py-1 xsm:text-xs lg:px-2 lg:py-0 border-white px-20 py-2 ">
              Comprar Online
            </button>
          </div>
          <div className="flex flex-col justify-center items-center content-center text-center bg-[#26ADD9] rounded-lg h-[590px] w-[352px] xsm:h-[450px] xsm:w-[125px] lg:h-[430px] lg:w-[300px]">
            <h1 className="m-4 font-semibold text-3xl xsm:text-base xsm:m-0 lg:font-normal lg:text-2xl lg:m-1">
              PLUS
            </h1>
            <h2 className="mb-8 font-semibold text-5xl xsm:text-sm xsm:m-0 lg:text-base lg:m-1">
              R$20
              <strong className="font-normal text-base text-[#FCFCFCCC]">
                /mes
              </strong>
            </h2>
            <ul className="xsm:list-image-none xsm:list-none xsm:ml-2 xsm:text-xs xsm:p-0 lg:ml-7 lg:text-xs lg:p-2 ml-10 p-0 list-image-[url(/bb.svg)]">
              <li className="mb-4 xsm:mb-[6px] lg:mb-1">
                <p>Todos os benefícios do BÁSICO</p>
              </li>
              <li className="mb-4 xsm:mb-[6px] lg:mb-1">
                <p>Programas de treinamento especializados</p>
              </li>
              <li className="mb-4 xsm:mb-[6px] lg:mb-1">
                <p>Dua sessões de treinamento pessoal gratuitas por mês</p>
              </li>
              <li className="mb-4 xsm:mb-[6px] lg:mb-1">
                <p>Pré-encomendas em nossa loja online</p>
              </li>
              <li className="mb-4 xsm:mb-[6px] lg:mb-1">
                <p>Descontos em aulas fitness em grupo</p>
              </li>
              <li className="mb-4 xsm:mb-[6px] lg:mb-1">
                <p>Desconto em nosso nutricionista</p>
              </li>
              <li className="mb-4 xsm:mb-[6px] lg:mb-1">
                <p>Acesso aos nossos eventos exclusivos</p>
              </li>
            </ul>
            <button className="flex justify-center xsm:px-1 xsm:py-1 xsm:text-xs lg:px-10 lg:py-4 bg-white rounded-lg border text-base font-semibold text-black px-20 py-2 ">
              Comprar Online
            </button>
          </div>
          <div className="flex flex-col justify-center items-center content-center text-center bg-[#FFFFFF1A] rounded-lg h-[526px] w-[352px] xsm:h-[300px] xsm:w-[120px] lg:h-[330px] lg:w-[200px]">
            <h1 className="m-6 font-medium text-3xl xsm:text-base xsm:m-0 lg:font-normal lg:text-2xl lg:m-1">
              VIP
            </h1>
            <h2 className="m-6 font-semibold text-5xl xsm:text-sm xsm:m-0 lg:text-base lg:m-1">
              R$20
              <strong className="font-normal text-base text-[#FCFCFCCC]">
                /mes
              </strong>
            </h2>
            <ul className="xsm:list-image-none xsm:list-none xsm:ml-2 xsm:text-xs xsm:p-0 lg:ml-7 lg:text-xs lg:p-2 ml-10 p-0 list-image-[url(/aa.svg)] ">
              <li className="mb-4 xsm:mb-[4px] lg:mb-1">
                <p>Todos os benefícios do PLUS</p>
              </li>
              <li className="mb-4 xsm:mb-[4px] lg:mb-1">
                <p>Sessões ilimitadas de treinamento exclusivo</p>
              </li>
              <li className="mb-4 xsm:mb-[4px] lg:mb-1">
                <p>Descontos VIP em todos os serviços e produtos</p>
              </li>
              <li className="mb-14 xsm:mb-[4px] lg:mb-1">
                <p>Acesso a todos os eventos exclusivos</p>
              </li>
            </ul>
            <button className="flex justify-center rounded-lg border border-white px-20 py-2 xsm:px-1 xsm:py-1 xsm:text-xs lg:px-2 lg:py-0">
              Comprar Online
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col mt-10">
        <div>
          <div className="flex flex-col text-[#FCFCFC] gap-2">
            <h1 className="font-medium text-xl lg:text-lg xsm:text-2xl xsm:mx-20 xsm:text-center text-[#55C5E9]">
              Veja como é a nossa Academia
            </h1>
            <h1 className="font-medium text-5xl xsm:text-base xsm:mx-40 lg:text-4xl">Galeria</h1>
          </div>
          <div className="flex mt-12 gap-5 xsm:mt-1 xsm:gap-1">
            <Image
              className="object-contain xsm:w-[120px] xsm:h-[150px] lg:w-[300px] lg:h-[200px]"
              quality={100}
              priority={true}
              height={256}
              width={360}
              alt=""
              src={"/Rectangle 18.png"}
            />
            <Image
              className="object-contain xsm:w-[120px] xsm:h-[150px] lg:w-[300px] lg:h-[200px]"
              quality={100}
              priority={true}
              height={256}
              width={360}
              alt=""
              src={"/Rectangle 19.png"}
            />
            <Image
              className="object-contain xsm:w-[120px] xsm:h-[150px] lg:w-[300px] lg:h-[200px]"
              quality={100}
              priority={true}
              height={256}
              width={360}
              alt=""
              src={"/Rectangle 20.png"}
            />
          </div>
        </div>
        <div className="text-[#FCFCFC] flex w-[1090px] justify-end m-7 xsm:w-[350px] xsm:m-1">
          <p className="cursor-pointer">
            Mais fotos <strong className="text-[#55C5E9]">➔</strong>
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col m-10 mr-[650px] xsm:mr-[50px]">
        <div className="flex flex-col text-[#FCFCFC] gap-2">
          <h1 className="font-medium text-xl xsm:text-2xl lg:text-lg text-[#55C5E9]">
            4 Anos de experiencia
          </h1>
          <h1 className="font-medium text-5xl xsm:text-base lg:text-4xl">
            Nossos Treinadores
          </h1>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="w-[1500px]">
          <ul className="flex justify-center flex-wrap gap-6 xsm:gap-2 w-full">
            <li className="max-w-[400px]">
              <Image
                className="object-contain xsm:w-32 xsm:h-32 lg:w-[200px] lg:h-[200px]"
                quality={100}
                priority={true}
                height={256}
                width={256}
                alt=""
                src={"/Rectangle 16.png"}
              />
              <h1 className="text-[#FCFCFC] font-medium text-xl xsm:text-base">
                Emily Williams
              </h1>
              <p className="text-[#FCFCFC] font-normal text-xs italic xsm:w-[120px] overflow-hidden xsm:h-[50px] max-w-[256px]">
                Sempre fui atraída pelo poder transformador do fitness e não
                há nada que eu ame mais do que ver meus clientes atingindo seus
                objetivos e alcançando todo o seu potencial.
              </p>
              <p className="my-5 inline-block cursor-pointer text-[#FCFCFC]">
                Ver mais <strong className="text-[#55C5E9]">➔</strong>
              </p>
            </li>
            <li className="max-w-[400px]">
              <Image
                className="object-contain xsm:w-32 xsm:h-32 lg:w-[200px] lg:h-[200px]"
                quality={100}
                priority={true}
                height={256}
                width={256}
                alt=""
                src={"/Rectangle 21.png"}
              />
              <h1 className="text-[#FCFCFC] font-medium text-xl xsm:text-base">
                Olivia Taylor
              </h1>
              <p className="text-[#FCFCFC] font-normal text-xs italic xsm:w-[120px] overflow-hidden xsm:h-[50px] max-w-[256px]">
                Como ex-atleta competitivo, eu sei em primeira mão a importância
                do trabalho duro e dedicação. Eu trago o mesmo nível de
                comprometimento aos meus clientes e estou sempre me esforçando
                para ajudá-los a alcançar todo o seu potencial.
              </p>
              <p className="my-5 inline-block cursor-pointer text-[#FCFCFC]">
                Ver mais <strong className="text-[#55C5E9]">➔</strong>
              </p>
            </li>
            <li className="max-w-[400px]">
              <Image
                className="object-contain xsm:w-32 xsm:h-32 lg:w-[200px] lg:h-[200px]"
                quality={100}
                priority={true}
                height={256}
                width={256}
                alt=""
                src={"/Rectangle 17.png"}
              />
              <h1 className="text-[#FCFCFC] font-medium text-xl xsm:text-base">
                Benjamim SM
              </h1>
              <p className="text-[#FCFCFC] font-normal text-xs italic xsm:w-[120px] overflow-hidden xsm:h-[50px] max-w-[256px]">
                Acredito que o fitness é mais do que apenas uma busca física - é
                uma mentalidade e um estilo de vida. É por isso que eu me
                concentro em ajudar meus clientes a desenvolver hábitos e
                comportamentos saudáveis que possam sustentar a longo prazo.
              </p>
              <p className="my-5 inline-block cursor-pointer text-[#FCFCFC]">
                Ver mais <strong className="text-[#55C5E9]">➔</strong>
              </p>
            </li>
            <li className="max-w-[400px]">
              <Image
                className="object-contain xsm:w-32 xsm:h-32 lg:w-[200px] lg:h-[200px]"
                quality={100}
                priority={true}
                height={256}
                width={256}
                alt=""
                src={"/Rectangle 14.png"}
              />
              <h1 className="text-[#FCFCFC] font-medium text-xl xsm:text-base">
                Matheus John
              </h1>
              <p className="text-[#FCFCFC] font-normal text-xs italic xsm:w-[120px] overflow-hidden xsm:h-[50px] max-w-[256px]">
                Eu sou apaixonado por saúde e fitness desde que me lembro, e
                sempre amei ajudar os outros a alcançarem seus objetivos.
              </p>
              <p className="my-5 inline-block cursor-pointer text-[#FCFCFC]">
                Ver mais <strong className="text-[#55C5E9]">➔</strong>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex justify-center mt-10">
        <div className="flex justify-center rounded-md w-[1118px] h-[500px] xsm:flex-col xsm:w-[300px] xsm:h-[600px] md:w-[500px] lg:w-[800px] bg-[#FCFCFC1A] text-[#FCFCFC]">
          <div className="flex flex-col p-10 xsm:p-4 lg:p-1">
            <h1 className="text-[#55C5E9] font-medium text-xl">Contato</h1>
            <h2 className="font-medium text-2xl py-5 xsm:py-1">
              Não podemos esperar para te ver.
            </h2>
            <p className="font-normal text-base pb-7 lg:w-[300px] lg:pb-2">
              Estamos ansiosos para que você se junte à nossa academia, treine
              conosco e comece sua jornada em busca do seu corpo dos sonhos.
            </p>
            <div className="flex flex-col gap-4 xsm:gap-1">
              <p className="flex">
                <Image
                  className="object-contain"
                  height={20}
                  width={20}
                  alt=""
                  src={"/telephone-receiver-material-svgrepo-com.svg"}
                />
                11 5342-1234
              </p>
              <p className="flex">
                <Image
                  className="object-contain"
                  height={20}
                  width={20}
                  alt=""
                  src={"/mail-svgrepo-com.svg"}
                />
                info@flexzone.com
              </p>
              <p className="flex">
                <Image
                  className="object-contain"
                  height={20}
                  width={20}
                  alt=""
                  src={"/pointer-map-pointer-svgrepo-com.svg"}
                />
                121 Maple Street Newark, NJ 07102
              </p>
              <p className="flex">
                <Image
                  className="object-contain"
                  height={20}
                  width={20}
                  alt=""
                  src={"/clock-svgrepo-com.svg"}
                />
                Monday - Saturday: 8AM - 20PM Sunday: Closed
              </p>
            </div>
            <p className="mt-5 inline-block cursor-pointer xsm:mt-2 text-[#FCFCFC]">
              Tenho uma pergunta <strong className="text-[#55C5E9]">➔</strong>
            </p>
          </div>
          <div className="flex justify-center items-center py-7 pr-7 xsm:py-0 xsm:pb-2 xsm:pr-0 lg:py-2 lg:pr-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.062126999087!2d-46.50492675661717!3d-23.636013255028633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce69d81e549de9%3A0x8d6fbee1ed393d7c!2sAcademia%20Smart%20Fit%20-%20Parque%20Orat%C3%B3rio!5e0!3m2!1spt-BR!2sbr!4v1681241633340!5m2!1spt-BR!2sbr"
              className="border rounded w-[600px] h-[450px] xsm:w-[200px] xsm:h-[130px] lg:w-[350px] lg:h-[350px]"
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
