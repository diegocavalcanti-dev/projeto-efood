import { BrowserRouter } from 'react-router-dom'

import Hero from './components/Hero'
import { Container, GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Hero />
        <Container>
          <Rotas />
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
