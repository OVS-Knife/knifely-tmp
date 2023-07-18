export const metadata = {
  title: 'Knifely - Sharpening',
  description: 'Looking for a reliable and professional residential knife sharpening service in Akron? Look no further than Knifely! At Knifely, we understand the importance of having sharp and well-maintained knives in your home or kitchen. That\'s why we offer a wide range of residential knife sharpening services to meet your needs.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Newsletter />
    </>
  )
}
