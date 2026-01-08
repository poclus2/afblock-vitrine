import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white mb-8">
                    Ready to explore stablecoin infrastructure for your business?
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://afblock-business.dartsia.app/signup"
                        className="w-full sm:w-auto bg-primary text-white border-2 border-primary px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Open account
                    </a>
                    <Link
                        to="/demo"
                        className="w-full sm:w-auto bg-white text-primary border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-semibold text-center hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-all shadow-sm"
                    >
                        Book a demo
                    </Link>
                </div>
            </div>
        </section>
    );
}
