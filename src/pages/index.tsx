import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = (): JSX.Element => (
  <div className='text-gray-800 font-sans'>
    <Navbar />
    <Hero />
    <section>Produtos</section>
    <section>Vídeos</section>
    <Testimonials />
    <Footer />
  </div>
)

export default Home
