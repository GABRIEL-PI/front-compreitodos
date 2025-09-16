"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, Star } from "lucide-react"
import { fetchProducts } from "@/lib/api"
import { Product, Category } from "@/lib/types"
import ProductModal from "@/components/product-modal"

interface CategoryProductsClientProps {
  categorySlug: string
  currentCategory: Category | null
  initialSearchTerm?: string
}

export default function CategoryProductsClient({ categorySlug, currentCategory, initialSearchTerm = "" }: CategoryProductsClientProps) {
  
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [totalProducts, setTotalProducts] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Função para abrir modal do produto
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  // Função para fechar modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  // Função para formatar preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  // Função para calcular desconto (simulado)
  const calculateDiscount = () => {
    return Math.floor(Math.random() * 70) + 10 // 10-80% de desconto
  }

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
        limit: 12,
        category: categorySlug
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

  // Efeito para carregar produtos quando categoria ou busca mudam
  useEffect(() => {
    if (categorySlug) {
      loadProducts(1, true)
    }
  }, [categorySlug, searchTerm])



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

  // Função para obter ícone da categoria
  const getCategoryIcon = (categoryName: string) => {
    const icons: { [key: string]: string } = {
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
    return icons[categoryName.toLowerCase()] || icons['default']
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white pt-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="text-6xl mr-4">
              {currentCategory ? getCategoryIcon(currentCategory.name) : '🛍️'}
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-2">
                {currentCategory ? currentCategory.name.toUpperCase() : 'CARREGANDO...'}
              </h1>
              <p className="text-xl md:text-2xl">Ofertas imperdíveis com até 90% de desconto!</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 text-red-700 px-6 py-3 rounded-full inline-block font-black text-lg">
              ⚡ ATUALIZADAS A CADA HORA
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold text-gray-800">
                {currentCategory ? `Produtos em ${currentCategory.name}` : 'Produtos'}
              </h2>
              {totalProducts > 0 && (
                <span className="text-sm text-gray-600">
                  {products.length} de {totalProducts} produtos
                </span>
              )}
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
                    <div className="w-24 h-6 bg-gray-200 rounded mb-3"></div>
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
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                Tentar Novamente
              </Button>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {searchTerm ? 'Nenhum produto encontrado' : 'Nenhum produto disponível'}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? `Não encontramos produtos para "${searchTerm}" nesta categoria.`
                  : 'Esta categoria ainda não possui produtos cadastrados.'
                }
              </p>
              {searchTerm && (
                <Button 
                  onClick={() => handleSearch('')}
                  variant="outline"
                  className="mr-4"
                >
                  Limpar busca
                </Button>
              )}
              <Button 
                onClick={() => window.location.href = '/ofertas'}
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                Ver todas as ofertas
              </Button>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => {
                  const discount = calculateDiscount()
                  return (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="relative">
                        <img
                          src={product.image_url}
                          alt={product.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => handleProductClick(product)}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = '/placeholder.jpg'
                          }}
                        />
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          -{discount}%
                        </div>
                        <div className="absolute top-2 right-2 bg-yellow-400 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
                          🔥 OFERTA
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                        <h3 className="font-bold text-sm mb-2 line-clamp-2 h-10">{product.title}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400 text-xs mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">(4.8)</span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-xl font-black text-red-600">{formatPrice(product.price)}</div>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                          onClick={() => window.open(product.affiliate_url, '_blank', 'noopener,noreferrer')}
                        >
                          Ver na Shopee
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-12">
                  <Button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3"
                  >
                    {loadingMore ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Carregando...
                      </>
                    ) : (
                      'Carregar mais produtos'
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal do Produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}