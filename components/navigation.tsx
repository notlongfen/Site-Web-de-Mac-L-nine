"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/custom/button"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { href: "/theory", label: "Lý thuyết" },
  { href: "/policy", label: "Chính sách Việt Nam" },
  { href: "/practice", label: "Thực tiễn" },
  { href: "/solutions", label: "Vận dụng" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className={`flex items-center space-x-3 transition-colors ${
            pathname === "/" ? "opacity-100" : "opacity-80 hover:opacity-100"
          }`}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/vi/9/9b/Logo_Ban_T%C3%B4n_gi%C3%A1o_Ch%C3%ADnh_ph%E1%BB%A7.png"
              alt="Logo Ban Tôn giáo Chính phủ"
              width={40}
              height={40}
              className="rounded"
            />
            <span className={`font-heading text-xl font-black ${
              pathname === "/" ? "text-primary" : "text-foreground"
            }`}>MLN131</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? "text-primary bg-primary/10 border-b-2 border-primary"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
