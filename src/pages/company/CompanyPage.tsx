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
