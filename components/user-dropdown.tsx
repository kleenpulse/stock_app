"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./nav-items";

const user = {
	name: "Tom Cook",
	email: "Tt0pF@example.com",
};

export default function UserDropdown() {
	const router = useRouter();

	const handleSignOut = () => {
		// Perform sign-out logic here (e.g., clear auth tokens, update state)
		// After signing out, redirect to the homepage
		router.push("/");
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
				>
					<Avatar className="size-8">
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
							{user.name[0]}
						</AvatarFallback>
					</Avatar>

					<div className="hidden md:flex flex-col items-start">
						<span className="text-base font-medium text-gray-400">
							{user.name}
						</span>
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="text-gray-400">
				<DropdownMenuLabel>
					<div className="flex relative items-center gap-3 py-2">
						<Avatar className="size-10">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
								{user.name[0]}
							</AvatarFallback>
						</Avatar>

						<div className="flex flex-col items-start">
							<span className="text-base font-medium text-gray-400">
								{user.name}
							</span>
							<span className="text-sm text-gray-500 ">{user.email}</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-gray-600" />
				<DropdownMenuItem
					onClick={handleSignOut}
					className="cursor-pointer font-medium text-gray-100 focus:bg-transparent focus:text-yellow-500 transition-colors"
				>
					<LogOut className="size-4 mr-2 hidden sm:block" />
					LogOut
				</DropdownMenuItem>
				<DropdownMenuSeparator className="bg-gray-600  sm:hidden" />
				<nav className="sm:hidden">
					<NavItems />
				</nav>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
