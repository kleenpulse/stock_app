import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./nav-items";
import UserDropdown from "./user-dropdown";

export default function Header() {
	return (
		<header className="sticky top-0 header">
			<div className="container header-wrapper">
				<Link href="/">
					<Image
						src="/assets/icons/logo.svg"
						alt="Logo"
						width={140}
						height={32}
					/>
				</Link>
				<nav className="hidden sm:block">
					<NavItems />
				</nav>

				<UserDropdown />
			</div>
		</header>
	);
}
