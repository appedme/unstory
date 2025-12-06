import Link from "next/link";
import { Container } from "./Container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-secondary/30 py-12 mt-auto">
            <Container>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-primary">
                            Unstory
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                            A story-first platform designed for flow state writing and immersive reading.
                            Share your voice without distractions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/explore" className="hover:text-primary transition-colors">Explore</Link></li>
                            <li><Link href="/write" className="hover:text-primary transition-colors">Start Writing</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link></li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Unstory.live. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
