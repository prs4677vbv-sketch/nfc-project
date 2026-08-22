export default function Home() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Boussarsar Amine
ORG:TechStore RMS
TEL;TYPE=CELL:+21623030072
TEL;TYPE=WORK:+21621203202
EMAIL:boussarsaramine@gmail.com
EMAIL;TYPE=WORK:rms.service.informatique@gmail.com
ADR:;;25 Av. Mustapha Mohsen;Ariana;;2073;Tunisie
END:VCARD`;

  const contactUrl =
    "data:text/vcard;charset=utf-8," + encodeURIComponent(vcard);

  return (
    <main className="min-h-screen bg-black text-white px-5 py-10">
      <div className="mx-auto w-full max-w-md">

        {/* Logo */}
        <div className="text-center">
          <img
            src="/logo-rms.jpg.jpeg"
            alt="TechStore RMS"
            className="mx-auto h-36 w-36 rounded-full border-4 border-yellow-600 object-cover shadow-xl"
          />

          <h1 className="mt-6 text-3xl font-bold">
            Boussarsar Amine
          </h1>

          <h2 className="mt-2 text-xl font-semibold text-yellow-500">
            TechStore RMS
          </h2>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Vente & réparation de PC, smartphones et consoles.
            Spécialiste Apple, PlayStation, GSM et informatique.
            Réparation, entretien, accessoires et services professionnels.
          </p>
        </div>

        {/* Téléphones */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <a
            href="tel:+21623030072"
            className="rounded-2xl bg-zinc-900 p-4 text-center font-semibold"
          >
            📞 23 030 072
          </a>

          <a
            href="tel:+21621203202"
            className="rounded-2xl bg-zinc-900 p-4 text-center font-semibold"
          >
            📞 21 203 202
          </a>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/21623030072"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block rounded-2xl bg-green-500 p-4 text-center text-lg font-bold text-white"
        >
          💬 WhatsApp
        </a>

        {/* Maps */}
        <a
          href="https://maps.app.goo.gl/GxQnPZatFjWFCaji6?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block rounded-2xl bg-blue-600 p-4 text-center font-bold"
        >
          📍 Localisation TechStore RMS
        </a>

        {/* Google Reviews */}
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJebiR1S_L4hIRx3LlgTiSdB8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block rounded-2xl bg-yellow-500 p-4 text-center text-lg font-bold text-black"
        >
          ⭐ Donner un avis Google
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/18GxnX6xhs/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block rounded-2xl bg-blue-700 p-4 text-center font-bold"
        >
          Facebook
        </a>

        {/* Emails */}
        <div className="mt-3 space-y-3">
          <a
            href="mailto:rms.service.informatique@gmail.com"
            className="block rounded-2xl bg-zinc-900 p-4 text-center"
          >
            ✉️ Email TechStore RMS
          </a>

          <a
            href="mailto:boussarsaramine@gmail.com"
            className="block rounded-2xl bg-zinc-900 p-4 text-center"
          >
            ✉️ Email Boussarsar Amine
          </a>
        </div>

        {/* Adresse */}
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <p className="font-semibold">📍 TechStore RMS</p>
          <p className="mt-2 text-sm text-zinc-400">
            25 Av. Mustapha Mohsen
            <br />
            Ariana 2073, Tunisie
          </p>
        </div>

        {/* Ajouter contact */}
        <a
          href={contactUrl}
          download="Boussarsar-Amine-TechStore-RMS.vcf"
          className="mt-6 block rounded-2xl border border-yellow-500 p-4 text-center font-bold text-yellow-500"
        >
          👤 Ajouter aux contacts
        </a>

        <p className="mt-8 text-center text-xs text-zinc-600">
          TECHSTORE RMS • SINCE 2011
        </p>
      </div>
    </main>
  );
}