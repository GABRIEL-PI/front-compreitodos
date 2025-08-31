// Tipos baseados na documentação da API pública

// Produto
export interface Product {
  id: number;
  title: string;
  description: string | null;
  price: number;
  image_url: string;
  affiliate_url: string;
  category: string;
  created_at: string; // ISO 8601 format
}

// Categoria
export interface Category {
  id: number;
  name: string;
  slug: string;
}

// Paginação
export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

// Resposta da API
export interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  data: T | null;
}

// Resposta de produtos com paginação
export interface ProductsResponse {
  data: Product[];
  pagination: Pagination;
}

// Resposta de categorias
export interface CategoriesResponse {
  data: Category[];
}

// Parâmetros para busca de produtos
export interface ProductSearchParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}