"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-red-600 p-2 rounded-xl group-hover:bg-red-700 transition-colors">
              <ShoppingCart className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-xl md:text-2xl font-black transition-colors ${
                  isScrolled ? "text-red-600" : "text-white"
                }`}
              >
                COMPREI TODOS
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/ofertas"
              className={`font-medium transition-all duration-200 hover:scale-105 ${
                isActive("/ofertas")
                  ? isScrolled
                    ? "text-red-600 font-bold"
                    : "text-yellow-300 font-bold"
                  : isScrolled
                    ? "text-gray-700 hover:text-red-600"
                    : "text-white/90 hover:text-yellow-300"
              }`}
            >
              Ofertas
            </Link>
            <Link
              href="/categorias"
              className={`font-medium transition-all duration-200 hover:scale-105 ${
                isActive("/categorias")
                  ? isScrolled
                    ? "text-red-600 font-bold"
                    : "text-yellow-300 font-bold"
                  : isScrolled
                    ? "text-gray-700 hover:text-red-600"
                    : "text-white/90 hover:text-yellow-300"
              }`}
            >
              Categorias
            </Link>
            <Link
              href="/sobre"
              className={`font-medium transition-all duration-200 hover:scale-105 ${
                isActive("/sobre")
                  ? isScrolled
                    ? "text-red-600 font-bold"
                    : "text-yellow-300 font-bold"
                  : isScrolled
                    ? "text-gray-700 hover:text-red-600"
                    : "text-white/90 hover:text-yellow-300"
              }`}
            >
              Como Funciona
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className={`font-bold py-3 px-6 rounded-full transition-all ${
                isScrolled
                  ? "bg-red-600 hover:bg-red-700 text-white shadow-lg"
                  : "bg-yellow-400 hover:bg-yellow-500 text-red-700 shadow-xl"
              }`}
              onClick={() => window.open("https://chat.whatsapp.com/HjGP23vWJu3GWP1lnDt3IR?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAadTJmGxAVpzMHFxQNXcnGmKofI3Q7mQRB9FbrIcZqyffK19Ni1N26j6h4PHsg_aem_qQ4o098G59Db6259exwWaA", "_blank", "noopener,noreferrer")}
            >
              💬 Receber Ofertas
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20 shadow-lg">
            <nav className="py-4 space-y-2">
              <Link
                href="/ofertas"
                className={`block px-4 py-3 font-medium transition-colors ${
                  isActive("/ofertas")
                    ? "text-red-600 bg-red-50 font-bold"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🔥 Ofertas
              </Link>
              <Link
                href="/categorias"
                className={`block px-4 py-3 font-medium transition-colors ${
                  isActive("/categorias")
                    ? "text-red-600 bg-red-50 font-bold"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🛍️ Categorias
              </Link>
              <Link
                href="/sobre"
                className={`block px-4 py-3 font-medium transition-colors ${
                  isActive("/sobre")
                    ? "text-red-600 bg-red-50 font-bold"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ❤️ Como Funciona
              </Link>
              <div className="px-4 pt-2">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-full"
                  onClick={() => window.open("https://chat.whatsapp.com/HjGP23vWJu3GWP1lnDt3IR?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAadTJmGxAVpzMHFxQNXcnGmKofI3Q7mQRB9FbrIcZqyffK19Ni1N26j6h4PHsg_aem_qQ4o098G59Db6259exwWaA", "_blank", "noopener,noreferrer")}
                >
                  💬 Receber Ofertas
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
