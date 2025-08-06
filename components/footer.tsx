"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingCart className="h-6 w-6 text-red-500" />
              <h4 className="text-xl font-bold">COMPREI TODOS</h4>
            </div>
            <p className="text-gray-400">Encontramos os melhores achados da Shopee para você economizar sempre!</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Links Úteis</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="hover:text-white transition-colors">
                  Melhores ofertas
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-white transition-colors">
                  Categorias
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Suporte</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-white transition-colors">
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Redes Sociais</h5>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/compreitodos/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                📱 Instagram
              </a>
              <a href="https://chat.whatsapp.com/HjGP23vWJu3GWP1lnDt3IR?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAadTJmGxAVpzMHFxQNXcnGmKofI3Q7mQRB9FbrIcZqyffK19Ni1N26j6h4PHsg_aem_qQ4o098G59Db6259exwWaA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                📞 WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Comprei Todos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
