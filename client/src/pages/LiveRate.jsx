// TradingViewWidget.jsx
import React, { useEffect, useRef, useState, memo } from 'react';

function LiveRate() {
  const containerRef = useRef();
  const [activeTab, setActiveTab] = useState('oz'); // 'oz' | 'g'

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // Clear previous widget (if any) before embedding a new one
    containerEl.innerHTML = '<div class="tradingview-widget-container__widget"></div>';

    const symbol = activeTab === 'oz' ? 'FX_IDC:XAUUSD' : 'FX_IDC:XAUUSDG';
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `{
      "allow_symbol_change": false,
      "calendar": false,
      "details": false,
      "hide_side_toolbar": true,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "hide_volume": true,
      "hotlist": false,
      "interval": "D",
      "locale": "en",
      "save_image": false,
      "style": "1",
      "symbol": "${symbol}",
      "theme": "dark",
      "timezone": "Etc/UTC",
      "backgroundColor": "#0F0F0F",
      "gridColor": "rgba(242, 242, 242, 0.06)",
      "watchlist": [],
      "withdateranges": true,
      "compareSymbols": [],
      "studies": [],
      "width": "100%",
      "height": 480
    }`;
    containerEl.appendChild(script);
  }, [activeTab]);

  const tabBaseStyle = {
    padding: '8px 16px',
    borderRadius: 9999,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    margin: '0 6px',
    border: '1px solid #ccc',
    background: '#fff',
    color: '#000',
  };

  const tabActiveStyle = {
    ...tabBaseStyle,
    background: '#000',
    color: '#fff',
    border: '1px solid #000',
  };

  return (
    <div className="py-20 px-40">
      <div className="flex justify-center mb-4">
        <div className="inline-flex rounded-full p-1 bg-gray-100 dark:bg-neutral-800">
          <button
            type="button"
            onClick={() => setActiveTab('oz')}
            className={`${
              /* active */
              true
            }` && (activeTab === 'oz'
              ? 'px-4 py-2 rounded-full text-sm font-semibold border bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
              : 'px-4 py-2 rounded-full text-sm font-semibold border bg-white text-black border-gray-300 dark:bg-neutral-900 dark:text-white dark:border-neutral-700')}
          >
            Gold/oz
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('g')}
            className={activeTab === 'g'
              ? 'ml-2 px-4 py-2 rounded-full text-sm font-semibold border bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
              : 'ml-2 px-4 py-2 rounded-full text-sm font-semibold border bg-white text-black border-gray-300 dark:bg-neutral-900 dark:text-white dark:border-neutral-700'}
          >
            Gold/g
          </button>
        </div>
      </div>
      <h2 className="text-black text-2xl font-playfair font-bold mb-3">
        {activeTab === 'oz' ? 'GOLD/oz' : 'GOLD/g'}
      </h2>
      <div className="tradingview-widget-container w-full" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default memo(LiveRate);
