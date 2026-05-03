import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { DisplayMoment } from '@/components/sections/DisplayMoment'
import { Audiences } from '@/components/sections/Audiences'
import { ManifestoBand } from '@/components/sections/ManifestoBand'
import { CapabilityMarquee } from '@/components/sections/CapabilityMarquee'
import { Industries } from '@/components/sections/Industries'
import { Approach } from '@/components/sections/Approach'
import { SignatureMoment } from '@/components/sections/SignatureMoment'
import { Insights } from '@/components/sections/Insights'
import { Standards } from '@/components/sections/Standards'
import { Locations } from '@/components/sections/Locations'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <DisplayMoment />
        <Audiences />
        <ManifestoBand />
        <CapabilityMarquee />
        <Industries />
        <Approach />
        <SignatureMoment />
        <Insights />
        <Standards />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
