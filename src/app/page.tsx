import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="z-10 max-w-5xl w-full items-center text-center justify-between font-mono text-sm">
        <div className='logo'>
          <Image
            src="/logo-raia-drogasil.png"
            alt="Vercel Logo"
            className="img"
            width={200}
            height={24}
            priority
          />
        </div>
        <h1 className="mt-8 px-8 font text-4xl	">Farmácia Escola</h1>
        <div className="mt-8 grid grid-cols-4 gap-2">
          <a className="col-start-2 bg-transparent hover:bg-emerald-800 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-800 hover:border-transparent rounded" href="/roteiro">
              Roteiro
          </a>
          <a className="bg-transparent hover:bg-emerald-800 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-800 hover:border-transparent rounded" href="/pec">
              PEC
          </a>
        </div>
        <p className="mt-8 px-8">
          Clique nos botões acima para enviar as informações necessárias.
        </p>
        <p className="mt-16 text-gray-600">
          <code>by fabricio</code>
        </p>
      </div>
    </main>
  );
}
