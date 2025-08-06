"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CategoriasPage() {
  const categories = [
    {
      name: "Eletrônicos",
      icon: "📱",
      deals: "2.847",
      description: "Smartphones, fones, carregadores e mais",
      trending: ["iPhone", "Samsung", "Xiaomi", "Fones Bluetooth"],
      discount: "até 85%",
      image: "/placeholder.svg?height=300&width=400&text=Eletrônicos",
    },
    {
      name: "Casa & Jardim",
      icon: "🏠",
      deals: "1.923",
      description: "Decoração, utensílios e ferramentas",
      trending: ["Panelas", "Organizadores", "Plantas", "Ferramentas"],
      discount: "até 75%",
      image: "/placeholder.svg?height=300&width=400&text=Casa+Jardim",
    },
    {
      name: "Moda",
      icon: "👕",
      deals: "3.156",
      description: "Roupas, sapatos e acessórios",
      trending: ["Vestidos", "Tênis", "Bolsas", "Relógios"],
      discount: "até 80%",
      image: "/placeholder.svg?height=300&width=400&text=Moda",
    },
    {
      name: "Beleza",
      icon: "💄",
      deals: "1.654",
      description: "Skincare, maquiagem e perfumes",
      trending: ["Skincare", "Base", "Perfumes", "Cremes"],
      discount: "até 70%",
      image: "/placeholder.svg?height=300&width=400&text=Beleza",
    },
    {
      name: "Esportes",
      icon: "⚽",
      deals: "987",
      description: "Equipamentos e roupas esportivas",
      trending: ["Tênis", "Roupas Fitness", "Suplementos", "Equipamentos"],
      discount: "até 65%",
      image: "/placeholder.svg?height=300&width=400&text=Esportes",
    },
    {
      name: "Livros",
      icon: "📚",
      deals: "743",
      description: "Livros físicos e digitais",
      trending: ["Autoajuda", "Romance", "Técnicos", "Infantis"],
      discount: "até 60%",
      image: "/placeholder.svg?height=300&width=400&text=Livros",
    },
    {
      name: "Automotivo",
      icon: "🚗",
      deals: "1.234",
      description: "Acessórios e peças para veículos",
      trending: ["Pneus", "Óleo", "Acessórios", "Ferramentas"],
      discount: "até 55%",
      image: "/placeholder.svg?height=300&width=400&text=Automotivo",
    },
    {
      name: "Pet Shop",
      icon: "🐕",
      deals: "892",
      description: "Produtos para seus pets",
      trending: ["Ração", "Brinquedos", "Camas", "Coleiras"],
      discount: "até 70%",
      image: "/placeholder.svg?height=300&width=400&text=Pet+Shop",
    },
    {
      name: "Bebês",
      icon: "👶",
      deals: "1.567",
      description: "Tudo para o seu bebê",
      trending: ["Fraldas", "Roupinhas", "Brinquedos", "Mamadeiras"],
      discount: "até 65%",
      image: "/placeholder.svg?height=300&width=400&text=Bebês",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">🛍️ TODAS AS CATEGORIAS</h1>
          <p className="text-xl md:text-2xl mb-8">Explore mais de 12.000 ofertas organizadas por categoria!</p>
          <div className="bg-yellow-400 text-red-700 px-6 py-3 rounded-full inline-block font-black text-lg">
            📊 ORGANIZADAS PARA VOCÊ
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-red-700 px-3 py-1 rounded-full font-bold text-sm">
                    {category.discount}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-black text-gray-800">{category.name}</h3>
                    <div className="flex items-center text-red-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="font-bold">{category.deals}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="mb-4">
                    <h4 className="font-bold text-sm text-gray-700 mb-2">🔥 Mais Procurados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.trending.map((item, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/ofertas?categoria=${encodeURIComponent(category.name)}`}>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                      Ver {category.deals} Ofertas
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">NÃO ENCONTROU O QUE PROCURA?</h2>
          <p className="text-xl mb-8">Nos envie uma mensagem e encontraremos as melhores ofertas para você!</p>
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-red-700 font-black text-xl px-12 py-6 rounded-full"
            onClick={() => window.open("https://chat.whatsapp.com/HjGP23vWJu3GWP1lnDt3IR?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAadTJmGxAVpzMHFxQNXcnGmKofI3Q7mQRB9FbrIcZqyffK19Ni1N26j6h4PHsg_aem_qQ4o098G59Db6259exwWaA", "_blank", "noopener,noreferrer")}
          >
            💬 FALAR CONOSCO
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
