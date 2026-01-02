export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-background-light dark:bg-surface-dark transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">Compliance Philosophy</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8"></div>
          <p className="text-lg text-neutral-grey dark:text-subtext-dark leading-relaxed">
            At Afblock, compliance is not a checkbox—it is the bedrock of our infrastructure. We believe that for businesses to confidently transact in stablecoins and digital assets, they require the same rigour, auditability, and legal certainty found in traditional Tier-1 banking. Our approach is proactive, integrating regulatory requirements directly into our API and dashboard workflows to protect our clients and their stakeholders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary dark:text-accent">shield</span>
            </div>
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">Safety First</h3>
            <p className="text-neutral-grey dark:text-subtext-dark">We prioritize the safety of funds and data integrity above speed or convenience, ensuring zero-compromise security.</p>
          </div>
          <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary dark:text-accent">visibility</span>
            </div>
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">Radical Transparency</h3>
            <p className="text-neutral-grey dark:text-subtext-dark">Every transaction is traceable on-chain and matched with off-chain documentation for complete audit readiness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
