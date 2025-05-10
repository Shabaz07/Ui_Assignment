import DoctorListing from "./components/doctor-listing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consult General Physicians Online - Internal Medicine Specialists | Apollo 24/7",
  description:
    "Consult with experienced General Physicians and Internal Medicine Specialists online. Book appointments, get medical advice, and more on Apollo 24/7.",
  keywords: "general physician, internal medicine, online consultation, doctor appointment, Apollo 24/7",
  openGraph: {
    title: "Consult General Physicians Online - Internal Medicine Specialists | Apollo 24/7",
    description:
      "Consult with experienced General Physicians and Internal Medicine Specialists online. Book appointments, get medical advice, and more on Apollo 24/7.",
    url: "https://www.apollo247.com/specialties/general-physician-internal-medicine",
    siteName: "Apollo 24/7",
    images: [
      {
        url: "https://newassets.apollo247.com/images/social_images.jpg",
        width: 1200,
        height: 630,
        alt: "Apollo 24/7",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consult General Physicians Online - Internal Medicine Specialists | Apollo 24/7",
    description:
      "Consult with experienced General Physicians and Internal Medicine Specialists online. Book appointments, get medical advice, and more on Apollo 24/7.",
    images: ["https://newassets.apollo247.com/images/social_images.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.apollo247.com/specialties/general-physician-internal-medicine",
  },
}

export default function Home() {
  return (
    <main>
      <DoctorListing />
    </main>
  )
}
