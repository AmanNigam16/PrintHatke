import { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Register as a Merchant',
  description: 'Request a PrintHatke demo and learn about onboarding for your print shop.',
};

export default function RegisterPage() {
  // Self-service merchant accounts are not available yet. Keep old inbound links safe.
  redirect('/contact');

  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col justify-center">
      <div className="max-w-md mx-auto w-full px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-extrabold text-text-primary mb-2">Join PrintHatke</h1>
          <p className="text-text-secondary text-sm">Automate your print shop workflow.</p>
        </div>

        <div className="glass-card p-6 md:p-8 rounded-2xl shadow-xl border border-border">
          <form className="space-y-4" action="#">
            
            <div className="space-y-1">
              <label htmlFor="shopName" className="block text-xs font-semibold text-text-primary ml-1">Shop Name</label>
              <input 
                type="text" 
                id="shopName" 
                className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow"
                placeholder="e.g. Sharma Xerox"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="fullName" className="block text-xs font-semibold text-text-primary ml-1">Owner Name</label>
              <input 
                type="text" 
                id="fullName" 
                className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow"
                placeholder="Full Name"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-semibold text-text-primary ml-1">Phone Number (WhatsApp)</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow"
                placeholder="+91"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-semibold text-text-primary ml-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow"
                placeholder="you@example.com"
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-electric text-white py-3.5 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:opacity-90 transition-opacity mt-4 flex justify-center items-center gap-2"
            >
              Create Account <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
          </form>
          
          <p className="text-center text-xs text-text-tertiary mt-6">
            By registering, you agree to our <a href="#" className="text-electric hover:underline">Terms of Service</a> and <a href="#" className="text-electric hover:underline">Privacy Policy</a>.
          </p>
        </div>
        
        <p className="text-center text-sm text-text-secondary mt-8">
          Already have an account? <Link href="#" className="font-semibold text-electric hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
