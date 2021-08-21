import Instagram from './icons/Instagram'
import WhatsApp from './icons/WhatsApp'

const Hero = (): JSX.Element => (
  <header className='bg-indigo-100 dark:bg-gray-700 lg:bg-hero-desktop lg:bg-no-repeat lg:bg-right-bottom'>
    <div className='container mx-auto px-6 pt-36 pb-20 lg:pt-56 lg:pb-40'>
      <div className='max-w-3xl text-4xl lg:text-6xl font-bold'>
        Encontre vasos, plantas ornamentais e artigos de madeira artesanal
      </div>
      <p className='max-w-3xl mt-8 text-gray-600 dark:text-gray-300 text-xl lg:text-2xl'>
        Queremos deixar o seu jardim cada vez mais lindo! Temos uma enorme
        variedade de plantas, vasos e decorações para sua casa.
      </p>
      <div className='flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-16'>
        <a
          className='flex justify-center space-x-2 w-64 text-base lg:text-xl shadow-xl rounded p-4 text-center border-2 bg-gray-700 border-gray-700 dark:bg-gray-800 dark:border-gray-800 hover:opacity-75 text-white transition duration-300 ease-in-out'
          href='http://instagram.com/_u/jardim.caipira'
          target='_blank'
          rel='noreferrer noopener'
        >
          <Instagram width={18} height={28} />
          <span>Ver Instagram</span>
        </a>
        <a
          className='flex justify-center space-x-2 w-64 text-base lg:text-xl shadow-xl rounded p-4 text-center border-2 hover:bg-gray-700 border-gray-700 text-gray-700 dark:hover:bg-gray-800 dark:border-gray-800 dark:text-white hover:text-white transition duration-300 ease-in-out'
          href='https://api.whatsapp.com/send?phone=5585988709845&text=Ol%C3%A1!%20Peguei%20seu%20telefone%20no%20site%20do%20Jardim%20Caipira.'
          target='_blank'
          rel='noreferrer noopener'
        >
          <WhatsApp width={18} height={24} />
          <span>Abrir WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
)

export default Hero
