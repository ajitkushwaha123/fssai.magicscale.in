import "./globals.css";
import Providers from "@/providers";
import { Poppins } from "next/font/google";
import AppShell from "@/components/global/AppShell";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://fssai.magicscale.in"),

  title: {
    default: "FSSAI License Online | MagicScale",
    template: "%s | MagicScale",
  },

  description:
    "Apply for FSSAI License online starting at ₹999. Get Basic, State and Central Food License with expert support.",

  keywords: [
    "FSSAI License",
    "Food License",
    "FSSAI Registration",
    "Food Registration",
    "Apply FSSAI License",
    "FSSAI Online",
    "Basic FSSAI License",
    "State FSSAI License",
    "Central FSSAI License",
  ],

  alternates: {
    canonical: "https://fssai.magicscale.in",
  },

  icons: {
    icon: "/og-image.png",
  },

  openGraph: {
    title: "FSSAI License Online | MagicScale",
    description: "Apply for FSSAI License online starting at ₹999. Get Basic, State and Central Food License with expert support.",
    url: "https://fssai.magicscale.in",
    siteName: "MagicScale",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MagicScale FSSAI License",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FSSAI License Online | MagicScale",
    description: "Apply for FSSAI License online starting at ₹999.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MagicScale",
    url: "https://fssai.magicscale.in",
    logo: "https://fssai.magicscale.in/og-image.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8826073117",
      contactType: "customer service",
      email: "support@magicscale.in",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MagicScale FSSAI Licensing",
    url: "https://fssai.magicscale.in",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
