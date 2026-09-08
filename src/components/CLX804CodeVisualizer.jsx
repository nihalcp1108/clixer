import React, { useState } from 'react';
import { Layers, Palette, Copy, Check, Code, Eye, RefreshCw, Sparkles, Download } from 'lucide-react';

export default function CLX804CodeVisualizer({ product }) {
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'svg-code' | 'react-code'
  const [finish, setFinish] = useState('satin'); // 'satin' | 'gold' | 'black'
  const [tileType, setTileType] = useState('steel'); // 'steel' | 'marble' | 'slate' | 'wood'
  const [trayOffset, setTrayOffset] = useState(85); // 0 to 100%
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [copied, setCopied] = useState(false);

  // Dynamic colors based on selected finish
  const finishConfigs = {
    satin: {
      label: 'Satin Stainless (AISI 304)',
      bgStart: '#e2e8f0',
      bgMid: '#cbd5e1',
      bgEnd: '#94a3b8',
      topGrad: ['#ffffff', '#cbd5e1', '#94a3b8', '#f8fafc'],
      wallGrad: ['#94a3b8', '#475569', '#334155'],
      innerGrad: ['#cbd5e1', '#64748b', '#334155'],
      stroke: '#94a3b8',
      accent: '#38bdf8'
    },
    gold: {
      label: 'Gold / Rose Gold PVD',
      bgStart: '#fef08a',
      bgMid: '#eab308',
      bgEnd: '#a16207',
      topGrad: ['#fef9c3', '#fde047', '#eab308', '#ca8a04'],
      wallGrad: ['#ca8a04', '#854d0e', '#713f12'],
      innerGrad: ['#eab308', '#a16207', '#713f12'],
      stroke: '#ca8a04',
      accent: '#eab308'
    },
    black: {
      label: 'Matt Black Finish',
      bgStart: '#475569',
      bgMid: '#1e293b',
      bgEnd: '#0f172a',
      topGrad: ['#475569', '#334155', '#1e293b', '#0f172a'],
      wallGrad: ['#1e293b', '#0f172a', '#020617'],
      innerGrad: ['#334155', '#1e293b', '#090d16'],
      stroke: '#334155',
      accent: '#94a3b8'
    }
  };

  const currentFinish = finishConfigs[finish];

  // Calculated tray position offset based on slider
  // 0% = fully inserted at (0, 0)
  // 100% = original photo position (-220, -85)
  const offsetX = (trayOffset / 100) * -220;
  const offsetY = (trayOffset / 100) * -85;

  // Generate pure raw SVG string for copying
  const rawSvgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#2c3036" />
      <stop offset="60%" stop-color="#1a1c20" />
      <stop offset="100%" stop-color="#0f1012" />
    </radialGradient>

    <!-- Metallic Base Top Face Gradient -->
    <linearGradient id="metalTop_${finish}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${currentFinish.topGrad[0]}" />
      <stop offset="35%" stop-color="${currentFinish.topGrad[1]}" />
      <stop offset="70%" stop-color="${currentFinish.topGrad[2]}" />
      <stop offset="100%" stop-color="${currentFinish.topGrad[3]}" />
    </linearGradient>

    <!-- Wall Front Gradient -->
    <linearGradient id="metalWallFront_${finish}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${currentFinish.wallGrad[0]}" />
      <stop offset="50%" stop-color="${currentFinish.wallGrad[1]}" />
      <stop offset="100%" stop-color="${currentFinish.wallGrad[2]}" />
    </linearGradient>

    <!-- Cup Basin Depth Radial Gradient -->
    <radialGradient id="cupDepth" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="60%" stop-color="#0f172a" />
      <stop offset="85%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="${currentFinish.wallGrad[0]}" />
    </radialGradient>

    <!-- Drop Shadow Filter for Tray -->
    <filter id="trayShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="-18" dy="28" stdDeviation="16" flood-color="#000000" flood-opacity="0.75" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1000" height="700" rx="16" fill="url(#bgGrad)" />

  <!-- Grid texture accent -->
  <g opacity="0.04" stroke="#ffffff" stroke-width="1">
    <path d="M0 100 H1000 M0 200 H1000 M0 300 H1000 M0 400 H1000 M0 500 H1000 M0 600 H1000" />
    <path d="M100 0 V700 M200 0 V700 M300 0 V700 M400 0 V700 M500 0 V700 M600 0 V700 M700 0 V700 M800 0 V700 M900 0 V700" />
  </g>

  <!-- LOWER BASE ASSEMBLY (CLX 804 OUTER FRAME & STRAINER BOWL) -->
  <g id="lowerBaseFrame">
    <!-- Bottom Outlet Drain Collar Cylinder (Depth extension) -->
    <ellipse cx="660" cy="545" rx="110" ry="45" fill="#090d16" stroke="#334155" stroke-width="3" />
    <path d="M550 545 C550 585 770 585 770 545 V560 C770 600 550 600 550 560 Z" fill="url(#metalWallFront_${finish})" opacity="0.9" />

    <!-- Outer Frame Vertical Front Wall -->
    <path d="M410 495 L880 485 V520 C880 535 865 540 850 540 L440 550 C420 550 410 540 410 520 Z" fill="url(#metalWallFront_${finish})" />

    <!-- Outer Frame Left Wall -->
    <path d="M370 280 L410 495 V535 L370 315 Z" fill="url(#metalWallFront_${finish})" opacity="0.8" />

    <!-- Outer Frame Top Face Rim (Main Square Frame) -->
    <path d="M370 280 C370 270 385 265 400 265 L850 255 C865 255 880 265 880 275 L920 470 C925 480 910 490 895 490 L440 500 C425 500 410 490 410 480 Z" fill="url(#metalTop_${finish})" stroke="${currentFinish.stroke}" stroke-width="1.5" />

    <!-- Inner Recess Walls (Deep draw inner cavity) -->
    <path d="M400 295 L845 285 L880 465 L435 475 Z" fill="#0f172a" />
    <path d="M400 295 L845 285 L845 305 L400 315 Z" fill="url(#metalWallFront_${finish})" opacity="0.6" />
    <path d="M400 295 L435 475 L435 490 L400 315 Z" fill="url(#metalWallFront_${finish})" opacity="0.4" />

    <!-- Top-Right Alignment Notch Recess (Exact to Photo) -->
    <path d="M790 283 C790 278 810 278 810 283 L810 295 L790 295 Z" fill="#1e293b" stroke="#64748b" stroke-width="1" />

    <!-- Sunken Circular Bowl Basin (Center Drain Cup) -->
    <ellipse cx="655" cy="385" rx="175" ry="95" fill="url(#cupDepth)" stroke="${currentFinish.stroke}" stroke-width="2" />
    
    <!-- Concentric Ridge Ring Step -->
    <ellipse cx="655" cy="385" rx="145" ry="78" fill="none" stroke="#475569" stroke-width="3" opacity="0.7" />
    <ellipse cx="655" cy="385" rx="125" ry="68" fill="none" stroke="${currentFinish.stroke}" stroke-width="1.5" opacity="0.5" />

    <!-- STRAINER PLATE WITH FLORAL PETAL SLOTS & CENTER HOLES -->
    <g id="floralStrainer">
      <!-- Strainer Plate Base Metal Disk -->
      <ellipse cx="655" cy="385" rx="105" ry="56" fill="url(#metalTop_${finish})" stroke="#475569" stroke-width="1.5" />
      
      <!-- Center Hole Circle Ring -->
      <circle cx="655" cy="385" r="4" fill="#020617" />
      <circle cx="643" cy="382" r="2.5" fill="#020617" />
      <circle cx="667" cy="388" r="2.5" fill="#020617" />
      <circle cx="652" cy="377" r="2.5" fill="#020617" />
      <circle cx="658" cy="393" r="2.5" fill="#020617" />

      <!-- 8 Radial Teardrop Floral Petal Drain Slots -->
      <!-- Petal 1 (Top) -->
      <path d="M655 352 C650 362 650 370 655 372 C660 370 660 362 655 352 Z" fill="#020617" />
      <!-- Petal 2 (Bottom) -->
      <path d="M655 418 C650 408 650 400 655 398 C660 400 660 408 655 418 Z" fill="#020617" />
      <!-- Petal 3 (Right) -->
      <path d="M710 385 C695 380 682 380 680 385 C682 390 695 390 710 385 Z" fill="#020617" />
      <!-- Petal 4 (Left) -->
      <path d="M600 385 C615 380 628 380 630 385 C628 390 615 390 600 385 Z" fill="#020617" />
      <!-- Petals 5, 6, 7, 8 (Diagonals) -->
      <path d="M692 360 C680 364 670 370 671 374 C675 375 683 371 692 360 Z" fill="#020617" />
      <path d="M618 410 C630 406 640 400 639 396 C635 395 627 399 618 410 Z" fill="#020617" />
      <path d="M692 410 C683 399 675 395 671 396 C670 400 680 406 692 410 Z" fill="#020617" />
      <path d="M618 360 C627 371 635 375 639 374 C640 370 630 364 618 360 Z" fill="#020617" />
    </g>
  </g>

  <!-- SHIFTED TILE INSERT TRAY ASSEMBLY (TOP-LEFT SLIDABLE) -->
  <g id="tileInsertTray" transform="translate(${offsetX}, ${offsetY})" filter="url(#trayShadow)">
    <!-- Tray Box Outer Front Wall -->
    <path d="M160 450 L630 440 V465 C630 472 620 475 605 475 L180 485 C165 485 160 478 160 465 Z" fill="url(#metalWallFront_${finish})" />

    <!-- Tray Box Outer Left Wall -->
    <path d="M125 240 L160 450 V485 L125 270 Z" fill="url(#metalWallFront_${finish})" opacity="0.85" />

    <!-- Tray Top Surface Frame (Rim) -->
    <path d="M125 240 C125 230 140 225 155 225 L600 215 C615 215 630 225 630 235 L665 430 C670 440 655 448 640 448 L180 458 C165 458 150 448 150 438 Z" fill="url(#metalTop_${finish})" stroke="${currentFinish.stroke}" stroke-width="1.5" />

    <!-- Inner Tray Bed Cavity / Tile Inset Bed -->
    <g id="trayInfillBed">
      ${
        tileType === 'steel'
          ? `<path d="M145 250 L590 240 L620 425 L175 435 Z" fill="url(#metalTop_${finish})" stroke="#64748b" stroke-width="1" />`
          : tileType === 'marble'
          ? `<g>
              <path d="M145 250 L590 240 L620 425 L175 435 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
              <!-- Marble Veins -->
              <path d="M180 260 Q300 320 400 300 T580 390" stroke="#94a3b8" stroke-width="2.5" fill="none" opacity="0.4" />
              <path d="M220 420 Q350 360 450 400 T600 260" stroke="#cbd5e1" stroke-width="2" fill="none" opacity="0.5" />
            </g>`
          : tileType === 'slate'
          ? `<g>
              <path d="M145 250 L590 240 L620 425 L175 435 Z" fill="#1e293b" stroke="#334155" stroke-width="1" />
              <path d="M160 270 L580 255 M170 340 L600 325 M180 410 L610 395" stroke="#475569" stroke-width="1" opacity="0.3" />
            </g>`
          : `<g>
              <!-- Wood Grain -->
              <path d="M145 250 L590 240 L620 425 L175 435 Z" fill="#78350f" stroke="#451a03" stroke-width="1" />
              <path d="M150 280 C300 270 450 285 585 270" stroke="#92400e" stroke-width="3" fill="none" opacity="0.6" />
              <path d="M160 350 C310 340 460 355 595 340" stroke="#451a03" stroke-width="2" fill="none" opacity="0.7" />
            </g>`
      }

      <!-- Inner Tray Box Wall Thickness / Shadows -->
      <path d="M145 250 L590 240 L590 248 L145 258 Z" fill="#0f172a" opacity="0.5" />
      <path d="M145 250 L175 435 L170 435 L140 250 Z" fill="#0f172a" opacity="0.4" />
    </g>

    <!-- Oval Finger Lifting Notch on Top Side Wall (Exact to Photo) -->
    <ellipse cx="370" cy="232" rx="22" ry="7" fill="#0f172a" stroke="#64748b" stroke-width="1" />
    <ellipse cx="370" cy="232" rx="18" ry="5" fill="#020617" />

    <!-- Oval Finger Lifting Notch on Bottom Side Wall (Exact to Photo) -->
    <ellipse cx="395" cy="448" rx="22" ry="7" fill="#0f172a" stroke="#64748b" stroke-width="1" />
    <ellipse cx="395" cy="448" rx="18" ry="5" fill="#020617" />
  </g>

  <!-- BRAND & SPECIFICATION OVERLAY BADGES -->
  <g id="brandOverlays">
    <rect x="35" y="35" width="230" height="90" rx="10" fill="#0f172a" fill-opacity="0.85" stroke="#334155" stroke-width="1.5" />
    <text x="55" y="65" font-family="sans-serif" font-weight="900" font-size="20" fill="#ffffff" letter-spacing="1">CLX 804</text>
    <text x="55" y="86" font-family="sans-serif" font-weight="700" font-size="12" fill="${currentFinish.accent}" letter-spacing="2">PREMIUM TILE INSERT</text>
    <text x="55" y="106" font-family="sans-serif" font-weight="500" font-size="11" fill="#94a3b8">AISI 304 STAINLESS STEEL</text>
  </g>
</svg>`;

  // React Component template code for export
  const reactComponentCode = `import React from 'react';

// CLX 804 Premium Tile Insert Drain Vector Component
export default function CLX804TileInsertDrain({ finish = 'satin', size = 600 }) {
  return (
    <div style={{ width: size, height: 'auto', display: 'inline-block' }}>
      ${rawSvgCode}
    </div>
  );
}`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([rawSvgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CLX-804-Premium-Tile-Insert-Drain.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="code-visualizer-container" style={{
      background: 'var(--bg-card, #111318)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      {/* Header Bar */}
      <div style={{
        padding: '1.25rem 1.5rem',
        background: 'linear-gradient(90deg, #1e2430 0%, #151821 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'var(--primary, #0284c7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>
            <Code size={20} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '800', color: '#fff', letterSpacing: '0.5px' }}>
              CODE GENERATOR: CLX 804 Premium Tile Insert Drain
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Photorealistic Vector & Interactive SVG Representation
            </span>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.4)', padding: '4px', borderRadius: '8px', gap: '4px' }}>
          <button
            onClick={() => setActiveTab('visual')}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: activeTab === 'visual' ? 'var(--primary, #0284c7)' : 'transparent',
              color: activeTab === 'visual' ? '#fff' : '#94a3b8',
              transition: 'all 0.2s ease'
            }}
          >
            <Eye size={14} /> Interactive View
          </button>
          <button
            onClick={() => setActiveTab('svg-code')}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: activeTab === 'svg-code' ? 'var(--primary, #0284c7)' : 'transparent',
              color: activeTab === 'svg-code' ? '#fff' : '#94a3b8',
              transition: 'all 0.2s ease'
            }}
          >
            <Code size={14} /> SVG Code
          </button>
          <button
            onClick={() => setActiveTab('react-code')}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: activeTab === 'react-code' ? 'var(--primary, #0284c7)' : 'transparent',
              color: activeTab === 'react-code' ? '#fff' : '#94a3b8',
              transition: 'all 0.2s ease'
            }}
          >
            <Sparkles size={14} /> React Component
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      {activeTab === 'visual' ? (
        <div>
          {/* Controls Bar */}
          <div style={{
            padding: '1rem 1.5rem',
            background: 'rgba(255,255,255,0.03)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            {/* Finish Switcher */}
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                Finish Variant:
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { id: 'satin', label: 'Satin AISI 304', color: '#cbd5e1' },
                  { id: 'gold', label: 'Gold / Rose Gold', color: '#eab308' },
                  { id: 'black', label: 'Matt Black', color: '#334155' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFinish(f.id)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      border: finish === f.id ? `2px solid ${f.color}` : '1px solid rgba(255,255,255,0.15)',
                      background: finish === f.id ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.3)',
                      color: '#fff',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: f.color, display: 'inline-block' }} />
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tile Infill Switcher */}
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                Tile Infill Mode:
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { id: 'steel', label: 'Original Steel Tray' },
                  { id: 'marble', label: 'White Marble' },
                  { id: 'slate', label: 'Dark Slate' },
                  { id: 'wood', label: 'Teak Wood' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTileType(t.id)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      border: tileType === t.id ? '2px solid var(--primary, #0284c7)' : '1px solid rgba(255,255,255,0.15)',
                      background: tileType === t.id ? 'rgba(2, 132, 199, 0.2)' : 'rgba(0,0,0,0.3)',
                      color: tileType === t.id ? '#38bdf8' : '#cbd5e1',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tray Slide Position Slider */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700', marginBottom: '0.4rem' }}>
                <span>TRAY POSITION:</span>
                <span style={{ color: '#38bdf8' }}>{trayOffset}% ({trayOffset === 0 ? 'Inserted' : trayOffset === 85 ? 'As Photographed' : 'Shifted'})</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={trayOffset}
                onChange={(e) => setTrayOffset(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary, #0284c7)', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Interactive SVG Canvas Display */}
          <div style={{ padding: '1.5rem', textAlign: 'center', background: '#0a0b0d', position: 'relative' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.8))' }}
              dangerouslySetInnerHTML={{ __html: rawSvgCode }}
            />

            {/* Floating Action Bar */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              right: '2rem',
              display: 'flex',
              gap: '0.75rem'
            }}>
              <button
                onClick={handleDownloadSvg}
                style={{
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#0284c7',
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.4)'
                }}
              >
                <Download size={16} /> Download .SVG
              </button>
              <button
                onClick={() => handleCopy(rawSvgCode)}
                style={{
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backdropFilter: 'blur(8px)'
                }}
              >
                {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                {copied ? 'Copied SVG Code!' : 'Copy Code'}
              </button>
            </div>
          </div>
        </div>
      ) : activeTab === 'svg-code' ? (
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1.5rem',
            zIndex: 10
          }}>
            <button
              onClick={() => handleCopy(rawSvgCode)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                background: 'var(--primary, #0284c7)',
                color: '#fff',
                fontWeight: '700',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy SVG Code'}
            </button>
          </div>
          <pre style={{
            margin: 0,
            padding: '1.5rem',
            background: '#090a0f',
            color: '#38bdf8',
            fontSize: '0.82rem',
            maxHeight: '550px',
            overflowY: 'auto',
            fontFamily: 'monospace',
            lineHeight: '1.5'
          }}>
            <code>{rawSvgCode}</code>
          </pre>
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1.5rem',
            zIndex: 10
          }}>
            <button
              onClick={() => handleCopy(reactComponentCode)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: 'none',
                background: 'var(--primary, #0284c7)',
                color: '#fff',
                fontWeight: '700',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied Component!' : 'Copy React Code'}
            </button>
          </div>
          <pre style={{
            margin: 0,
            padding: '1.5rem',
            background: '#090a0f',
            color: '#a7f3d0',
            fontSize: '0.82rem',
            maxHeight: '550px',
            overflowY: 'auto',
            fontFamily: 'monospace',
            lineHeight: '1.5'
          }}>
            <code>{reactComponentCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
