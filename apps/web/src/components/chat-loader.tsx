"use client";

import { useEffect, useState } from "react";

interface ChatLoaderProps {
	text?: string;
}

export function ChatLoader({ text = "Processing" }: ChatLoaderProps) {
	const [dots, setDots] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => {
				if (prev.length >= 3) return "";
				return prev + ".";
			});
		}, 400);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex max-w-[80%] items-center space-x-2 rounded-lg bg-secondary p-3">
			<div className="flex space-x-1">
				<div
					className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
					style={{ animationDelay: "0ms" }}
				></div>
				<div
					className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
					style={{ animationDelay: "150ms" }}
				></div>
				<div
					className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
					style={{ animationDelay: "300ms" }}
				></div>
			</div>
			<span className="min-w-[100px] text-muted-foreground">
				{text}
				{dots}
			</span>
		</div>
	);
}
