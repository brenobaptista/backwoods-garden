import Hero from '../components/Hero'
import Metadata from '../components/Metadata'

const Home = (): JSX.Element => (
  <>
    <Metadata />
    <Hero />
    <section>Produtos</section>
    <section>Vídeos</section>
    <section>Avaliações (Testemunho) (review do Google)</section>
    <footer>Redes sociais, horário de funcionamento e endereço</footer>
  </>
)

export default Home
