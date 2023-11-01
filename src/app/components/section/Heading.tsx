import clsx from 'clsx'

type Heading = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    size?: "xl" | "lg" | "md" | "sm"
    children: React.ReactNode
    className?: string
}

const Heading = ({
    as: Comp = "h1",
    className,
    children,
    size = 'lg'
}: Heading) => {
    return (
        <Comp className={clsx('',
            size === "xl" && "text-5xl md:text-7xl",
            size === "lg" && "text-4xl md:text-5xl",
            size === "md" && "text-3xl md:text-4xl",
            size === "sm" && "text-2xl md:text-3xl",
            className)}>
            {children}
        </Comp>
    )
}

export default Heading