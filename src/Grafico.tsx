// Figma design: Editor de Estratégias 2.0 — node 406:45061

import React from 'react';
import AIWavyLoader from './components/AIWavyLoader';
import icStatusMercadoDisponivel from './ic-status_mercado-disponível.svg';
import icChartTrading from './ic-chart_trading.svg';
import icConfiguracaoComJanela from './ic-configuração_com_janela.svg';
import icMotionTracker from './ic-motion_tracker.svg';
import icTradePad from './ic-trade_pad.svg';
import icZoomPeriodo from './ic-zoom_período.svg';
import icZoomArea from './ic-zoom_área.svg';
import icZoomMenos from './ic-zoom_menos.svg';
import icZoomMais from './ic-zoom_mais.svg';
import icPressao from './ic-pressão.svg';
import icAgressao from './ic-agressão.svg';
import icCopilotSignals from './ic-copilot_signals.svg';
import icBtc from './ic-BTC.svg';
import icInsideTrack from './ic-inside_track.svg';
import icExibirOn from './ic-exibir_on.svg';
import icIndicadores from './ic-indicadores.svg';
import icAutomatico from './ic-automatico.svg';
import icMatematicaMiniAdicao from './ic-matematica_mini-adicao.svg';
import icTempoMinVerde from './ic-tempo_min_verde.svg';
import icEditar from './ic-editar.svg';
import icFecharPequeno from './ic-fechar_pequeno.svg';
import icMaximizarMini from './ic-maximizar-mini.svg';
import icMinimizarMini from './ic-minimizar-mini.svg';
import icMenuContexto from './ic-menu_contexto.svg';
import icNumero01 from './ic-número_01.svg';
import icChevronPixelCima from './ic-chevron_pixel-cima.svg';
import icGrafico from './ic-gráfico.svg';
import icMais from './ic-mais.svg';
import icChevronDuploInvertido from './ic-chevron_duplo_invertido_mini-vertical.svg';
import icBtnRight from './--- _ btn-right _ ---.svg';
import icResultadoDinheiro from './ic-resultado_dinheiro.svg';
import icResultadoPorcentagem from './ic-resultado_porcentagem-P.svg';
import icSimFrame from './Frame 1.svg';
import icPetr from './ic-PETR.svg';
import icBrBrasil from './ic-BR_Brasil.svg';
import icFechar from './ic-fechar.svg';
import icChevronDuploMini from './ic-chevron_duplo_invertido_mini-vertical.svg';
import icMaisAdicao from './ic-matematica_adicao.svg';
import icProfitAI from './ic-Profit_AI-mensagem_rapida.svg';
import icSendDark from './ic-send_dark.svg';
import icFecharContato from './ic-fechar_contato.svg';
import icLike from './ic-like.svg';
import icDislike from './ic-like-1.svg';
import icNovaMsg from './ic-ai-nova_mensagem.svg';
import icProfitAIChat from './Icones Agentes AI validados 16px.svg';

// ─── Shared inline style helpers ─────────────────────────────────────────────

function Icon16({ src, alt = "" }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} width={16} height={16} style={{ display: "block", flexShrink: 0 }} />;
}

// ─── Icon components ──────────────────────────────────────────────────────────

function IcStatusMercadoDisponivel() { return <Icon16 src={icStatusMercadoDisponivel} />; }
function IcChartTrading() { return <Icon16 src={icChartTrading} />; }
function IcConfiguracaoComJanela() { return <Icon16 src={icConfiguracaoComJanela} />; }
function IcMotionTracker() { return <Icon16 src={icMotionTracker} />; }
function IcTradePad() { return <Icon16 src={icTradePad} />; }
function IcZoomPeriodo() { return <Icon16 src={icZoomPeriodo} />; }
function IcZoomArea() { return <Icon16 src={icZoomArea} />; }
function IcZoomMenos() { return <Icon16 src={icZoomMenos} />; }
function IcZoomMais() { return <Icon16 src={icZoomMais} />; }
function IcPressao() { return <Icon16 src={icPressao} />; }
function IcAgressao() { return <Icon16 src={icAgressao} />; }
function IcCopilotSignals() { return <Icon16 src={icCopilotSignals} />; }
function IcBtc() { return <Icon16 src={icBtc} />; }
function IcInsideTrack() { return <Icon16 src={icInsideTrack} />; }
function IcExibirOn() { return <Icon16 src={icExibirOn} />; }
function IcIndicadores() { return <Icon16 src={icIndicadores} />; }
function IcAutomatico() { return <Icon16 src={icAutomatico} />; }
function IcMatematicaMiniAdicao() { return <Icon16 src={icMatematicaMiniAdicao} />; }
function IcTempoMinVerde() { return <Icon16 src={icTempoMinVerde} />; }
function IcEditar() { return <Icon16 src={icEditar} />; }
function IcFecharPequeno() { return <Icon16 src={icFecharPequeno} />; }
function IcMaximizarMini() { return <Icon16 src={icMaximizarMini} />; }
function IcMinimizarMini() { return <Icon16 src={icMinimizarMini} />; }
function IcMenuContexto() { return <Icon16 src={icMenuContexto} />; }
function IcNumero01() { return <Icon16 src={icNumero01} />; }
function IcChevronPixelCima() { return <Icon16 src={icChevronPixelCima} />; }
function IcGrafico() { return <Icon16 src={icGrafico} />; }

// ─── Toolbar button helper ────────────────────────────────────────────────────

function BtnSelect({ children, active, onClick, onMouseEnter, onMouseLeave }: { children: React.ReactNode; active?: boolean; onClick?: () => void; onMouseEnter?: () => void; onMouseLeave?: () => void }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => {
        setHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onMouseLeave?.();
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        height: 22,
        minWidth: 22,
        padding: "0 3px",
        borderRadius: 4,
        flexShrink: 0,
        position: "relative",
        border: active || hovered ? "1px solid rgba(119,119,119,0.2)" : "1px solid transparent",
        background: active || hovered ? "rgba(102,102,102,0.5)" : "transparent",
        boxSizing: "border-box",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
}

// ─── Candle data structure ────────────────────────────────────────────────────

interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
}

function generateInitialCandles(): Candle[] {
  const candles: Candle[] = [];
  let price = 31.08;
  for (let i = 0; i < 40; i++) {
    const volatility = 0.15;
    const change = (Math.random() - 0.5) * volatility;
    const open = price;
    const close = open + change;
    const high = Math.max(open, close) + Math.random() * 0.05;
    const low = Math.min(open, close) - Math.random() * 0.05;
    candles.push({ open, high, low, close });
    price = close;
  }
  return candles;
}

function generateNewCandle(lastPrice: number): Candle {
  const volatility = 0.15;
  const change = (Math.random() - 0.5) * volatility;
  const open = lastPrice;
  const close = open + change;
  const high = Math.max(open, close) + Math.random() * 0.05;
  const low = Math.min(open, close) - Math.random() * 0.05;
  return { open, high, low, close };
}

// ─── Order book sidebar ───────────────────────────────────────────────────────

