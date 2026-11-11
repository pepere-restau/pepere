import { MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { restaurantFacts } from "@/content/restaurant-facts";
import { Reveal } from "@/components/motion/Reveal";

/**
 * A dedicated closing CTA rather than a button buried in Contact — WhatsApp
 * is the fastest path to a reservation for most guests here, so it gets its
 * own full-width moment right before the footer.
 */
export async function WhatsAppCta() {
  const t = await getTranslations("home.whatsappCta");
  const facts = restaurantFacts;

  return (
    <section className="bg-brand-accent px-6 py-16 text-center md:px-12 md:py-20 lg:px-16">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary-foreground/15">
          <MessageCircle className="size-7 text-primary-foreground" strokeWidth={2} aria-hidden="true" />
        </div>
        <h2 className="font-display text-4xl tracking-tight text-primary-foreground uppercase md:text-5xl">
          {t("heading")}
        </h2>
        <p className="font-display text-base text-primary-foreground/85 md:text-lg">{t("intro")}</p>
        <a
          href={facts.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-3.5 text-xs font-bold tracking-[0.14em] text-brand-accent uppercase transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-[0.99]"
        >
          <MessageCircle className="size-3.5" strokeWidth={2} aria-hidden="true" />
          {t("cta")}
        </a>
      </Reveal>
    </section>
  );
}
