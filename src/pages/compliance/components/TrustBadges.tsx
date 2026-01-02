export default function TrustBadges() {
  return (
    <section className="py-10 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">Trusted by industry leaders</p>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
          <svg className="h-8 w-auto text-gray-900 dark:text-gray-100" fill="currentColor" viewBox="0 0 100 30">
            <path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H90 V10 H40 Z M40,15 H80 V20 H40 Z"></path>
          </svg>
          <svg className="h-8 w-auto text-gray-900 dark:text-gray-100" fill="currentColor" viewBox="0 0 100 30">
            <circle cx="15" cy="15" r="10"></circle>
            <rect height="20" width="50" x="35" y="5"></rect>
          </svg>
          <svg className="h-8 w-auto text-gray-900 dark:text-gray-100" fill="currentColor" viewBox="0 0 100 30">
            <path d="M10,5 H30 L20,25 Z M40,10 H90 V15 H40 Z"></path>
          </svg>
          <svg className="h-8 w-auto text-gray-900 dark:text-gray-100" fill="currentColor" viewBox="0 0 100 30">
            <rect height="20" width="20" x="10" y="5"></rect>
            <rect height="20" width="20" x="40" y="5"></rect>
            <rect height="20" width="20" x="70" y="5"></rect>
          </svg>
        </div>
      </div>
    </section>
  );
}
