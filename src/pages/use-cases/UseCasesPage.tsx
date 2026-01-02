import Hero from './components/Hero';
import UseCasesGrid from './components/UseCasesGrid';
import DeepDivePayroll from './components/DeepDivePayroll';
import DeepDiveMerchant from './components/DeepDiveMerchant';
import CrossUseBenefits from './components/CrossUseBenefits';
import UseCasesCTA from './components/UseCasesCTA';

export default function UseCasesPage() {
    return (
        <>
            <Hero />
            <UseCasesGrid />
            <DeepDivePayroll />
            <DeepDiveMerchant />
            <CrossUseBenefits />
            <UseCasesCTA />
        </>
    );
}
