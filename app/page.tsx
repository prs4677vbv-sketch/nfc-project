"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const CARD_URL = "https://nfc-project-psi.vercel.app";

export default function Home() {
  const [shareMessage, setShareMessage] = useState("");

  async function shareCard() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "TechStore RMS",
          text: "Carte digitale TechStore RMS",
          url: CARD_URL,
        });

        return;
      }

      await navigator.clipboard.writeText(CARD_URL);

      setShareMessage("Lien copié !");

      setTimeout(() => {
        setShareMessage("");
      }, 2000);
    } catch {
      // Si l'utilisateur ferme la fenêtre de partage, on ne fait rien.
    }
  }

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white">
      <div className="mx-auto w-full max-w-md">

        {/* LOGO */}
        <div className="text-center">
          <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 p-[3px] shadow-lg shadow-yellow-500/20">
            <img
              src="/logo-rms.jpg.jpeg"
              alt="Logo TechStore RMS"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight">
            Boussarsar Amine
          </h1>

          <p className="mt-1 text-xl font-bold text-yellow-400">
            TechStore RMS
          </p>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-zinc-400">
            Vente & réparation de PC, smartphones et consoles.
            Spécialiste Apple, PlayStation, GSM et informatique.
            Réparation, entretien, accessoires et services professionnels.
          </p>
        </div>

        {/* TELEPHONES */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <a
            href="tel:+21623030072"
            className="flex min-h-[90px] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 px-3 transition active:scale-[0.98]"
          >
            <PhoneIcon />

            <span className="mt-2 text-lg font-bold">
              23 030 072
            </span>

            <span className="mt-1 text-xs text-zinc-500">
              Boutique
            </span>
          </a>

          <a
            href="tel:+21621203202"
            className="flex min-h-[90px] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 px-3 transition active:scale-[0.98]"
          >
            <PhoneIcon />

            <span className="mt-2 text-lg font-bold">
              21 203 202
            </span>

            <span className="mt-1 text-xs text-zinc-500">
              Téléphone
            </span>
          </a>
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/21623030072"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex min-h-[64px] items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 text-lg font-bold text-white transition active:scale-[0.98]"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>

        {/* GOOGLE REVIEW */}
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJebiR1S_L4hIRx3LlgTiSdB8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex min-h-[68px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-400 px-5 text-lg font-extrabold text-black shadow-lg shadow-yellow-500/10 transition active:scale-[0.98]"
        >
          <StarIcon />
          Donner un avis Google
        </a>

        {/* LOCALISATION */}
        <a
          href="https://maps.app.goo.gl/GxQnPZatFjWFCaji6?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex min-h-[62px] items-center justify-center gap-3 rounded-2xl bg-blue-600 px-5 font-bold transition active:scale-[0.98]"
        >
          <MapIcon />
          Itinéraire vers TechStore RMS
        </a>

        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/share/18GxnX6xhs/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex min-h-[62px] items-center justify-center gap-3 rounded-2xl bg-[#1877F2] px-5 font-bold transition active:scale-[0.98]"
        >
          <FacebookIcon />
          Facebook
        </a>

        {/* EMAILS */}
        <div className="mt-3 space-y-3">
          <a
            href="mailto:rms.service.informatique@gmail.com"
            className="flex min-h-[60px] items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 text-center transition active:scale-[0.98]"
          >
            <MailIcon />
            <span>Email TechStore RMS</span>
          </a>

          <a
            href="mailto:boussarsaramine@gmail.com"
            className="flex min-h-[60px] items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 text-center transition active:scale-[0.98]"
          >
            <MailIcon />
            <span>Email Boussarsar Amine</span>
          </a>
        </div>

        {/* ADRESSE */}
        <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-start gap-3">
            <div className="text-yellow-400">
              <MapIcon />
            </div>

            <div>
              <p className="font-bold">
                TechStore RMS
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                25 Av. Mustapha Mohsen
                <br />
                Ariana 2073, Tunisie
              </p>
            </div>
          </div>
        </div>

        {/* AJOUTER AUX CONTACTS */}
        <a
          href="/contact"
          className="mt-5 flex min-h-[64px] items-center justify-center gap-3 rounded-2xl border-2 border-yellow-500 px-5 text-lg font-bold text-yellow-400 transition active:scale-[0.98]"
        >
          <ContactIcon />
          Ajouter aux contacts
        </a>

        <p className="mt-2 text-center text-xs leading-5 text-zinc-500">
          Sur Android : téléchargez le fichier puis ouvrez-le avec
          l’application Contacts.
        </p>

        {/* QR CODE */}
        <section className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-center">
          <p className="text-xl font-bold">
            Partager ma carte
          </p>

          <p className="mt-2 text-sm leading-5 text-zinc-500">
            Scannez ce QR code pour ouvrir la carte digitale TechStore RMS.
          </p>

          <div className="mx-auto mt-5 w-fit rounded-3xl bg-white p-4">
            <QRCodeSVG
              value={CARD_URL}
              size={208}
              level="H"
              bgColor="#ffffff"
              fgColor="#000000"
              includeMargin
            />
          </div>

          <p className="mt-3 break-all text-xs text-zinc-600">
            {CARD_URL}
          </p>

          <button
            type="button"
            onClick={shareCard}
            className="mt-5 flex min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 font-bold text-black transition active:scale-[0.98]"
          >
            <ShareIcon />
            Partager ma carte
          </button>

          {shareMessage && (
            <p className="mt-3 text-sm font-semibold text-green-400">
              {shareMessage}
            </p>
          )}
        </section>

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <p className="text-sm font-bold tracking-widest text-yellow-500">
            TECHSTORE RMS
          </p>

          <p className="mt-1 text-xs tracking-[0.25em] text-zinc-600">
            SINCE 2011
          </p>
        </div>
      </div>
    </main>
  );
}

/* ---------------- ICONES ---------------- */

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="25"
      height="25"
      fill="currentColor"
    >
      <path d="M12 2a9.82 9.82 0 0 0-8.47 14.8L2 22l5.33-1.4A9.9 9.9 0 1 0 12 2Zm0 17.8a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-3.16.83.84-3.08-.19-.32A7.81 7.81 0 1 1 12 19.8Zm4.28-5.85c-.23-.12-1.38-.68-1.59-.76-.22-.08-.37-.12-.53.12-.15.23-.61.76-.75.92-.14.15-.27.17-.51.06-.23-.12-.98-.36-1.87-1.15a7.03 7.03 0 0 1-1.29-1.6c-.14-.23-.01-.36.1-.47.11-.1.23-.27.35-.41.12-.14.16-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.53-1.27-.72-1.74-.19-.46-.39-.4-.53-.41h-.45c-.16 0-.41.06-.63.29-.21.23-.82.8-.82 1.96 0 1.15.84 2.27.96 2.42.12.16 1.65 2.52 4 3.54.56.24 1 .39 1.34.5.56.18 1.07.15 1.47.09.45-.07 1.38-.57 1.57-1.11.2-.55.2-1.02.14-1.11-.06-.1-.21-.16-.45-.28Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="25"
      height="25"
      fill="currentColor"
    >
      <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55-4.76-4.64 6.58-.96L12 2.5Z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.92c0-.9.25-1.51 1.55-1.51h1.66V4.63a22.7 22.7 0 0 0-2.42-.13c-2.4 0-4.04 1.46-4.04 4.15v2.25H7.54V14h2.71v8h3.25Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 22a8 8 0 0 1 16 0" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
    </svg>
  );
}