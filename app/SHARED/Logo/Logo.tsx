import React from "react";
import logoImage from "../../../public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/" className="w-full">
			<Image
				className="p-0  h-[55px] w-[18.4%]"
				src={logoImage}
				alt="landing Page Logo"
			/>
		</Link>
	);
};
