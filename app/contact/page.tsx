'use client';

import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Phone, Send, Check, X } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Er ging iets mis. Probeer het opnieuw.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Er ging iets mis. Probeer het opnieuw.');
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-10 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Contact
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Heb je vragen over hoe AI jouw organisatie kan helpen? Of wil je meer weten over mijn aanpak? 
            Neem gerust contact op. Geen verkooppraatje, gewoon een gesprek.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contactgegevens
            </h2>
            
            <div className="bg-blue-pastel/10 dark:bg-blue-pastel/20 rounded-2xl p-6 space-y-4">
              {/* Email */}
              <a
                href="mailto:info@milanvanbruggen.nl"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-pastel/20 dark:bg-blue-pastel/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-pastel" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-pastel transition-colors">info@milanvanbruggen.nl</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/31628153017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-pastel/20 dark:bg-blue-pastel/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-pastel" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-pastel transition-colors">06 28 15 30 17</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/milanvanbruggen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-pastel/20 dark:bg-blue-pastel/30 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-blue-pastel" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-pastel transition-colors">linkedin.com/in/milanvanbruggen</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Stuur een bericht
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-pastel"
                  placeholder="Je naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-pastel"
                  placeholder="je@email.nl"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Telefoon
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-pastel"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-pastel resize-none"
                  placeholder="Vertel me over je vraag of idee..."
                />
              </div>

              {status === 'error' && errorMessage && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
                  <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  status === 'sending'
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-green-pastel text-gray-900'
                    : 'bg-blue-pastel text-gray-900 hover:brightness-105 shadow-lg hover:shadow-xl'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
                    Verzenden...
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    Verzonden!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Verstuur bericht
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

