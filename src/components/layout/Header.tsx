"use client";

import Link from "next/link";
import { Search, PenLine, Menu } from "lucide-react";
import { UserButton } from "@stackframe/stack";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <Container className="flex h-16 items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="font-display text-2xl font-bold tracking-tight text-primary">
                        Unstory
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/explore" className="hover:text-primary transition-colors">Explore</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    </nav>
                </div>

                {/* Search Bar (Desktop) */}
                <div className="hidden md:flex flex-1 max-w-sm items-center relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search stories..."
                        className="w-full bg-secondary/50 pl-9 focus-visible:bg-background transition-colors"
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Mobile Search Trigger (could be a full search bar in sheet or toggle) */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Link href="/write" className="hidden sm:block">
                        <Button className="gap-2 rounded-full" size="sm">
                            <PenLine className="h-4 w-4" />
                            Write
                        </Button>
                    </Link>

                    <div className="ml-2">
                        <UserButton />
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8">
                                <Link href="/explore" className="text-lg font-medium">Explore</Link>
                                <Link href="/about" className="text-lg font-medium">About</Link>
                                <Link href="/write" className="text-lg font-medium">Write a Story</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    );
}
