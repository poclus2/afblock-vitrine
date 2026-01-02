import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-background-off border-t border-gray-200 pt-16 pb-8 dark:bg-black dark:border-gray-800 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Afblock" className="h-8 w-auto" />
                        </div>
                        <p className="text-sm text-neutral-grey dark:text-subtext-dark max-w-xs mb-6">
                            Infrastructure for the modern economy. Secure, compliant, and developer-friendly.
                        </p>
                        <div className="flex gap-4">
                            <a className="text-gray-400 hover:text-primary dark:hover:text-accent transition" href="#">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a className="text-gray-400 hover:text-primary dark:hover:text-accent transition" href="#">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-dark dark:text-white mb-4">Product</h3>
                        <ul className="space-y-3">
                            {/* Using Link for internal routes if they exist, otherwise anchor for placeholders */}
                            <li><Link className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" to="/platform">Platform</Link></li>
                            <li><Link className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" to="/use-cases">Use Cases</Link></li>
                            <li><Link className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" to="/compliance">Compliance</Link></li>
                            <li><Link className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" to="/pricing">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-dark dark:text-white mb-4">Resources</h3>
                        <ul className="space-y-3">

                            <li><a className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" href="#">Case Studies</a></li>
                            <li><Link className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-dark dark:text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" href="#">About Us</a></li>
                            <li><a className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" href="#">Careers</a></li>
                            <li><a className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" href="#">Contact</a></li>
                            <li><a className="text-sm text-neutral-grey dark:text-subtext-dark hover:text-primary dark:hover:text-white transition" href="#">Legal</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 dark:text-subtext-dark">© 2026 Afblock Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="text-xs text-gray-500 hover:text-primary dark:text-subtext-dark dark:hover:text-white transition" href="#">Privacy Policy</a>
                        <a className="text-xs text-gray-500 hover:text-primary dark:text-subtext-dark dark:hover:text-white transition" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
