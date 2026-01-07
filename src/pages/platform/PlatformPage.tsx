import Seo from '../../components/Seo';
import Hero from './components/Hero';
import Intro from './components/Intro';
import CoreModules from './components/CoreModules';
import FinancialFlows from './components/FinancialFlows';
import PlatformFeatures from './components/PlatformFeatures';
import TargetAudience from './components/TargetAudience';
import PlatformCTA from './components/PlatformCTA';

export default function PlatformPage() {
    return (
        <>
            <Seo title="Platform & Features" description="A complete financial infrastructure platform. Cards, payments, accounts, and crypto-to-fiat ramps in one API." />
            <Hero />
            <Intro />
            <CoreModules />
            <FinancialFlows />
            <PlatformFeatures />
            <TargetAudience />
            <PlatformCTA />
        </>
    );
}
