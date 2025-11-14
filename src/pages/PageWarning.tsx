import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageWarning(): JSX.Element {
  const navigate = useNavigate();

  return (
    <main aria-live="polite" className="pw-root">
      <style>{`
          html, body {
              overflow: hidden;
              padding: 0;
              margin: 0;
            }
        :root {
          --bg: #000;
          --accent: #3eff56; 
          --muted: rgba(255,255,255,0.65);
        }

        .pw-root {
          height: 100svh;
          box-sizing:border-box;
          width: 100dvw;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          color: var(--muted);
          overflow: hidden;
          font-family: 'Inconsolata', 'Courier New', monospace;
          padding: 40px;  
        }

        .pw-bglogo {
          position: absolute;
          inset: 0;
          display: block;
          width: 100dvw;
          height: auto;
          object-fit: contain;
          opacity: 0.15;
          transform: translate(-26%, 4%) scale(1.1);
          filter: saturate(0.5) contrast(0.9);
          pointer-events: none;
          z-index: 0;
        }

        .pw-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          text-align: left;
        }

        .pw-headline {
          color: var(--accent);
          font-size: clamp(28px, 9vw, 120px);
          line-height: 0.9;
          margin: 0 0 12px 0;
          font-weight: 900;
          letter-spacing: -1px;
          text-transform: uppercase;
          text-shadow:
            0 0 8px rgba(62,255,86,0.28),
            0 6px 30px rgba(0,0,0,0.8);
          animation: flicker 3s infinite linear;
        }

        .pw-headline::before,
        .pw-headline::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          clip-path: rect(0, 9999px, 0, 0);
          opacity: 0.6;
          transform: translateZ(0);
        }
        .pw-headline::before {
          color: rgba(62,255,86,0.7);
          animation: glitchTop 2.7s infinite linear;
          mix-blend-mode: screen;
        }
        .pw-headline::after {
          color: rgba(62,255,86,0.4);
          animation: glitchBottom 3.1s infinite linear;
          mix-blend-mode: lighten;
        }

        .pw-sub {
          color: #fff;
          font-size: clamp(12px, 2.6vw, 20px);
          margin: 6px 0 18px 0;
          opacity: 0.9;
        }

        .pw-paragraph {
          color: #ddd;
          max-width: 900px;
          font-size: clamp(13px, 1.8vw, 18px);
          line-height: 1.6;
          margin: 14px 0;
        }

        .pw-parenthesis {
          color: #9f9f9f;
          font-style: italic;
          margin-top: 8px;
        }

        .pw-actions {
          margin-top: 28px;
          display: flex;
          gap: 12px;
        }

        .pw-btn {
          background: transparent;
          color: var(--muted);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
        }

        .pw-btn.primary {
          background: var(--accent);
          color: #111;
          border: none;
          font-weight: 700;
          box-shadow: 0 6px 30px rgba(62,255,86,0.12);
        }

        @keyframes flicker {
          0% { opacity: 1; filter: brightness(1); }
          5% { opacity: 0.88; filter: brightness(0.85); }
          7% { opacity: 1; filter: brightness(1.02); transform: translateY(-1px); }
          9% { opacity: 0.92; }
          12% { opacity: 1; }
          100% { opacity: 1; }
        }

        @keyframes glitchTop {
          0% { clip-path: inset(0 0 90% 0); transform: translate(-2px,-1px) skewX(-2deg); opacity: 0.7;}
          10% { clip-path: inset(0 0 40% 0); transform: translate(0px,0px) skewX(0deg); opacity: 0.45;}
          20% { clip-path: inset(0 0 75% 0); transform: translate(-1px,0px) skewX(1deg); opacity: 0.6;}
          100% { clip-path: inset(0 0 90% 0); transform: translate(0,0); opacity: 0.6;}
        }

        @keyframes glitchBottom {
          0% { clip-path: inset(70% 0 0 0); transform: translate(2px,1px) skewX(2deg); opacity: 0.6;}
          15% { clip-path: inset(35% 0 0 0); transform: translate(-1px,0px) skewX(-1deg); opacity: 0.5;}
          30% { clip-path: inset(60% 0 0 0); transform: translate(0,0); opacity: 0.6;}
          100% { clip-path: inset(70% 0 0 0); transform: translate(0,0); opacity: 0.6;}
        }
      `}</style>

      <img
        className="pw-bglogo"
        src="https://yt3.googleusercontent.com/ytc/AIdro_kNxCzmKdVsP-YU2agg348XdvvHt9XzgVSQujyKx4IELPQ=s900-c-k-c0x00ffffff-no-rj"
        alt=""
        aria-hidden="true"
      />

      <div className="pw-content">
        <h1 className="pw-headline" data-text="SEUS DADOS FORAM ROUBADOS.">
          SEUS DADOS FORAM ROUBADOS.
        </h1>

        <div className="pw-sub">(Ou seriam, se isso fosse um golpe de verdade)</div>

        <p className="pw-paragraph">
          Isso é um exemplo de <em>phishing</em>, onde um site falso imita um verdadeiro para obter credenciais.
        </p>

        <p className="pw-paragraph pw-parenthesis">
          Na aula veremos como identificar e se proteger contra isso.
        </p>

        <div className="pw-actions">
          <button className="pw-btn" onClick={() => navigate(-1)}>Voltar</button>
          <button className="pw-btn primary" onClick={() => navigate("/")}>Ir para o início</button>
        </div>
      </div>
    </main>
  );
}
