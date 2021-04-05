import Hero from '../components/Hero'
import Metadata from '../components/Metadata'
import Navbar from '../components/Navbar'

const Home = (): JSX.Element => (
  <>
    <Metadata />
    <Navbar />
    <Hero />
    <section>Produtos</section>
    <section>Vídeos</section>
    <section>Avaliações (Testemunho) (review do Google)</section>
    <footer>
      Redes sociais (WhatsApp, Facebook, Instagram e talvez Tik Tok), horário de
      funcionamento e endereço. Abaixo colocar feito por Breno Baptista
    </footer>
  </>
)

export default Home
