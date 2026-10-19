'use client';

import { useMemo, useState } from "react";
import { ShieldCheck, Shield, Globe2, MapPin, ChevronDown, Zap, LockKeyhole, Activity, Info, Power, CheckCircle2 } from "lucide-react";

type LocationOption = {
  id: string; city: string; country: string; flag: string; region: string;
  ip: string; latency: number; x: number; y: number;
};

const locations: LocationOption[] = [
  { id: "br-sp", city: "São Paulo", country: "Brasil", flag: "🇧🇷", region: "América do Sul", ip: "203.0.113.42", latency: 8, x: 36, y: 69 },
  { id: "us-ny", city: "Nova York", country: "Estados Unidos", flag: "🇺🇸", region: "América do Norte", ip: "198.51.100.27", latency: 112, x: 28, y: 34 },
  { id: "uk-lon", city: "Londres", country: "Reino Unido", flag: "🇬🇧", region: "Europa", ip: "192.0.2.81", latency: 184, x: 51, y: 28 },
  { id: "jp-tok", city: "Tóquio", country: "Japão", flag: "🇯🇵", region: "Ásia", ip: "198.51.100.64", latency: 246, x: 82, y: 39 },
  { id: "de-fra", city: "Frankfurt", country: "Alemanha", flag: "🇩🇪", region: "Europa", ip: "203.0.113.88", latency: 171, x: 55, y: 31 },
  { id: "ca-tor", city: "Toronto", country: "Canadá", flag: "🇨🇦", region: "América do Norte", ip: "192.0.2.146", latency: 128, x: 29, y: 30 }
];

