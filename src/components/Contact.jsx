"use client";
import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "e2feb8c2-7067-4bf4-bad3-bb69e480774c",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResult("Message Sent Successfully! I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setIsError(true);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsError(true);
      setResult("Network error! Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 relative z-20 bg-darkBg">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent to-secondaryAccent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Box */}
          <div className="lg:col-span-4 bg-cardBg border border-gray-800 rounded-3xl p-8 shadow-2xl space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Don't hesitate to drop a message. Whether you have a question or want to start a full-stack project, I'll get back to you soon.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900 border border-gray-800">
                <div className="p-3 rounded-xl bg-gray-800 text-primaryAccent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400">Email Me</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-primaryAccent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900 border border-gray-800">
                <div className="p-3 rounded-xl bg-gray-800 text-secondaryAccent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400">Location</p>
                  <p className="text-sm font-semibold text-white">Remote / Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-8 bg-cardBg border border-gray-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-30">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="John Doe"
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primaryAccent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primaryAccent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  placeholder="Project Inquiry / Full Stack Role"
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primaryAccent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400">Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Write your message here..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-primaryAccent transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primaryAccent to-secondaryAccent text-darkBg font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primaryAccent/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 relative z-40 pointer-events-auto"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>

              {/* Status feedback message */}
              {result && (
                <div className={`p-4 rounded-xl text-sm flex items-center gap-2 ${
                  isSuccess 
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" 
                    : isError 
                    ? "bg-red-500/10 border border-red-500/30 text-red-400"
                    : "bg-primaryAccent/10 border border-primaryAccent/30 text-primaryAccent"
                }`}>
                  {isSuccess ? <CheckCircle2 size={18} /> : isError ? <AlertCircle size={18} /> : null}
                  <span>{result}</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}