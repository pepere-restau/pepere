import { MessageCircle, Phone, Mail, AtSign, Clock, ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { restaurantFacts } from "@/content/restaurant-facts";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

function instagramHandle(url: string) {
  try {
    return `@${new URL(url).pathname.replace(/^\/|\/$/g, "")}`;
  } catch {
    return url;
  }
}

export async function ContactMethods() {
  const t = await getTranslations("contactPage.methods");
  const locale = await getLocale();
  const localeKey = locale as "en" | "fr";
  const facts = restaurantFacts;

  const methods = [
    {
      key: "whatsapp",
      icon: MessageCircle,
      label: t("whatsappLabel"),
      value: t("whatsappValue"),
      href: facts.whatsappHref,
      external: true,
    },
    {
      key: "phone",
      icon: Phone,
      label: t("phoneLabel"),
      value: facts.phoneDisplay,
      href: facts.phoneHref,
    },
    {
      key: "email",
      icon: Mail,
      label: t("emailLabel"),
      value: facts.email,
      href: `mailto:${facts.email}`,
    },
    ...(facts.social.instagram
      ? [
          {
            key: "instagram",
            icon: AtSign,
            label: t("instagramLabel"),
            value: instagramHandle(facts.social.instagram),
            href: facts.social.instagram,
            external: true,
          },
        ]
      : []),
  ] as const;

  return (
    <section aria-labelledby="contact-methods-heading" className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-xl">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            id="contact-methods-heading"
            className="mt-3 font-display text-4xl tracking-tight text-foreground uppercase md:text-5xl"
          >
            {t("heading")}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {methods.map(({ key, icon: Icon, label, value, href, ...rest }, index) => (
            <Reveal key={key} delay={0.08 * index}>
              <a
                href={href}
                target={"external" in rest && rest.external ? "_blank" : undefined}
                rel={"external" in rest && rest.external ? "noopener noreferrer" : undefined}
                className="group relative flex h-full flex-col gap-4 rounded-2xl border-2 border-foreground/10 p-6 transition-colors hover:border-brand-accent/50"
              >
                <ArrowUpRight
                  className="absolute top-5 right-5 size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <div className="flex size-11 items-center justify-center rounded-full bg-brand-accent text-primary-foreground">
                  <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                    {label}
                  </p>
                  <p className="mt-1 font-display text-lg tracking-tight break-words text-foreground">
                    {value}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.08 * methods.length}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border-2 border-foreground/10 p-6">
              <div className="flex size-11 items-center justify-center rounded-full bg-brand-accent text-primary-foreground">
                <Clock className="size-5" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  {t("hoursLabel")}
                </p>
                <ul className="mt-1 flex flex-col gap-0.5">
                  {facts.hours.map((range) => (
                    <li key={range.days[localeKey]} className="font-display text-lg tracking-tight text-foreground">
                      <span className="block text-sm text-muted-foreground">{range.days[localeKey]}</span>
                      {range.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
