import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DynamicPageRenderer({ portal }) {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const apiBase = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
        const res = await fetch(`${apiBase.replace('/api', '')}/api/dynamic-pages/${portal}/${slug}`);
        
        if (!res.ok) throw new Error("Not found");
        const page = await res.json();
        
        if (!page.published) throw new Error("Not published");
        
        setData(page);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) fetchPage();
  }, [slug, portal]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#ffb13a] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-20">
          <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
          <a href="/" className="mt-4 text-[#1e3a8a] underline font-medium">Return Home</a>
        </div>
        <Footer />
      </div>
    );
  }

  // STANDARD TEMPLATE
  if (data.template === "standard") {


    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 pt-24 pb-20">
          {data.content?.image && (
            <div className="w-full h-[40vh] md:h-[60vh] mb-12 relative">
              <img 
                src={data.content.image} 
                alt={data.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1e3a8a]/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-6xl w-full mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {data.content.heading || data.title}
                  </h1>
                </div>
              </div>
            </div>
          )}
          
          <div className="max-w-4xl mx-auto px-4">
            {!data.content?.image && (
              <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-10 text-center">
                {data.content.heading || data.title}
              </h1>
            )}
            
            {(() => {
              const bodyHTML = data.content?.body || "";
              const isFullHtml = bodyHTML.trim().toLowerCase().startsWith("<!doctype html") || bodyHTML.trim().toLowerCase().startsWith("<html");
              if (!isFullHtml) {
                return (
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-[#1e3a8a] prose-a:text-[#ffb13a]"
                    dangerouslySetInnerHTML={{ __html: bodyHTML }}
                  />
                );
              }
              return null;
            })()}
          </div>

          {(() => {
             const bodyHTML = data.content?.body || "";
             const isFullHtml = bodyHTML.trim().toLowerCase().startsWith("<!doctype html") || bodyHTML.trim().toLowerCase().startsWith("<html");
             if (isFullHtml) {
               return (
                 <div className="w-full -mt-6 sm:-mt-10">
                   <RawHtmlIframe html={bodyHTML} title={data.title} />
                 </div>
               );
             }
             return null;
          })()}
          
          <div className="hidden">
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // GALLERY TEMPLATE
  if (data.template === "gallery") {
    const images = data.content?.images || [];
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 text-center">
              {data.content?.heading || data.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {images.map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src={img} 
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // CUSTOM HTML (WITH NAVBAR/FOOTER)
  if (data.template === "custom_html") {
    const htmlToRender = data.content?.html || data.content?.body || "";
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 w-full pt-16">
          <RawHtmlIframe html={htmlToRender} title={data.title} />
        </div>
        <Footer />
      </div>
    );
  }

  // RAW HTML (BLANK CANVAS)
  if (data.template === "raw_html") {
    return <RawHtmlIframe html={data.content?.html || data.content?.body || ""} title={data.title} />;
  }

  // Fallback
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 flex items-center justify-center">
        <p className="text-gray-500">Unknown template: {data.template}</p>
      </div>
      <Footer />
    </div>
  );
}

function RawHtmlIframe({ html, title }) {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === "resize") {
        setHeight(`${e.data.height}px`);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (doc) {
        doc.open();
        
        // Inject script to send height to parent
        const injectedHtml = html + `
          <script>
            function sendHeight() {
              const h = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
              );
              window.parent.postMessage({ type: 'resize', height: h }, '*');
            }
            window.addEventListener('load', sendHeight);
            window.addEventListener('resize', sendHeight);
            
            // Observe mutations for dynamic content like Tailwind
            new MutationObserver(sendHeight).observe(document.body, {
              attributes: true, childList: true, subtree: true
            });
            
            // Fallbacks
            setTimeout(sendHeight, 500);
            setTimeout(sendHeight, 1500);
            setTimeout(sendHeight, 3000);
          </script>
        `;
        
        doc.write(injectedHtml);
        doc.close();
      }
    }
  }, [html]);

  return (
    <iframe 
      ref={iframeRef}
      title={title}
      style={{ height, overflow: "hidden" }}
      scrolling="no"
      className="w-full border-none m-0 p-0 block"
    />
  );
}
