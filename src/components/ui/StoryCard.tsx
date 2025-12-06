import Image from "next/image";
import Link from "next/link";
import { Heart, Clock } from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface StoryCardProps {
    title: string;
    excerpt: string;
    coverImage: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    readTime: string;
    slug: string;
    appreciations: number;
    category?: string;
}

export function StoryCard({
    title,
    excerpt,
    coverImage,
    author,
    date,
    readTime,
    slug,
    appreciations,
    category,
}: StoryCardProps) {
    return (
        <Link href={`/story/${slug}`} className="group block h-full">
            <Card className="h-full overflow-hidden border-border/50 bg-card transition-all hover:border-primary/20 hover:shadow-lg">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {category && (
                        <Badge variant="secondary" className="absolute left-4 top-4 backdrop-blur-md bg-background/80">
                            {category}
                        </Badge>
                    )}
                </div>

                <CardHeader className="p-6 pb-2">
                    <div className="mb-3 flex items-center gap-3">
                        <Avatar className="h-8 w-8 border border-border">
                            <AvatarImage src={author.avatar} alt={author.name} />
                            <AvatarFallback>{author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-xs text-muted-foreground">
                            <span className="font-medium text-foreground">{author.name}</span>
                            <span className="mx-1">·</span>
                            <span>{date}</span>
                        </div>
                    </div>
                    <h3 className="font-display text-xl font-bold leading-tight text-foreground group-hover:text-primary/80 transition-colors">
                        {title}
                    </h3>
                </CardHeader>

                <CardContent className="p-6 pt-2">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                        {excerpt}
                    </p>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-accent transition-colors">
                        <Heart className="h-3.5 w-3.5" />
                        <span>{appreciations}</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
