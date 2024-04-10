import { Logo } from "@/app/SHARED/Logo/Logo";
import React from "react";

export const NavBar = () => {
	return (
		<nav className="border-box bg-primary-bg text-tx-primary sticky top-0 z-30 hidden w-full items-center justify-center bg-primary-white-color shadow-md transition-all duration-300 md:flex py-4">
			<div className="flex w-[96%] items-center justify-between sm:w-[220rem] md:w-[72rem]">
				<Logo />
				<div className="flex items-center">
					Options
					<div className="flex items-center justify-between ">
						<h1>Hello</h1>
					</div>
				</div>
			</div>
		</nav>
	);
};
