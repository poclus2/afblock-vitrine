import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/home/HomePage';
import PlatformPage from './pages/platform/PlatformPage';
import UseCasesPage from './pages/use-cases/UseCasesPage';
import CompliancePage from './pages/compliance/CompliancePage';
import PricingPage from './pages/pricing/PricingPage';
import BlogPage from './pages/blog/BlogPage';
import BlogPostPage from './pages/blog/BlogPostPage';
import CompanyPage from './pages/company/CompanyPage';
import DemoPage from './pages/demo/DemoPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsOfServicePage from './pages/legal/TermsOfServicePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="platform" element={<PlatformPage />} />
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="compliance" element={<CompliancePage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="demo" element={<DemoPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<div className="p-10 text-center">404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
