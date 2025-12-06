import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div
            className={clsx(
                "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
