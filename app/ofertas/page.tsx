"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Filter, Search, Clock } from "lucide-react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OfertasPage() {
  const allProducts = [
    {
      id: 1,
      name: "Fone Bluetooth Premium com Cancelamento de Ruído",
      originalPrice: "R$ 299,90",
      salePrice: "R$ 89,90",
      discount: "70%",
      rating: 4.8,
      reviews: 2847,
      image: "/placeholder.svg?height=200&width=200&text=Fone+Bluetooth",
      category: "Eletrônicos",
      timeLeft: "2h 15m",
      soldCount: 1234,
    },
    {
      id: 2,
      name: "Smartwatch Fitness Tracker Completo",
      originalPrice: "R$ 599,90",
      salePrice: "R$ 199,90",
      discount: "67%",
      rating: 4.9,
      reviews: 1523,
      image: "/placeholder.svg?height=200&width=200&text=Smartwatch",
      category: "Eletrônicos",
      timeLeft: "5h 42m",
      soldCount: 856,
    },
    {
      id: 3,
      name: "Kit Skincare Completo Anti-Idade",
      originalPrice: "R$ 249,90",
      salePrice: "R$ 79,90",
      discount: "68%",
      rating: 4.7,
      reviews: 3241,
      image: "/placeholder.svg?height=200&width=200&text=Skincare",
      category: "Beleza",
      timeLeft: "1h 33m",
      soldCount: 2156,
    },
    {
      id: 4,
      name: "Carregador Portátil 20000mAh Fast Charge",
      originalPrice: "R$ 179,90",
      salePrice: "R$ 59,90",
      discount: "67%",
      rating: 4.6,
      reviews: 1876,
      image: "/placeholder.svg?height=200&width=200&text=Power+Bank",
      category: "Eletrônicos",
      timeLeft: "3h 28m",
      soldCount: 945,
    },
    {
      id: 5,
      name: "Tênis Esportivo Profissional",
      originalPrice: "R$ 399,90",
      salePrice: "R$ 149,90",
      discount: "62%",
      rating: 4.5,
      reviews: 987,
      image: "/placeholder.svg?height=200&width=200&text=Tênis",
      category: "Esportes",
      timeLeft: "6h 15m",
      soldCount: 567,
    },
    {
      id: 6,
      name: "Kit Panelas Antiaderente 5 Peças",
      originalPrice: "R$ 299,90",
      salePrice: "R$ 119,90",
      discount: "60%",
      rating: 4.4,
      reviews: 1432,
      image: "/placeholder.svg?height=200&width=200&text=Panelas",
      category: "Casa & Jardim",
      timeLeft: "4h 07m",
      soldCount: 789,
    },
    {
      id: 7,
      name: "Vestido Feminino Elegante",
      originalPrice: "R$ 159,90",
      salePrice: "R$ 59,90",
      discount: "62%",
      rating: 4.3,
      reviews: 654,
      image: "/placeholder.svg?height=200&width=200&text=Vestido",
      category: "Moda",
      timeLeft: "7h 22m",
      soldCount: 432,
    },
    {
      id: 8,
      name: "Livro: Mindset - A Nova Psicologia do Sucesso",
      originalPrice: "R$ 49,90",
      salePrice: "R$ 19,90",
      discount: "60%",
      rating: 4.9,
      reviews: 2341,
      image: "/placeholder.svg?height=200&width=200&text=Livro",
      category: "Livros",
      timeLeft: "12h 45m",
      soldCount: 1876,
    },
  ]

  const categories = ["Todos", "Eletrônicos", "Casa & Jardim", "Moda", "Beleza", "Esportes", "Livros"]
  const [activeCategory, setActiveCategory] = useState("Todos")

  const searchParams = useSearchParams()

  useEffect(() => {
    const categoria = searchParams.get("categoria")
    if (categoria && categories.includes(categoria)) {
      setActiveCategory(categoria)
    }
  }, [searchParams])

  const filteredProducts =
    activeCategory === "Todos" ? allProducts : allProducts.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">🔥 OFERTAS RELÂMPAGO</h1>
          <p className="text-xl md:text-2xl mb-8">Mais de 50.000 produtos com até 90% de desconto!</p>
          <div className="bg-yellow-400 text-red-700 px-6 py-3 rounded-full inline-block font-black text-lg">
            ⚡ ATUALIZADAS A CADA HORA
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === activeCategory ? "default" : "outline"}
                  className={category === activeCategory ? "bg-red-600 hover:bg-red-700" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
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
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {product.timeLeft}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                  <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 h-12">{product.name}</h4>
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
                  <div className="text-xs text-gray-500 mb-3">{product.soldCount} vendidos</div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">Ver na Shopee</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-12">
              Carregar Mais Ofertas
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
