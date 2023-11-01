import clsx from 'clsx'
import React from 'react'

type boundedProps = {
    as?: React.ElementType
    className?: string
    children: React.ReactNode
}

const Bounded = ({
    as: Comp = "section",
    className,
    children,
    ...restProps
} : boundedProps ) => {
  return (
    <Comp className={clsx("px-4 py-10 md:py-14 md:px-6 lg:py-16", className)} {...restProps}>
        {children}
    </Comp>
  )
}

export default Bounded