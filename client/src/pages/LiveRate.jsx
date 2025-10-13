// TradingViewWidget.jsx
import React, { useEffect, useRef, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';

function LiveRate() {
  const { t } = useTranslation();
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

  return (
    <div className="py-8 px-4 sm:py-12 sm:px-6 lg:py-20 lg:px-40">
      {/* Tab Container */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex rounded-full p-1 bg-gray-100 dark:bg-neutral-800">
          <button
            type="button"
            onClick={() => setActiveTab('oz')}
            className={
              activeTab === 'oz'
                ? 'px-3 py-2 sm:px-4 rounded-full text-sm font-semibold border bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                : 'px-3 py-2 sm:px-4 rounded-full text-sm font-semibold border bg-white text-black border-gray-300 dark:bg-neutral-900 dark:text-white dark:border-neutral-700'
            }
          >
            {t('liveRate.tabs.goldOz')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('g')}
            className={
              activeTab === 'g'
                ? 'ml-2 px-3 py-2 sm:px-4 rounded-full text-sm font-semibold border bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                : 'ml-2 px-3 py-2 sm:px-4 rounded-full text-sm font-semibold border bg-white text-black border-gray-300 dark:bg-neutral-900 dark:text-white dark:border-neutral-700'
            }
          >
            {t('liveRate.tabs.goldG')}
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-black text-xl sm:text-2xl font-playfair font-bold mb-3">
        {activeTab === 'oz' ? t('liveRate.title.goldOz') : t('liveRate.title.goldG')}
      </h2>

      {/* TradingView Container */}
      <div className="tradingview-widget-container w-full" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default memo(LiveRate);
