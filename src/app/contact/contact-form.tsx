'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Note: Form submission coming soon
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
          placeholder="Your full name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
          placeholder="email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="shopName" className="block text-sm font-medium text-text-secondary mb-1">Shop Name</label>
        <input 
          type="text" 
          id="shopName" 
          className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
          placeholder="Name of your business"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Message</label>
        <textarea 
          id="message" 
          rows={4}
          className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors resize-none"
          placeholder="How can we help you?"
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-electric text-midnight font-medium py-3 rounded-lg hover:bg-electric-soft transition-colors"
      >
        {submitted ? 'Message Sent!' : 'Send Message'}
      </button>

      {submitted && (
        <p className="text-center text-emerald text-sm mt-2">
          (Form submission coming soon)
        </p>
      )}
    </form>
  );
}
