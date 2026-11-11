import QRCode from "qrcode";

/** Renders a QR code as an inline SVG string (server-side, no client JS needed). */
export async function generateQrSvg(url: string, size: number) {
  return QRCode.toString(url, {
    type: "svg",
    width: size,
    margin: 1,
    color: { dark: "#1a1a1a", light: "#ffffff" },
  });
}
