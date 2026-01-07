import { Link } from 'react-router-dom';

export default function PlatformCTA() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
                    {/* Decorative Blobs */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to modernize your financial stack?
                    </h2>
                    <p className="relative z-10 text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Join hundreds of businesses moving billions in volume. Get set up in less than 48 hours.
                    </p>
                    <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/demo" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all flex items-center justify-center text-center">
                            Book a demo
                        </Link>
                        <a href="https://afblock-business.dartsia.app/signup" className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center text-center">
                            Open account
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