interface OrderBookRow {
  quantity: string;
  price: string;
  type: "sell" | "buy" | "current";
}

const orderBookRows: OrderBookRow[] = [
  { quantity: "2.900", price: "31,14", type: "sell" },
  { quantity: "1.500", price: "31,13", type: "sell" },
  { quantity: "3.200", price: "31,12", type: "sell" },
  { quantity: "800",   price: "31,11", type: "sell" },
  { quantity: "5.100", price: "31,10", type: "sell" },
  { quantity: "31,08", price: "31,08", type: "current" },
  { quantity: "4.700", price: "31,07", type: "buy" },
  { quantity: "2.100", price: "31,06", type: "buy" },
  { quantity: "6.300", price: "31,05", type: "buy" },
  { quantity: "1.800", price: "31,04", type: "buy" },
  { quantity: "3.500", price: "31,03", type: "buy" },
];

// ─── Fonts ────────────────────────────────────────────────────────────────────

const fontTahoma: React.CSSProperties = { fontFamily: "'Tahoma', sans-serif", fontSize: 11, lineHeight: "14px", fontStyle: "normal" };
const fontSegoe: React.CSSProperties = { fontFamily: "'Segoe UI', sans-serif" };

// ─── Main Grafico component ───────────────────────────────────────────────────

