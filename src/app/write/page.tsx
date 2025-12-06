"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import Editor from "@/components/editor/Editor";
import { Button } from "@/components/ui/button";
import { useStackApp } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export default function WritePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState<any>([]);
    const [isPublishing, setIsPublishing] = useState(false);
    const app = useStackApp();
    const user = app.useUser();
    const router = useRouter();

    // Simple client-side protection for now
    // Ideally this should be done via middleware or server component, but for MVP client check is ok
    if (!user) {
        // router.push("/handler/sign-in"); // Stack Auth handles this usually, but explicit redirect is good
        // return null;
    }

    const handlePublish = async () => {
        setIsPublishing(true);
        // Mock publish
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log({ title, content });
        setIsPublishing(false);
        router.push("/"); // Redirect to home for now
    };

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />

            <main className="flex-1 py-12">
                <Container className="max-w-3xl">
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full border-none bg-transparent p-0 text-4xl font-display font-bold text-primary placeholder:text-muted/50 focus:ring-0"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus
                        />
                    </div>

                    <Editor onChange={setContent} />

                    <div className="fixed bottom-8 right-8 sm:bottom-12 sm:right-12">
                        <Button size="lg" onClick={handlePublish} isLoading={isPublishing} disabled={!title || !content || content.length === 0}>
                            Publish
                        </Button>
                    </div>
                </Container>
            </main>
        </div>
    );
}
