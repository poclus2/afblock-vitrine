import Seo from '../../components/Seo';
import Hero from './components/Hero';
import CorePricing from './components/CorePricing';
import FeeSchedule from './components/FeeSchedule';
import FAQ from './components/FAQ';
import PricingCTA from './components/PricingCTA';

export default function PricingPage() {
    return (
        <>
            <Seo title="Pricing & Fees" description="Transparent pricing for global businesses. Pay only for what you use, with no hidden fees." />
            <Hero />
            <CorePricing />
            <FeeSchedule />
            <FAQ />
            <PricingCTA />
        </>
    );
}
