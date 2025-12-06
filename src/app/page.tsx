"use client";

import Link from "next/link";
import { ArrowRight, PenTool, BookOpen, Heart, Sparkles, Feather } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 }
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
};

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-background selection:bg-primary/10">
			<Header />

			<main className="flex-1">
				{/* Hero Section */}
				<section className="relative overflow-hidden py-24 sm:py-32 lg:pb-40 xl:pb-48">
					<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),theme(colors.background))]" />

					<Container>
						<motion.div
							className="mx-auto max-w-3xl text-center"
							initial="initial"
							animate="animate"
							variants={staggerContainer}
						>
							<motion.div variants={fadeInUp} className="mb-8 flex justify-center">
								<div className="rounded-full bg-secondary/50 px-3 py-1 text-sm leading-6 text-primary ring-1 ring-inset ring-primary/10 backdrop-blur-sm">
									<span className="flex items-center gap-1">
										<Sparkles className="h-4 w-4 text-yellow-500" />
										Rediscover the joy of writing
									</span>
								</div>
							</motion.div>

							<motion.h1
								variants={fadeInUp}
								className="font-display text-5xl font-bold tracking-tight text-primary sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-2"
							>
								Where your story <br className="hidden sm:block" /> finds its home.
							</motion.h1>

							<motion.p variants={fadeInUp} className="mt-6 text-xl leading-8 text-muted-foreground">
								Unstory is a sanctuary for your thoughts. Express your experiences, ideas, and emotions freely in a distraction-free environment designed for flow.
							</motion.p>

							<motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-x-6">
								<Link href="/write">
									<Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:scale-105">
										Start Writing
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
								<Link href="/explore">
									<Button variant="outline" size="lg" className="h-12 px-8 text-base backdrop-blur-sm hover:bg-secondary/50">
										Read Stories
									</Button>
								</Link>
							</motion.div>
						</motion.div>
					</Container>
				</section>

				{/* Features Section */}
				<section className="py-24 sm:py-32 bg-secondary/20">
					<Container>
						<div className="mx-auto max-w-2xl text-center mb-16">
							<h2 className="text-base font-semibold leading-7 text-primary/60">Philosophy</h2>
							<p className="mt-2 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
								Designed for Flow & Emotion
							</p>
						</div>

						<motion.div
							className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={staggerContainer}
						>
							{[
								{
									icon: Feather,
									title: "Flow-State Writing",
									description: "A distraction-free editor that feels like a premium notebook. Auto-save, minimal toolbar, and pure focus."
								},
								{
									icon: BookOpen,
									title: "Immersive Reading",
									description: "Typography designed for long reading sessions. No clutter, just the story and the connection it brings."
								},
								{
									icon: Heart,
									title: "Safe Community",
									description: "No toxicity or vanity metrics. We replace likes with 'Appreciations' to foster genuine human connection."
								}
							].map((feature, index) => (
								<motion.div key={index} variants={fadeInUp}>
									<Card className="h-full border-none shadow-md bg-background/50 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1">
										<CardHeader>
											<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
												<feature.icon className="h-6 w-6" />
											</div>
											<CardTitle className="font-display text-xl">{feature.title}</CardTitle>
										</CardHeader>
										<CardContent>
											<p className="text-muted-foreground leading-relaxed">
												{feature.description}
											</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>
					</Container>
				</section>

				{/* CTA Section */}
				<section className="relative py-24 sm:py-32">
					<Container>
						<div className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
							<h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
								Ready to share your story?
							</h2>
							<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
								Join a community of writers and readers who value depth, authenticity, and the art of storytelling.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<Link href="/write">
									<Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold text-primary shadow-sm hover:bg-secondary/90">
										Get started today
									</Button>
								</Link>
							</div>
							<svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
								<circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
								<defs>
									<radialGradient id="gradient">
										<stop stopColor="#7775D6" />
										<stop offset="1" stopColor="#E935C1" />
									</radialGradient>
								</defs>
							</svg>
						</div>
					</Container>
				</section>
			</main>
			<Footer />
		</div>
	);
}
