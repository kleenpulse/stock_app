import TradingViewWidget from "@/components/trading-view-widget";
import {
	HEATMAP_WIDGET_CONFIG,
	MARKET_DATA_WIDGET_CONFIG,
	MARKET_OVERVIEW_WIDGET_CONFIG,
	TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";
import React from "react";

const BASE_SCRIPT_URL =
	"https://s3.tradingview.com/external-embedding/embed-widget-";
export default function Home() {
	return (
		<div className="min-h-screen home-wrapper flex">
			<section className="grid w-full gap-8 home-section">
				<div className="md:col-span-1 xl:col-span-1">
					<TradingViewWidget
						title="Market Overview"
						scriptUrl={`${BASE_SCRIPT_URL}market-overview.js`}
						config={MARKET_OVERVIEW_WIDGET_CONFIG}
						className="custom-chart"
						height={600}
					/>
				</div>
				<div className="md:col-span-1 xl:col-span-2">
					<TradingViewWidget
						title="Stock Heatmap"
						scriptUrl={`${BASE_SCRIPT_URL}stock-heatmap.js`}
						config={HEATMAP_WIDGET_CONFIG}
						height={600}
					/>
				</div>
			</section>
			<section className="grid w-full gap-8 home-section">
				<div className="h-full md:col-span-1 xl:col-span-1">
					<TradingViewWidget
						scriptUrl={`${BASE_SCRIPT_URL}timeline.js`}
						config={TOP_STORIES_WIDGET_CONFIG}
						className="custom-chart"
						height={600}
					/>
				</div>
				<div className="h-full md:col-span-1 xl:col-span-2">
					<TradingViewWidget
						scriptUrl={`${BASE_SCRIPT_URL}market-quotes.js`}
						config={MARKET_DATA_WIDGET_CONFIG}
						height={600}
					/>
				</div>
			</section>
		</div>
	);
}
