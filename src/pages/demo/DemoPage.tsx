import React, { useState } from 'react';
import { companyApi } from '../../services/api';
import type { DemoRequestData } from '../../services/api';

const countries = [
    "United States", "United Kingdom", "Canada", "France", "Germany", "Australia",
    "India", "China", "Japan", "Brazil", "South Africa", "Nigeria", "Kenya",
    "Egypt", "United Arab Emirates", "Saudi Arabia", "Singapore", "Others"
];

const transactionVolumes = [
    "0 - $10k",
    "$10k - $100k",
    "$100k - $1M",
    "+$1M"
];

const useCases = [
    "Cross-border Payments",
    "Payroll",
    "Supplier Payments",
    "Treasury Management",
    "Other"
];

export default function DemoPage() {
    const [formData, setFormData] = useState<DemoRequestData>({
        enterprise_name: '',
        country: '',
        use_case: '',
        business_email: '',
        phone_number: '',
        transaction_volume: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await companyApi.sendDemoRequest(formData);
            setSuccess(true);
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-neutral-dark dark:text-white h-full">
            <div className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side: Copy */}
                <div className="lg:w-1/2 space-y-8">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary dark:text-white">
                        Book a demo today
                    </h1>
                    <p className="text-xl text-neutral-grey dark:text-gray-400 leading-relaxed">
                        We're all ears! Talk to us about your needs, and we'll provide the best possible solution for your business.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-accent">
                                <span className="material-symbols-outlined text-2xl">groups</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg dark:text-white">Audience</h3>
                                <p className="text-neutral-grey dark:text-gray-400">Captivate bigger audiences.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-accent">
                                <span className="material-symbols-outlined text-2xl">monetization_on</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg dark:text-white">Revenue</h3>
                                <p className="text-neutral-grey dark:text-gray-400">Maximize your revenue streams.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-accent">
                                <span className="material-symbols-outlined text-2xl">trending_up</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg dark:text-white">Business</h3>
                                <p className="text-neutral-grey dark:text-gray-400">Scale your business globally.</p>
                            </div>
                        </div>
                    </div>

                    {/* Logos */}
                    <div className="pt-8 opacity-70 grayscale">
                        <p className="text-sm font-semibold text-neutral-grey uppercase tracking-wider mb-4">Backed by leading investors</p>
                        <div className="flex gap-6 items-center flex-wrap">
                            <span className="font-bold text-xl">Flash</span>
                            <span className="font-bold text-xl">Invert</span>
                            <span className="font-bold text-xl">Hitech</span>
                            <span className="font-bold text-xl">Proline</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-1/2 w-full">
                    <div className="bg-[#111827] text-white p-8 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/20 blur-[100px] rounded-full point-events-none"></div>

                        {success ? (
                            <div className="text-center py-20 space-y-6">
                                <div className="h-20 w-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                                </div>
                                <h3 className="text-2xl font-bold">Request Received!</h3>
                                <p className="text-gray-400">
                                    Thank you for your interest. A member of our team will contact you shortly at {formData.business_email}.
                                </p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="text-primary hover:text-white transition-colors underline"
                                >
                                    Book another demo
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Enterprise Name</label>
                                        <input
                                            name="enterprise_name"
                                            value={formData.enterprise_name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-600"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Country</label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-300"
                                        >
                                            <option value="">Select a country</option>
                                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Business Email</label>
                                    <input
                                        name="business_email"
                                        type="email"
                                        value={formData.business_email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-600"
                                        placeholder="you@company.com"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                        <input
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-600"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Monthly Volume</label>
                                        <select
                                            name="transaction_volume"
                                            value={formData.transaction_volume}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-300"
                                        >
                                            <option value="">Select volume</option>
                                            {transactionVolumes.map(v => <option key={v} value={v}>{v}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Use Case</label>
                                    <select
                                        name="use_case"
                                        value={formData.use_case}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-300"
                                    >
                                        <option value="">Select primary use case</option>
                                        {useCases.map(u => <option key={u} value={u}>{u}</option>)}
                                    </select>
                                </div>

                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg text-sm">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary hover:bg-[#0b2d63] text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                >
                                    {loading ? 'Submitting...' : 'Submit Request'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
