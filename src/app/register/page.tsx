import { Metadata } from 'next';
import { RegisterForm } from './register-form';

export const metadata: Metadata = {
  title: 'Register as a Merchant',
  description: 'Request a PrintHatke demo and learn about onboarding for your print shop.',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col justify-center">
      <div className="max-w-xl mx-auto w-full px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-3">Join PrintHatke</h1>
          <p className="text-text-secondary">Request a demo to automate your print shop workflow.</p>
        </div>

        <div className="glass-card p-6 md:p-8 rounded-3xl shadow-xl border border-border">
          <RegisterForm />
          
          <p className="text-center text-xs text-text-tertiary mt-6">
            By registering, you agree to our <a href="#" className="text-electric hover:underline">Terms of Service</a> and <a href="#" className="text-electric hover:underline">Privacy Policy</a>.
          </p>
        </div>
        
      </div>
    </div>
  );
}
