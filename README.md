# AI Chart Analysis - Trading Platform

A modern React-based trading platform with dynamic candlestick charts, real-time price updates, and AI-powered analysis.

## Features

- **Dynamic Candlestick Chart** - Real-time OHLC data visualization with realistic price movement
- **Trading Sidebar** - Complete order management interface with buy/sell controls
- **Profit AI Integration** - Select chart areas to get AI-powered trading insights
- **Live Chat** - Interactive chat window with Profit AI responses
- **Responsive Design** - Fully responsive layout that adapts to any screen size
- **Account Selector** - Quick account switching with simulation mode
- **Timeline** - Day sections with countdown timer for candle updates

## Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder. The build is optimized and ready to deploy.

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **SVG** - Chart rendering
- **CSS-in-JS** - Inline styling with Flexbox and CSS Grid
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
src/
├── App.tsx           - Root component
├── Grafico.tsx       - Main trading chart component
├── index.css         - Global styles and animations
└── [SVG icons]/      - Trading and UI icons
```

## Features Overview

### Trading Chart
- 40 visible candles with OHLC data
- Auto-scaling Y-axis based on visible price range
- Grid lines with dynamic price labels
- Candlestick coloring (green = up, red = down)

### Profit AI Tool
- Click and drag to select chart areas
- Automatic input field appears below selection
- Send prompts to Profit AI for trading analysis
- Chat window opens on the right side

### Trading Controls
- Buy/Sell limit and market orders
- Order cancellation and position reversal
- Results tracking (quantity, daily results, average price)
- Quick access to trading strategies

## Deployment

The build folder is production-ready and can be deployed to any static hosting service.

## License

MIT
