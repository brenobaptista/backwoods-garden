import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'

const Home = (): JSX.Element => (
  <>
    <Navbar />
    <Hero />
    <section>Produtos</section>
    <section>Vídeos</section>
    <Testimonials />
    <footer>
      Redes sociais (WhatsApp, Facebook, Instagram e talvez Tik Tok), horário de
      funcionamento e endereço. Abaixo colocar feito por Breno Baptista
    </footer>
  </>
)

export default Home
