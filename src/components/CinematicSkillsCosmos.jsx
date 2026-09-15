import React, { useState, useRef } from 'react';
import { SKILLS_DATA, CATEGORIES } from '../data/skillsUniverse';

export default function CinematicSkillsCosmos() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isPaused, setIsPaused] = useState(false);
  const [orbitSpeed, setOrbitSpeed] = useState(1);
  const [viewMode, setViewMode] = useState(typeof window !== 'undefined' && window.innerWidth <= 760 ? 'grid' : 'orbit'); // 'orbit' or 'grid'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cosmosRef = useRef(null);

  // Mouse parallax effect for 3D depth
  const handleMouseMove = (e) => {
    if (!cosmosRef.current) return;
    const rect = cosmosRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Filter skills according to active category
  const filteredSkills = activeCategory === 'ALL' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === activeCategory);

  // Group skills by orbit level
  const orbit1Skills = SKILLS_DATA.filter(s => s.orbit === 1);
  const orbit2Skills = SKILLS_DATA.filter(s => s.orbit === 2);
  const orbit3Skills = SKILLS_DATA.filter(s => s.orbit === 3);

  // Skill currently in inspection (either hovered or default preview)
  const currentSkill = selectedSkill;

  return (
    <div className="cinematic-skills-wrapper" ref={cosmosRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Top Controls & Category Filter Bar */}
      <div className="cosmos-header-controls">
        <div className="category-pill-group" role="tablist" aria-label="Skill Categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="cosmos-actions">
          <button
            className="cosmos-btn"
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume Orbit Rotation' : 'Pause Orbit Rotation'}
            type="button"
          >
            <span className="btn-icon">{isPaused ? '▶' : '⏸'}</span>
            <span>{isPaused ? 'PLAY' : 'PAUSE'}</span>
          </button>
          
          <button
            className="cosmos-btn"
            onClick={() => setOrbitSpeed(s => s === 1 ? 1.8 : s === 1.8 ? 0.5 : 1)}
            title="Toggle Orbital Speed"
            type="button"
          >
            <span className="btn-icon">⚡</span>
            <span>{orbitSpeed === 1 ? '1x' : orbitSpeed === 1.8 ? '2x' : '0.5x'}</span>
          </button>

          <button
            className={`cosmos-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode(v => v === 'orbit' ? 'grid' : 'orbit')}
            title="Switch between Solar Orbit & Grid view"
            type="button"
          >
            <span className="btn-icon">{viewMode === 'orbit' ? '☵' : '◎'}</span>
            <span>{viewMode === 'orbit' ? 'GRID VIEW' : 'ORBIT VIEW'}</span>
          </button>
        </div>
      </div>

      {/* Main Dual-Pane Cockpit Layout: Orbit on Left, HUD Info on Right */}
      <div className="cosmos-dual-layout">
        {/* Left Side: Solar Orbit Galaxy View / Grid */}
        <div className="cosmos-left-pane">
          {viewMode === 'orbit' ? (
            <div 
              className={`cinematic-cosmos-stage ${isPaused ? 'is-paused' : ''}`}
              style={{
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`,
                '--speed-mult': orbitSpeed
              }}
            >
              {/* Ambient Starfield & Nebula Glows */}
              <div className="cosmos-nebula-glow nebula-1" />
              <div className="cosmos-nebula-glow nebula-2" />
              <div className="cosmos-dust-grid" />
              <div className="cosmos-laser-crosshair" />

              {/* Central AI/ML Solar Core */}
              <div className="solar-center-core" onClick={() => setSelectedSkill(null)}>
                <div className="core-corona-glow" />
                <div className="core-pulse-wave wave-1" />
                <div className="core-pulse-wave wave-2" />
                <div className="core-radiance-disc">
                  <div className="core-text">
                    <span className="core-prefix">NUCLEUS</span>
                    <span className="core-title">AI<br/>/ ML</span>
                    <span className="core-sub">INTELLIGENCE</span>
                  </div>
                </div>
              </div>

              {/* Orbit Level 1: Inner AI/ML & GenAI Core */}
              <div className="orbit-track orbit-track-1">
                <div className="orbit-ring-line" />
                <div className="orbit-particles-ring ring-1">
                  {orbit1Skills.map((skill, index) => {
                    const total = orbit1Skills.length;
                    const angle = (index / total) * 360;
                    const isDimmed = activeCategory !== 'ALL' && skill.category !== activeCategory;
                    const isSelected = currentSkill?.id === skill.id;

                    return (
                      <div
                        key={skill.id}
                        className={`orbit-node-anchor ${isDimmed ? 'is-dimmed' : ''} ${isSelected ? 'is-selected' : ''}`}
                        style={{
                          '--node-angle': `${angle}deg`,
                          '--skill-color': skill.color,
                          '--glow-color': skill.glowColor,
                          '--accent-color': skill.accentColor
                        }}
                        onMouseEnter={() => setSelectedSkill(skill)}
                        onClick={() => setSelectedSkill(skill)}
                      >
                        <div className="skill-planet-capsule">
                          <div className="planet-aura" />
                          <div className="planet-disc">
                            <div className="planet-icon-inner">
                              {skill.icon}
                            </div>
                          </div>
                          <span className="planet-label">{skill.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Orbit Level 2: Middle AI Tools & Web Layer */}
              <div className="orbit-track orbit-track-2">
                <div className="orbit-ring-line" />
                <div className="orbit-particles-ring ring-2">
                  {orbit2Skills.map((skill, index) => {
                    const total = orbit2Skills.length;
                    const angle = (index / total) * 360;
                    const isDimmed = activeCategory !== 'ALL' && skill.category !== activeCategory;
                    const isSelected = currentSkill?.id === skill.id;

                    return (
                      <div
                        key={skill.id}
                        className={`orbit-node-anchor ${isDimmed ? 'is-dimmed' : ''} ${isSelected ? 'is-selected' : ''}`}
                        style={{
                          '--node-angle': `${angle}deg`,
                          '--skill-color': skill.color,
                          '--glow-color': skill.glowColor,
                          '--accent-color': skill.accentColor
                        }}
                        onMouseEnter={() => setSelectedSkill(skill)}
                        onClick={() => setSelectedSkill(skill)}
                      >
                        <div className="skill-planet-capsule">
                          <div className="planet-aura" />
                          <div className="planet-disc">
                            <div className="planet-icon-inner">
                              {skill.icon}
                            </div>
                          </div>
                          <span className="planet-label">{skill.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Orbit Level 3: Outer Engineering & Dev Tools */}
              <div className="orbit-track orbit-track-3">
                <div className="orbit-ring-line" />
                <div className="orbit-particles-ring ring-3">
                  {orbit3Skills.map((skill, index) => {
                    const total = orbit3Skills.length;
                    const angle = (index / total) * 360;
                    const isDimmed = activeCategory !== 'ALL' && skill.category !== activeCategory;
                    const isSelected = currentSkill?.id === skill.id;

                    return (
                      <div
                        key={skill.id}
                        className={`orbit-node-anchor ${isDimmed ? 'is-dimmed' : ''} ${isSelected ? 'is-selected' : ''}`}
                        style={{
                          '--node-angle': `${angle}deg`,
                          '--skill-color': skill.color,
                          '--glow-color': skill.glowColor,
                          '--accent-color': skill.accentColor
                        }}
                        onMouseEnter={() => setSelectedSkill(skill)}
                        onClick={() => setSelectedSkill(skill)}
                      >
                        <div className="skill-planet-capsule">
                          <div className="planet-aura" />
                          <div className="planet-disc">
                            <div className="planet-icon-inner">
                              {skill.icon}
                            </div>
                          </div>
                          <span className="planet-label">{skill.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Constellation Grid View */
            <div className="cinematic-grid-container">
              <div className="grid-cards-layout">
                {filteredSkills.map(skill => {
                  const isSelected = currentSkill?.id === skill.id;
                  return (
                    <div
                      key={skill.id}
                      className={`cinematic-grid-card ${isSelected ? 'is-selected' : ''}`}
                      style={{
                        '--skill-color': skill.color,
                        '--glow-color': skill.glowColor,
                        '--accent-color': skill.accentColor
                      }}
                      onMouseEnter={() => setSelectedSkill(skill)}
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <div className="grid-card-icon-wrap">
                        <div className="grid-icon-glow" />
                        {skill.icon}
                      </div>
                      <div className="grid-card-meta">
                        <span className="grid-card-cat">{skill.category}</span>
                        <strong className="grid-card-title">{skill.name}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Holographic HUD Side Panel */}
        <div className="cosmos-right-pane">
          {currentSkill ? (
            <div 
              className="cosmos-hologram-hud-right"
              style={{
                '--hud-glow': currentSkill.glowColor,
                '--hud-accent': currentSkill.accentColor || currentSkill.color
              }}
            >
              <div className="hud-corner-brackets" />
              <div className="hud-telemetry-strip">
                <span className="telemetry-tag">TELEMETRY // ACTIVE</span>
                <span className="orbit-level-badge">ORBIT TIER 0{currentSkill.orbit}</span>
              </div>

              <div className="hud-hero-section">
                <div className="hud-icon-badge-large">
                  <div className="badge-glow-ring" />
                  {currentSkill.icon}
                </div>
                <div className="hud-title-block">
                  <span className="hud-cat-tag">{currentSkill.category}</span>
                  <h3>{currentSkill.name}</h3>
                </div>
              </div>

              <div className="hud-info-body">
                <p className="hud-desc-text">{currentSkill.description}</p>
                <div className="hud-stat-matrix">
                  <div className="hud-stat-cell">
                    <span className="stat-label">CATEGORY</span>
                    <strong className="stat-val">{currentSkill.category}</strong>
                  </div>
                  <div className="hud-stat-cell">
                    <span className="stat-label">GRAVITATIONAL TIER</span>
                    <strong className="stat-val">
                      {currentSkill.orbit === 1 ? 'Core AI Nucleus' : currentSkill.orbit === 2 ? 'AI Tools & Web' : 'Dev Foundations'}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="hud-footer">
                <div className="hud-signal-indicator">
                  <span className="hud-status-dot" />
                  <span className="hud-status-text">NODE LOCKED // {currentSkill.name.toUpperCase()}</span>
                </div>
                <button className="hud-reset-btn" onClick={() => setSelectedSkill(null)} type="button">RESET FOCUS</button>
              </div>
            </div>
          ) : (
            <div className="cosmos-observatory-panel">
              <div className="hud-corner-brackets" />
              <div className="observatory-header">
                <span className="telemetry-tag">OBSERVATORY // ONLINE</span>
                <h3>AI / ML Solar Galaxy</h3>
              </div>
              <p className="observatory-lead">
                Hover your cursor over any celestial tech node on the left to inspect its live system telemetry, architecture, and role in AI/ML engineering.
              </p>
              
              <div className="observatory-stats-grid">
                <div className="obs-stat-card">
                  <strong>24</strong>
                  <span>Active Nodes</span>
                </div>
                <div className="obs-stat-card">
                  <strong>3</strong>
                  <span>Orbital Tiers</span>
                </div>
                <div className="obs-stat-card">
                  <strong>8</strong>
                  <span>Domains</span>
                </div>
              </div>

              <div className="observatory-legend">
                <div className="legend-row">
                  <span className="legend-dot tier-1" />
                  <span>Inner Core: AI, Machine Learning & LLMs</span>
                </div>
                <div className="legend-row">
                  <span className="legend-dot tier-2" />
                  <span>Middle Orbit: AI Tools, Copilot & Full-Stack</span>
                </div>
                <div className="legend-row">
                  <span className="legend-dot tier-3" />
                  <span>Outer Orbit: Dev Tools, Systems & Foundations</span>
                </div>
              </div>

              <div className="observatory-hint-strip">
                <span className="hint-radar-pulse" />
                <span>SCANNING ORBITAL TRAJECTORIES...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
