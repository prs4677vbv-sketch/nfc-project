export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-cyan-500 bg-zinc-950 p-6 text-center shadow-2xl">
        <div className="mx-auto mb-5 h-28 w-28 rounded-full bg-zinc-800 flex items-center justify-center text-5xl">
          👤
        </div>

        <h1 className="text-3xl font-bold">boussarsar amine</h1>

        <p className="mt-2 text-zinc-400">
          Ma carte NFC personnelle
        </p>

        <a
          href="https://wa.me/21623030072"
          className="mt-6 block rounded-2xl bg-green-500 px-5 py-4 text-lg font-semibold text-white"
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}