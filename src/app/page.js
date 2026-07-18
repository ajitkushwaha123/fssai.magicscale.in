import React from "react";
import Home from "@/components/global/Home";

export const metadata = {
  title: {
    absolute: "GST Registration Online in 48 Hours | MagicScale",
  },
  description: "Get your GST Number (GSTIN) online in 48 hours at just ₹1,499. Expert support, hassle-free filing, and secure platform.",
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GST Registration Online",
    url: "https://fssai.magicscale.in",
    description: "Apply online for GST Registration at just ₹1,499. Get your GSTIN in 48 hours.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GST Registration",
    provider: {
      "@type": "Organization",
      name: "MagicScale",
    },
    areaServed: "India",
    serviceType: "GST Registration Service",
    offers: {
      "@type": "Offer",
      price: "1499",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is GST Registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GST (Goods and Services Tax) Registration is a mandatory process for businesses with annual turnover exceeding ₹40 Lakhs (goods) or ₹20 Lakhs (services). Upon successful registration, the government issues a unique 15-digit GSTIN (GST Identification Number).",
        },
      },
      {
        "@type": "Question",
        name: "Who needs GST Registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GST Registration is mandatory for: businesses with turnover above threshold limits, e-commerce sellers (Amazon, Flipkart), businesses making inter-state supplies, importers/exporters, and anyone wishing to claim input tax credit.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to get GST Registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We process most GST Registration applications within 48 hours, provided all required documents are submitted correctly and Aadhaar OTP verification is completed.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required for GST Registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You'll need: Aadhaar Card, PAN Card, Passport Size Photograph, Business Name & Address, Bank Account Statement, Email ID, and Mobile Number.",
        },
      },
      {
        "@type": "Question",
        name: "What is the charge for GST Registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our GST Registration fee is ₹1,499 (all-inclusive). Pay just ₹300 advance and the rest after your GSTIN is issued. No hidden charges.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fssai.magicscale.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GST Registration",
        item: "https://fssai.magicscale.in/#pricing",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "MagicScale GST Registration",
    image: "https://fssai.magicscale.in/og-image.png",
    "@id": "https://fssai.magicscale.in",
    url: "https://fssai.magicscale.in",
    telephone: "+918826073117",
    priceRange: "₹1,499",
    address: {
      "@type": "PostalAddress",
      streetAddress: "New Delhi",
      addressLocality: "New Delhi",
      addressRegion: "DL",
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.2090,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="relative bg-white dark:bg-[#0a0a1a] flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl w-full mx-auto px-2 md:px-4">
          <Home />
        </div>
      </div>
    </>
  );
}
