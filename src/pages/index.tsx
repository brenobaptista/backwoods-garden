import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Videos from '../components/Videos'

const Home = (): JSX.Element => (
  <div className='text-gray-800 dark:text-gray-200 font-sans'>
    <Navbar />
    <Hero />
    <Products />
    <Testimonials />
    <Videos />
    <Footer />
  </div>
)

export default Home
