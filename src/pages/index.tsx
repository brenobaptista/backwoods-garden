import Header from '../components/Header'
import Metadata from '../components/Metadata'

const Home = (): JSX.Element => (
  <>
    <Metadata />
    <Header />
    <section>Produtos</section>
    <section>Vídeos</section>
    <section>Avaliações (Testemunho) (review do Google)</section>
    <footer>Redes sociais, horário de funcionamento e endereço</footer>
  </>
)

export default Home
