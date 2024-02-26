import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="z-10 max-w-5xl w-full items-center text-center justify-between font-mono text-sm lg:flex">
        <div className='logo'>
          <Image
            src="/logo-raia-drogasil.png"
            alt="Vercel Logo"
            className="img"
            width={100}
            height={24}
            priority
          />
        </div>
        <h1 className="mt-8 px-8">Roteiro</h1>
        <div className="mt-8 grid grid-cols-4 gap-2">
          <a className="col-start-2" href="/roteiro">
              Roteiro
          </a>
          <a href="/pec">
              PEC
          </a>
        </div>
        <p className="mt-8 px-8">
          Clique nos botões acima para enviar as informações necessárias.
        </p>
        <p className="mt-16 text-gray-200">
          <code>by fabricio</code>
        </p>
      </div>
    </main>
  );
}
