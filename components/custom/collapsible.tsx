"use client"

import * as React from "react"

interface CollapsibleProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface CollapsibleContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const CollapsibleContext = React.createContext<CollapsibleContextType | null>(null)

export function Collapsible({ open = false, onOpenChange, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = React.useState(open)

  React.useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  return (
    <CollapsibleContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </CollapsibleContext.Provider>
  )
}

export function CollapsibleTrigger({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const context = React.useContext(CollapsibleContext)

  const handleClick = () => {
    context?.onOpenChange(!context.open)
  }

  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  )
}

export function CollapsibleContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(CollapsibleContext)

  if (!context?.open) return null

  return (
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${className}`} {...props}>
      {children}
    </div>
  )
}
