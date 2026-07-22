// Modelos do catálogo Lamell — dados compartilhados entre PriceCatalog e ModelsCarousel.
// Imagens em /public/produtos/.

export interface ProductModel {
  modelo: string
  preco: string
  tamanhos: string
  image: string
  alt: string
}

export const MODELS: ProductModel[] = [
  {
    modelo: 'Tshirt Tradicional',
    preco: 'R$ 25,98',
    tamanhos: 'P ao G3',
    image: '/produtos/tshirt-tradicional.png',
    alt: 'Tshirt Tradicional personalizada Lamell Store',
  },
  {
    modelo: 'Cropped Max',
    preco: 'R$ 26,98',
    tamanhos: 'P ao G2',
    image: '/produtos/cropitch-max.png',
    alt: 'Cropped Max personalizada Lamell Store',
  },
  {
    modelo: 'Tshirt Max',
    preco: 'R$ 35,98',
    tamanhos: 'P ao G1',
    image: '/produtos/tshirt-max.png',
    alt: 'Tshirt Max personalizada Lamell Store',
  },
  {
    modelo: 'Camiseta Masculina',
    preco: 'R$ 37,00',
    tamanhos: 'P ao G1',
    image: '/produtos/camiseta-masculina.png',
    alt: 'Camiseta Masculina personalizada Lamell Store',
  },
  {
    modelo: 'Camiseta Over',
    preco: 'R$ 47,98',
    tamanhos: 'P ao G1',
    image: '/produtos/camiseta-over.png',
    alt: 'Camiseta Over personalizada Lamell Store',
  },
  {
    modelo: 'Infantil Unissex',
    preco: 'R$ 24,98',
    tamanhos: '2 a 16 anos',
    image: '/produtos/infantil-unissex.png',
    alt: 'Camiseta Infantil Unissex personalizada Lamell Store',
  },
]
