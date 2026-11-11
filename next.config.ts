import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/udflrhgq/**",
      },
    ],
    // The logo (public/logo.svg) is the only local SVG served through
    // next/image — trusted, static, and checked into the repo, not
    // user-uploaded, so the usual SVG/XSS risk this guards against doesn't
    // apply. contentSecurityPolicy follows Next's own recommended default.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default withNextIntl(nextConfig);
