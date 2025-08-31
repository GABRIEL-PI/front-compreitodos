"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { fetchCategories } from "@/lib/api"
import { Category } from "@/lib/types"

export default function CategoriasPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mapeamento de ícones para categorias
  const categoryIcons: { [key: string]: string } = {
    'tecnologia': '📱',
    'casa': '🏠',
    'moda': '👕',
    'beleza': '💄',
    'esportes': '⚽',
    'livros': '📚',
    'perfumaria': '💄',
    'eletronicos': '📱',
    'automotivo': '🚗',
    'petshop': '🐕',
    'bebes': '👶',
    'default': '🛍️'
  }

  // Descrições padrão para categorias
  const categoryDescriptions: { [key: string]: string } = {
    'tecnologia': 'Smartphones, fones, carregadores e mais',
    'casa': 'Decoração, utensílios e ferramentas',
    'moda': 'Roupas, sapatos e acessórios',
    'beleza': 'Skincare, maquiagem e perfumes',
    'esportes': 'Equipamentos e roupas esportivas',
    'livros': 'Livros físicos e digitais',
    'perfumaria': 'Perfumes e fragrâncias',
    'eletronicos': 'Eletrônicos e gadgets',
    'automotivo': 'Acessórios e peças para veículos',
    'petshop': 'Produtos para seus pets',
    'bebes': 'Tudo para o seu bebê',
    'default': 'Produtos diversos com ótimos preços'
  }

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true)
        setError(null)
        const categoriesData = await fetchCategories()
        setCategories(categoriesData)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erro ao carregar categorias'
        setError(errorMessage)
        console.error('Erro ao carregar categorias:', err)
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  // Função para obter ícone da categoria
  const getCategoryIcon = (categoryName: string) => {
    const key = categoryName.toLowerCase().replace(/\s+/g, '')
    return categoryIcons[key] || categoryIcons.default
  }

  // Função para obter descrição da categoria
  const getCategoryDescription = (categoryName: string) => {
    const key = categoryName.toLowerCase().replace(/\s+/g, '')
    return categoryDescriptions[key] || categoryDescriptions.default
  }

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
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="animate-pulse overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-32 h-8 bg-gray-200 rounded"></div>
                      <div className="w-16 h-6 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="w-full h-10 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="text-red-500 mb-4">
                <p className="text-lg font-semibold">Erro ao carregar categorias</p>
                <p className="text-sm">{error}</p>
              </div>
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                Tentar Novamente
              </Button>
            </div>
          )}

          {!loading && !error && categories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhuma categoria encontrada</p>
            </div>
          )}

          {!loading && !error && categories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(category.name)}
                    </div>
                    <div className="absolute top-4 right-4 bg-yellow-400 text-red-700 px-3 py-1 rounded-full font-bold text-sm">
                      até 80%
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-black text-gray-800">{category.name}</h3>
                      <div className="flex items-center text-red-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span className="font-bold">ofertas</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{getCategoryDescription(category.name)}</p>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm text-gray-700 mb-2">🔥 Categoria:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                          {category.name}
                        </span>
                      </div>
                    </div>

                    <Link href={`/categorias/${category.slug}`}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                        Ver Ofertas
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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
