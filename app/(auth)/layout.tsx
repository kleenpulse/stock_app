import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="auth-layout">
			<section className="auth-left-section scrollbar-hide-default">
				<Link href="/" className="auth-logo">
					<Image
						src={"/assets/icons/logo.svg"}
						alt="Logo"
						width={140}
						height={32}
						className="h-8 w-auto"
					/>
				</Link>

				<div className="pb-6 lg:pb-8 flex-1">{children}</div>
			</section>

			<section className="auth-right-section">
				<div className="z-10 relative lg:mt-4 lg:mb-16">
					<blockquote className="auth-blockquote">
						StockAI turned my trading around. The AI-driven insights are
						invaluable!
					</blockquote>

					<div className="flex items-center justify-between">
						<div>
							<cite className="mt-2 block">- Alex P.</cite>
							<p className="max-md:text-xs text-gray-500">
								CEO at FinTech Solutions
							</p>
						</div>
						<div className="flex items-center gap-0.5">
							{[...Array(5)].map((_, i) => (
								<Image
									key={i}
									src="/assets/icons/star.svg"
									alt="Star"
									width={20}
									height={20}
									className="size-5"
								/>
							))}
						</div>
					</div>
				</div>

				<div className="flex-1 relative">
					<Image
						src="/assets/images/dashboard.png"
						alt="Dashboard"
						width={1440}
						height={1150}
						className="auth-dashboard-preview absolute top-0"
					/>
				</div>
			</section>
		</main>
	);
}
