"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/custom/button"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/theory", label: "Lý thuyết nền tảng" },
  { href: "/policy", label: "Chính sách VN" },
  { href: "/practice", label: "Thực tiễn" },
  { href: "/solutions", label: "Giải pháp" },
  { href: "/qa", label: "Hỏi đáp" },
  { href: "/ai-usage", label: "AI Usage" },
  { href: "/summary", label: "Tổng kết" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-heading text-xl font-black text-primary">
            Tôn giáo & Mác-Lênin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
