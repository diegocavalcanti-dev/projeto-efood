import RestaurantList from '../../components/RestaurantList'
import Menu from '../../models/Menu'

import sushi from '../../asset/images/sushi.svg'
import camarao from '../../asset/images/camarao.svg'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const cardapio: Menu[] = [
  {
    id: 1,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    rate: 4.9,
    image: sushi
  },
  {
    id: 2,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    image: camarao
  },
  {
    id: 3,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    image: camarao
  },
  {
    id: 4,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    image: camarao
  },
  {
    id: 5,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    image: camarao
  },
  {
    id: 6,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    image: camarao
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantList menus={cardapio} title="Promoções" background="gray" />
    <Footer />
  </>
)

export default Home
