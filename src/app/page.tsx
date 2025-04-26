import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import PackagesSection from "@/components/packages-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import DemoSection from "@/components/demo-section"
import FaqSection from "@/components/faq-section"
import FinalCta from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <PackagesSection />
        <WhyChooseUsSection />
        <DemoSection />
        <FaqSection />
        <FinalCta />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
