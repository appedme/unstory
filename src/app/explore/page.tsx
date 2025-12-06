import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StoryCard } from "@/components/ui/StoryCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Data
const TRENDING = [
    {
        title: "The Future of AI in Creative Writing",
        excerpt: "Will AI replace writers or become their most powerful tool? Exploring the intersection of technology and art...",
        coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2500&auto=format&fit=crop",
        author: { name: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah" },
        date: "Dec 01, 2023",
        readTime: "6 min read",
        slug: "ai-writing",
        appreciations: 542,
        category: "Tech"
    },
    {
        title: "Finding Silence in a Noisy World",
        excerpt: "Silence is not just the absence of noise, but a presence of peace. How to cultivate inner stillness...",
        coverImage: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2500&auto=format&fit=crop",
        author: { name: "David Miller", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=David" },
        date: "Nov 28, 2023",
        readTime: "4 min read",
        slug: "finding-silence",
        appreciations: 321,
        category: "Mindfulness"
    },
];

export default function ExplorePage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12">
                <Container>
                    <div className="mb-12 text-center">
                        <h1 className="font-display text-4xl font-bold mb-4">Explore Unstory</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover stories that matter. Hand-picked collections for every mood and moment.
                        </p>
                    </div>

                    <Tabs defaultValue="trending" className="w-full">
                        <div className="flex justify-center mb-12">
                            <TabsList className="grid w-full max-w-md grid-cols-3">
                                <TabsTrigger value="trending">Trending</TabsTrigger>
                                <TabsTrigger value="latest">Latest</TabsTrigger>
                                <TabsTrigger value="curated">Curated</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="trending" className="space-y-8">
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {TRENDING.map((story) => (
                                    <StoryCard key={story.slug} {...story} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="latest">
                            <div className="text-center py-12 text-muted-foreground">
                                Latest stories loading...
                            </div>
                        </TabsContent>

                        <TabsContent value="curated">
                            <div className="text-center py-12 text-muted-foreground">
                                Curated collections coming soon...
                            </div>
                        </TabsContent>
                    </Tabs>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
