import { Instagram, WhatsApp } from './icons'

const Hero = () => (
  <header className='bg-indigo-100 dark:bg-gray-700 lg:bg-hero-desktop lg:bg-right-bottom lg:bg-no-repeat'>
    <div className='container mx-auto px-6 pb-20 pt-36 lg:pb-40 lg:pt-56'>
      <div className='max-w-3xl text-4xl font-bold lg:text-6xl'>
        Encontre vasos, plantas ornamentais e artigos de madeira artesanal
      </div>
      <p className='mt-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300 lg:text-2xl'>
        Queremos deixar o seu jardim cada vez mais lindo! Temos uma enorme
        variedade de plantas, vasos e decorações para sua casa.
      </p>
      <div className='mt-16 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 lg:justify-start'>
        <a
          className='flex w-64 justify-center space-x-2 rounded border-2 border-gray-700 bg-gray-700 p-4 text-center text-base text-white shadow-xl transition duration-300 ease-in-out hover:opacity-75 motion-reduce:transition-none dark:border-gray-800 dark:bg-gray-800 lg:text-xl'
          href='http://instagram.com/_u/jardim.caipira'
          target='_blank'
          rel='noreferrer noopener'
        >
          <Instagram width={18} height={28} />
          <span>Ver Instagram</span>
        </a>
        <a
          className='flex w-64 justify-center space-x-2 rounded border-2 border-gray-700 p-4 text-center text-base text-gray-700 shadow-xl transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white motion-reduce:transition-none dark:border-gray-800 dark:text-white dark:hover:bg-gray-800 lg:text-xl'
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
