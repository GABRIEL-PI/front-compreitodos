"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, X } from "lucide-react"
import { Product } from "@/lib/types"

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const calculateDiscount = () => {
    return Math.floor(Math.random() * 60) + 20 // 20-80% discount
  }

  const discount = calculateDiscount()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagem do Produto */}
          <div className="relative">
            <img
              src={product.image_url}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/placeholder.jpg'
              }}
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold">
              -{discount}%
            </div>
            <div className="absolute top-4 right-4 bg-yellow-400 text-red-700 px-3 py-1 rounded-full font-bold">
              🔥 OFERTA
            </div>
          </div>

          {/* Detalhes do Produto */}
          <div className="space-y-6">
            {/* Categoria */}
            <div>
              <Badge variant="secondary" className="text-sm">
                {product.category}
              </Badge>
            </div>

            {/* Avaliação */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">(4.5) • 1.2k avaliações</span>
            </div>

            {/* Preço */}
            <div className="space-y-2">
              <div className="text-3xl font-black text-red-600">
                {formatPrice(product.price)}
              </div>
              <div className="text-lg text-gray-500 line-through">
                {formatPrice(product.price * 1.5)}
              </div>
              <div className="text-green-600 font-semibold">
                Economia de {formatPrice(product.price * 0.5)}
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800">Descrição do Produto</h3>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-3">
                  {product.description || product.title}
                </p>
                <p className="mb-3">
                  Este produto oferece excelente qualidade e custo-benefício. 
                  Ideal para quem busca praticidade e economia no dia a dia.
                </p>
                <p>
                  Aproveite esta oferta especial por tempo limitado! 
                  Produto com entrega rápida e garantia de qualidade.
                </p>
              </div>
            </div>

            {/* Características */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800">Características</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Produto original e de qualidade
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Entrega rápida e segura
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Garantia do vendedor
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Suporte ao cliente
                </li>
              </ul>
            </div>

            {/* Botão de Ação */}
            <div className="pt-4">
              <Button
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4"
                onClick={() => window.open(product.affiliate_url, '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Ver na Shopee
              </Button>
              <p className="text-sm text-gray-500 text-center mt-2">
                Você será redirecionado para a loja oficial
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}