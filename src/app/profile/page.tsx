"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { StoryCard } from "@/components/ui/StoryCard";
import { useStackApp } from "@stackframe/stack";
import { PenLine, Settings } from "lucide-react";

// Mock Data for User Stories
const MY_STORIES = [
    {
        title: "The Art of Slow Living in a Fast World",
        excerpt: "In a world that constantly demands our attention, finding moments of stillness can feel like a rebellious act. We are conditioned to believe that productivity is the ultimate measure...",
        coverImage: "https://images.unsplash.com/photo-1499750310159-5b9887039e54?q=80&w=2500&auto=format&fit=crop",
        author: {
            name: "You",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=You",
        },
        date: "Oct 24, 2023",
        readTime: "5 min read",
        slug: "slow-living",
        appreciations: 243,
    },
    {
        title: "Why I Stopped Using Social Media for a Week",
        excerpt: "The constant scroll was draining my creativity. I decided to take a break and see what happened. The results were unexpected and transformative...",
        coverImage: "https://images.unsplash.com/photo-1516251193000-18e6586ee186?q=80&w=2500&auto=format&fit=crop",
        author: {
            name: "You",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=You",
        },
        date: "Nov 12, 2023",
        readTime: "3 min read",
        slug: "social-media-detox",
        appreciations: 156,
    },
];

export default function ProfilePage() {
    const app = useStackApp();
    const user = app.useUser();

    if (!user) {
        return (
            <div className="flex min-h-screen flex-col bg-background">
                <Header />
                <main className="flex flex-1 items-center justify-center">
                    <div className="text-center">
                        <h1 className="mb-4 font-display text-2xl font-bold">Please Sign In</h1>
                        <p className="mb-6 text-muted">You need to be signed in to view your profile.</p>
                        <Link href="/handler/sign-in">
                            <Button>Sign In</Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />

            <main className="flex-1 py-12">
                <Container>
                    {/* Profile Header */}
                    <div className="mb-16 flex flex-col items-center text-center">
                        <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-secondary">
                            <Image
                                src={user.profileImageUrl || "https://api.dicebear.com/7.x/notionists/svg?seed=User"}
                                alt={user.displayName || "User"}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h1 className="mb-2 font-display text-3xl font-bold text-primary">
                            {user.displayName || "Anonymous Writer"}
                        </h1>
                        <p className="mb-6 max-w-md text-muted">
                            Storyteller. Dreamer. Sharing my journey one word at a time.
                        </p>

                        <div className="flex items-center gap-4">
                            <Link href="/write">
                                <Button className="gap-2">
                                    <PenLine className="h-4 w-4" />
                                    Write a Story
                                </Button>
                            </Link>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Settings className="h-4 w-4" />
                                Settings
                            </Button>
                        </div>

                        <div className="mt-8 flex gap-8 border-t border-secondary pt-8">
                            <div className="text-center">
                                <p className="font-display text-2xl font-bold text-primary">12</p>
                                <p className="text-xs uppercase tracking-wider text-muted">Stories</p>
                            </div>
                            <div className="text-center">
                                <p className="font-display text-2xl font-bold text-primary">1.4k</p>
                                <p className="text-xs uppercase tracking-wider text-muted">Followers</p>
                            </div>
                            <div className="text-center">
                                <p className="font-display text-2xl font-bold text-primary">856</p>
                                <p className="text-xs uppercase tracking-wider text-muted">Following</p>
                            </div>
                        </div>
                    </div>

                    {/* Stories Grid */}
                    <div>
                        <h2 className="mb-8 font-display text-2xl font-bold text-primary">Your Stories</h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {MY_STORIES.map((story) => (
                                <StoryCard key={story.slug} {...story} />
                            ))}
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
