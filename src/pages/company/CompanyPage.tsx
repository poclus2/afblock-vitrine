import Seo from '../../components/Seo';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import WhatWeDo from './components/WhatWeDo';
import OperatingPrinciples from './components/OperatingPrinciples';
import Governance from './components/Governance';
import CompanyFacts from './components/CompanyFacts';
import Contact from './components/Contact';

export default function CompanyPage() {
    return (
        <>
            <Seo title="About Us - Governance & Mission" description="Learn about Afblock's mission to modernize financial infrastructure. Regulated, transparent, and built for the future." />
            <Hero />
            <MissionVision />
            <WhatWeDo />
            <OperatingPrinciples />
            <Governance />
            <CompanyFacts />
            <Contact />
        </>
    );
}
