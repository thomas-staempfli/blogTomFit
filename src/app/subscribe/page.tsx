import Link from 'next/link'

export const metadata = { title: 'Subscribe | TomFit' }

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tomfit-50 via-white to-gray-50 pattern-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-tomfit-100 text-tomfit-700 font-semibold text-sm rounded-lg mb-6">Join 10,000+ Subscribers</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-tomfit-950 mb-5">
            Get Weekly <span className="text-gradient">Fitness Insights</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Subscribe to receive our latest articles on workouts, nutrition, and healthy living.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-tomfit-950 mb-2">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tomfit-500 focus:border-transparent text-tomfit-950" />
            </div>
            <div>
              <label className="block text-sm font-medium text-tomfit-950 mb-2">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tomfit-500 focus:border-transparent text-tomfit-950" />
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 h-4 w-4 text-tomfit-600 border-gray-300 rounded focus:ring-tomfit-500" />
              <label className="ml-3 text-sm text-gray-600">I agree to receive emails from TomFit. Unsubscribe anytime.</label>
            </div>
            <button className="w-full px-6 py-3.5 bg-tomfit-500 hover:bg-tomfit-600 text-white font-semibold rounded-lg transition-colors">
              Subscribe Now
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-5">No spam. Unsubscribe anytime.</p>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-xl font-bold text-tomfit-950 text-center mb-8">What You'll Receive</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '💪', title: 'Workout Tips', desc: 'Weekly training insights and routines' },
              { icon: '🥗', title: 'Nutrition Advice', desc: 'Healthy eating strategies and recipes' },
              { icon: '⭐', title: 'Exclusive Content', desc: 'Subscriber-only articles and resources' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-tomfit-950 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-tomfit-500 hover:text-tomfit-600 font-medium text-sm">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
