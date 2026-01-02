import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-tomfit-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo-white.png" alt="TomFit" width={120} height={45} className="h-9 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Science-based insights into strength training and fitness.
            </p>
            <a 
              href="https://www.tom.fit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tomfit-400 hover:text-tomfit-300 transition-colors text-sm font-medium inline-flex items-center"
            >
              Visit www.tom.fit
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">Get weekly fitness tips delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-4 py-2.5 bg-tomfit-950/50 border border-gray-700 rounded-lg focus:outline-none focus:border-tomfit-500 text-white text-sm placeholder:text-gray-500" 
              />
              <button className="px-5 py-2.5 bg-tomfit-500 hover:bg-tomfit-600 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} TomFit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
