import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12">
                <Container className="max-w-3xl">
                    <div className="prose prose-stone dark:prose-invert mx-auto">
                        <h1>Privacy Policy</h1>
                        <p className="text-muted-foreground">Last updated: December 5, 2025</p>

                        <p>
                            At Unstory.live, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
                        </p>

                        <h2>Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us, such as when you create an account, write a story, or communicate with us. This may include your name, email address, and profile picture.
                        </p>

                        <h2>How We Use Your Information</h2>
                        <p>
                            We use your information to provide, maintain, and improve our services, such as to publish your stories, personalize your experience, and communicate with you.
                        </p>

                        <h2>Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at privacy@unstory.live.
                        </p>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
