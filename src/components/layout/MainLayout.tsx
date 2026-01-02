import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-neutral-dark dark:text-text-light transition-colors duration-200">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
