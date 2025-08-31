import {
  Product,
  Category,
  ApiResponse,
  ProductsResponse,
  CategoriesResponse,
  ProductSearchParams,
  Pagination
} from './types';

// Base URL da API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Função auxiliar para fazer requisições
async function apiRequest<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<T> = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição da API:', error);
    throw error;
  }
}

// Função para buscar produtos
export async function fetchProducts(
  params: ProductSearchParams = {}
): Promise<ProductsResponse> {
  const { page = 1, limit = 20, category, search } = params;
  
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString()
  });
  
  if (category) queryParams.append('category', category);
  if (search) queryParams.append('search', search);
  
  const endpoint = `/public/products?${queryParams.toString()}`;
  const response = await apiRequest<ProductsResponse>(endpoint);
  
  if (response.status === 'success' && response.data) {
    return response.data;
  } else {
    throw new Error(response.message || 'Erro ao carregar produtos');
  }
}

// Função para buscar produto por ID
export async function fetchProductById(id: number): Promise<Product> {
  const endpoint = `/public/products/${id}`;
  const response = await apiRequest<Product>(endpoint);
  
  if (response.status === 'success' && response.data) {
    return response.data;
  } else {
    throw new Error(response.message || 'Produto não encontrado');
  }
}

// Função para buscar categorias
export async function fetchCategories(): Promise<Category[]> {
  const endpoint = '/public/categories';
  const response = await apiRequest<CategoriesResponse>(endpoint);
  
  if (response.status === 'success' && response.data) {
    return response.data.data;
  } else {
    throw new Error(response.message || 'Erro ao carregar categorias');
  }
}