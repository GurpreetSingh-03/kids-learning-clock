"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MessageSquare, Send, User, CheckCircle, Sparkles } from "lucide-react";
import BackgroundShapes from "@/components/BackgroundShapes";
import AnimatedButton from "@/components/AnimatedButton";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate formatting delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSending(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 overflow-hidden">
      <BackgroundShapes />

      <div className="w-full max-w-2xl z-10 flex flex-col gap-6">
        {/* Back Navigation & Breadcrumbs */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm">
                <ArrowLeft className="w-5 h-5" />
                Main Menu
              </span>
            </Link>
            <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
          </div>
          <div className="bg-sky-600 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <Mail className="w-4 h-4" />
            Contact
          </div>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-8 shadow-xl"
        >
          {/* Header with Mascot */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-8 border-b-2 border-slate-100 pb-6">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-20 h-20 relative flex-shrink-0 drop-shadow-md rounded-full bg-white p-2 border border-purple-200"
            >
              <Image
                src="/clock_mascot.png"
                alt="Toby the Clock Buddy"
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-black text-purple-700 font-sans tracking-wide">
                Get in Touch
              </h1>
              <p className="text-slate-500 font-bold mt-1">
                Have a question, idea, or just want to say hi? Toby and the team
                would love to hear from you! 💌
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex flex-col items-center text-center py-10 gap-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-emerald-200"
                >
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </motion.div>
                <h2 className="text-2xl font-black text-emerald-700">
                  Ready to Send! ✉️
                </h2>
                <p className="text-slate-600 font-bold max-w-sm">
                  To ensure privacy, please click below to send this email to <span className="text-purple-600 font-extrabold">kidslearningclock@gmail.com</span> using your preferred mail app.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center px-4">
                  <a
                    href={`mailto:kidslearningclock@gmail.com?subject=${encodeURIComponent(
                      `[Kids Learning Clock] ${formData.subject.toUpperCase()} - ${formData.name}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject Type: ${formData.subject}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="w-full sm:w-auto"
                  >
                    <AnimatedButton variant="primary" className="px-6 py-2.5 w-full">
                      Open Mail App & Send 🚀
                    </AnimatedButton>
                  </a>
                  <AnimatedButton
                    variant="ghost"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "general", message: "" });
                    }}
                    className="px-6 py-2.5 w-full sm:w-auto"
                  >
                    Write New Message
                  </AnimatedButton>
                </div>
              </motion.div>
            ) : (
              /* Contact Form */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-extrabold text-purple-700 mb-1.5"
                  >
                    <User className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah, Mr. Johnson, Parent of Alex"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 bg-white/80 font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-extrabold text-purple-700 mb-1.5"
                  >
                    <Mail className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 bg-white/80 font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-extrabold text-purple-700 mb-1.5"
                  >
                    <Sparkles className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                    What is this about?
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 bg-white/80 font-bold text-slate-700 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all cursor-pointer"
                  >
                    <option value="general">💬 General Question</option>
                    <option value="feedback">⭐ Feedback & Suggestions</option>
                    <option value="bug">🐛 Bug Report</option>
                    <option value="teacher">🏫 Teacher / Classroom Use</option>
                    <option value="partnership">🤝 Partnership Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-extrabold text-purple-700 mb-1.5"
                  >
                    <MessageSquare className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 bg-white/80 font-bold text-slate-700 placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <AnimatedButton
                  variant="primary"
                  className="w-full py-3.5 flex items-center justify-center gap-2 text-lg"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="inline-block"
                      >
                        ⏳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </AnimatedButton>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Direct Contact Info */}
          <div className="mt-8 pt-6 border-t-2 border-slate-100 text-center">
            <p className="text-sm text-slate-500 font-bold">
              You can also email us directly at:
            </p>
            <a
              href="mailto:kidslearningclock@gmail.com"
              className="text-purple-600 font-extrabold text-base hover:text-purple-800 transition-colors"
            >
              kidslearningclock@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
