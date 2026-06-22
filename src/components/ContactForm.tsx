import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let valid = true;
    if (!formData.name.trim()) { newErrors.name = 'Name is required'; valid = false; }
    if (!formData.email.trim()) { newErrors.email = 'Email is required'; valid = false; }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Invalid email'; valid = false; }
    if (!formData.message.trim()) { newErrors.message = 'Message is required'; valid = false; }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!validateForm()) return;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSubmitError('Email service not configured. Contact me at vishnujayakumar4104@gmail.com');
      return;
    }
    setIsSubmitting(true);
    try {
      emailjs.init(PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'vishnujayakumar4104@gmail.com',
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitError('Failed to send. Try vishnujayakumar4104@gmail.com directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) setErrors({ ...errors, [name]: '' });
  };

  const inputClasses = (field: keyof typeof errors) =>
    `w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
      errors[field] ? 'border-red-500/50' : 'border-white/[0.08]'
    } text-white placeholder-gray-600 focus:outline-none focus:border-[#FFA500]/50 focus:ring-1 focus:ring-[#FFA500]/20 transition-all duration-300 text-sm`;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
      >
        <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-gray-400 mt-2 text-sm">I'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClasses('name')} />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses('email')} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={inputClasses('message')} />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>
      {submitError && (
        <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
          <AlertCircle size={16} />
          <p>{submitError}</p>
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
          isSubmitting
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-black hover:opacity-90 hover:shadow-lg hover:shadow-[#FFA500]/20'
        }`}
      >
        {isSubmitting ? (
          <><div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" /> Sending...</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  );
};

export default ContactForm;