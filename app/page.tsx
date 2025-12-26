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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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
