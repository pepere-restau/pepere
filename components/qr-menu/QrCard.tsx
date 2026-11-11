import { generateQrSvg } from "@/lib/qr";

export async function QrCard({
  label,
  scanCta,
  url,
}: {
  label: string;
  scanCta: string;
  url: string;
}) {
  const svg = await generateQrSvg(url, 320);

  return (
    <div className="qr-flyer flex flex-col items-center gap-6 rounded-3xl border border-border bg-white px-8 py-10 text-center shadow-sm">
      <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </span>

      <p className="font-display text-3xl tracking-tight text-neutral-900 uppercase">Pépère</p>

      <div
        className="[&_svg]:size-64 [&_svg]:rounded-xl"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <p className="font-display text-lg text-neutral-900">{scanCta}</p>
      <p className="font-mono text-xs break-all text-neutral-500">{url}</p>
    </div>
  );
}
