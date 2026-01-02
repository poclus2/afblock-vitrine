import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Philosophy from './components/Philosophy';
import RolesResponsibilities from './components/RolesResponsibilities';
import KYBFramework from './components/KYBFramework';
import TransactionMonitoring from './components/TransactionMonitoring';
import Security from './components/Security';
import Governance from './components/Governance';
import Limitations from './components/Limitations';
import ComplianceCTA from './components/ComplianceCTA';

export default function CompliancePage() {
    return (
        <>
            <Hero />
            <TrustBadges />
            <Philosophy />
            <RolesResponsibilities />
            <KYBFramework />
            <TransactionMonitoring />
            <Security />
            <Governance />
            <Limitations />
            <ComplianceCTA />
        </>
    );
}
