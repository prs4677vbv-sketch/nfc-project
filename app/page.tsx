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
          text: "Carte digitale de Boussarsar Amine - TechStore RMS",
          url: CARD_URL,
        });
        return;
      }

      await navigator.clipboard.writeText(CARD_URL);
      setShareMessage("Lien copié !");

      setTimeout(() => {
        setShareMessage("");
      }, 2500);
    } catch (error) {
      const err = error as Error;

      if (err.name !== "AbortError") {
        setShareMessage("Impossible de partager le lien.");
      }
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-[480px]">

        {/* ================= HEADER ================= */}

        <section className="text-center">
          <div className="relative mx-auto h-[170px] w-[170px]">
            <div className="absolute inset-0 rounded-full bg-[#d6a62e]/20 blur-2xl" />

            <div className="relative h-full w-full rounded-full border-2 border-[#d6a62e] bg-black p-[5px] shadow-[0_0_30px_rgba(214,166,46,0.28)]">
              <img
                src="/logo-rms.jpg.jpeg"
                alt="TechStore RMS"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="mt-5 text-[34px] font-extrabold tracking-tight">
            Boussarsar Amine
          </h1>

          <div className="mt-2 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#9c7623]" />

            <h2 className="text-[23px] font-bold text-[#e8b63f]">
              TechStore RMS
            </h2>

            <span className="h-px w-12 bg-[#9c7623]" />
          </div>

          <p className="mt-3 text-[15px] text-zinc-300">
            Réparation • Informatique • GSM • PlayStation • Vente accessoires
          </p>
        </section>

        {/* ================= TELEPHONES ================= */}

        <section className="mt-7 grid grid-cols-2 gap-3">
          <PhoneCard
            number="23 030 072"
            href="tel:+21623030072"
            label="Boutique"
          />

          <PhoneCard
            number="21 203 202"
            href="tel:+21621203202"
            label="2ᵉ numéro"
          />
        </section>

        {/* ================= 6 ACTIONS ================= */}

        <section className="mt-5 grid grid-cols-2 gap-3">

          {/* WhatsApp */}
          <ActionCard
            href="https://wa.me/21623030072"
            title="WhatsApp"
            subtitle="Chat rapide"
            titleClass="text-[#25D366]"
            icon={<WhatsAppIcon />}
          />

          {/* Facebook */}
          <ActionCard
            href="https://www.facebook.com/share/18GxnX6xhs/?mibextid=wwXIfr"
            title="Facebook"
            subtitle="Notre page"
            titleClass="text-[#2484f5]"
            icon={<FacebookIcon />}
          />

          {/* Google Avis */}
          <ActionCard
            href="https://search.google.com/local/writereview?placeid=ChIJebiR1S_L4hIRx3LlgTiSdB8"
            title="Avis Google"
            subtitle="Laissez un avis"
            titleClass="text-[#e8b63f]"
            icon={<GoogleIcon />}
          />

          {/* Maps */}
          <ActionCard
            href="https://maps.app.goo.gl/GxQnPZatFjWFCaji6?g_st=ic"
            title="Nous trouver"
            subtitle="Itinéraire & plan"
            titleClass="text-[#e8b63f]"
            icon={<GoogleMapsIcon />}
          />

          {/* Email boutique */}
          <ActionCard
            href="mailto:rms.service.informatique@gmail.com"
            title="Email boutique"
            subtitle={
              <>
                rms.service.informatique
                <br />
                @gmail.com
              </>
            }
            titleClass="text-[#e8b63f]"
            icon={<MailGoldIcon />}
          />

          {/* Email personnel */}
          <ActionCard
            href="mailto:boussarsaramine@gmail.com"
            title="Email personnel"
            subtitle={
              <>
                boussarsaramine
                <br />
                @gmail.com
              </>
            }
            titleClass="text-[#e8b63f]"
            icon={<PersonGoldIcon />}
          />
        </section>

        {/* ================= AJOUT CONTACT ================= */}

        <a
          href="/contact"
          className="
            mt-5 flex min-h-[100px] items-center justify-center gap-5
            rounded-[24px] border border-[#9b7629]
            bg-gradient-to-b from-[#111111] to-[#090909]
            px-5 transition
            active:scale-[0.985]
          "
        >
          <ContactGoldIcon />

          <div className="text-left">
            <p className="text-[22px] font-bold text-[#e8b63f]">
              Ajouter aux contacts
            </p>

            <p className="mt-1 text-[14px] text-zinc-400">
              Enregistrez mes coordonnées
            </p>
          </div>
        </a>

        {/* ================= PARTAGE + QR ================= */}

        <section
          className="
            mt-5 rounded-[26px]
            border border-zinc-800
            bg-gradient-to-br from-[#111111] to-[#080808]
            p-5
          "
        >
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">

            <div className="min-w-0">
              <h3 className="text-[23px] font-bold">
                Partager ma carte
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-zinc-400">
                Scannez ce QR code pour ouvrir
                <br />
                ma carte digitale.
              </p>

              <button
                type="button"
                onClick={shareCard}
                className="
                  mt-5 flex min-h-[58px] w-full
                  items-center justify-center gap-3
                  rounded-2xl border border-[#9b7629]
                  bg-[#111111]
                  px-4 font-bold text-[#e8b63f]
                  transition active:scale-[0.98]
                "
              >
                <ShareIcon />
                Partager ma carte
              </button>

              {shareMessage && (
                <p className="mt-2 text-center text-xs text-[#e8b63f]">
                  {shareMessage}
                </p>
              )}
            </div>

            {/* QR */}
            <div className="relative rounded-[20px] bg-white p-2">
              <QRCodeSVG
                value={CARD_URL}
                size={150}
                level="H"
                bgColor="#ffffff"
                fgColor="#000000"
                includeMargin
              />

              {/* Logo RMS au centre */}
              <div
                className="
                  absolute left-1/2 top-1/2
                  h-[38px] w-[38px]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-white p-[3px]
                "
              >
                <img
                  src="/logo-rms.jpg.jpeg"
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= ADRESSE ================= */}

        <a
          href="https://maps.app.goo.gl/GxQnPZatFjWFCaji6?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5 flex items-center gap-4
            rounded-[24px] border border-zinc-800
            bg-gradient-to-r from-[#111111] to-[#080808]
            p-5 transition active:scale-[0.99]
          "
        >
          <div
            className="
              flex h-[58px] w-[58px] shrink-0
              items-center justify-center
              rounded-full border border-[#9b7629]
              text-[#e8b63f]
            "
          >
            <LocationIcon />
          </div>

          <div>
            <p className="text-[20px] font-bold">
              TechStore RMS
            </p>

            <p className="mt-1 text-[15px] leading-6 text-zinc-400">
              25 Av. Mustapha Mohsen
              <br />
              Ariana 2073, Tunisie
            </p>
          </div>
        </a>

        {/* ================= FOOTER ================= */}

        <footer className="pb-5 pt-7 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[#70551e]" />

            <span className="text-[15px] font-semibold tracking-[0.24em] text-[#d6a62e]">
              TECHSTORE RMS
            </span>

            <span className="h-px w-14 bg-[#70551e]" />
          </div>

          <p className="mt-1 text-[12px] tracking-[0.3em] text-zinc-500">
            SINCE 2011
          </p>
        </footer>
      </div>
    </main>
  );
}

/* ======================================================
   COMPONENTS
   ====================================================== */

function PhoneCard({
  number,
  href,
  label,
}: {
  number: string;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="
        flex min-h-[105px] items-center gap-3
        rounded-[22px] border border-zinc-800
        bg-gradient-to-br from-[#131313] to-[#090909]
        px-4 transition active:scale-[0.98]
      "
    >
      <div
        className="
          flex h-[48px] w-[48px] shrink-0
          items-center justify-center
          rounded-full border border-[#9b7629]
          text-[#e8b63f]
        "
      >
        <PhoneIcon />
      </div>

      <div className="min-w-0 text-left">
        <p className="whitespace-nowrap text-[19px] font-bold">
          {number}
        </p>

        <p className="mt-1 text-[13px] text-zinc-500">
          {label}
        </p>
      </div>
    </a>
  );
}

function ActionCard({
  href,
  icon,
  title,
  subtitle,
  titleClass,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  titleClass?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex min-h-[122px] min-w-0 items-center gap-3
        rounded-[22px]
        border border-[#7d6125]
        bg-gradient-to-br from-[#111111] to-[#080808]
        px-4 py-4
        transition active:scale-[0.98]
      "
    >
      <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center">
        {icon}
      </div>

      <div className="min-w-0 text-left">
        <p className={`text-[17px] font-bold ${titleClass ?? ""}`}>
          {title}
        </p>

        <div className="mt-1 break-words text-[12px] leading-[17px] text-zinc-400">
          {subtitle}
        </div>
      </div>
    </a>
  );
}

/* ======================================================
   ICONS
   ====================================================== */

function PhoneIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <div
      className="
        flex h-[56px] w-[56px]
        items-center justify-center
        rounded-full bg-[#25D366]
        shadow-[0_0_18px_rgba(37,211,102,.35)]
      "
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M12 2a9.82 9.82 0 0 0-8.47 14.8L2 22l5.33-1.4A9.9 9.9 0 1 0 12 2Zm0 17.8a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-3.16.83.84-3.08-.19-.32A7.81 7.81 0 1 1 12 19.8Zm4.28-5.85c-.23-.12-1.38-.68-1.59-.76-.22-.08-.37-.12-.53.12-.15.23-.61.76-.75.92-.14.15-.27.17-.51.06-.23-.12-.98-.36-1.87-1.15a7.03 7.03 0 0 1-1.29-1.6c-.14-.23-.01-.36.1-.47.11-.1.23-.27.35-.41.12-.14.16-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.53-1.27-.72-1.74-.19-.46-.39-.4-.53-.41h-.45c-.16 0-.41.06-.63.29-.21.23-.82.8-.82 1.96 0 1.15.84 2.27.96 2.42.12.16 1.65 2.52 4 3.54.56.24 1 .39 1.34.5.56.18 1.07.15 1.47.09.45-.07 1.38-.57 1.57-1.11.2-.55.2-1.02.14-1.11-.06-.1-.21-.16-.45-.28Z" />
      </svg>
    </div>
  );
}

function FacebookIcon() {
  return (
    <div
      className="
        flex h-[56px] w-[56px]
        items-end justify-center
        overflow-hidden rounded-full
        bg-[#1877F2]
      "
    >
      <span className="translate-y-[8px] text-[54px] font-bold leading-none text-white">
        f
      </span>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="58" height="58" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20H24v8h11.3C33.7 32.7 29.2 36 24 36a12 12 0 1 1 8.5-20.5l5.7-5.7A20 20 0 1 0 44 24c0-1.3-.1-2.7-.4-4Z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7 12.9 19A12 12 0 0 1 32.5 15.5l5.7-5.7A20 20 0 0 0 6.3 14.7Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.2A11.9 11.9 0 0 1 13 29l-6.5 5A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20H24v8h11.3a12 12 0 0 1-4 5.6l6.3 5.2C41.5 35.2 44 30 44 24c0-1.3-.1-2.7-.4-4Z"
      />
    </svg>
  );
}

function GoogleMapsIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 48 48">
      <path
        fill="#34A853"
        d="M24 4c-8.3 0-15 6.7-15 15 0 10.5 15 25 15 25s15-14.5 15-25C39 10.7 32.3 4 24 4Z"
      />
      <path
        fill="#4285F4"
        d="M24 4c-5 0-9.5 2.5-12.2 6.3L24 22.5 36.3 10.2A15 15 0 0 0 24 4Z"
      />
      <path
        fill="#FBBC04"
        d="m11.8 10.3 8.6 8.6L9.3 30.1A24.6 24.6 0 0 1 9 19c0-3.2 1-6.2 2.8-8.7Z"
      />
      <path
        fill="#EA4335"
        d="M36.3 10.2 27.6 19 39 30.3A24.8 24.8 0 0 0 39 19c0-3.2-1-6.3-2.7-8.8Z"
      />
      <circle cx="24" cy="19" r="5" fill="white" />
    </svg>
  );
}

function MailGoldIcon() {
  return (
    <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#b38a30] text-[#e8b63f]">
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    </div>
  );
}

function PersonGoldIcon() {
  return (
    <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#b38a30] text-[#e8b63f]">
      <svg
        width="31"
        height="31"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M4 22a8 8 0 0 1 16 0Z" />
      </svg>
    </div>
  );
}

function ContactGoldIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e8b63f"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="9" cy="6" r="4" />
      <path d="M2 20a7 7 0 0 1 14 0" />
      <path d="M19 11v8M15 15h8" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}