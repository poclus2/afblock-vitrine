export default function CrossUseBenefits() {
    return (
        <section className="bg-primary dark:bg-blue-900 py-16 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bold text-white">Platform-Wide Advantages</h2>
                    <p className="mt-2 text-white/70">Every use case benefits from our core infrastructure features.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                        <div className="mb-4 inline-flex rounded bg-accent/20 p-2 text-accent">
                            <span className="material-symbols-outlined">gavel</span>
                        </div>
                        <h3 className="mb-2 text-lg font-bold">Regulatory Compliance</h3>
                        <p className="text-sm leading-relaxed text-white/70">Built-in KYC/KYB, sanctions screening, and transaction monitoring standard on all flows.</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                        <div className="mb-4 inline-flex rounded bg-accent/20 p-2 text-accent">
                            <span className="material-symbols-outlined">visibility</span>
                        </div>
                        <h3 className="mb-2 text-lg font-bold">Full Auditability</h3>
                        <p className="text-sm leading-relaxed text-white/70">Immutable logs for every transaction. Generate accountant-ready reports in one click.</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                        <div className="mb-4 inline-flex rounded bg-accent/20 p-2 text-accent">
                            <span className="material-symbols-outlined">code</span>
                        </div>
                        <h3 className="mb-2 text-lg font-bold">API-First Design</h3>
                        <p className="text-sm leading-relaxed text-white/70">Integrate deeply into your product. Webhooks, SDKs, and sandbox environments for developers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
