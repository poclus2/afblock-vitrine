import Seo from '../../components/Seo';
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
            <Seo title="Compliance & Security" description="Bank-grade compliance and security. Built for regulated financial institutions and high-volume businesses." />
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
