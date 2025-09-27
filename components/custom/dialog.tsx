"use client"

import * as React from "react"

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface DialogContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextType | null>(null)

export function Dialog({ open = false, onOpenChange, children }: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(open)

  React.useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  return (
    <DialogContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>{children}</DialogContext.Provider>
  )
}

export function DialogTrigger({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const context = React.useContext(DialogContext)

  const handleClick = () => {
    context?.onOpenChange(true)
  }

  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  )
}

export function DialogContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(DialogContext)

  if (!context?.open) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      context.onOpenChange(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleBackdropClick}>
      <div
        className={`relative bg-background p-6 shadow-lg rounded-lg border max-w-lg w-full mx-4 ${className}`}
        {...props}
      >
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => context.onOpenChange(false)}
        >
          <span className="sr-only">Close</span>✕
        </button>
        {children}
      </div>
    </div>
  )
}

export function DialogHeader({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props}>
      {children}
    </div>
  )
}

export function DialogTitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h2>
  )
}