export default function Grafico() {
  const [showTradingPanel, setShowTradingPanel] = React.useState(true);
  const [showToolbar, setShowToolbar] = React.useState(true);
  const [zoomLevel, setZoomLevel] = React.useState(40);
  const [viewOffset, setViewOffset] = React.useState(0);
  const [renderTick, setRenderTick] = React.useState(0);
  const [timeLabel, setTimeLabel] = React.useState<string>("1m");
  const [secondsUntilUpdate, setSecondsUntilUpdate] = React.useState(60);
  const [showProfitAITooltip, setShowProfitAITooltip] = React.useState(false);
  const [showTradingTooltip, setShowTradingTooltip] = React.useState(false);
  const [tooltipPos, setTooltipPos] = React.useState({ top: 0, left: 0 });
  const [showProfitAIChat, setShowProfitAIChat] = React.useState(false);
  const [isProfitAILoading, setIsProfitAILoading] = React.useState(false);
  const [isPanning, setIsPanning] = React.useState(false);
  const allCandlesRef = React.useRef<Candle[]>(generateInitialCandles());
  const chartRef = React.useRef<HTMLDivElement>(null);
  const profitAIBtnRef = React.useRef<HTMLDivElement>(null);
  const panStartRef = React.useRef(0);

  const visibleCandles = React.useMemo(() => {
    const all = allCandlesRef.current;
    const end = all.length - viewOffset;
    const start = Math.max(0, end - zoomLevel);
    return all.slice(start, end);
  }, [zoomLevel, viewOffset, renderTick]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const lastPrice = allCandlesRef.current[allCandlesRef.current.length - 1].close;
      const newCandle = generateNewCandle(lastPrice);
      allCandlesRef.current.push(newCandle);
      if (allCandlesRef.current.length > 500) {
        allCandlesRef.current.shift();
        setViewOffset((prev) => Math.max(0, prev - 1));
      }
      setRenderTick((prev) => prev + 1);
      setSecondsUntilUpdate(60);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSecondsUntilUpdate((prev) => (prev > 0 ? prev - 1 : 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div
      style={{
        border: "1px solid #505050",
        display: "flex",
        flexDirection: "column",
        width: "min(980px, 100vw - 32px)",
        height: "calc(100vh - 32px)",
        overflow: "hidden",
        borderRadius: 4,
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          background: "#333",
          display: "flex",
          gap: 4,
          height: 26,
          alignItems: "center",
          paddingLeft: 8,
          paddingRight: 2,
          flexShrink: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Left: chart icon + tab strip */}
        <div style={{ display: "flex", flex: 1, gap: 4, height: "100%", alignItems: "center", minWidth: 0 }}>
          <button onClick={() => setShowToolbar(!showToolbar)} style={{ display: "flex", height: 22, alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: 4, flexShrink: 0, background: "none", border: "none", cursor: "pointer", padding: 0, gap: 0 }}>
            <IcGrafico />
            <IcChevronPixelCima />
          </button>

          {/* Tab strip */}
          <div style={{ display: "flex", flex: 1, height: "100%", alignItems: "center", minWidth: 0, overflow: "hidden", position: "relative", paddingRight: 1 }}>
            {/* Active tab: PETR4 */}
            <div
              style={{
                border: "1px solid #515151",
                display: "flex",
                height: 22,
                alignItems: "center",
                marginRight: -1,
                overflow: "hidden",
                padding: "0 5px",
                borderRadius: 4,
                flexShrink: 0,
                zIndex: 6,
                backgroundImage: "linear-gradient(90deg, rgba(0,133,66,0.1) 0%, rgba(0,133,66,0.1) 100%), linear-gradient(180deg, rgb(67,67,67) 0%, rgb(55,55,55) 60%)",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", gap: 4, alignItems: "center", justifyContent: "center" }}>
                <img src={icPetr} alt="" width={14} height={14} style={{ display: "block", borderRadius: 2, flexShrink: 0 }} />
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#fff", textTransform: "uppercase", whiteSpace: "nowrap" }}>PETR4</p>
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#fff", whiteSpace: "nowrap" }}>1min</p>
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#52ea94", whiteSpace: "nowrap" }}>+5,10%</p>
                <img src={icFechar} alt="" width={16} height={16} style={{ display: "block", borderRadius: 2, flexShrink: 0 }} />
              </div>
            </div>

            {/* Inactive tab: WDOA25 */}
            <div style={{ border: "1px solid transparent", display: "flex", height: 22, alignItems: "center", justifyContent: "center", marginRight: -1, borderRadius: 4, flexShrink: 0, zIndex: 5 }}>
              <div style={{ display: "flex", height: 14, alignItems: "center", flexShrink: 0, width: 5 }}>
                <div style={{ background: "#3f3f3f", height: "100%", flexShrink: 0, width: 1 }} />
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center", justifyContent: "center" }}>
                <img src={icBrBrasil} alt="" width={14} height={14} style={{ display: "block", borderRadius: 2, flexShrink: 0 }} />
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#c2c2c2", textTransform: "uppercase", whiteSpace: "nowrap" }}>WDOA25</p>
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#c2c2c2", whiteSpace: "nowrap" }}>1D</p>
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#52ea94", whiteSpace: "nowrap" }}>+5,10%</p>
              </div>
              <div style={{ display: "flex", height: 14, alignItems: "center", justifyContent: "flex-end", flexShrink: 0, width: 5 }}>
                <div style={{ background: "#3f3f3f", height: "100%", flexShrink: 0, width: 1 }} />
              </div>
            </div>

            {/* Inactive tab: winA25 */}
            <div style={{ border: "1px solid transparent", display: "flex", height: 22, alignItems: "center", justifyContent: "center", marginRight: -1, borderRadius: 4, flexShrink: 0, zIndex: 4 }}>
              <div style={{ display: "flex", height: 14, alignItems: "center", flexShrink: 0, width: 5 }}>
                <div style={{ background: "#3f3f3f", height: "100%", flexShrink: 0, width: 1 }} />
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center", justifyContent: "center" }}>
                <img src={icBrBrasil} alt="" width={14} height={14} style={{ display: "block", borderRadius: 2, flexShrink: 0 }} />
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#c2c2c2", whiteSpace: "nowrap" }}>winA25</p>
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#c2c2c2", whiteSpace: "nowrap" }}>1D</p>
                <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 11, lineHeight: "14px", color: "#52ea94", whiteSpace: "nowrap" }}>+5,10%</p>
              </div>
              <div style={{ display: "flex", height: 14, alignItems: "center", justifyContent: "flex-end", flexShrink: 0, width: 5 }}>
                <div style={{ background: "#3f3f3f", height: "100%", flexShrink: 0, width: 1 }} />
              </div>
            </div>

            {/* Add tab button */}
            <div style={{ display: "flex", gap: 4, height: 22, alignItems: "center", justifyContent: "center", minWidth: 22, overflow: "hidden", padding: "0 3px", borderRadius: 4, flexShrink: 0, zIndex: 1 }}>
              <img src={icMaisAdicao} alt="" width={16} height={16} style={{ display: "block" }} />
            </div>
          </div>
        </div>

        {/* Right: date + window controls */}
        <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "flex-end", flexShrink: 0 }}>
          <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center", padding: "0 4px", flexShrink: 0 }}>
            <p style={{ ...fontSegoe, fontWeight: 600, fontSize: 12, lineHeight: "14px", color: "#fff", whiteSpace: "nowrap" }}>22/05/2025</p>
          </div>
          {[
            <IcNumero01 key="n1" />,
            <IcMenuContexto key="menu" />,
            <IcMinimizarMini key="min" />,
            <IcMaximizarMini key="max" />,
          ].map((icon, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 20, padding: "2px 5px", borderRadius: 4, flexShrink: 0 }}>
              {icon}
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 26, height: 20, padding: "2px 5px", borderRadius: 4, flexShrink: 0 }}>
            <IcFecharPequeno />
          </div>
        </div>
      </div>

      {/* ── Toolbar ── */}
      {showToolbar && (
      <div
        style={{
          background: "#333",
          display: "flex",
          gap: 8,
          height: 30,
          alignItems: "center",
          overflow: "hidden",
          padding: "0 6px",
          flexShrink: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <BtnSelect><IcEditar /></BtnSelect>
        <BtnSelect><IcTempoMinVerde /></BtnSelect>

        {/* Period tab */}
        <div style={{ display: "flex", height: 22, alignItems: "center", paddingRight: 4, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 18, minWidth: 30, padding: "1px 4px", borderRadius: "4px 0 0 4px", border: "1px solid transparent", overflow: "hidden" }}>
            <p style={{ ...fontTahoma, color: "#fff", textAlign: "center", lineHeight: "16px" }}>1min</p>
          </div>
          <img src={icChevronDuploMini} alt="" width={16} height={16} style={{ display: "block", flexShrink: 0 }} />
        </div>

        <IcMatematicaMiniAdicao />

        <div style={{ background: "#505050", height: 16, flexShrink: 0, width: 1 }} />

        <BtnSelect>
          <IcAutomatico />
          <p style={{ ...fontTahoma, color: "#fff", whiteSpace: "nowrap", lineHeight: "16px" }}>Automático</p>
        </BtnSelect>

        <div style={{ background: "#505050", height: 16, flexShrink: 0, width: 1 }} />

        <BtnSelect>
          <IcIndicadores />
          <p style={{ ...fontTahoma, color: "#fff", whiteSpace: "nowrap", lineHeight: "16px" }}>Indicadores</p>
        </BtnSelect>
        <BtnSelect><IcExibirOn /></BtnSelect>
        <BtnSelect><IcInsideTrack /></BtnSelect>
        <BtnSelect><IcBtc /></BtnSelect>

        <div style={{ background: "#505050", height: 16, flexShrink: 0, width: 1 }} />

        <BtnSelect>
          <IcCopilotSignals />
          <p style={{ ...fontTahoma, color: "#fff", whiteSpace: "nowrap", lineHeight: "16px" }}>Termômetro</p>
        </BtnSelect>
        <BtnSelect><IcAgressao /></BtnSelect>
        <BtnSelect><IcPressao /></BtnSelect>

        <div style={{ background: "#505050", height: 16, flexShrink: 0, width: 1 }} />

        <BtnSelect><IcZoomMais /></BtnSelect>
        <BtnSelect><IcZoomMenos /></BtnSelect>
        <BtnSelect><IcZoomArea /></BtnSelect>
        <BtnSelect><IcZoomPeriodo /></BtnSelect>

        <div style={{ background: "#505050", height: 16, flexShrink: 0, width: 1 }} />

        <BtnSelect><IcTradePad /></BtnSelect>
        <BtnSelect><IcMotionTracker /></BtnSelect>

        <div style={{ background: "#505050", height: 16, flexShrink: 0, width: 1 }} />

        <BtnSelect><IcConfiguracaoComJanela /></BtnSelect>

        <div style={{ background: "#505050", height: 16, flexShrink: 0, width: 1 }} />

        <div ref={profitAIBtnRef}>
          <BtnSelect onClick={() => {
            setShowProfitAIChat(true);
            setIsProfitAILoading(true);
            setTimeout(() => setIsProfitAILoading(false), 3000);
          }} onMouseEnter={() => {
            if (profitAIBtnRef.current) {
              const rect = profitAIBtnRef.current.getBoundingClientRect();
              setTooltipPos({ top: rect.bottom + 8, left: rect.left + rect.width / 2 - 137 });
            }
            setShowProfitAITooltip(true);
          }} onMouseLeave={() => setShowProfitAITooltip(false)}>
            <img src={icProfitAI} alt="Profit AI" width={16} height={16} style={{ display: "block" }} />
          </BtnSelect>
        </div>

        {/* Profit AI Tooltip - using fixed positioning */}
        {showProfitAITooltip && (
          <div style={{
            position: "fixed",
            top: tooltipPos.top,
            left: tooltipPos.left,
            zIndex: 1000,
            backdropFilter: "blur(200px)",
            background: "rgba(48,48,48,0.6)",
            border: "1px solid #505050",
            boxShadow: "0px 4px 2px rgba(0,0,0,0.25)",
            borderRadius: 4,
            padding: "4px 12px 8px 12px",
            width: 274,
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}>
            {/* Title row */}
            <div style={{ display: "flex", gap: 4, alignItems: "center", height: 22, paddingTop: 4 }}>
              <div style={{ flex: 1, fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: 12, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                Analisar gráfico com Profit AI
              </div>
              <img src={icProfitAI} alt="" width={16} height={16} style={{ flexShrink: 0 }} />
            </div>
            {/* Description row */}
            <div style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 11, color: "#c2c2c2", lineHeight: "1.5" }}>
              O Profit AI analisa o gráfico completo e fornece sugestões, padrões e tendências de trading em tempo real.
            </div>
          </div>
        )}

        {/* Spacer + active chart type */}
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "flex-end", minWidth: 22 }}>
          <BtnSelect active={showTradingPanel} onClick={() => setShowTradingPanel(!showTradingPanel)}><IcChartTrading /></BtnSelect>
        </div>
      </div>
      )}

      {/* ── Body: chart + sidebars ── */}
      <div style={{ display: "flex", flex: 1, alignItems: "stretch", minHeight: 0, width: "100%" }}>
        {/* Chart area */}
        <div style={{ background: "#042042", flex: 1, position: "relative", minWidth: 0, display: "flex", flexDirection: "column" }}>
          {/* Profit AI Loading Glow */}
          {isProfitAILoading && (
            <div className="profit-ai-glow" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 5 }} />
          )}
          {/* Chart */}
          <div
            ref={chartRef}
            style={{
              flex: 1,
              position: "relative",
              minWidth: 0,
              display: "flex",
              cursor: isPanning ? "grabbing" : "grab",
              backgroundColor: isProfitAILoading ? "rgba(33, 150, 243, 0.08)" : "transparent",
              transition: "background-color 0.3s ease"
            }}
            onMouseDown={(e) => {
              // Pan mode - always enabled
              setIsPanning(true);
              panStartRef.current = e.clientX;
              const rect = e.currentTarget.getBoundingClientRect();
              const candlePixelWidth = rect.width / visibleCandles.length;

              const handleMouseMove = (moveE: MouseEvent) => {
                const delta = moveE.clientX - panStartRef.current;
                const candleDelta = Math.round(delta / candlePixelWidth);
                setViewOffset((prev) => {
                  const newOffset = prev - candleDelta;
                  return Math.max(0, Math.min(newOffset, allCandlesRef.current.length - zoomLevel));
                });
                panStartRef.current = moveE.clientX;
              };

              const handleMouseUp = () => {
                setIsPanning(false);
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
              };

              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }}
            onWheel={(e) => {
              if (e.deltaY > 0) {
                setZoomLevel((prev) => Math.min(120, prev + 5));
              } else {
                setZoomLevel((prev) => Math.max(10, prev - 5));
              }
              e.preventDefault();
            }}
          >
            {/* SVG Chart */}
            <svg style={{ flex: 1, background: "#042042", minWidth: 0 }} viewBox="0 0 800 300" preserveAspectRatio="none">
              {(() => {
                const prices = visibleCandles.map(c => [c.high, c.low]).flat();
                const maxPrice = Math.max(...prices);
                const minPrice = Math.min(...prices);
                const range = maxPrice - minPrice || 1;
                const padding = range * 0.05;
                const topPrice = maxPrice + padding;
                const bottomPrice = minPrice - padding;

                const candleWidth = 800 / visibleCandles.length * 0.7;
                const gap = 800 / visibleCandles.length * 0.3;

                const yScale = (price: number) => {
                  return 300 * (1 - (price - bottomPrice) / (topPrice - bottomPrice));
                };

                const baseTime = new Date(2026, 4, 29, 10, 13);

                return (
                  <>
                    {/* Horizontal grid lines */}
                    {Array.from({ length: 9 }).map((_, i) => {
                      const price = bottomPrice + (topPrice - bottomPrice) * (i / 8);
                      const y = yScale(price);
                      return (
                        <g key={`grid-${i}`}>
                          <line x1="0" y1={y} x2="800" y2={y} stroke="#203857" strokeWidth="0.5" />
                          <text x="810" y={y} fontSize="10" fill="#fff" dominantBaseline="middle">{price.toFixed(2)}</text>
                        </g>
                      );
                    })}

                    {/* Candles */}
                    {visibleCandles.map((c, i) => {
                      const x = i * (candleWidth + gap);
                      const bodyColor = c.close >= c.open ? "#049648" : "#e82233";
                      const high_y = yScale(c.high);
                      const low_y = yScale(c.low);
                      const open_y = yScale(c.open);
                      const close_y = yScale(c.close);
                      const body_top = Math.min(open_y, close_y);
                      const body_height = Math.abs(close_y - open_y) || 1;

                      return (
                        <g key={`candle-${i}`}>
                          {/* Wick */}
                          <line x1={x + candleWidth / 2} y1={high_y} x2={x + candleWidth / 2} y2={low_y} stroke="#666" strokeWidth="0.5" />
                          {/* Body */}
                          <rect x={x} y={body_top} width={candleWidth} height={body_height} fill={bodyColor} stroke={bodyColor} strokeWidth="0.5" />
                        </g>
                      );
                    })}
                  </>
                );
              })()}
            </svg>

            {/* Price grid labels on the right */}
            <div style={{ width: 63, display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: 4, paddingTop: 8, paddingBottom: 8, position: "relative" }}>
              {(() => {
                const prices = visibleCandles.map(c => [c.high, c.low]).flat();
                const maxPrice = Math.max(...prices);
                const minPrice = Math.min(...prices);
                const range = maxPrice - minPrice || 1;
                const padding = range * 0.05;
                const topPrice = maxPrice + padding;
                const bottomPrice = minPrice - padding;

                return Array.from({ length: 9 }).map((_, i) => {
                  const price = bottomPrice + (topPrice - bottomPrice) * (i / 8);
                  return (
                    <div key={`label-${i}`} style={{ color: "#fff", fontSize: 10, fontFamily: "'Tahoma', sans-serif", whiteSpace: "nowrap", textAlign: "right" }}>
                      {price.toFixed(2)}
                    </div>
                  );
                });
              })()}
            </div>

            {/* Analysis Indicator Toast */}
            {isProfitAILoading && (
              <div style={{
                position: "absolute",
                top: 12,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 8,
                alignItems: "center",
                background: "rgba(40, 50, 60, 0.9)",
                border: "1px solid rgba(100, 180, 240, 0.3)",
                borderRadius: 4,
                padding: "8px 16px",
                pointerEvents: "none",
                zIndex: 10,
                backdropFilter: "blur(8px)"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 16, height: 16 }}>
                  <img src={icProfitAI} alt="analyzing" width={14} height={14} />
                </div>
                <span style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 12, color: "#e6e6e6", fontWeight: 500 }}>
                  Analisando...
                </span>
              </div>
            )}

          </div>

          {/* Time axis labels below chart */}
          <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: 0, paddingRight: 63, paddingTop: 4, paddingBottom: 4, height: 20, position: "relative" }}>
            {(() => {
              const baseTime = new Date(2026, 4, 29, 10, 13);
              return Array.from({ length: 8 }).map((_, i) => {
                const time = new Date(baseTime.getTime() + i * 10 * 60000);
                const timeStr = time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                return (
                  <div key={`time-label-${i}`} style={{ color: "#fff", fontSize: 10, fontFamily: "'Tahoma', sans-serif", whiteSpace: "nowrap", textAlign: "center", flex: 1 }}>
                    {timeStr}
                  </div>
                );
              });
            })()}
          </div>

          {/* ── Date and Layouts footer ── */}
          <div style={{ display: "flex", height: 24, alignItems: "center", borderTop: "1px solid #505050", background: "#333", overflow: "hidden" }}>
            {/* Arrow controls */}
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0, marginRight: -1 }}>
              <button style={{ background: "none", border: "none", cursor: "pointer", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", padding: 0, color: "#c2c2c2", fontSize: 10 }}>‹</button>
              <button style={{ background: "none", border: "none", cursor: "pointer", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", padding: 0, color: "#c2c2c2", fontSize: 10 }}>›</button>
            </div>

            {/* Active tab - Layout 1 */}
            <div style={{ background: "#4a4a4a", border: "1px solid #5a5a5a", borderRadius: 4, height: 19, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", flexShrink: 0, marginRight: -1 }}>
              <span style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: 12, color: "#fff", whiteSpace: "nowrap" }}>Layout 1</span>
            </div>

            {/* Inactive tabs */}
            {["Layout 2", "Layout 3"].map((label) => (
              <div key={label} style={{ position: "relative", height: 19, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", flexShrink: 0, marginRight: -1, cursor: "pointer" }}>
                <div style={{ position: "absolute", left: -1, top: "50%", transform: "translateY(-50%)", width: 1, height: 14, background: "#505050" }} />
                <span style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 12, color: "#c2c2c2", whiteSpace: "nowrap" }}>{label}</span>
                <div style={{ position: "absolute", right: -1, top: "50%", transform: "translateY(-50%)", width: 1, height: 14, background: "#505050" }} />
              </div>
            ))}

            {/* Add button */}
            <button style={{ background: "none", border: "none", cursor: "pointer", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", padding: 0, flexShrink: 0, marginRight: -1 }}>
              <img src={icMaisAdicao} alt="+" width={16} height={16} />
            </button>

            {/* Spacer */}
            <div style={{ flex: 1, minWidth: 0 }} />

            {/* Right controls: dots + scroll + timer */}
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0, gap: 0 }}>
              <button style={{ background: "none", border: "none", cursor: "pointer", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", padding: 0, color: "#c2c2c2", fontSize: 10 }}>⋮</button>
              <button style={{ background: "none", border: "none", cursor: "pointer", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", padding: 0, color: "#c2c2c2", fontSize: 10 }}>‹</button>
              <div style={{ display: "flex", alignItems: "center", gap: 2, padding: "0 8px" }}>
                <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: 12, color: "#fff", fontWeight: 600 }}>{secondsUntilUpdate}</span>
                <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: 10, color: "#999" }}>s</span>
              </div>
              <button style={{ background: "none", border: "none", cursor: "pointer", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", padding: 0, color: "#c2c2c2", fontSize: 10 }}>›</button>
            </div>
          </div>
        </div>

        {/* Trading Panel - Chart Trading (separate) */}
        {showTradingPanel && (
          <div style={{ background: "#212a34", display: "flex", flexDirection: "column", height: "100%", flexShrink: 0, width: 200, overflow: "hidden", borderLeft: "1px solid rgba(87,91,96,0.5)" }}>
            {/* Inputs section */}
            <div style={{ padding: "2px 4px", display: "flex", flexDirection: "column", gap: 4, flex: 1, overflow: "auto", minWidth: 0 }}>
              {/* Account select header */}
              <div style={{ background: "#464646", border: "1px solid #555", borderRadius: 4, padding: "0 4px", height: 24, display: "flex", alignItems: "center", gap: 4, flexShrink: 0, overflow: "hidden" }}>
                {/* Left group */}
                <div style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, minWidth: 0 }}>
                  <img src={icSimFrame} style={{ width: 16, height: 16, flexShrink: 0 }} alt="nelogica" />
                  <div style={{ background: "linear-gradient(90deg, #bd2525, #bd2525)", padding: "2px 3px", borderRadius: 4, flexShrink: 0, height: 16, display: "flex", alignItems: "center" }}>
                    <p style={{ ...fontSegoe, fontWeight: 700, fontSize: 11, color: "#fff", margin: 0, lineHeight: "16px" }}>Sim</p>
                  </div>
                  <div style={{ display: "flex", gap: 4, alignItems: "center", flex: 1, minWidth: 0, overflow: "hidden" }}>
                    <p style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 11, color: "#fff", margin: 0, whiteSpace: "nowrap", flexShrink: 0 }}>987654321</p>
                    <p style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 11, color: "#fff", margin: 0, whiteSpace: "nowrap", flexShrink: 0 }}>-</p>
                    <p style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 11, color: "#fff", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1, minWidth: 0 }}>Daniel Garcia Antunes</p>
                  </div>
                </div>
                {/* Dropdown arrow */}
                <button style={{ background: "none", border: "none", cursor: "pointer", width: 16, height: 16, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
                  <img src={icBtnRight} style={{ width: 16, height: 16 }} alt="dropdown" />
                </button>
              </div>
              {/* Estratégia */}
              <div style={{ display: "flex", gap: 4, alignItems: "center", height: 22, minWidth: 0 }}>
                <p style={{ ...fontSegoe, fontSize: 10, color: "#c2c2c2", margin: 0, width: 50, textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>Estrat.</p>
                <div style={{ display: "flex", gap: 2, flex: 1, alignItems: "center", minWidth: 0 }}>
                  <div style={{ background: "#464646", border: "1px solid #555", borderRadius: 4, backdropFilter: "blur(10px)", flex: 1, padding: "2px 3px", display: "flex", alignItems: "center", height: 22, gap: 2, minWidth: 0 }}>
                    <input type="text" placeholder="REG52L" value="REG52L" style={{ background: "none", border: "none", color: "#fff", fontSize: 10, flex: 1, outline: "none", fontFamily: "'Segoe UI', sans-serif", minWidth: 0 }} />
                    <div style={{ width: 14, height: 14, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 5, height: 2, background: "#fff" }} />
                    </div>
                  </div>
                  <button style={{ background: "rgba(255,255,255,0)", padding: 2, width: 18, height: 22, display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", flexShrink: 0 }}>
                    <img src={icMais} alt="+" style={{ width: 16, height: 16 }} />
                  </button>
                </div>
              </div>

              {/* Preço */}
              <div style={{ display: "flex", gap: 4, alignItems: "center", height: 22, minWidth: 0 }}>
                <p style={{ ...fontSegoe, fontSize: 10, color: "#c2c2c2", margin: 0, width: 50, textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>Preço</p>
                <div style={{ display: "flex", gap: 2, flex: 1, alignItems: "center", minWidth: 0 }}>
                  <div style={{ background: "#464646", border: "1px solid #555", borderRadius: 4, backdropFilter: "blur(10px)", flex: 1, padding: "2px 3px", display: "flex", alignItems: "center", height: 22, gap: 2, minWidth: 0 }}>
                    <input type="text" placeholder="323,89" value="323,89" style={{ background: "none", border: "none", color: "#fff", fontSize: 10, flex: 1, outline: "none", fontFamily: "'Segoe UI', sans-serif", minWidth: 0 }} />
                    <p style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: 10, color: "#999", margin: 0, whiteSpace: "nowrap", flexShrink: 0 }}>R$</p>
                    <button style={{ background: "none", border: "none", cursor: "pointer", width: 12, height: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
                      <img src={icChevronDuploInvertido} style={{ width: 12, height: 12 }} alt="chevron" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stop of. */}
              <div style={{ display: "flex", gap: 4, alignItems: "center", height: 22, minWidth: 0 }}>
                <p style={{ ...fontSegoe, fontSize: 10, color: "#c2c2c2", margin: 0, width: 50, textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>Stop of.</p>
                <div style={{ background: "#464646", border: "1px solid #555", borderRadius: 4, backdropFilter: "blur(10px)", flex: 1, padding: "2px 3px", display: "flex", alignItems: "center", height: 22, gap: 2, minWidth: 0 }}>
                  <input type="text" placeholder="0,03" value="0,03" style={{ background: "none", border: "none", color: "#fff", fontSize: 10, flex: 1, outline: "none", fontFamily: "'Segoe UI', sans-serif", minWidth: 0 }} />
                  <button style={{ background: "none", border: "none", cursor: "pointer", width: 12, height: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
                    <img src={icChevronDuploInvertido} style={{ width: 12, height: 12 }} alt="chevron" />
                  </button>
                </div>
              </div>

              {/* Qtd */}
              <div style={{ display: "flex", gap: 4, alignItems: "center", height: 22, minWidth: 0 }}>
                <p style={{ ...fontSegoe, fontSize: 10, color: "#c2c2c2", margin: 0, width: 50, textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>Qtd</p>
                <div style={{ background: "#464646", border: "1px solid #555", borderRadius: 4, backdropFilter: "blur(10px)", flex: 1, padding: "2px 3px", display: "flex", alignItems: "center", height: 22, gap: 2, minWidth: 0 }}>
                  <input type="text" placeholder="0,01" value="0,01" style={{ background: "none", border: "none", color: "#fff", fontSize: 10, flex: 1, outline: "none", fontFamily: "'Segoe UI', sans-serif", minWidth: 0 }} />
                  <button style={{ background: "none", border: "none", cursor: "pointer", width: 12, height: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
                    <img src={icChevronDuploInvertido} style={{ width: 12, height: 12 }} alt="chevron" />
                  </button>
                </div>
              </div>

              {/* Quick buttons */}
              <div style={{ display: "flex", gap: 4 }}>
                {["0.01", "0.02", "0.03"].map((qty) => (
                  <button key={qty} style={{ flex: 1, padding: "4px 8px", background: "linear-gradient(81.96deg, rgb(143,143,143), rgb(194,194,194))", border: "1px solid #aaa", color: "#000", fontSize: 10, borderRadius: 4, cursor: "pointer", fontWeight: 600, height: 22, fontFamily: "'Segoe UI', sans-serif" }}>{qty}</button>
                ))}
              </div>

              {/* Total */}
              <div style={{ display: "flex", gap: 4, alignItems: "center", height: 22, minWidth: 0 }}>
                <p style={{ ...fontSegoe, fontSize: 10, color: "#c2c2c2", margin: 0, width: 50, textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>Total</p>
                <div style={{ background: "#464646", border: "1px solid #555", borderRadius: 4, flex: 1, padding: "2px 3px", display: "flex", alignItems: "center", height: 22, gap: 2, minWidth: 0 }}>
                  <input type="text" placeholder="3,24" value="3,24" style={{ background: "none", border: "none", color: "#fff", fontSize: 10, flex: 1, outline: "none", fontFamily: "'Segoe UI', sans-serif", minWidth: 0 }} />
                  <p style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: 10, color: "#999", margin: 0, whiteSpace: "nowrap", flexShrink: 0 }}>R$</p>
                </div>
              </div>

              {/* C Limite / V Limite */}
              <div style={{ display: "flex", gap: 4, height: 22 }}>
                <button style={{ flex: 1, padding: "4px 8px", background: "linear-gradient(74.62deg, rgb(216,145,10), rgb(243,183,31))", border: "1px solid #ffb010", color: "#000", fontSize: 10, fontWeight: 600, borderRadius: 4, cursor: "pointer", height: "100%", fontFamily: "'Segoe UI', sans-serif" }}>C Limite</button>
                <button style={{ flex: 1, padding: "4px 8px", background: "linear-gradient(74.62deg, rgb(14,137,71), rgb(58,174,112))", border: "1px solid #14a658", color: "#fff", fontSize: 10, fontWeight: 600, borderRadius: 4, cursor: "pointer", height: "100%", fontFamily: "'Segoe UI', sans-serif" }}>V Limite</button>
              </div>

              {/* C Mercado / V Mercado */}
              <div style={{ display: "flex", gap: 4, height: 22 }}>
                <button style={{ flex: 1, padding: "4px 8px", background: "linear-gradient(74.62deg, rgb(216,145,10), rgb(243,183,31))", border: "1px solid #ffb010", color: "#000", fontSize: 10, fontWeight: 600, borderRadius: 4, cursor: "pointer", height: "100%", fontFamily: "'Segoe UI', sans-serif" }}>C Mercado</button>
                <button style={{ flex: 1, padding: "4px 8px", background: "linear-gradient(74.62deg, rgb(14,137,71), rgb(58,174,112))", border: "1px solid #14a658", color: "#fff", fontSize: 10, fontWeight: 600, borderRadius: 4, cursor: "pointer", height: "100%", fontFamily: "'Segoe UI', sans-serif" }}>V Mercado</button>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: 4, height: 22 }}>
                <button style={{ flex: 1, padding: "4px 8px", background: "linear-gradient(77.74deg, rgb(143,143,143), rgb(194,194,194))", border: "1px solid #aaa", color: "#000", fontSize: 10, fontWeight: 600, borderRadius: 4, cursor: "pointer", height: "100%", fontFamily: "'Segoe UI', sans-serif" }}>Cancel Ord.</button>
                <button style={{ flex: 1, padding: "4px 8px", background: "linear-gradient(77.74deg, rgb(143,143,143), rgb(194,194,194))", border: "1px solid #aaa", color: "#000", fontSize: 10, fontWeight: 600, borderRadius: 4, cursor: "pointer", height: "100%", fontFamily: "'Segoe UI', sans-serif" }}>Inverter</button>
              </div>

              {/* Zerar / Cancelar Ordens + Zerar */}
              <button style={{ width: "100%", padding: "4px 8px", background: "linear-gradient(61.71deg, rgb(181,43,43), rgb(219,64,64))", border: "1px solid #dc3838", color: "#fff", fontSize: 10, fontWeight: 600, borderRadius: 4, cursor: "pointer", height: 22, fontFamily: "'Segoe UI', sans-serif" }}>Zerar</button>
              <button style={{ width: "100%", padding: "4px 8px", background: "linear-gradient(61.71deg, rgb(181,43,43), rgb(219,64,64))", border: "1px solid #dc3838", color: "#fff", fontSize: 10, fontWeight: 600, borderRadius: 4, cursor: "pointer", height: 22, fontFamily: "'Segoe UI', sans-serif" }}>Cancelar Ordens + Zerar</button>

              {/* Resultados header */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4, height: 22 }}>
                <p style={{ ...fontSegoe, fontSize: 10, color: "#c2c2c2", margin: 0, flex: 1 }}>Resultados</p>
                <button style={{ background: "linear-gradient(90deg, rgb(85,85,85), rgb(73,73,73))", border: "none", borderRadius: 2, width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }}>
                  <img src={icResultadoDinheiro} style={{ width: 12, height: 12 }} alt="$" />
                </button>
                <button style={{ background: "none", border: "none", cursor: "pointer", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
                  <img src={icResultadoPorcentagem} style={{ width: 12, height: 12 }} alt="%" />
                </button>
              </div>

              {/* Results rows */}
              <div style={{ background: "#22272d", padding: "4px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 20 }}>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>Qtd</p>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>-</p>
              </div>
              <div style={{ background: "#22272d", padding: "4px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 20 }}>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>Res. Aberto</p>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>R$ 0,00</p>
              </div>
              <div style={{ background: "#22272d", padding: "4px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 20 }}>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>Res. do Dia</p>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>R$ 0,00</p>
              </div>
              <div style={{ background: "#22272d", padding: "4px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 20 }}>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>Médio</p>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>R$ 0,00</p>
              </div>
              <div style={{ background: "#22272d", padding: "4px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 20 }}>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>Total</p>
                <p style={{ ...fontSegoe, fontSize: 9, color: "#c2c2c2", margin: 0 }}>R$ 0,00</p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Profit AI Chat Window */}
      {showProfitAIChat && (
        <div className="profit-ai-chat-enter" style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 360,
          background: "#101010",
          borderLeft: "1px solid #505050",
          display: "flex",
          flexDirection: "column",
          zIndex: 1001,
          boxShadow: "-4px 0 12px rgba(0, 0, 0, 0.5)",
          borderRadius: 8,
          backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 400 1039" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="0.20000000298023224"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(29.444 60.717 -57.474 38.08 0 0)"><stop stop-color="rgba(47,140,233,1)" offset="0"/><stop stop-color="rgba(23,123,244,0.5)" offset="0.17976"/><stop stop-color="rgba(0,107,255,0)" offset="0.35951"/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox="0 0 400 1039" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="0.20000000298023224"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(31.111 84.678 -80.156 40.236 0 0)"><stop stop-color="rgba(0,107,255,1)" offset="0"/><stop stop-color="rgba(0,107,255,0)" offset="1"/></radialGradient></defs></svg>')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 0, 0 0",
          backgroundSize: "100% 100%"
        }}>
          {/* Header */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 4px"
          }}>
            <div style={{
              display: "flex",
              gap: 4,
              height: 22,
              alignItems: "center"
            }}>
              <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                <img src={icProfitAI} alt="Profit AI" width={14} height={14} />
                <span style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: 13, color: "#fff" }}>Profit AI</span>
              </div>
              <div style={{ flex: 1 }} />
              <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", gap: 4, alignItems: "center", height: 22, padding: "0 3px", borderRadius: 4, flexShrink: 0 }}>
                <img src={icNovaMsg} alt="new" width={16} height={16} />
                <span style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 12, color: "#fff", whiteSpace: "nowrap" }}>Novo Chat</span>
              </button>
              <button style={{ background: "none", border: "none", cursor: "pointer", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", padding: 0, flexShrink: 0 }}>
                <img src={icMenuContexto} alt="menu" width={16} height={16} />
              </button>
              <button onClick={() => setShowProfitAIChat(false)} style={{ background: "none", border: "none", cursor: "pointer", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", padding: 0, flexShrink: 0 }}>
                <img src={icFecharContato} alt="close" width={16} height={16} />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 12
          }}>
            {/* Analysis Context Message */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
              <div style={{
                background: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(25px)",
                padding: "8px 12px",
                borderRadius: 8,
                maxWidth: "85%"
              }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                  <div style={{ width: 24, height: 24, background: "#dbb5e5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#2d2d2d", flexShrink: 0, fontFamily: "'Segoe UI', sans-serif" }}>DA</div>
                  <span style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: 13, color: "#b6cfe5" }}>Daniel Antunes</span>
                </div>
                <div style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 14, color: "#e6e6e6", lineHeight: 1.6 }}>
                  <div>Analisa o gráfico de <strong>PETR4</strong></div>
                  <div style={{ marginTop: 4, fontSize: 13, color: "#c2c2c2" }}>
                    Período: 24/04/2025 até 30/04/2026<br/>
                    Timeframe: 1 minuto
                  </div>
                </div>
              </div>
            </div>

            {/* AI Response */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <img src={icProfitAIChat} alt="Profit AI" width={18} height={18} />
                <span style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: 13, color: "#8197ab" }}>Profit AI</span>
              </div>
              {isProfitAILoading ? (
                <AIWavyLoader
                  isLoading={true}
                  text="Desenvolvendo a Resposta..."
                  primaryColor="#3876DF"
                />
              ) : (
                <>
                  <div style={{ fontFamily: "'Tahoma', sans-serif", fontSize: 13, color: "#c2c2c2", lineHeight: 1.6 }}>
                    {/* 1. Resumo Executivo */}
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ margin: "0 0 8px 0", fontSize: 14, fontWeight: 600, color: "#e6e6e6" }}>1. Resumo Executivo</h3>
                      <p style={{ margin: "0 0 4px 0" }}>PETR4 apresenta uma estrutura de mercado lateralizada no timeframe de 15 minutos, com retorno positivo de 2,19% no período analisado. O ativo negociou entre R$ 46,12 e R$ 49,57, demonstrando volatilidade moderada. Recentemente, um cruzamento de média móvel dourado ocorreu em 27 de abril, sinalizando um possível fortalecimento da pressão compradora. O RSI encontra-se em zona neutra (51,54) após uma queda significativa de 66,57 há 5 períodos, sugerindo redução de momentum. O MACD apresenta sinal bullish com cruzamento positivo recente.</p>
                    </div>

                    {/* 2. Análise de Tendência */}
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ margin: "0 0 8px 0", fontSize: 14, fontWeight: 600, color: "#e6e6e6" }}>2. Análise de Tendência</h3>
                      <p style={{ margin: "0 0 8px 0" }}>A tendência classificada como <strong>sideways</strong> no timeframe de 15 minutos é confirmada pelo índice ADX de 18,63, indicando uma tendência fraca sem direcionamento claro. O período de análise de abril de 2026 apresenta oscilações recorrentes sem estabelecer uma direção dominante sustentável.</p>
                      <ul style={{ margin: "0 0 8px 0", paddingLeft: 16 }}>
                        <li style={{ margin: "4px 0" }}>Movimento inicial (01-06 de abril): queda de R$ 47,90 para R$ 47,29, seguida de recuperação até R$ 48,94</li>
                        <li style={{ margin: "4px 0" }}>Fase intermediária (07-17 de abril): volatilidade extrema com queda acentuada até R$ 46,12 e recuperação parcial</li>
                        <li style={{ margin: "4px 0" }}>Fase recente (24-30 de abril): tentativa de escalada com novo cruzamento de médias móveis em movimento ascendente</li>
                      </ul>
                      <p style={{ margin: "0" }}>No timeframe de 30 minutos observa-se uma tendência classificada como <strong>up</strong> com ADX de 20,6, sugerindo um fortalecimento relativo da pressão compradora em horizontes mais longos.</p>
                    </div>

                    {/* 3. Avaliação de Volatilidade */}
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ margin: "0 0 8px 0", fontSize: 14, fontWeight: 600, color: "#e6e6e6" }}>3. Avaliação de Volatilidade</h3>
                      <p style={{ margin: "0 0 8px 0" }}>A volatilidade do ativo, medida pelo ATR (Average True Range), situa-se em 0,17 no timeframe de 15 minutos, classificada como moderada. O volume atual (R$ 5.212.445,00) está 37% acima da média histórica no mesmo horário (R$ 3.793.738,50), indicando interesse aumentado de mercado.</p>
                    </div>

                    {/* 4. Análise de Indicadores */}
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ margin: "0 0 8px 0", fontSize: 14, fontWeight: 600, color: "#e6e6e6" }}>4. Análise de Indicadores</h3>
                      <p style={{ margin: "0 0 8px 0" }}><strong>RSI (Índice de Força Relativa)</strong><br/>O RSI atual de 51,54 posiciona-se na zona neutra. O indicador registrou uma queda de 15,03 pontos nos últimos 5 períodos (de 66,57 para 51,54), sugerindo uma perda significativa de momentum positivo.</p>
                      <p style={{ margin: "0 0 8px 0" }}><strong>MACD (Média Móvel de Convergência/Divergência)</strong><br/>O MACD apresenta um sinal bullish com cruzamento positivo recente: Valor MACD: 0,0868 | Sinal: 0,0789 | Histograma: 0,0079 (positivo)</p>
                    </div>

                    {/* 5. Médias Móveis */}
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ margin: "0 0 8px 0", fontSize: 14, fontWeight: 600, color: "#e6e6e6" }}>5. Médias Móveis e Cruzamentos</h3>
                      <p style={{ margin: "0 0 8px 0" }}>SMA 50: 48,87 | SMA 200: 47,83 | Diferença: +1,04</p>
                      <p style={{ margin: "0 0 8px 0" }}>Três cruzamentos significativos foram registrados:</p>
                      <ul style={{ margin: "0 0 8px 0", paddingLeft: 16 }}>
                        <li style={{ margin: "4px 0" }}>Cruzamento Dourado (24 de abril): SMA 50 cruzou acima da SMA 200</li>
                        <li style={{ margin: "4px 0" }}>Cruzamento da Morte (27 de abril): reversão rápida com SMA 50 cruzando abaixo da SMA 200</li>
                        <li style={{ margin: "4px 0" }}>Novo Cruzamento Dourado (27 de abril): reafirmação do sinal bullish</li>
                      </ul>
                    </div>

                    {/* 6. Níveis de Suporte e Resistência */}
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ margin: "0 0 8px 0", fontSize: 14, fontWeight: 600, color: "#e6e6e6" }}>6. Níveis de Suporte e Resistência</h3>
                      <p style={{ margin: "0 0 8px 0" }}><strong>Suportes:</strong> S1: R$ 48,69 | S2: R$ 48,49 | S3: R$ 49,42</p>
                      <p style={{ margin: "0 0 8px 0" }}><strong>Resistências:</strong> R1: R$ 48,79 | R2: R$ 48,38 | R3: R$ 48,04</p>
                      <p style={{ margin: "0" }}>O preço atual (R$ 48,95) encontra-se próximo à resistência R1 (R$ 48,79), representando uma zona crítica.</p>
                    </div>

                    {/* 7. Padrões de Velas */}
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ margin: "0 0 8px 0", fontSize: 14, fontWeight: 600, color: "#e6e6e6" }}>7. Padrões de Velas</h3>
                      <p style={{ margin: "0 0 8px 0" }}>No timeframe de 15 minutos, foram identificados:</p>
                      <ul style={{ margin: "0 0 8px 0", paddingLeft: 16 }}>
                        <li style={{ margin: "4px 0" }}>Martelo Invertido (candle atual): Formação bullish com sombra superior longa e corpo pequeno</li>
                        <li style={{ margin: "4px 0" }}>Doji (8 candles atrás): Formação neutra com sinalizador bullish</li>
                        <li style={{ margin: "4px 0" }}>Padrão de Absorção Forte Touro: Padrão com sinal bullish fraco</li>
                      </ul>
                    </div>

                    {/* 8. Conclusão */}
                    <div style={{ marginBottom: 12 }}>
                      <h3 style={{ margin: "0 0 8px 0", fontSize: 14, fontWeight: 600, color: "#e6e6e6" }}>8. Conclusão</h3>
                      <p style={{ margin: "0 0 8px 0" }}>PETR4 apresenta um quadro técnico ambíguo e em transição no timeframe de 15 minutos.</p>
                      <p style={{ margin: "0 0 8px 0" }}><strong>Fatores Altistas:</strong> Cruzamento dourado das médias móveis mantido desde 27 de abril, múltiplos níveis de resistência convertidos em suporte, MACD em sinal bullish, volume elevado.</p>
                      <p style={{ margin: "0 0 8px 0" }}><strong>Fatores Bearish:</strong> Perda significativa de momentum (RSI), divergência no timeframe de 5 minutos, histograma do MACD em arrefecimento.</p>
                      <p style={{ margin: "0" }}>A consolidação dependerá da capacidade de manter suporte acima destes níveis e renovar momentum nos próximos candles.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, paddingTop: 10 }}>
                    <img src={icLike} alt="like" width={18} height={18} style={{ cursor: "pointer" }} />
                    <img src={icDislike} alt="dislike" width={18} height={18} style={{ cursor: "pointer" }} />
                    <div style={{ flex: 1 }} />
                    <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: 12, color: "#95afc7" }}>16:07</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Input */}
          <div style={{
            padding: "8px"
          }}>
            <div style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              background: "linear-gradient(90deg, #1a2328 0%, #1c252a 100%)",
              border: "1px solid #40474b",
              borderRadius: 8,
              padding: "6px 6px 6px 8px",
              height: 40
            }}>
              <input
                type="text"
                placeholder="Como posso ajudar?"
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  color: "#c2c2c2",
                  fontSize: 12,
                  fontFamily: "'Tahoma', sans-serif",
                  outline: "none"
                }}
              />
              <button style={{
                width: 28,
                height: 28,
                padding: 0,
                background: "#4d4d4f",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <img src={icSendDark} alt="send" width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
