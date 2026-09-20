'use client';

import { useState } from 'react';
import { State, City } from 'country-state-city';

export function RegisterForm() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Get all states in India
  const states = State.getStatesOfCountry('IN');
  // Get cities based on selected state
  const cities = selectedState ? City.getCitiesOfState('IN', selectedState) : [];

  return (
    <form className="space-y-4" action="#">
      
      <div className="space-y-1">
        <label htmlFor="shopName" className="block text-xs font-semibold text-text-primary ml-1">Shop Name *</label>
        <input 
          type="text" 
          id="shopName" 
          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow"
          placeholder="e.g. Sharma Xerox"
          required
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="fullName" className="block text-xs font-semibold text-text-primary ml-1">Owner Name *</label>
        <input 
          type="text" 
          id="fullName" 
          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow"
          placeholder="Full Name"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-xs font-semibold text-text-primary ml-1">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow"
            placeholder="+91"
            required
          />
        </div>
        
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-semibold text-text-primary ml-1">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="state" className="block text-xs font-semibold text-text-primary ml-1">State (Optional)</label>
          <select 
            id="state" 
            className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow appearance-none"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity(''); // Reset city when state changes
            }}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="city" className="block text-xs font-semibold text-text-primary ml-1">City (Optional)</label>
          <select 
            id="city" 
            className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition-shadow appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">{selectedState ? 'Select City' : 'Select state first'}</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button 
        type="submit" 
        className="w-full bg-electric text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:opacity-90 transition-opacity mt-6 flex justify-center items-center gap-2"
      >
        Request Demo
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      
    </form>
  );
}
