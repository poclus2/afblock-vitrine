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
