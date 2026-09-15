import React from 'react';

export const SKILLS_DATA = [
  // AI & Machine Learning Core
  {
    id: 'python',
    name: 'Python',
    category: 'LANGUAGES',
    orbit: 1, // 1: Inner, 2: Middle, 3: Outer
    angleOffset: 0,
    color: '#3776AB',
    glowColor: 'rgba(55, 118, 171, 0.6)',
    accentColor: '#FFD438',
    description: 'Primary language for AI/ML, data modeling, backend services & scientific computing.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.5 12.5c-27.4 0-25.7 11.9-25.7 11.9l.03 12.3h26.2v3.7H24.3C12.5 40.4 12 52.8 12 52.8s-.6 14.8 11.8 14.8h7.1v-10.4c0-11.8 10.2-11.8 10.2-11.8h26.1c9.7 0 12.7-5.9 12.7-11.8V24.4s1.7-11.9-26.4-11.9zm-13.8 7.3c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3z" fill="#3776AB"/>
        <path d="M64.5 115.5c27.4 0 25.7-11.9 25.7-11.9l-.03-12.3H64v-3.7h39.7c11.8 0 12.3-12.4 12.3-12.4s.6-14.8-11.8-14.8h-7.1v10.4c0 11.8-10.2 11.8-10.2 11.8H50.8c-9.7 0-12.7 5.9-12.7 11.8v20.1s-1.7 11.9 26.4 11.9zm13.8-7.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z" fill="#FFD438"/>
      </svg>
    )
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    category: 'AI / ML',
    orbit: 1,
    angleOffset: 45,
    color: '#F26C32',
    glowColor: 'rgba(242, 108, 50, 0.7)',
    accentColor: '#FFA366',
    description: 'Predictive modeling, regression, classification, feature engineering & scikit-learn.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="54" stroke="#F26C32" strokeWidth="3" strokeDasharray="6 4" opacity="0.4"/>
        <circle cx="64" cy="28" r="10" fill="#FFA366" filter="drop-shadow(0 0 8px #F26C32)"/>
        <circle cx="34" cy="78" r="10" fill="#F26C32" filter="drop-shadow(0 0 8px #F26C32)"/>
        <circle cx="94" cy="78" r="10" fill="#FF5722" filter="drop-shadow(0 0 8px #FF5722)"/>
        <circle cx="64" cy="64" r="14" fill="#FFFFFF" stroke="#F26C32" strokeWidth="4"/>
        <path d="M64 38L64 50M42 72L54 67M86 72L74 67M44 78L84 78" stroke="#FFA366" strokeWidth="3" strokeLinecap="round"/>
        <path d="M64 58v12M58 64h12" stroke="#F26C32" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    category: 'AI / ML',
    orbit: 1,
    angleOffset: 90,
    color: '#EE4C2C',
    glowColor: 'rgba(238, 76, 44, 0.7)',
    accentColor: '#FF7B54',
    description: 'Neural networks, PyTorch, CNNs, model optimization & deep feature representations.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* PyTorch Flame Torch Symbol */}
        <path d="M64 16c0 0-24 24.5-24 45.5a24 24 0 0047.8 3.5c-4.8 1.5-9.8.5-13.8-2.5 12-4 15-18.5 12-25.5-2 10-9 14.5-14 15.5 0-14 12-25 12-25-10 1-17.5 7.5-20 13.5 0-9 6-17 6-17s-14 9.5-14 28c0 18.8 15.2 34 34 34s34-15.2 34-34C88 38 64 16 64 16z" fill="url(#pytorch_grad)"/>
        <circle cx="82" cy="38" r="6" fill="#EE4C2C" filter="drop-shadow(0 0 6px #EE4C2C)"/>
        <defs>
          <linearGradient id="pytorch_grad" x1="40" y1="16" x2="88" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7B54"/>
            <stop offset="1" stopColor="#EE4C2C"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 'nlp',
    name: 'NLP',
    category: 'AI / ML',
    orbit: 1,
    angleOffset: 135,
    color: '#8E44AD',
    glowColor: 'rgba(142, 68, 173, 0.7)',
    accentColor: '#D291FF',
    description: 'Natural Language Processing, tokenization, embeddings, sentiment & semantic search.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="24" width="92" height="66" rx="18" fill="url(#nlp_bg)" stroke="#D291FF" strokeWidth="2.5"/>
        <path d="M40 90l-12 18V90h12z" fill="#8E44AD"/>
        <path d="M36 50h14M36 62h32M36 74h22" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="88" cy="54" r="14" fill="#D291FF" opacity="0.3"/>
        <path d="M82 54l4 4 8-8" stroke="#D291FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="nlp_bg" x1="18" y1="24" x2="110" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B2C6F"/>
            <stop offset="1" stopColor="#8E44AD"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 'llms',
    name: 'LLMs',
    category: 'GENERATIVE AI',
    orbit: 1,
    angleOffset: 180,
    color: '#00DF81',
    glowColor: 'rgba(0, 223, 129, 0.7)',
    accentColor: '#64FFDA',
    description: 'Large Language Models architecture, fine-tuning, context engineering & inference pipelines.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="64,16 106,40 106,88 64,112 22,88 22,40" stroke="#00DF81" strokeWidth="3" fill="rgba(0,223,129,0.1)"/>
        <circle cx="64" cy="64" r="18" fill="#00DF81" filter="drop-shadow(0 0 10px #00DF81)"/>
        <path d="M64 16v30M106 40L80 55M106 88L80 73M64 112V82M22 88L48 73M22 40L48 55" stroke="#64FFDA" strokeWidth="2.5"/>
        <circle cx="64" cy="64" r="6" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 'rag',
    name: 'RAG',
    category: 'GENERATIVE AI',
    orbit: 1,
    angleOffset: 225,
    color: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.7)',
    accentColor: '#93C5FD',
    description: 'Retrieval-Augmented Generation, vector databases, semantic indexing & chunk retrieval.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="42" height="52" rx="6" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2.5"/>
        <path d="M34 40h22M34 50h16M34 60h20" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="82" cy="76" r="26" fill="rgba(59,130,246,0.2)" stroke="#60A5FA" strokeWidth="3"/>
        <path d="M74 76h16M82 68v16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M100 94l14 14" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round"/>
        <path d="M50 48c12 0 24 10 24 20" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="3 3"/>
      </svg>
    )
  },
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering',
    category: 'GENERATIVE AI',
    orbit: 1,
    angleOffset: 270,
    color: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.7)',
    accentColor: '#FDE047',
    description: 'Few-shot prompting, Chain-of-Thought (CoT), persona modeling & structured LLM steering.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 96l46-46" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round"/>
        <path d="M26 102l8-8" stroke="#D97706" strokeWidth="4" strokeLinecap="round"/>
        {/* Magic star top right */}
        <path d="M88 22l4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12z" fill="#FDE047" filter="drop-shadow(0 0 8px #F59E0B)"/>
        <path d="M62 38l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="#FBBF24"/>
        <path d="M96 66l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" fill="#FDE047"/>
      </svg>
    )
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI TOOLS',
    orbit: 1,
    angleOffset: 315,
    color: '#10A37F',
    glowColor: 'rgba(16, 163, 127, 0.7)',
    accentColor: '#5EEAD4',
    description: 'OpenAI GPT-4o / ChatGPT API integration, system prompts, function calling & assistant agents.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Official OpenAI Spiral */}
        <g stroke="#10A37F" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M64 24v22M64 82v22" />
          <path d="M29.4 44l19.1 11M79.5 73l19.1 11" />
          <path d="M29.4 84l19.1-11M79.5 55l19.1-11" />
        </g>
        <circle cx="64" cy="64" r="44" stroke="#10A37F" strokeWidth="4" fill="rgba(16,163,127,0.12)"/>
        <path d="M64 42a22 22 0 100 44 22 22 0 000-44z" stroke="#5EEAD4" strokeWidth="4"/>
        <circle cx="64" cy="64" r="8" fill="#10A37F"/>
      </svg>
    )
  },

  // Orbit 2: AI Tools & Modern Frameworks
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'AI TOOLS',
    orbit: 2,
    angleOffset: 15,
    color: '#4E75FF',
    glowColor: 'rgba(78, 117, 255, 0.7)',
    accentColor: '#A78BFA',
    description: 'Google Gemini Pro / Flash multimodal reasoning, vision processing & long-context pipelines.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 12C64 40.7 40.7 64 12 64C40.7 64 64 87.3 64 116C64 87.3 87.3 64 116 64C87.3 64 64 40.7 64 12Z" fill="url(#gemini_grad)" filter="drop-shadow(0 0 10px rgba(78, 117, 255, 0.8))"/>
        <defs>
          <linearGradient id="gemini_grad" x1="12" y1="12" x2="116" y2="116" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B73E8"/>
            <stop offset="0.5" stopColor="#8E54E9"/>
            <stop offset="1" stopColor="#FF5E62"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'AI TOOLS',
    orbit: 2,
    angleOffset: 65,
    color: '#D97706',
    glowColor: 'rgba(217, 119, 6, 0.7)',
    accentColor: '#F59E0B',
    description: 'Anthropic Claude 3.5 Sonnet / Opus for deep reasoning, artifact generation & complex code analysis.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Claude Terracotta Sunburst Asterisk */}
        <g fill="#D97706" filter="drop-shadow(0 0 8px rgba(217, 119, 6, 0.7))">
          <rect x="58" y="16" width="12" height="96" rx="6"/>
          <rect x="58" y="16" width="12" height="96" rx="6" transform="rotate(45 64 64)"/>
          <rect x="58" y="16" width="12" height="96" rx="6" transform="rotate(90 64 64)"/>
          <rect x="58" y="16" width="12" height="96" rx="6" transform="rotate(135 64 64)"/>
        </g>
        <circle cx="64" cy="64" r="14" fill="#CC6B49"/>
      </svg>
    )
  },
  {
    id: 'copilot',
    name: 'Copilot',
    category: 'AI TOOLS',
    orbit: 2,
    angleOffset: 115,
    color: '#6E40C9',
    glowColor: 'rgba(110, 64, 201, 0.7)',
    accentColor: '#A371F7',
    description: 'GitHub Copilot AI pair programming, workspace indexing & agentic code generation.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="32" width="88" height="64" rx="20" fill="url(#copilot_grad)" stroke="#A371F7" strokeWidth="2.5"/>
        <circle cx="46" cy="60" r="10" fill="#FFFFFF"/>
        <circle cx="82" cy="60" r="10" fill="#FFFFFF"/>
        <circle cx="48" cy="60" r="5" fill="#1F2428"/>
        <circle cx="84" cy="60" r="5" fill="#1F2428"/>
        <path d="M48 78c4 4 11 6 16 6s12-2 16-6" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
        <defs>
          <linearGradient id="copilot_grad" x1="20" y1="32" x2="108" y2="96" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6E40C9"/>
            <stop offset="1" stopColor="#3B82F6"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'WEB',
    orbit: 2,
    angleOffset: 165,
    color: '#E0E0E0',
    glowColor: 'rgba(255, 255, 255, 0.5)',
    accentColor: '#F26C32',
    description: 'Lightweight microframework for fast AI model serving, REST APIs & endpoints.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54 22h20v22l24 44a10 10 0 01-8.7 15H38.7A10 10 0 0130 88l24-44V22z" stroke="#FFFFFF" strokeWidth="4" fill="rgba(255,255,255,0.08)"/>
        <path d="M50 22h28M42 78h44" stroke="#F26C32" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="56" cy="88" r="4" fill="#F26C32"/>
        <circle cx="72" cy="84" r="5" fill="#FFA366"/>
        <circle cx="64" cy="94" r="3" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 'django',
    name: 'Django',
    category: 'WEB',
    orbit: 2,
    angleOffset: 215,
    color: '#092E20',
    glowColor: 'rgba(68, 183, 139, 0.7)',
    accentColor: '#44B78B',
    description: 'Full-stack Python web framework with ORM, authentication & production scalability.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="18" width="92" height="92" rx="18" fill="#0C4B33" stroke="#44B78B" strokeWidth="3"/>
        <text x="32" y="82" fill="#FFFFFF" fontFamily="Playfair Display, serif" fontSize="62" fontWeight="700">dj</text>
      </svg>
    )
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'WEB',
    orbit: 2,
    angleOffset: 265,
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.7)',
    accentColor: '#FFF066',
    description: 'Modern asynchronous JavaScript (ES6+), interactive web dynamic interfaces & client logic.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="16" width="96" height="96" rx="14" fill="#F7DF1E"/>
        <path d="M70 44v38c0 14-8 19-18 19-8 0-14-4-17-9l9-6c2 3 5 5 8 5 4 0 7-3 7-9V44h11zM109 44v14c-4-3-8-4-13-4-7 0-11 4-11 9 0 6 4 8 13 12 12 5 17 10 17 21 0 14-11 20-23 20-11 0-19-5-22-12l10-6c2 4 6 7 12 7 6 0 10-3 10-8 0-5-4-8-12-11-13-6-18-10-18-21 0-13 10-20 22-20 9 0 16 3 20 6z" fill="#000000"/>
      </svg>
    )
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'LANGUAGES',
    orbit: 2,
    angleOffset: 315,
    color: '#00BCFF',
    glowColor: 'rgba(0, 188, 255, 0.7)',
    accentColor: '#70E0FF',
    description: 'Relational database querying, schema design, complex joins, aggregation & indexing.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="64" cy="32" rx="42" ry="14" fill="#0080B8" stroke="#00BCFF" strokeWidth="3"/>
        <path d="M22 32v28c0 7.7 18.8 14 42 14s42-6.3 42-14V32" fill="none" stroke="#00BCFF" strokeWidth="3"/>
        <path d="M22 60v28c0 7.7 18.8 14 42 14s42-6.3 42-14V60" fill="none" stroke="#00BCFF" strokeWidth="3"/>
        <text x="64" y="68" fill="#FFFFFF" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="22" fontWeight="700">SQL</text>
      </svg>
    )
  },

  // Orbit 3: Foundations, Engineering & Dev Tools
  {
    id: 'html',
    name: 'HTML',
    category: 'WEB',
    orbit: 3,
    angleOffset: 0,
    color: '#E34F26',
    glowColor: 'rgba(227, 79, 38, 0.7)',
    accentColor: '#F06529',
    description: 'Semantic HTML5 structure, accessibility standards & modern web layouts.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="24,16 32,106 64,115 96,106 104,16" fill="#E34F26"/>
        <polygon points="64,24 64,106 88,99 95,24" fill="#F06529"/>
        <path d="M42 42h44l-2 18H44l2 18h36l-2 22-16 5-16-5-1-10h-9l2 18 24 7 24-7 4-46H39l-2-18h5M42 42" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'WEB',
    orbit: 3,
    angleOffset: 40,
    color: '#1572B6',
    glowColor: 'rgba(21, 114, 182, 0.7)',
    accentColor: '#33A9DC',
    description: 'Vanilla CSS3, responsive layouts, flexbox/grid, animations & glassmorphism.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="24,16 32,106 64,115 96,106 104,16" fill="#1572B6"/>
        <polygon points="64,24 64,106 88,99 95,24" fill="#33A9DC"/>
        <path d="M86 42H42l2 18h40l-2 18H46l1 10h33l-2 16-14 4-14-4-1-7H40l2 15 22 6 22-6 5-53z" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 'dsa',
    name: 'DSA',
    category: 'FOUNDATIONS',
    orbit: 3,
    angleOffset: 80,
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.7)',
    accentColor: '#BAE6FD',
    description: 'Data Structures & Algorithms: trees, graphs, dynamic programming & problem solving.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Binary Tree Structure */}
        <circle cx="64" cy="28" r="12" fill="#38BDF8" filter="drop-shadow(0 0 6px #38BDF8)"/>
        <circle cx="36" cy="68" r="10" fill="#0284C7"/>
        <circle cx="92" cy="68" r="10" fill="#0284C7"/>
        <circle cx="22" cy="102" r="8" fill="#BAE6FD"/>
        <circle cx="50" cy="102" r="8" fill="#BAE6FD"/>
        <circle cx="78" cy="102" r="8" fill="#BAE6FD"/>
        <circle cx="106" cy="102" r="8" fill="#BAE6FD"/>
        <path d="M64 40L36 58M64 40L92 58M36 78L22 94M36 78L50 94M92 78L78 94M92 78L106 94" stroke="#38BDF8" strokeWidth="2.5"/>
      </svg>
    )
  },
  {
    id: 'dbms',
    name: 'DBMS',
    category: 'FOUNDATIONS',
    orbit: 3,
    angleOffset: 120,
    color: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.7)',
    accentColor: '#E9D5FF',
    description: 'Database Management Systems, ACID transactions, normalization & concurrency.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="24" width="84" height="24" rx="12" fill="#7E22CE" stroke="#A855F7" strokeWidth="2.5"/>
        <rect x="22" y="52" width="84" height="24" rx="12" fill="#7E22CE" stroke="#A855F7" strokeWidth="2.5"/>
        <rect x="22" y="80" width="84" height="24" rx="12" fill="#7E22CE" stroke="#A855F7" strokeWidth="2.5"/>
        <circle cx="36" cy="36" r="4" fill="#E9D5FF"/>
        <circle cx="36" cy="64" r="4" fill="#E9D5FF"/>
        <circle cx="36" cy="92" r="4" fill="#E9D5FF"/>
        <path d="M52 36h42M52 64h42M52 92h42" stroke="#E9D5FF" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'os',
    name: 'OS',
    category: 'FOUNDATIONS',
    orbit: 3,
    angleOffset: 160,
    color: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.7)',
    accentColor: '#A7F3D0',
    description: 'Operating Systems internals, process scheduling, memory management, threads & Linux.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="68" height="68" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="3"/>
        <rect x="44" y="44" width="40" height="40" rx="6" fill="#10B981" opacity="0.2"/>
        {/* CPU Pins */}
        <path d="M42 18v12M64 18v12M86 18v12M42 98v12M64 98v12M86 98v12M18 42h12M18 64h12M18 86h12M98 42h12M98 64h12M98 86h12" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
        <text x="64" y="70" fill="#A7F3D0" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="20" fontWeight="700">OS</text>
      </svg>
    )
  },
  {
    id: 'oops',
    name: 'OOPs',
    category: 'FOUNDATIONS',
    orbit: 3,
    angleOffset: 200,
    color: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.7)',
    accentColor: '#FBCFE8',
    description: 'Object-Oriented Programming: encapsulation, inheritance, polymorphism & abstraction.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 3D Modular Polymorphic Cubes */}
        <polygon points="64,18 96,36 64,54 32,36" fill="#F472B6"/>
        <polygon points="32,36 64,54 64,88 32,70" fill="#DB2777"/>
        <polygon points="96,36 64,54 64,88 96,70" fill="#BE185D"/>
        <polygon points="64,56 86,68 64,80 42,68" fill="rgba(255,255,255,0.4)"/>
      </svg>
    )
  },
  {
    id: 'git',
    name: 'Git',
    category: 'TOOLS',
    orbit: 3,
    angleOffset: 240,
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.7)',
    accentColor: '#FFA085',
    description: 'Distributed version control, branching workflows, merging, rebasing & repository hygiene.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="22" width="84" height="84" rx="18" fill="#F05032" transform="rotate(45 64 64)"/>
        <g stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round">
          <line x1="48" y1="48" x2="80" y2="80"/>
          <line x1="80" y1="48" x2="64" y2="64"/>
        </g>
        <circle cx="48" cy="48" r="8" fill="#FFFFFF"/>
        <circle cx="80" cy="80" r="8" fill="#FFFFFF"/>
        <circle cx="80" cy="48" r="8" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'TOOLS',
    orbit: 3,
    angleOffset: 275,
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.6)',
    accentColor: '#A49F96',
    description: 'Code collaboration, open-source repositories, actions CI/CD & project tracking.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 16C37.5 16 16 37.5 16 64c0 21.2 13.7 39.2 32.8 45.6 2.4.4 3.3-1 3.3-2.3v-8.1c-13.4 2.9-16.2-6.5-16.2-6.5-2.2-5.6-5.4-7.1-5.4-7.1-4.4-3 .3-2.9.3-2.9 4.8.3 7.4 5 7.4 5 4.3 7.4 11.3 5.3 14.1 4 0.4-3.1 1.7-5.3 3-6.5-10.7-1.2-21.9-5.3-21.9-23.7 0-5.2 1.9-9.5 5-12.9-.5-1.2-2.2-6.1.5-12.8 0 0 4-1.3 13.2 4.9 3.8-1.1 7.9-1.6 12-1.6s8.2.5 12 1.6c9.2-6.2 13.2-4.9 13.2-4.9 2.7 6.7 1 11.6.5 12.8 3.1 3.4 5 7.7 5 12.9 0 18.5-11.3 22.4-22 23.6 1.7 1.5 3.3 4.4 3.3 8.9v13.2c0 1.3.9 2.8 3.3 2.3C98.3 103.2 112 85.2 112 64c0-26.5-21.5-48-48-48z" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 'colab',
    name: 'Google Colab',
    category: 'TOOLS',
    orbit: 3,
    angleOffset: 310,
    color: '#F9AB00',
    glowColor: 'rgba(249, 171, 0, 0.7)',
    accentColor: '#E37400',
    description: 'Cloud GPU accelerated Jupyter notebooks for training models and quick prototyping.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Google Colab Infinity Loop */}
        <path d="M40 44c-11 0-20 9-20 20s9 20 20 20c12.3 0 18-12 24-20 6-8 11.7-20 24-20 11 0 20 9 20 20s-9 20-20 20c-12.3 0-18-12-24-20-6-8-11.7-20-24-20z" stroke="#F9AB00" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M72 44c11 0 20 9 20 20s-9 20-20 20" stroke="#E37400" strokeWidth="12" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'TOOLS',
    orbit: 3,
    angleOffset: 345,
    color: '#007ACC',
    glowColor: 'rgba(0, 122, 204, 0.7)',
    accentColor: '#38BDF8',
    description: 'Modern development environment with Python, Git & AI extensions ecosystem.',
    icon: (
      <svg viewBox="0 0 128 128" className="skill-svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M96 16l20 9v78l-20 9-66-48 66-48z" fill="#007ACC"/>
        <path d="M96 16L30 64l66 48V16z" fill="#1F9CF0"/>
        <path d="M30 64l-16-12a6 6 0 010-10l16-12 20 17-20 17z" fill="#0065A9"/>
        <path d="M14 86a6 6 0 000 10l16 12 20-17-20-17-16 12z" fill="#0065A9"/>
      </svg>
    )
  }
];

export const CATEGORIES = ['ALL', 'AI / ML', 'GENERATIVE AI', 'AI TOOLS', 'LANGUAGES', 'WEB', 'FOUNDATIONS', 'TOOLS'];
