import React, { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, User } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const { data } = useContext(DataContext);
  const { contactInfo } = data;
  const [sent, setSent] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const leadData = Object.fromEntries(formData.entries());

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
      await axios.post(`${apiUrl}/landing1/leads`, leadData);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      e.target.reset();
    } catch (err) {
      console.error("Error submitting lead:", err);
      alert("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1e3a8a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-300/20 rounded-full blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#1e3a8a] text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-8 h-px bg-[#1e3a8a]" /> Get In Touch{" "}
              <span className="w-8 h-px bg-[#1e3a8a]" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              Start Your Journey at <span className="italic text-[#1e3a8a]">Ishan</span>
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-gray-600 text-[15px] leading-relaxed">
              Talk to our admissions counsellors. We'll call you back within 2 hours on working
              days.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0a1232] text-white p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-amber-400/30 rounded-full" />
              <div className="absolute -bottom-16 -left-16 w-60 h-60 border border-amber-400/20 rounded-full" />
              <h3 className="font-serif text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-amber-500 text-[#0a1232] flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-amber-300 tracking-widest font-bold uppercase">
                      Campus
                    </div>
                    <p className="text-sm leading-relaxed mt-1 whitespace-pre-line">
                      {contactInfo?.location || "Knowledge Park-1, Greater Noida\nUttar Pradesh 201310, India"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-amber-500 text-[#0a1232] flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-amber-300 tracking-widest font-bold uppercase">
                      Admissions
                    </div>
                    <a href={`tel:${contactInfo?.admissionNumber || "+91-120-2326600"}`} className="block text-sm mt-1 hover:text-amber-300">
                      {contactInfo?.admissionNumber || "+91-120-2326600"}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-amber-500 text-[#0a1232] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-amber-300 tracking-widest font-bold uppercase">
                      Email
                    </div>
                    <a
                      href={`mailto:${contactInfo?.email || "admissions@ishan.ac"}`}
                      className="block text-sm mt-1 hover:text-amber-300"
                    >
                      {contactInfo?.email || "admissions@ishan.ac"}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-amber-500 text-[#0a1232] flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-amber-300 tracking-widest font-bold uppercase">
                      Office Hours
                    </div>
                    <p className="text-sm mt-1 leading-relaxed whitespace-pre-line">
                      {contactInfo?.officeHours || "Mon – Sat : 9:00 AM – 6:00 PM\nSunday : By appointment"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <div className="text-xs text-amber-300 tracking-widest font-bold uppercase mb-3">
                  5 Colleges, One Address
                </div>
                <div className="flex flex-wrap gap-2">
                  {["IIL", "IIMT", "IIP", "IAMS", "IIE"].map((c) => (
                    <span
                      key={c}
                      className="text-[10px] font-bold px-2.5 py-1 bg-white/10 border border-white/20 rounded-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-3">
            <div className="bg-white border border-gray-200 p-8 md:p-10 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">
                Request a Callback
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill in your details and an Ishan counsellor will call you back.
              </p>

              {sent ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center text-3xl mb-4">
                    ✓
                  </div>
                  <h4 className="font-serif text-xl font-bold text-gray-900">
                    Thank you!
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Our counsellor will call you back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-1.5">
                        <User size={12} className="text-[#1e3a8a]" /> Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 transition"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-1.5">
                        <Phone size={12} className="text-[#1e3a8a]" /> Phone *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 transition"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-1.5">
                        <Mail size={12} className="text-[#1e3a8a]" /> Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 transition"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-1.5">
                        <MapPin size={12} className="text-[#1e3a8a]" /> City
                      </label>
                      <input
                        name="city"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 transition"
                        placeholder="Your city"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                        Program of Interest
                      </label>
                      <select
                        name="programme"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a] bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select program
                        </option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                        <option>Diploma</option>
                        <option>Doctoral</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                        College Preference
                      </label>
                      <select
                        name="college"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a] bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select college
                        </option>
                        <option>Ishan Institute of Law</option>
                        <option>Ishan Institute of Management & Technology</option>
                        <option>Ishan Institute of Pharmacy</option>
                        <option>Ishan Ayurvedic Medical Sciences</option>
                        <option>Ishan Institute of Education</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-1.5">
                      <MessageSquare size={12} className="text-[#1e3a8a]" /> Message
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/10 transition"
                      placeholder="Any specific question for our admissions team?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="relative inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#1e3a8a] text-white font-bold px-8 py-3.5 text-sm uppercase tracking-wider overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Submit Enquiry <Send size={14} />
                    </span>
                    <span className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition text-[#0a1232]">
                      Submit Enquiry <Send size={14} />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
