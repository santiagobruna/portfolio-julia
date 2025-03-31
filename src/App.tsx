import Artigos from "./components/Artigos"
import Cards from "./components/Cards"
import ContainerConvenios from "./components/Convenios"
import Depoimentos from "./components/Depoimentos"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Sobre from "./components/Sobre"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <Sobre/>
      <Cards/>
      <Artigos/>
      <ContainerConvenios/>
      <Depoimentos/>
      <Footer/>
    </>
  )
}

export default App
