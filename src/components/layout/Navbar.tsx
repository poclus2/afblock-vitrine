import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Platform', path: '/platform' },
        { name: 'Use Cases', path: '/use-cases' },
        { name: 'Compliance', path: '/compliance' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
        { name: 'Company', path: '/company' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md dark:bg-background-dark/95 dark:border-gray-800 transition-colors duration-200">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Afblock" className="h-8 w-auto" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors ${isActive
                                    ? 'text-primary dark:text-accent font-semibold'
                                    : 'text-neutral-dark hover:text-primary dark:text-gray-300 dark:hover:text-white'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden gap-3 md:flex">
                    <Link
                        to="/demo"
                        className="flex h-10 items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-sm font-semibold text-neutral-dark transition hover:bg-gray-50 dark:bg-surface-dark dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                    >
                        Book a Demo
                    </Link>
                    <a
                        href="https://afblock-business.dartsia.app/login"
                        className="flex h-10 items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-sm font-semibold text-neutral-dark transition hover:bg-gray-50 dark:bg-surface-dark dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                    >
                        Log In
                    </a>
                    <a
                        href="https://afblock-business.dartsia.app/signup"
                        className="flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a2560] hover:shadow-md"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-neutral-dark dark:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="material-symbols-outlined">
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 dark:bg-background-dark dark:border-gray-800">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 text-base font-medium rounded-md ${isActive
                                        ? 'bg-primary/5 text-primary dark:bg-primary/20 dark:text-accent'
                                        : 'text-neutral-dark hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="mt-4 flex flex-col gap-2 pb-2">
                            <Link
                                to="/demo"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-sm font-semibold text-neutral-dark transition hover:bg-gray-50 dark:bg-surface-dark dark:border-gray-700 dark:text-white"
                            >
                                Book a Demo
                            </Link>
                            <a
                                href="https://afblock-business.dartsia.app/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-sm font-semibold text-neutral-dark transition hover:bg-gray-50 dark:bg-surface-dark dark:border-gray-700 dark:text-white"
                            >
                                Log In
                            </a>
                            <a
                                href="https://afblock-business.dartsia.app/signup"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex h-10 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a2560]"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
