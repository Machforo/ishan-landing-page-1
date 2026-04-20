import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingWidgets() {
  const [chat, setChat] = useState(false);
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

      {/* Chat button */}
      <button
        onClick={() => setChat(!chat)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition pulse-ring"
        aria-label="Chat"
      >
        {chat ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat window */}
      {chat && (
        <div className="fixed bottom-24 right-6 z-40 w-[320px] bg-white shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#1e3a8a] text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-[#1e3a8a] font-bold">
              I
            </div>
            <div>
              <div className="font-semibold">Ishan Assistant</div>
              <div className="text-[11px] opacity-80">Admission Assistant • Online</div>
            </div>
          </div>
          <div className="p-4 h-64 bg-gray-50 text-sm space-y-3 overflow-y-auto">
            <div className="bg-white border border-gray-200 p-3 max-w-[85%]">
              Hi! I'm your Ishan admissions assistant. How can I help you today?
            </div>
            <div className="bg-[#1e3a8a] text-white p-3 max-w-[85%] ml-auto text-xs">
              Tell me about BA LL.B programme
            </div>
            <div className="bg-white border border-gray-200 p-3 max-w-[85%]">
              BCI-approved 5-year integrated BA LL.B (Hons.) at Ishan Institute of Law. Would you like to apply?
            </div>
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a8a]"
              placeholder="Type a message..."
            />
            <button className="bg-[#1e3a8a] text-white px-3 hover:bg-[#152a5e] transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

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
