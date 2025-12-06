import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12">
                <Container className="max-w-3xl">
                    <div className="prose prose-stone dark:prose-invert mx-auto">
                        <h1>Terms of Service</h1>
                        <p className="text-muted-foreground">Last updated: December 5, 2025</p>

                        <p>
                            Welcome to Unstory.live. By accessing or using our platform, you agree to be bound by these Terms of Service.
                        </p>

                        <h2>Content Guidelines</h2>
                        <p>
                            You retain ownership of the content you post on Unstory. However, by posting, you grant us a license to display and distribute your content on our platform.
                        </p>
                        <p>
                            We do not tolerate hate speech, harassment, or illegal content. We reserve the right to remove any content that violates our community guidelines.
                        </p>

                        <h2>Account Security</h2>
                        <p>
                            You are responsible for maintaining the security of your account and password. Unstory cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
                        </p>

                        <h2>Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify you of any significant changes.
                        </p>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
