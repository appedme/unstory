import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { StoryCard } from "@/components/ui/StoryCard";

// Mock Data
const RESULTS = [
    {
        title: "The Art of Slow Living in a Fast World",
        excerpt: "In a world that constantly demands our attention, finding moments of stillness can feel like a rebellious act...",
        coverImage: "https://images.unsplash.com/photo-1499750310159-5b9887039e54?q=80&w=2500&auto=format&fit=crop",
        author: { name: "Elena Fisher", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Elena" },
        date: "Oct 24, 2023",
        readTime: "5 min read",
        slug: "slow-living",
        appreciations: 243,
        category: "Lifestyle"
    },
    {
        title: "Digital Minimalism: Reclaiming Your Attention",
        excerpt: "Our devices are designed to be addictive. Here is how I took back control of my time and attention...",
        coverImage: "https://images.unsplash.com/photo-1516251193000-18e6586ee186?q=80&w=2500&auto=format&fit=crop",
        author: { name: "Marc Johnson", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Marc" },
        date: "Nov 12, 2023",
        readTime: "4 min read",
        slug: "digital-minimalism",
        appreciations: 189,
        category: "Tech"
    },
];

export default function SearchPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12">
                <Container>
                    <div className="mx-auto max-w-2xl mb-12">
                        <h1 className="font-display text-3xl font-bold mb-6 text-center">Search Stories</h1>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search by title, author, or tag..."
                                    className="pl-10 h-12 text-lg"
                                />
                            </div>
                            <Button size="icon" variant="outline" className="h-12 w-12">
                                <SlidersHorizontal className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {["Life", "Tech", "Growth", "Creativity", "Mindfulness"].map((tag) => (
                                <Button key={tag} variant="secondary" size="sm" className="rounded-full">
                                    {tag}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {RESULTS.map((story) => (
                            <StoryCard key={story.slug} {...story} />
                        ))}
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
