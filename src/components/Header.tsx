"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  submenu?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "회사소개",
    href: "/company/about",
    submenu: [
      { label: "메타링크", href: "/company/about" },
      { label: "CEO 소개", href: "/company/ceo" },
      { label: "임직원 소개", href: "/company/team" },
    ],
  },
  {
    label: "사업분야",
    href: "/business/ai",
    submenu: [
      { label: "AI", href: "/business/ai" },
      { label: "SI/SM", href: "/business/si" },
      { label: "MARKETING", href: "/business/marketing" },
      { label: "ETC", href: "/business/etc" },
    ],
  },
  {
    label: "회사소식",
    href: "/news",
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 100)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const textColor = scrolled ? "text-black" : "text-white"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[100] w-full h-[60px] md:h-20 transition-colors duration-200 ease-linear",
        scrolled ? "bg-white border-b-0" : "bg-transparent border-b border-white/10"
      )}
    >
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="메타링크 홈">
          <Image
            src="/images/metalink-logo.png"
            alt="METALINK"
            width={150}
            height={34}
            priority
            className={cn(
              "h-[26px] w-auto md:h-[34px]",
              scrolled ? "" : "brightness-0 invert"
            )}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-stretch">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className={cn(
                    "block px-8 text-[15px] font-medium leading-[80px]",
                    textColor
                  )}
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-1/2 hidden w-[150px] -translate-x-1/2 rounded-[10px] bg-white p-[10px] shadow-[0_0_10px_rgba(0,0,0,0.1)] group-hover:block">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block py-[5px] text-center text-sm leading-[22px] text-[#666] hover:font-bold hover:text-brand"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side: contact + lang (desktop only) */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="https://www.mtlink.kr"
            target="_blank"
            rel="noreferrer"
            className={cn("text-[15px] font-medium", textColor)}
          >
            메타몰
          </a>
          <a
            href="/contact"
            className={cn("text-[15px] font-medium", textColor)}
          >
            사업문의
          </a>
          <span className={cn("flex items-center gap-1 text-[15px] font-medium", textColor)}>
            KR
            <ChevronDown className="h-4 w-4" />
          </span>
        </div>

        {/* Hamburger (mobile/tablet) */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="relative flex h-[60px] w-[60px] flex-col items-center justify-center gap-[6px] md:h-20 md:w-20 lg:hidden"
        >
          <span
            className={cn(
              "block h-[2px] w-[22px] transition-transform duration-200 ease-linear md:w-[26px]",
              menuOpen ? "translate-y-2 rotate-[135deg]" : "",
              menuOpen ? "bg-black" : textColor === "text-black" ? "bg-black" : "bg-white"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-[22px] transition-all duration-200 ease-linear md:w-[26px]",
              menuOpen ? "w-0 opacity-0" : "opacity-100",
              menuOpen ? "bg-black" : textColor === "text-black" ? "bg-black" : "bg-white"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-[22px] transition-transform duration-200 ease-linear md:w-[26px]",
              menuOpen ? "-translate-y-2 rotate-[-135deg]" : "",
              menuOpen ? "bg-black" : textColor === "text-black" ? "bg-black" : "bg-white"
            )}
          />
        </button>
      </div>

      {/* Mobile full-screen slide-in menu */}
      <div
        className={cn(
          "fixed top-0 h-screen w-full max-w-sm overflow-y-auto bg-white transition-[right] duration-200 ease-linear lg:hidden",
          menuOpen ? "right-0" : "-right-full"
        )}
      >
        <nav className="pt-[60px] md:pt-20">
          <ul>
            {NAV_ITEMS.map((item) => {
              const isOpen = openAccordion === item.label
              return (
                <li key={item.label}>
                  <div
                    className={cn(
                      "flex items-center justify-between px-5 text-xl font-bold leading-[80px]",
                      isOpen ? "bg-brand text-white" : "text-black"
                    )}
                  >
                    <a
                      href={item.href}
                      className="flex-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                    {item.submenu && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        onClick={() =>
                          setOpenAccordion(isOpen ? null : item.label)
                        }
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            isOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.submenu && isOpen && (
                    <ul className="bg-[#f5f5f5]">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-8 py-3 text-base text-[#666]"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }
