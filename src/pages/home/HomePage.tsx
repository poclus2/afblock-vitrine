import Hero from './components/Hero';
import TrustGrid from './components/TrustGrid';
import FeaturesGrid from './components/FeaturesGrid';
import UseCasesPreview from './components/UseCasesPreview';
import HowItWorks from './components/HowItWorks';
import CompliancePreview from './components/CompliancePreview';
import InsightsPreview from './components/InsightsPreview';
import CTA from './components/CTA';

export default function HomePage() {
    return (
        <>
            <Hero />
            <TrustGrid />
            <FeaturesGrid />
            <UseCasesPreview />
            <HowItWorks />
            <CompliancePreview />
            <InsightsPreview />
            <CTA />
        </>
    );
}
