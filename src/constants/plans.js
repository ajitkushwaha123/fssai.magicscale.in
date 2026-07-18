export const PLANS = {
  "gst-registration": {
    _id: "gst-registration",
    title: "GST Registration",
    slug: "gst-registration",
    description: "Get your GSTIN (GST Number) quickly with complete documentation, application filing, and expert support.",
    currency: "INR",
    price: 1499,
    advancePrice: 300,
    advanceText: "Pay ₹300 Advance, rest after GSTIN is Issued",
    badge: "Pay ₹300 Advance",
    ctaText: "Get GST Now",
    features: [
      "GST Registration Filing",
      "GSTIN Issued in 48 Hours",
      "ARN Number Tracking",
      "Business Type & HSN/SAC Guidance",
      "Dedicated Account Manager",
      "Secure & Encrypted Processing",
      "Digital GST Certificate"
    ],
    plans: [
      {
        licenseType: "Regular GST Registration",
        description: "For businesses with turnover above ₹40 Lakhs (goods) or ₹20 Lakhs (services).",
        pricing: [
          {
            duration: "One Time",
            price: 1499,
            originalPrice: 2999,
            popular: true
          }
        ]
      },
      {
        licenseType: "Composition Scheme",
        description: "For small businesses with turnover up to ₹1.5 Crore who want to pay a flat tax rate.",
        pricing: [
          {
            duration: "One Time",
            price: 1499,
            originalPrice: 2999
          }
        ]
      },
      {
        licenseType: "Voluntary Registration",
        description: "For businesses below threshold wanting GST for B2B transactions or e-commerce.",
        pricing: [
          {
            duration: "One Time",
            price: 1499,
            originalPrice: 2999
          }
        ]
      }
    ],
    includedServices: [
      "Eligibility Check",
      "Document Verification",
      "GST Application Filing",
      "GSTIN Issuance Assistance",
      "ARN Tracking",
      "Customer Support"
    ],
    documentsRequired: [
      "Aadhaar Card",
      "PAN Card",
      "Passport Size Photograph",
      "Business Name & Address",
      "Bank Account Statement",
      "Email ID",
      "Mobile Number"
    ],
    isActive: true,
    whatsappSupportLink: "https://wa.me/918826073117"
  }
};
