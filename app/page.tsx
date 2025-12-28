'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhyTapShare from '@/components/WhyTapShare'
import UseCases from '@/components/UseCases'
import ProductPreview from '@/components/ProductPreview'
import Trust from '@/components/Trust'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
  }

  return (
    <main className="min-h-screen bg-[#0B0F1A]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyTapShare />
      <UseCases />
      <ProductPreview />
      <Trust />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
