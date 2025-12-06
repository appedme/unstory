import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function DMCAPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 py-12">
                <Container className="max-w-3xl">
                    <div className="prose prose-stone dark:prose-invert mx-auto">
                        <h1>DMCA Policy</h1>
                        <p>
                            Unstory.live respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond to claims of copyright infringement.
                        </p>

                        <h2>Reporting Infringement</h2>
                        <p>
                            If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:
                        </p>
                        <ul>
                            <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
                            <li>Identification of the copyrighted work claimed to have been infringed.</li>
                            <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity.</li>
                            <li>Your contact information, including address, telephone number, and email address.</li>
                        </ul>

                        <h2>Counter-Notification</h2>
                        <p>
                            If you believe that your content was removed by mistake, you may file a counter-notification with us.
                        </p>

                        <h2>Contact</h2>
                        <p>
                            Please send DMCA notices to dmca@unstory.live.
                        </p>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
