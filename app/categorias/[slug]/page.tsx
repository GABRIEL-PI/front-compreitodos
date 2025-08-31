import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { fetchCategories } from "@/lib/api"
import { Category } from "@/lib/types"
import CategoryProductsClient from "./category-products-client"

// Função para gerar parâmetros estáticos
export async function generateStaticParams() {
  try {
    const categories = await fetchCategories()
    // Verificar se categories é um array válido
    if (!Array.isArray(categories)) {
      console.warn('Categories não é um array:', categories)
      return []
    }
    return categories.map((category) => ({
      slug: category.slug,
    }))
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error)
    return []
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug
  
  // Buscar categorias no servidor
  let categories: Category[] = []
  let currentCategory: Category | null = null
  
  try {
    categories = await fetchCategories()
    currentCategory = categories.find(cat => cat.slug === categorySlug) || null
  } catch (error) {
    console.error('Erro ao carregar categorias:', error)
  }
  
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-black text-gray-800 mb-4">Categoria não encontrada</h1>
            <p className="text-gray-600 mb-8">A categoria que você está procurando não existe.</p>
            <Button 
              onClick={() => window.location.href = '/categorias'}
              className="bg-red-600 hover:bg-red-700 text-white font-bold"
            >
              Ver todas as categorias
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryProductsClient 
        categorySlug={categorySlug}
        currentCategory={currentCategory}
      />
      <Footer />
    </div>
  )
}