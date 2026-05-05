interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
}

export function calculateRSI(candles: Candle[], period: number = 14): number[] {
  const rsi: number[] = [];
  const gains: number[] = [];
  const losses: number[] = [];

  for (let i = 0; i < candles.length; i++) {
    if (i === 0) {
      rsi.push(50);
      gains.push(0);
      losses.push(0);
      continue;
    }

    const change = candles[i].close - candles[i - 1].close;
    const gain = change > 0 ? change : 0;
    const loss = change < 0 ? -change : 0;

    gains.push(gain);
    losses.push(loss);

    if (i < period) {
      const avgGain = gains.slice(0, i + 1).reduce((a, b) => a + b, 0) / (i + 1);
      const avgLoss = losses.slice(0, i + 1).reduce((a, b) => a + b, 0) / (i + 1);
      const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      rsi.push(100 - 100 / (1 + rs));
    } else {
      const prevAvgGain = gains.slice(i - period, i).reduce((a, b) => a + b, 0) / period;
      const prevAvgLoss = losses.slice(i - period, i).reduce((a, b) => a + b, 0) / period;
      const rs = prevAvgLoss === 0 ? 100 : prevAvgGain / prevAvgLoss;
      rsi.push(100 - 100 / (1 + rs));
    }
  }

  return rsi;
}

export function calculateMACD(
  candles: Candle[],
  fastPeriod: number = 12,
  slowPeriod: number = 26,
  signalPeriod: number = 9
) {
  const ema12 = calculateEMA(candles.map(c => c.close), fastPeriod);
  const ema26 = calculateEMA(candles.map(c => c.close), slowPeriod);

  const macdLine = ema12.map((val, i) => val - ema26[i]);
  const signalLine = calculateEMA(macdLine, signalPeriod);
  const histogram = macdLine.map((val, i) => val - (signalLine[i] || 0));

  return { macdLine, signalLine, histogram };
}

function calculateEMA(prices: number[], period: number): number[] {
  const ema: number[] = [];
  const multiplier = 2 / (period + 1);

  if (prices.length === 0) return ema;

  let sum = 0;
  for (let i = 0; i < Math.min(period, prices.length); i++) {
    sum += prices[i];
  }

  const firstEMA = sum / Math.min(period, prices.length);
  ema.push(firstEMA);

  for (let i = 1; i < prices.length; i++) {
    const newEMA = (prices[i] - ema[ema.length - 1]) * multiplier + ema[ema.length - 1];
    ema.push(newEMA);
  }

  return ema;
}

export function calculateATR(candles: Candle[], period: number = 14): number[] {
  const atr: number[] = [];
  let trSum = 0;

  for (let i = 0; i < candles.length; i++) {
    const high = candles[i].high;
    const low = candles[i].low;
    let tr = high - low;

    if (i > 0) {
      tr = Math.max(tr, Math.abs(high - candles[i - 1].close), Math.abs(low - candles[i - 1].close));
    }

    if (i < period) {
      trSum += tr;
      atr.push(i === period - 1 ? trSum / period : 0);
    } else {
      const newATR = (atr[i - 1] * (period - 1) + tr) / period;
      atr.push(newATR);
    }
  }

  return atr;
}

export function calculateADX(candles: Candle[], period: number = 14): number[] {
  const adx: number[] = [];

  for (let i = 0; i < candles.length; i++) {
    if (i < period) {
      adx.push(20);
      continue;
    }

    let plusDM = 0;
    let minusDM = 0;
    let tr = 0;

    for (let j = i - period + 1; j <= i; j++) {
      const high = candles[j].high;
      const low = candles[j].low;
      const prevClose = j > 0 ? candles[j - 1].close : candles[j].close;

      const highDiff = high - (j > 0 ? candles[j - 1].high : high);
      const lowDiff = (j > 0 ? candles[j - 1].low : low) - low;

      if (highDiff > 0 && highDiff > lowDiff) plusDM += highDiff;
      if (lowDiff > 0 && lowDiff > highDiff) minusDM += lowDiff;

      const trueRange = Math.max(
        high - low,
        Math.abs(high - prevClose),
        Math.abs(low - prevClose)
      );
      tr += trueRange;
    }

    const plusDI = (plusDM / tr) * 100;
    const minusDI = (minusDM / tr) * 100;
    const diDiff = Math.abs(plusDI - minusDI);
    const diSum = plusDI + minusDI;

    const dx = diSum > 0 ? (diDiff / diSum) * 100 : 0;
    const prevADX = adx[adx.length - 1];
    const newADX = (prevADX * (period - 1) + dx) / period;

    adx.push(newADX);
  }

  return adx;
}
