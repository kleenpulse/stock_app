"use client";
import useTradingView from "@/hooks/use-trading-view";
import { cn } from "@/lib/utils";
import { memo } from "react";

type Props = {
	title?: string;
	scriptUrl: string;
	config: Record<string, unknown>;
	height?: number;
	className?: string;
};

function TradingViewWidget({
	title,
	scriptUrl,
	config,
	className,
	height = 600,
}: Props) {
	const containerRef = useTradingView(scriptUrl, config, height);

	return (
		<div className="w-full">
			{title && (
				<h2 className="mb-4 text-2xl font-semibold text-gray-100">{title}</h2>
			)}
			<div
				className={cn("tradingview-widget-container", className)}
				ref={containerRef}
			>
				<div
					className="tradingview-widget-container__widget"
					style={{ height: height, width: "100%" }}
				/>
			</div>
		</div>
	);
}

export default memo(TradingViewWidget);
