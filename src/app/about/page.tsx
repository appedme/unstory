import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12">
                <Container className="max-w-3xl">
                    <div className="prose prose-lg prose-stone dark:prose-invert mx-auto">
                        <h1 className="font-display text-4xl font-bold text-foreground mb-8 text-center">About Unstory</h1>

                        <p className="lead text-xl text-muted-foreground mb-12 text-center">
                            Unstory is a story-first writing platform designed to help people express their experiences, ideas, emotions, and memories freely.
                        </p>

                        <h2>Our Philosophy</h2>
                        <p>
                            We believe that the internet has become too noisy. Algorithms prioritize engagement over substance, and "content" has replaced storytelling. Unstory is our answer to that.
                        </p>
                        <p>
                            We built this platform on three core principles:
                        </p>
                        <ul>
                            <li><strong>Emotional Expression:</strong> We value personal stories over SEO-optimized articles.</li>
                            <li><strong>Calm Design:</strong> A distraction-free environment that respects your attention.</li>
                            <li><strong>Human Connection:</strong> A community built on appreciation, not vanity metrics.</li>
                        </ul>

                        <h2>The Team</h2>
                        <p>
                            Unstory is built by a small team of writers and developers who missed the golden age of blogging. We wanted to create a space that feels like a cozy digital home.
                        </p>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
