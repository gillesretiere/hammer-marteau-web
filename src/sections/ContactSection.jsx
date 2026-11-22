import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Intégrer un service (Formspree, Netlify Forms, etc.) ici
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-brand-bg border-t border-brand-border relative overflow-hidden">
      {/* Halo central */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[300px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(70,143,175,.07) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <span className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--primary)' }}>
            Contact
          </span>
          <h2 className="font-primary text-3xl md:text-4xl font-bold tracking-tight text-brand-heading mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-brand-muted mb-10" style={{ fontSize: '15px' }}>
            Un projet, une question, une idée à partager ? Je lis chaque message.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-3"
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-primary font-bold text-brand-heading text-xl mb-2">Message envoyé !</p>
              <p className="text-brand-muted text-sm">Je vous répondrai dans les meilleurs délais.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Prénom" type="text" placeholder="Marie" required />
                <Field label="Nom"    type="text" placeholder="Dupont" required />
              </div>
              <Field label="E-mail" type="email" placeholder="marie@exemple.fr" required />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-brand-muted">Objet</label>
                <select className="bg-brand-card border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-heading focus:outline-none focus:border-brand-primary transition-colors">
                  <option>Partenariat / projet Saynètes</option>
                  <option>Financement / mécénat</option>
                  <option>Demande de ressources</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-brand-muted">Message</label>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="bg-brand-card border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-heading resize-y focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'var(--primary)' }}
              >
                <Send size={15} /> Envoyer le message
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
};

const Field = ({ label, type, placeholder, required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-brand-muted">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="bg-brand-card border border-brand-border rounded-lg px-3 py-2.5 text-sm text-brand-heading focus:outline-none focus:border-brand-primary transition-colors"
    />
  </div>
);

export default ContactSection;
