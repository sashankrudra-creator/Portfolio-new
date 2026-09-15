import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, education, experience, projects, skillGroups, achievements, certifications } from './data/portfolio';
import CinematicSkillsCosmos from './components/CinematicSkillsCosmos';
import './styles.css';

const Arrow = () => <span aria-hidden="true">↗</span>;
function Nav() { const [open, setOpen] = useState(false); const links = ['home', 'about', 'projects', 'skills', 'education', 'achievements', 'contact']; return <nav className="nav"><a className="monogram" href="#home" aria-label="Home">SR<span>•</span></a><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Close' : 'Menu'}</button><div className={'navlinks ' + (open ? 'show' : '')}>{links.map(x => <a onClick={() => setOpen(false)} href={'#' + x} key={x}>{x}</a>)}</div></nav> }
function ProfileOrb() {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            setOffset({ x, y });
        };
        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                const x = (e.touches[0].clientX / window.innerWidth - 0.5) * 40;
                const y = (e.touches[0].clientY / window.innerHeight - 0.5) * 40;
                setOffset({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div className="profile-orbital" aria-hidden="true">
            <div className="profile-glow" style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }} />
            <div className="profile-img-wrapper" style={{
                transform: `translate(${-offset.x}px, ${-offset.y}px)`,
                transition: 'transform 0.1s ease-out'
            }}>
                <img src="/profile.png" alt="Sashank" className="profile-img" />
            </div>
            
            <div className="floating-icons">
                <div className="float-card card-ai">
                    <div className="card-glow"></div>
                    <div className="card-inner">
                        <img src="/AI.png" alt="AI" />
                        <div className="card-overlay">
                            <span className="card-title">AI / ML</span>
                            <span className="card-tech">SYSTEMS</span>
                        </div>
                    </div>
                </div>
                <div className="float-card card-gate">
                    <div className="card-glow"></div>
                    <div className="card-inner">
                        <img src="/GATE.png" alt="GATE" />
                        <div className="card-overlay">
                            <span className="card-title">GATE DA</span>
                            <span className="card-tech">CONCEPTUAL</span>
                        </div>
                    </div>
                </div>
                <div className="float-card card-dsa">
                    <div className="card-glow"></div>
                    <div className="card-inner">
                        <img src="/DSA.png" alt="DSA" />
                        <div className="card-overlay">
                            <span className="card-title">DSA</span>
                            <span className="card-tech">ALGORITHMS</span>
                        </div>
                    </div>
                </div>
                <div className="float-card card-web">
                    <div className="card-glow"></div>
                    <div className="card-inner">
                        <img src="/WEB.png" alt="WEB" />
                        <div className="card-overlay">
                            <span className="card-title">WEB</span>
                            <span className="card-tech">DEVELOPMENT</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Reveal({ children, className = '' }) { return <div className={'reveal ' + className}>{children}</div> }
function App() {
    const [cursor, setCursor] = useState({ x: 0, y: 0 }); const [isLocked, setIsLocked] = useState(true); useEffect(() => { const move = e => setCursor({ x: e.clientX, y: e.clientY }); addEventListener('pointermove', move); const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(e => io.observe(e)); const unlock = () => setIsLocked(false); if (isLocked) { window.addEventListener('wheel', unlock); window.addEventListener('touchmove', unlock); } return () => { removeEventListener('pointermove', move); io.disconnect(); window.removeEventListener('wheel', unlock); window.removeEventListener('touchmove', unlock); } }, [isLocked]); return <><div className={`lockscreen ${isLocked ? '' : 'unlocked'}`} onClick={() => setIsLocked(false)}><div className="lockscreen-bg"><div className="floating-emoji e1">🚀</div><div className="floating-emoji e2">💻</div><div className="floating-emoji e3">🧠</div><div className="floating-emoji e4">⚡</div></div><div className="lockscreen-content"><div className="lock-avatar-wrapper"><span className="lock-avatar">👋</span></div><h2>Sashank Rudra</h2><p className="lock-subtitle">Engineering Intelligent Systems</p><button className="unlock-btn"><div className="unlock-arrow">↑</div><span>Scroll up to unlock</span></button></div></div><div className="cursor" style={{ transform: `translate(${cursor.x}px,${cursor.y}px)` }} /><Nav /><main>
        <section id="home" className="hero"><div className="hero-grid" /><div className="eyebrow">PORTFOLIO / 2026 <span>◉ AVAILABLE TO CONNECT</span></div><div className="hero-content"><p className="hero-kicker">Aspiring AI/ML Engineer · Andhra Pradesh, India</p><h1>Sashank<br /><i>Rudra</i></h1><div className="hero-bottom"><p>{profile.intro}</p><div className="actions"><a className="button fill" href="#projects">View my work <Arrow /></a><a className="button" href="#contact">Contact me <Arrow /></a><a className="text-link" href="/resumesis.pdf" download>Download resume ↓</a></div></div></div><ProfileOrb /><a className="scroll" href="#about">SCROLL TO EXPLORE <span>↓</span></a></section>
        <section id="about" className="about section"><Reveal><p className="section-label">01 / THE INTRODUCTION</p><div className="about-copy"><h2>I build <i>intelligent</i><br />systems with<br />curiosity at the core.</h2><div><p>I'm Sashank, a forward-thinking AI/ML engineer passionate about engineering intelligent systems. My expertise spans across machine learning, deep learning, NLP, generative AI, and prompt engineering, translating complex concepts into impactful, real-world solutions.</p><p className="muted">Currently studying CSE - AI & ML at GMR Institute of Technology. Based in Andhra Pradesh, India.</p><a href={`mailto:${profile.email}`} className="text-link">{profile.email} <Arrow /></a></div></div></Reveal></section>
        <section id="projects" className="projects section"><Reveal><p className="section-label">02 / SELECTED WORK</p><h2>Systems that<br /><i>see, think,</i> guide.</h2></Reveal>{projects.map((p, index) => <Reveal className={'project project-' + p.id} key={p.id}><div className="project-visual"><img src={index === 0 ? '/images/insurescan.png' : index === 1 ? '/images/mentor-ai.png' : '/images/internship.png'} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /><span className="project-id">{p.id}</span></div><div className="project-info"><p className="section-label">{p.kind}</p><h3>{p.name}</h3><p>{p.text}</p><div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div><div className="actions">{p.links.map(([label, url]) => <a className="button" href={url} key={label} target="_blank" rel="noreferrer">{label} <Arrow /></a>)}</div></div></Reveal>)}</section>
        <section id="skills" className="skills section"><Reveal><p className="section-label">03 / TECHNOLOGY UNIVERSE</p><h2>Tools that turn<br /><i>questions into</i> systems.</h2></Reveal><CinematicSkillsCosmos /><div className="skill-groups">{skillGroups.map(([name, skills]) => <Reveal key={name}><p>{name}</p><div>{skills.join(' · ')}</div></Reveal>)}</div></section>
        <section id="achievements" className="achievements section"><Reveal><p className="section-label">04 / PROGRESS LOG</p><h2>Measured by<br /><i>momentum.</i></h2></Reveal><div className="achievement-grid">{achievements.map(([num, platform, detail]) => <Reveal className="achievement" key={num + platform}><strong>{num}</strong><p>{platform}</p><span>{detail}</span></Reveal>)}</div></section>
        <section id="experience" className="achievements section" style={{ marginTop: 0, borderTop: 0 }}><Reveal><p className="section-label">05 / PROFESSIONAL EXPERIENCE</p><h2>Real-world<br /><i>impact.</i></h2></Reveal><div className="achievement-grid" style={{ marginTop: '60px' }}>{experience.map(([id, title, company, date, points]) => <Reveal className="achievement" key={id} style={{ display: 'flex', flexDirection: 'column' }}><strong style={{ fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: '1.1', whiteSpace: 'normal', minHeight: '70px' }}>{title}</strong><span style={{ marginTop: '10px', marginBottom: '15px' }}>{company} <sub style={{ fontSize: '14px', marginLeft: '8px', verticalAlign: 'baseline', color: 'rgba(233, 229, 220, 0.5)' }}>{date}</sub></span><ul style={{ color: 'rgba(233, 229, 220, 0.7)', fontSize: '14px', paddingLeft: '15px', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0 }}>{points.map((pt, i) => <li key={i}>{pt}</li>)}</ul></Reveal>)}</div></section>
        <section id="certifications" className="achievements section" style={{ marginTop: 0, borderTop: 0 }}><Reveal><p className="section-label">06 / PROOF OF KNOWLEDGE</p><h2>Certified<br /><i>expertise.</i></h2></Reveal><div className="achievement-grid" style={{ marginTop: '60px' }}>{certifications.map(([num, title, platform, link]) => <Reveal className="achievement" key={num + title} style={{ display: 'flex', flexDirection: 'column' }}><strong style={{ fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: '1.1', whiteSpace: 'normal', minHeight: '70px' }}>{title}</strong><span style={{ marginTop: '10px', marginBottom: '15px' }}>{platform} <sub style={{ fontSize: '14px', marginLeft: '8px', verticalAlign: 'baseline', color: 'rgba(233, 229, 220, 0.5)' }}>{num}</sub></span>{link && <a href={link} target="_blank" rel="noreferrer" style={{ marginTop: 'auto', display: 'inline-block', fontSize: '14px', color: '#F26C32' }}>View Certificate ↗</a>}</Reveal>)}</div></section>
        <section id="education" className="about education section" style={{ marginTop: 0, borderTop: 0 }}><Reveal><p className="section-label">07 / EDUCATION TIMELINE</p><h2>Formal<br /><i>learning.</i></h2></Reveal><div style={{ marginTop: '60px' }}>{education.map(([year, title, school, grade]) => <Reveal className="edu" key={year}><strong>{year}</strong><h3>{title}</h3><p>{school}</p><span>{grade}</span></Reveal>)}</div></section>
        <section id="contact" className="contact"><div className="contact-glow" /><Reveal><p className="section-label">CONTACT</p><h2>Let's build something useful.</h2><div className="contact-grid"><div className="contact-cards"><a href={`mailto:${profile.email}`} className="contact-card"><div className="contact-card-icon">✉</div><div className="contact-card-info"><strong>Email Me</strong><span>{profile.email}</span></div><Arrow /></a><a href={profile.socials.find(s => s[0] === 'LinkedIn')?.[1] || '#'} target="_blank" rel="noreferrer" className="contact-card"><div className="contact-card-icon">in</div><div className="contact-card-info"><strong>LinkedIn</strong><span>sashank-rudra</span></div><Arrow /></a><a href={profile.socials.find(s => s[0] === 'GitHub')?.[1] || '#'} target="_blank" rel="noreferrer" className="contact-card"><div className="contact-card-icon">gh</div><div className="contact-card-info"><strong>GitHub</strong><span>sashankrudra-creator</span></div><Arrow /></a><a href="/resumesis.pdf" target="_blank" className="contact-card"><div className="contact-card-icon">📄</div><div className="contact-card-info"><strong>Resume / CV</strong><span>View PDF Document</span></div><Arrow /></a></div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><div className="form-group"><label>Name</label><input type="text" placeholder="e.g. Sashank Rudra" /></div><div className="form-group"><label>Email</label><input type="email" placeholder="e.g. sashank@example.com" /></div><div className="form-group"><label>Message</label><textarea placeholder="Write your message, project idea, or inquiry here..."></textarea></div><button type="submit" className="button fill submit-btn">Send message</button></form></div></Reveal></section>
    </main><footer><span>© 2026 Sashank Rudra</span><strong>SASHANK RUDRA / AI & ML</strong><a href="#home">BACK TO TOP ↑</a></footer></>
}
createRoot(document.getElementById('root')).render(<App />);
