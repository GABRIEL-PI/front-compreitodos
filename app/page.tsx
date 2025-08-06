"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Zap } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Fone Bluetooth Premium",
      originalPrice: "R$ 299,90",
      salePrice: "R$ 89,90",
      discount: "70%",
      rating: 4.8,
      reviews: 2847,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Smartwatch Fitness",
      originalPrice: "R$ 599,90",
      salePrice: "R$ 199,90",
      discount: "67%",
      rating: 4.9,
      reviews: 1523,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Kit Skincare Completo",
      originalPrice: "R$ 249,90",
      salePrice: "R$ 79,90",
      discount: "68%",
      rating: 4.7,
      reviews: 3241,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Carregador Portátil 20000mAh",
      originalPrice: "R$ 179,90",
      salePrice: "R$ 59,90",
      discount: "67%",
      rating: 4.6,
      reviews: 1876,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const categories = [
    { name: "Eletrônicos", icon: "📱", deals: "2.847" },
    { name: "Casa & Jardim", icon: "🏠", deals: "1.923" },
    { name: "Moda", icon: "👕", deals: "3.156" },
    { name: "Beleza", icon: "💄", deals: "1.654" },
    { name: "Esportes", icon: "⚽", deals: "987" },
    { name: "Livros", icon: "📚", deals: "743" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-700">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-red-600 opacity-90"></div>
        <div className="relative z-10 container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-6 transform -rotate-2 drop-shadow-2xl">
              COMPREI
            </h2>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 transform rotate-1 drop-shadow-2xl">
              TODOS!
            </h2>
            <p className="text-xl md:text-2xl text-yellow-300 mb-8 font-bold">
              Os melhores achados da Shopee com até 90% de desconto!
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-red-700 font-black text-xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              <Zap className="mr-2 h-6 w-6" />
              APROVEITE AGORA
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="bg-yellow-400 rounded-full p-4">
            <span className="text-2xl">💰</span>
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-pulse">
          <div className="bg-yellow-400 rounded-full p-4">
            <span className="text-2xl">🛒</span>
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-300">
          <div className="bg-yellow-400 rounded-full p-4">
            <span className="text-2xl">⚡</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-red-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Produtos Encontrados</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-600 mb-2">90%</div>
              <div className="text-gray-600 font-medium">Desconto Máximo</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-600 mb-2">24h</div>
              <div className="text-gray-600 font-medium">Atualizações</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-600 mb-2">100K+</div>
              <div className="text-gray-600 font-medium">Usuários Felizes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="ofertas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-red-600 mb-4">🔥 OFERTAS IMPERDÍVEIS</h3>
            <p className="text-xl text-gray-600">Produtos selecionados com os maiores descontos!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-600 text-white font-bold">-{product.discount}</Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h4>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                      <div className="text-xl font-black text-red-600">{product.salePrice}</div>
                    </div>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">Ver na Shopee</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-red-600 mb-4">CATEGORIAS EM DESTAQUE</h3>
            <p className="text-xl text-gray-600">Explore ofertas por categoria</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/ofertas?categoria=${encodeURIComponent(category.name)}`}>
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-red-50 transform hover:-translate-y-1">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{category.name}</h4>
                  <p className="text-sm text-red-600 font-medium">{category.deals} ofertas</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-5xl font-black mb-6">NÃO PERCA MAIS NENHUMA OFERTA!</h3>
            <p className="text-xl mb-8">Receba notificações dos melhores achados da Shopee direto no seu WhatsApp</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="tel"
                placeholder="Digite seu WhatsApp"
                className="px-6 py-4 rounded-full text-gray-800 font-medium text-lg w-full sm:w-auto min-w-[300px]"
              />
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-red-700 font-black text-lg px-8 py-4 rounded-full"
                onClick={() => window.open("https://chat.whatsapp.com/HjGP23vWJu3GWP1lnDt3IR?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAadTJmGxAVpzMHFxQNXcnGmKofI3Q7mQRB9FbrIcZqyffK19Ni1N26j6h4PHsg_aem_qQ4o098G59Db6259exwWaA", "_blank", "noopener,noreferrer")}
              >
                QUERO RECEBER OFERTAS
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-80">📱 Gratuito • ⚡ Instantâneo • 🔒 Seus dados estão seguros</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
