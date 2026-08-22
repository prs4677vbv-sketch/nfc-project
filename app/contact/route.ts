import fs from "fs";
import path from "path";

export async function GET() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "logo-rms.jpg.jpeg"
  );

  const logoBase64 = fs.readFileSync(logoPath).toString("base64");

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Boussarsar Amine",
    "N:Amine;Boussarsar;;;",
    "ORG:TechStore RMS",
    "TEL;TYPE=CELL:+21623030072",
    "TEL;TYPE=WORK:+21621203202",
    "EMAIL;TYPE=INTERNET:boussarsaramine@gmail.com",
    "EMAIL;TYPE=INTERNET,WORK:rms.service.informatique@gmail.com",
    "ADR;TYPE=WORK:;;25 Av. Mustapha Mohsen;Ariana;;2073;Tunisie",
    "URL:https://nfc-project-psi.vercel.app",
    "NOTE:Carte digitale TechStore RMS - WhatsApp, localisation, avis Google, Facebook : https://nfc-project-psi.vercel.app",
    `PHOTO;ENCODING=BASE64;TYPE=JPEG:${logoBase64}`,
    "END:VCARD",
  ];

  const vcard = lines.join("\r\n");

  return new Response(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="Boussarsar-Amine-TechStore-RMS.vcf"',
    },
  });
}