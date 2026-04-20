import React, { useState } from "react";
import { X } from "lucide-react";

export default function FloatingWidgets() {
  const [enquiry, setEnquiry] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEnquiry(false);
    }, 2000);
  };

  return (
    <>
      {/* Side "Admission Enquiry" tab */}
      <button
        onClick={() => setEnquiry(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-amber-400 text-[#1e3a8a] text-xs font-bold py-3 px-3 rotate-180 writing-vertical shadow-lg hover:bg-amber-500 transition"
        style={{ writingMode: "vertical-rl" }}
      >
        ADMISSION ENQUIRY
      </button>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition pulse-ring"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Enquiry side panel */}
      {enquiry && (
        <div className="fixed inset-0 z-[70] bg-black/60" onClick={() => setEnquiry(false)}>
          <aside
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#1e3a8a] text-white p-6 flex items-center justify-between">
              <div>
                <div className="text-xs tracking-widest uppercase opacity-80">Start Your Journey</div>
                <h3 className="font-serif text-xl font-bold mt-1">Admission Enquiry 2026-27</h3>
              </div>
              <button onClick={() => setEnquiry(false)} className="hover:opacity-80" aria-label="Close">
                <X size={22} />
              </button>
            </div>
            {!sent ? (
              <form onSubmit={onSubmit} className="p-6 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600">Full Name *</label>
                  <input
                    required
                    className="w-full mt-1 border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Phone *</label>
                    <input
                      required
                      type="tel"
                      className="w-full mt-1 border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Email *</label>
                    <input
                      required
                      type="email"
                      className="w-full mt-1 border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">Programme of Interest</label>
                  <select className="w-full mt-1 border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a] bg-white">
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                    <option>Diploma</option>
                    <option>Doctoral</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">Message</label>
                  <textarea
                    rows="3"
                    className="w-full mt-1 border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#1e3a8a]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] hover:bg-[#152a5e] text-white py-3 text-sm font-semibold uppercase tracking-wider transition"
                >
                  Submit Enquiry
                </button>
              </form>
            ) : (
              <div className="p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">Thank you!</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Our admissions team will reach out shortly.
                </p>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
