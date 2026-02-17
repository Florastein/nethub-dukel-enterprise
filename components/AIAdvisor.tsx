
import React, { useState } from 'react';
import { getAIRecommendation } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setLoading(true);
    const result = await getAIRecommendation(prompt);
    setResponse(result || null);
    setLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-[2.5rem] overflow-hidden">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-900 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-robot text-2xl text-white"></i>
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">DUKEL AI <br />Advisor</h2>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  Have a specific digital challenge? Describe your vision or problem, and our AI will suggest the best technical path.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2">Powered by</div>
                <div className="text-sm font-bold opacity-60">Gemini Neural Engine</div>
              </div>
            </div>

            <div className="md:col-span-3 p-8 md:p-12 bg-black/40">
              {!response ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">How can we help your business grow?</label>
                    <textarea 
                      className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder-gray-600"
                      placeholder="e.g. We need a secure banking dashboard for mobile users..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    ></textarea>
                  </div>
                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <i className="fa-solid fa-circle-notch animate-spin mr-2"></i> Thinking...
                      </span>
                    ) : 'Analyze Project Idea'}
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">AI Insight</span>
                      <button onClick={() => setResponse(null)} className="text-gray-500 hover:text-white transition-colors">
                        <i className="fa-solid fa-rotate-left"></i>
                      </button>
                    </div>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed italic">
                      "{response}"
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <p className="text-xs text-gray-500">This insight is generated via Gemini AI.</p>
                    <a href="#contact" className="text-sm font-bold text-blue-400 hover:text-blue-300">Discuss with a Human &rarr;</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