export default function Home() {
  const [selectedId, setSelectedId] = useState("us-ny");
  const [connected, setConnected] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const selected = useMemo(() => locations.find((l) => l.id === selectedId)!, [selectedId]);

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark"><ShieldCheck size={21} /></span><span>location<span className="brand-light">lab</span><small>VPN SIMULATOR</small></span></a>
        <div className="demo-pill"><span className="pulse" /> AMBIENTE DE DEMONSTRAÇÃO</div>
      </header>

      <section className="intro">
        <div className="eyebrow"><span className="eyebrow-line" /> LABORATÓRIO DE REDE</div>
        <h1>Sua localização.<br /><span>Do seu jeito.</span></h1>
        <p>Explore como uma VPN apresenta uma localização virtual. Selecione um destino e veja a interface reagir em tempo real.</p>
      </section>

      <section className="address-card">
        <div className="address-icon"><MapPin size={20} /></div>
        <div className="address-content">
          <div className="label">ENDEREÇO DE REFERÊNCIA</div>
          <h2>Universidade Cruzeiro do Sul — Campus Paulista</h2>
          <p>Av. Paulista, 1415 - Bela Vista, São Paulo - SP, 01311-925</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Av.+Paulista%2C+1415+-+Bela+Vista%2C+S%C3%A3o+Paulo+-+SP%2C+01311-925" target="_blank" rel="noreferrer">Abrir endereço no Google Maps <span>↗</span></a>
        </div>
      </section>

      <section className="dashboard">
        <div className="main-card">
          <div className="card-head">
            <div><div className="label">CONEXÃO VIRTUAL</div><h2>{connected ? "Simulação ativa" : "Pronto para conectar"}</h2></div>
            <div className={`status ${connected ? "online" : ""}`}><span />{connected ? "CONECTADO (SIMULADO)" : "DESCONECTADO"}</div>
          </div>

          <div className={`connection-orb ${connected ? "is-connected" : ""}`}>
            <div className="orb-ring ring-one" /><div className="orb-ring ring-two" /><div className="orb-core">{connected ? <ShieldCheck size={42} /> : <Shield size={42} />}</div>
            <div className="orb-caption">{connected ? "TÚNEL SIMULADO ATIVO" : "PRIVACIDADE EM DEMONSTRAÇÃO"}</div>
          </div>

          <div className="location-select-wrap">
            <label className="label" htmlFor="location-button">LOCALIZAÇÃO VIRTUAL</label>
            <button id="location-button" className="location-select" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
              <span className="flag">{selected.flag}</span><span className="location-name"><strong>{selected.city}</strong><small>{selected.country} · {selected.region}</small></span><ChevronDown className={menuOpen ? "rotate" : ""} size={19} />
            </button>
            {menuOpen && <div className="location-menu">{locations.map((loc) => <button key={loc.id} className={`location-option ${loc.id === selectedId ? "chosen" : ""}`} onClick={() => { setSelectedId(loc.id); setMenuOpen(false); setConnected(false); }}><span className="flag">{loc.flag}</span><span><strong>{loc.city}</strong><small>{loc.country}</small></span><span className="latency">{loc.latency} ms</span></button>)}</div>}
          </div>

          <button className={`connect-button ${connected ? "disconnect" : ""}`} onClick={() => setConnected(!connected)}>
            <Power size={18} />{connected ? "Desconectar simulação" : "Conectar simulação"}
          </button>
          <p className="button-note"><Info size={14} /> Não altera seu IP real nem roteia tráfego.</p>
        </div>

        <div className="side-column">
          <div className="map-card">
            <div className="card-head map-head"><div><div className="label">MAPA DE DESTINOS</div><h3>Escolha seu ponto</h3></div><Globe2 size={20} className="muted-icon" /></div>
            <div className="map-art" aria-label={`Mapa ilustrativo com destino em ${selected.city}`}>
              <svg className="world-map" viewBox="0 0 600 300" role="img" aria-label="Mapa mundial ilustrativo">
                <defs><pattern id="dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="currentColor" opacity=".26" /></pattern></defs>
                <rect width="600" height="300" fill="url(#dots)" />
                <g fill="currentColor" opacity=".13">
                  <path d="M48 64 L80 38 132 31 159 48 193 50 212 76 187 96 172 125 148 132 139 166 112 174 91 147 73 122 56 102Z"/>
                  <path d="M158 168 L189 181 205 216 195 247 179 278 164 246 154 212 141 187Z"/>
                  <path d="M275 65 L304 49 339 54 351 69 335 84 309 86 295 104 277 95Z"/>
                  <path d="M300 104 L337 93 368 113 373 147 354 177 335 213 313 190 304 155 287 131Z"/>
                  <path d="M348 61 L387 39 445 44 486 65 526 86 542 116 513 131 486 113 458 133 423 119 397 94 369 93Z"/>
                  <path d="M469 168 L507 157 539 175 531 205 502 218 481 200Z"/>
                </g>
                <path d={`M${selected.x * 6} ${selected.y * 3} Q300 40 ${selected.x * 6} ${selected.y * 3}`} fill="none" stroke="#a99bff" strokeWidth="2" strokeDasharray="4 5" opacity=".8"/>
              </svg>
              <div className="map-grid" />
              <div className="map-pin" style={{ left: `${selected.x}%`, top: `${selected.y}%` }}><span className="pin-wave" /><span className="pin-dot"><MapPin size={17} fill="currentColor" /></span></div>
              <div className="map-tooltip" style={{ left: `${Math.min(Math.max(selected.x, 18), 76)}%`, top: `${Math.max(selected.y - 15, 9)}%` }}><span>{selected.flag}</span><strong>{selected.city}</strong><small>{selected.country}</small></div>
              <div className="map-label">MAPA ESQUEMÁTICO · NÃO É GPS</div>
            </div>
            <div className="map-footer"><span><span className="legend-dot" /> Destino selecionado</span><span>{selected.region}</span></div>
          </div>

          <div className="stats-card">
            <div className="label">DADOS DA SIMULAÇÃO</div>
            <div className="stat-row"><span className="stat-icon"><Globe2 size={17}/></span><span className="stat-label">IP de demonstração</span><strong>{selected.ip}</strong></div>
            <div className="stat-row"><span className="stat-icon"><Zap size={17}/></span><span className="stat-label">Latência ilustrativa</span><strong>{selected.latency} ms</strong></div>
            <div className="stat-row"><span className="stat-icon"><LockKeyhole size={17}/></span><span className="stat-label">Criptografia</span><strong>Não aplicada</strong></div>
            <div className="stat-row"><span className="stat-icon"><Activity size={17}/></span><span className="stat-label">Estado</span><strong className={connected ? "text-green" : ""}>{connected ? "Ativo (visual)" : "Aguardando"}</strong></div>
          </div>
        </div>
      </section>

      <section className="learn-card">
        <div className="learn-icon"><Info size={20}/></div>
        <div className="learn-copy"><h3>O que este laboratório demonstra?</h3><p>A seleção altera os dados exibidos na interface. Os IPs usam faixas reservadas para documentação e são fictícios. A localização do mapa é ilustrativa; nenhum dado de GPS é solicitado ou enviado.</p>
          {showInfo && <div className="extra-info"><strong>Para evoluir para uma VPN real:</strong> contratar ou administrar um servidor VPN, configurar WireGuard/OpenVPN, autenticar o usuário e conectar um cliente de sistema operacional. A interface web pode gerenciar a experiência, mas não substitui o túnel de rede.</div>}
          <button className="learn-link" onClick={() => setShowInfo(!showInfo)}>{showInfo ? "Mostrar menos" : "Como funcionaria uma VPN real?"} <span>↗</span></button>
        </div>
        <CheckCircle2 className="learn-check" size={21}/>
      </section>

      <footer><span>LOCATIONLAB <b>·</b> PROJETO EDUCATIVO</span><span>Interface demonstrativa · v1.0</span></footer>
    </main>
  );
}
