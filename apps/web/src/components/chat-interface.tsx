"use client";

import { useEffect, useRef,  type PropsWithChildren } from "react";
import { Sparkles } from "lucide-react";
import { Brain } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "~/lib/utils";
import { ChatLoader } from "./chat-loader";
import { type VerificationStep, type PreviewData } from "./chat";
import { motion } from "framer-motion";
interface Message {
	role: "user" | "assistant" | "system";
	content: string;
}

type ChatInterfaceProps = PropsWithChildren<{
	messages: Message[];
	isLoading?: boolean;
	loadingText?: string;
	stepContent?: React.ReactNode;
	step: VerificationStep;
	previewData: PreviewData;
}>;



export function ChatInterface({
	messages,
	isLoading,
	loadingText,
	children,
	previewData,
}: ChatInterfaceProps) {
	const scrollAreaRef = useRef<HTMLDivElement>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const insightsEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	useEffect(() => {	
		if (insightsEndRef.current) {
			insightsEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [previewData]);

	return (
		<div className="min-h-screen bg-black relative overflow-hidden">
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl -top-48 -left-24 animate-pulse" />
				<div className="absolute w-[400px] h-[400px] bg-green-600/10 rounded-full blur-3xl top-1/2 -right-24 animate-pulse delay-700" />
			</div>

			<div className="relative z-10 container mx-auto px-4 py-8 h-screen flex items-center">
				<div className="w-full h-[80vh] bg-black/40 backdrop-blur-xl rounded-2xl border border-green-500/20 shadow-2xl shadow-green-500/10 flex overflow-hidden">
					{/* Chat Section */}
					<div className="w-full md:w-2/3 p-6 flex flex-col">
						<div className="flex items-center gap-3 mb-6">
							<Brain className="w-8 h-8 text-green-500" />
							<h1 className="text-2xl font-bold text-white">
								FinTechBank Assistant
							</h1>
						</div>

						<ScrollArea className="flex-1 overflow-y-auto" ref={scrollAreaRef}>
							<div className="flex-1 space-y-4 mb-4">
								{messages.map((message, index) => (
									<div
										key={index}
										className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
									>
										<div
											className={cn(
												"max-w-[70%] rounded-2xl px-4 py-2",
												message.role === "user" && "bg-green-500 text-white",
												message.role === "assistant" &&
													"bg-finance-black-300 text-gray-200",
												message.role === "system" &&
													"text-muted-foreground ml-auto text-xs",
											)}
										>
											{message.content}
										</div>
									</div>
								))}
								{isLoading && (
									<div className="flex justify-start">
										<ChatLoader text={loadingText} />
									</div>
								)}
							</div>
						<div ref={messagesEndRef} />
						</ScrollArea>
						<div>{children}</div>
					</div>

					{/* Preview Section */}
					<div className="md:block hidden w-1/3 border-l border-green-500/20 p-6 bg-black/60">
						<div className="flex items-center gap-3 mb-6">
							<Sparkles className="w-6 h-6 text-green-500" />
							<h2 className="text-xl font-semibold text-white">Analysis</h2>
						</div>

						<div className="space-y-6">
							<div>
								<h3 className="text-green-500 text-sm font-medium mb-2">
									Insights
								</h3>
								<ScrollArea className="h-[200px] overflow-y-auto relative">
									<div className="absolute inset-0 pointer-events-none">
										<div className="h-full w-full bg-gradient-to-b from-black/20 via-transparent to-black/20" />
									</div>
								<ul className="space-y-2">
									{previewData.insights.map((insight, index) => (
										<motion.li 
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: index * 0.1 }}
											key={index} className={cn("text-muted-foreground text-sm", index === previewData.insights.length - 1 && "font-bold text-finance-green")}>
											{insight}
										</motion.li>
									))}
									<div ref={insightsEndRef} />
								</ul></ScrollArea>
							</div>

							<div>
								<h3 className="text-green-500 text-sm font-medium mb-2">
									Confidence Score
								</h3>
								<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
									<div
										className={cn(
											"h-full bg-green-500 transition-all duration-500",
											previewData.confidence < 0.9 && "bg-green-300",
											previewData.confidence < 0.8 && "bg-yellow-500",
											previewData.confidence < 0.6 && "bg-orange-500",
											previewData.confidence < 0.4 && "bg-red-500",
										)}
										style={{ width: `${previewData.confidence * 100}%` }}
									/>
								</div>
								<p className="text-right text-sm text-gray-400 mt-1">
									{(previewData.confidence * 100).toFixed(2) }%
								</p>
							</div>

							<div>
								<h3 className="text-green-500 text-sm font-medium mb-2">
									Category
								</h3>
								<p className="text-white bg-white/5 rounded-lg px-3 py-2 text-sm">
									{previewData.category}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
