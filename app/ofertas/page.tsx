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
import { fetchProducts, fetchCategories } from "@/lib/api"
import { Product, Category } from "@/lib/types"

export default function OfertasPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("Todos")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [totalProducts, setTotalProducts] = useState(0)

  const searchParams = useSearchParams()

  // Função para formatar preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  // Função para calcular desconto
  const calculateDiscount = (originalPrice: number, salePrice: number) => {
    const discount = ((originalPrice - salePrice) / originalPrice) * 100
    return Math.round(discount)
  }

  // Carregar categorias
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories()
        setCategories([{ id: 0, name: "Todos", slug: "todos" }, ...categoriesData])
      } catch (err) {
        console.error('Erro ao carregar categorias:', err)
      }
    }

    loadCategories()
  }, [])

  // Carregar produtos
  const loadProducts = async (page: number = 1, reset: boolean = false) => {
    try {
      if (page === 1) {
        setLoading(true)
      } else {
        setLoadingMore(true)
      }
      setError(null)

      const params: any = {
        page,
        limit: 12
      }

      if (activeCategory !== "Todos") {
        const selectedCategory = categories.find(cat => cat.name === activeCategory)
        if (selectedCategory) {
          params.category = selectedCategory.slug
        }
      }

      if (searchTerm.trim()) {
        params.search = searchTerm.trim()
      }

      const response = await fetchProducts(params)
      
      if (reset || page === 1) {
        setProducts(response.data)
      } else {
        setProducts(prev => [...prev, ...response.data])
      }
      
      setTotalProducts(response.pagination.total)
      setHasMore(response.pagination.current_page < response.pagination.last_page)
      setCurrentPage(response.pagination.current_page)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao carregar produtos'
      setError(errorMessage)
      console.error('Erro ao carregar produtos:', err)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  // Efeito para carregar produtos quando filtros mudam
  useEffect(() => {
    if (categories.length > 0) {
      loadProducts(1, true)
    }
  }, [activeCategory, searchTerm, categories])

  // Efeito para categoria da URL
  useEffect(() => {
    const categoria = searchParams.get("categoria")
    if (categoria && categories.length > 0) {
      const foundCategory = categories.find(cat => cat.slug === categoria || cat.name === categoria)
      if (foundCategory) {
        setActiveCategory(foundCategory.name)
      }
    }
  }, [searchParams, categories])

  // Função para carregar mais produtos
  const handleLoadMore = () => {
    if (hasMore && !loadingMore) {
      loadProducts(currentPage + 1, false)
    }
  }

  // Função para busca
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    setCurrentPage(1)
  }

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
                  key={category.id}
                  variant={category.name === activeCategory ? "default" : "outline"}
                  className={category.name === activeCategory ? "bg-red-600 hover:bg-red-700" : ""}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg w-64"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
          {totalProducts > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              Mostrando {products.length} de {totalProducts} produtos
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(12)].map((_, index) => (
                <Card key={index} className="animate-pulse overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <CardContent className="p-4">
                    <div className="w-16 h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="flex items-center mb-2">
                      <div className="w-20 h-4 bg-gray-200 rounded mr-2"></div>
                      <div className="w-12 h-3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-24 h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded mb-3"></div>
                    <div className="w-full h-10 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="text-red-500 mb-4">
                <p className="text-lg font-semibold">Erro ao carregar produtos</p>
                <p className="text-sm">{error}</p>
              </div>
              <Button 
                onClick={() => loadProducts(1, true)} 
                className="bg-red-600 hover:bg-red-700"
              >
                Tentar Novamente
              </Button>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
              {(searchTerm || activeCategory !== "Todos") && (
                <Button 
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("Todos")
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Limpar Filtros
                </Button>
              )}
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => {
                const discount = product.original_price ? calculateDiscount(product.original_price, product.price) : 0
                return (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
                  >
                    <div className="relative">
                      <Image
                        src={product.image_url || "/placeholder.svg"}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      {discount > 0 && (
                        <Badge className="absolute top-2 left-2 bg-red-600 text-white font-bold">
                          -{discount}%
                        </Badge>
                      )}
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Oferta
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="text-xs text-gray-500 mb-1">{product.category?.name || 'Produto'}</div>
                      <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 h-12">{product.title}</h4>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">(4.5)</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          {product.original_price && product.original_price > product.price && (
                            <div className="text-sm text-gray-500 line-through">
                              {formatPrice(product.original_price)}
                            </div>
                          )}
                          <div className="text-xl font-black text-red-600">
                            {formatPrice(product.price)}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">Disponível na Shopee</div>
                      <a 
                        href={product.affiliate_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                          Ver na Shopee
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {/* Load More */}
          {!loading && !error && hasMore && products.length > 0 && (
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-12"
                onClick={handleLoadMore}
                disabled={loadingMore}
              >
                {loadingMore ? "Carregando..." : "Carregar Mais Ofertas"}
              </Button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
