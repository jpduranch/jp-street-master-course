import { useState, useMemo, useCallback } from "react";

const TIMEFRAMES = [
  { id: "1m", label: "1m", candles: 60, timeStep: 1 },
  { id: "5m", label: "5m", candles: 48, timeStep: 5 },
  { id: "15m", label: "15m", candles: 26, timeStep: 15 },
  { id: "1H", label: "1H", candles: 14, timeStep: 60 },
  { id: "1D", label: "1D", candles: 20, timeStep: 1440 },
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateCandles(low, high, count, seed) {
  const rand = seededRandom(seed);
  const range = high - low;
  const candles = [];
  let price = low + range * (0.2 + rand() * 0.3);

  for (let i = 0; i < count; i++) {
    const progress = i / count;
    const trend = progress < 0.3 ? 0.6 : progress < 0.7 ? 0.55 : 0.52;
    const volatility = range * (0.02 + rand() * 0.06);
    const direction = rand() < trend ? 1 : -1;
    const move = volatility * direction;

    const open = price;
    const close = Math.max(low, Math.min(high, open + move));
    const wickUp = Math.min(high, Math.max(open, close) + rand() * volatility * 0.7);
    const wickDown = Math.max(low, Math.min(open, close) - rand() * volatility * 0.7);

    candles.push({ open, close, high: wickUp, low: wickDown });
    price = close + (rand() - 0.48) * volatility * 0.3;
    price = Math.max(low, Math.min(high, price));
  }

  return candles;
}

function generateTimeLabels(timeframe) {
  const tf = TIMEFRAMES.find((t) => t.id === timeframe);
  if (timeframe === "1D") {
    return ["Mar 10", "Mar 12", "Mar 14", "Mar 18", "Mar 20"];
  }
  const startHour = 9;
  const startMin = 30;
  const labels = [];
  const totalMinutes = tf.candles * tf.timeStep;
  const labelCount = 5;
  for (let i = 0; i < labelCount; i++) {
    const mins = startMin + Math.round((totalMinutes / (labelCount - 1)) * i);
    const h = startHour + Math.floor(mins / 60);
    const m = mins % 60;
    labels.push(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
  }
  return labels;
}

function formatPrice(p) {
  return p < 1 ? p.toFixed(4) : p < 100 ? p.toFixed(2) : p.toFixed(2);
}

export default function InteractiveChart() {
  const [lowPrice, setLowPrice] = useState(2);
  const [highPrice, setHighPrice] = useState(10);
  const [timeframe, setTimeframe] = useState("5m");
  const [hoveredCandle, setHoveredCandle] = useState(null);

  const tf = TIMEFRAMES.find((t) => t.id === timeframe);

  const candles = useMemo(() => {
    const lo = Math.min(lowPrice, highPrice);
    const hi = Math.max(lowPrice, highPrice);
    if (hi <= lo || lo < 0) return [];
    const seed = Math.round(lo * 1000 + hi * 7 + TIMEFRAMES.findIndex((t) => t.id === timeframe) * 31);
    return generateCandles(lo, hi, tf.candles, seed);
  }, [lowPrice, highPrice, timeframe, tf.candles]);

  const actualLow = useMemo(() => candles.length ? Math.min(...candles.map((c) => c.low)) : lowPrice, [candles, lowPrice]);
  const actualHigh = useMemo(() => candles.length ? Math.max(...candles.map((c) => c.high)) : highPrice, [candles, highPrice]);

  const lastCandle = candles[candles.length - 1];
  const firstCandle = candles[0];
  const priceChange = lastCandle && firstCandle ? ((lastCandle.close - firstCandle.open) / firstCandle.open) * 100 : 0;
  const currentPrice = lastCandle ? lastCandle.close : 0;

  const timeLabels = useMemo(() => generateTimeLabels(timeframe), [timeframe]);

  const priceRange = actualHigh - actualLow;
  const chartPadding = priceRange * 0.05;
  const chartMin = actualLow - chartPadding;
  const chartMax = actualHigh + chartPadding;
  const chartRange = chartMax - chartMin;

  const priceLevels = useMemo(() => {
    if (chartRange <= 0) return [];
    const levels = [];
    const step = chartRange / 4;
    for (let i = 0; i <= 4; i++) {
      levels.push(chartMin + step * i);
    }
    return levels;
  }, [chartMin, chartRange]);

  const toY = useCallback(
    (price) => {
      if (chartRange <= 0) return 50;
      return 100 - ((price - chartMin) / chartRange) * 100;
    },
    [chartMin, chartRange]
  );

  const handleLowChange = (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0) setLowPrice(val);
  };

  const handleHighChange = (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val > 0) setHighPrice(val);
  };

  return (
    <div className="mt-16 w-full max-w-6xl mx-auto relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-tertiary/20 to-primary/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />

      <div className="relative bg-surface-container-low border border-outline-variant/10 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="w-full bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-surface-container">
          <div className="p-6 md:p-8 flex flex-col">
            {/* Header: Ticker info + Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              {/* Left: Ticker */}
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-primary font-headline font-extrabold text-2xl tracking-tight">
                  JPST
                </span>
                <span className="text-on-surface font-headline font-bold text-lg">
                  ${formatPrice(currentPrice)}
                </span>
                <span
                  className={`text-sm font-bold px-2 py-0.5 rounded ${
                    priceChange >= 0
                      ? "text-tertiary bg-tertiary/10"
                      : "text-error bg-error/10"
                  }`}
                >
                  {priceChange >= 0 ? "+" : ""}
                  {priceChange.toFixed(2)}%
                </span>
              </div>

              {/* Right: Price inputs + Timeframe */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                    Low
                  </label>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs">$</span>
                    <input
                      type="number"
                      value={lowPrice}
                      onChange={handleLowChange}
                      min="0"
                      step="0.5"
                      className="w-20 bg-surface-container-lowest border border-outline-variant/20 rounded-lg pl-5 pr-2 py-1.5 text-xs text-on-surface font-bold outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                    High
                  </label>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs">$</span>
                    <input
                      type="number"
                      value={highPrice}
                      onChange={handleHighChange}
                      min="0"
                      step="0.5"
                      className="w-20 bg-surface-container-lowest border border-outline-variant/20 rounded-lg pl-5 pr-2 py-1.5 text-xs text-on-surface font-bold outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="h-6 w-px bg-outline-variant/20 hidden md:block" />

                <div className="flex gap-1">
                  {TIMEFRAMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTimeframe(t.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        timeframe === t.id
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "text-on-surface-variant hover:text-primary hover:bg-surface-container-highest"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hovered candle info */}
            <div className="h-5 mb-1">
              {hoveredCandle !== null && candles[hoveredCandle] && (
                <div className="flex items-center gap-4 text-[10px] font-bold text-on-surface-variant animate-in fade-in">
                  <span>
                    O:{" "}
                    <span className="text-on-surface">
                      ${formatPrice(candles[hoveredCandle].open)}
                    </span>
                  </span>
                  <span>
                    H:{" "}
                    <span className="text-tertiary">
                      ${formatPrice(candles[hoveredCandle].high)}
                    </span>
                  </span>
                  <span>
                    L:{" "}
                    <span className="text-error">
                      ${formatPrice(candles[hoveredCandle].low)}
                    </span>
                  </span>
                  <span>
                    C:{" "}
                    <span className="text-on-surface">
                      ${formatPrice(candles[hoveredCandle].close)}
                    </span>
                  </span>
                </div>
              )}
            </div>

            {/* Chart area */}
            <div className="relative h-[300px] md:h-[380px] flex">
              {/* Y-axis price labels */}
              <div className="w-14 shrink-0 flex flex-col justify-between py-1 pr-2">
                {priceLevels
                  .slice()
                  .reverse()
                  .map((p, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-on-surface-variant font-mono text-right"
                    >
                      ${formatPrice(p)}
                    </span>
                  ))}
              </div>

              {/* Chart */}
              <div className="flex-1 relative border-l border-b border-outline-variant/10">
                {/* Grid lines */}
                {priceLevels.map((p, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 border-t border-outline-variant/5"
                    style={{ top: `${toY(p)}%` }}
                  />
                ))}

                {/* Candles */}
                <div
                  className="absolute inset-0 flex items-stretch"
                  style={{ padding: "0 4px" }}
                >
                  {candles.map((candle, i) => {
                    const isGreen = candle.close >= candle.open;
                    const bodyTop = toY(Math.max(candle.open, candle.close));
                    const bodyBottom = toY(Math.min(candle.open, candle.close));
                    const bodyHeight = Math.max(bodyBottom - bodyTop, 0.5);
                    const wickTop = toY(candle.high);
                    const wickBottom = toY(candle.low);
                    const isHovered = hoveredCandle === i;

                    return (
                      <div
                        key={i}
                        className="flex-1 relative cursor-crosshair"
                        onMouseEnter={() => setHoveredCandle(i)}
                        onMouseLeave={() => setHoveredCandle(null)}
                      >
                        {/* Hover highlight */}
                        {isHovered && (
                          <div className="absolute inset-0 bg-primary/5 rounded-sm" />
                        )}

                        {/* Wick */}
                        <div
                          className="absolute left-1/2 -translate-x-1/2"
                          style={{
                            top: `${wickTop}%`,
                            height: `${wickBottom - wickTop}%`,
                            width: "1px",
                            backgroundColor: isGreen
                              ? "rgba(155, 255, 206, 0.5)"
                              : "rgba(255, 110, 132, 0.5)",
                          }}
                        />

                        {/* Body */}
                        <div
                          className="absolute left-[15%] right-[15%] rounded-[1px] transition-opacity"
                          style={{
                            top: `${bodyTop}%`,
                            height: `${bodyHeight}%`,
                            minHeight: "1px",
                            backgroundColor: isGreen
                              ? isHovered
                                ? "#9bffce"
                                : "rgba(155, 255, 206, 0.7)"
                              : isHovered
                              ? "#ff6e84"
                              : "rgba(255, 110, 132, 0.7)",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Current price line */}
                {lastCandle && (
                  <div
                    className="absolute left-0 right-0 flex items-center pointer-events-none"
                    style={{ top: `${toY(lastCandle.close)}%` }}
                  >
                    <div
                      className={`flex-1 border-t border-dashed ${
                        priceChange >= 0
                          ? "border-tertiary/40"
                          : "border-error/40"
                      }`}
                    />
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm ml-1 ${
                        priceChange >= 0
                          ? "bg-tertiary/20 text-tertiary"
                          : "bg-error/20 text-error"
                      }`}
                    >
                      ${formatPrice(lastCandle.close)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* X-axis time labels */}
            <div className="flex items-center justify-between pl-14 pt-2">
              {timeLabels.map((label, i) => (
                <span
                  key={i}
                  className="text-[10px] text-on-surface-variant font-mono"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Volume bars (decorative) */}
            <div className="flex items-end gap-[1px] h-10 pl-14 mt-2 opacity-40">
              {candles.map((candle, i) => {
                const isGreen = candle.close >= candle.open;
                const bodySize = Math.abs(candle.close - candle.open);
                const volHeight = 20 + ((bodySize / (chartRange || 1)) * 300) + ((i * 37) % 40);
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-[1px] ${
                      isGreen ? "bg-tertiary/40" : "bg-error/30"
                    }`}
                    style={{ height: `${Math.min(volHeight, 100)}%` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
