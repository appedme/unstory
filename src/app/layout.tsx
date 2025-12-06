import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import { Playfair_Display, Inter, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const lora = Lora({
	variable: "--font-lora",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Unstory.live",
	description: "A Story-First, Emotion-Driven Blogging Platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${playfair.variable} ${inter.variable} ${lora.variable} antialiased font-sans`}>
				<StackProvider app={stackClientApp}>
					<StackTheme>
						{children}
					</StackTheme>
				</StackProvider>
			</body>
		</html>
	);
}
