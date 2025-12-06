import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Heart, Share2, Bookmark, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock Data
const STORY = {
    title: "The Art of Slow Living in a Fast World",
    subtitle: "Why we need to disconnect to reconnect with ourselves.",
    author: {
        name: "Elena Fisher",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Elena",
        bio: "Writer, thinker, and slow living enthusiast."
    },
    date: "October 24, 2023",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1499750310159-5b9887039e54?q=80&w=2500&auto=format&fit=crop",
    content: `
		<p>In a world that constantly demands our attention, finding moments of stillness can feel like a rebellious act. We are conditioned to believe that productivity is the ultimate measure of our worth, yet deep down, we crave a different kind of existence.</p>
		<p>I remember the first time I truly disconnected. It wasn't a planned digital detox or a retreat in Bali. It was a Tuesday evening when my internet went down.</p>
		<h2>The Silence of Disconnection</h2>
		<p>At first, the silence was deafening. My hand instinctively reached for my phone, only to remember it was useless without a connection. But as the minutes turned into hours, something shifted.</p>
		<blockquote>"Almost everything will work again if you unplug it for a few minutes, including you." — Anne Lamott</blockquote>
		<p>We often forget that we are human beings, not human doings. The art of slow living isn't about doing nothing; it's about doing things with intention. It's about savoring the morning coffee, listening to the rain against the window, and being fully present in conversations.</p>
		<p>When we slow down, we give ourselves permission to feel. We allow our thoughts to wander without the constant interruption of notifications. We reconnect with the rhythm of our own breath.</p>
	`,
};

export default function StoryPage({ params }: { params: { slug: string } }) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />

            <main className="flex-1 pb-24">
                {/* Cover Image */}
                <div className="relative h-[40vh] w-full md:h-[50vh]">
                    <Image
                        src={STORY.coverImage}
                        alt={STORY.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                </div>

                <Container className="relative -mt-32 max-w-3xl">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                            {STORY.title}
                        </h1>
                        <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                            {STORY.subtitle}
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <Avatar className="h-12 w-12 border border-border">
                                <AvatarImage src={STORY.author.avatar} alt={STORY.author.name} />
                                <AvatarFallback>{STORY.author.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                                <p className="font-medium text-foreground">{STORY.author.name}</p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {STORY.date}</span>
                                    <span>·</span>
                                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {STORY.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <article
                        className="prose prose-lg prose-stone dark:prose-invert mx-auto first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-foreground"
                        dangerouslySetInnerHTML={{ __html: STORY.content }}
                    />

                    {/* Actions */}
                    <div className="mt-16 border-t border-border pt-12">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10">
                                    <Heart className="h-5 w-5" />
                                    <span>243</span>
                                </Button>
                                <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                                    <Bookmark className="h-5 w-5" />
                                </Button>
                            </div>
                            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                                <Share2 className="h-5 w-5" />
                                <span>Share</span>
                            </Button>
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="mt-12 rounded-xl bg-secondary/30 p-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16 border border-border">
                                <AvatarImage src={STORY.author.avatar} alt={STORY.author.name} />
                                <AvatarFallback>{STORY.author.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-display text-lg font-bold text-foreground">Written by {STORY.author.name}</h3>
                                <p className="text-muted-foreground">{STORY.author.bio}</p>
                                <Button variant="link" className="px-0 text-primary">View Profile</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
