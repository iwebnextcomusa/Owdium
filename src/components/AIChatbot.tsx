import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, RefreshCw, Volume2, Globe } from 'lucide-react';
import { ChatMessage } from '../types';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content:
        'Jambo! I am the Owdium AI Voice & Discovery Assistant. Ask me anything about African languages, traditional storytelling, or tailored audio recommendations!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState('All');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input.trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          language: selectedLang !== 'All' ? selectedLang : undefined,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const botReply = data.reply || 'Thank you for exploring Owdium. How else can I guide your native audio journey?';

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content:
          'Jambo! I encountered a brief network glitch. Owdium offers rich audio storytelling across Swahili, Yoruba, Hausa, Igbo, Amharic, Zulu, and more. Please try asking again!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'Recommend a Swahili story',
    'How does Owdium preserve Yoruba proverbs?',
    'Tell me about Hausa folklore',
    'Audio for learning Igbo',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Widget Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#C86D3B] text-[#071912] shadow-2xl shadow-[#D4AF37]/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center space-x-2"
          aria-label="Open Owdium AI Assistant Chatbot"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span className="hidden sm:inline-block font-bold text-xs tracking-wide">
            Owdium AI Assistant
          </span>
        </button>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[420px] h-[540px] rounded-2xl bg-[#071912]/95 border border-[#D4AF37]/40 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#0D382C] to-[#134E3E] border-b border-[#D4AF37]/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C86D3B] p-[1.5px]">
                <div className="w-full h-full bg-[#071912] rounded-[10px] flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-syne flex items-center gap-1.5">
                  Owdium AI Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </h3>
                <p className="text-[11px] text-[#D4AF37]">
                  Language & Cultural Discovery
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2.5 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                      isUser
                        ? 'bg-[#D4AF37] text-[#071912] font-bold'
                        : 'bg-[#134E3E] text-[#D4AF37] border border-[#D4AF37]/30'
                    }`}
                  >
                    {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                      isUser
                        ? 'bg-[#D4AF37] text-[#071912] font-medium rounded-tr-none'
                        : 'bg-[#0D281E] text-gray-200 border border-[#D4AF37]/20 rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    <span
                      className={`block text-[9px] mt-1 text-right ${
                        isUser ? 'text-[#071912]/70' : 'text-gray-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center space-x-2 text-xs text-[#D4AF37]">
                <Bot className="w-4 h-4 animate-spin" />
                <span>Owdium AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-[#071912] border-t border-gray-800/80 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-[#0D281E] border border-[#D4AF37]/30 text-[10px] font-semibold text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] whitespace-nowrap transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-[#0D281E]/90 border-t border-[#D4AF37]/20 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask about Swahili stories, Yoruba folklore..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#071912] border border-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C86D3B] text-[#071912] font-bold disabled:opacity-40 hover:scale-105 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
