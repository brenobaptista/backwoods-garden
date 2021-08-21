const Hero = (): JSX.Element => (
  <header className='bg-green-100 dark:bg-green-700 lg:bg-hero-desktop lg:bg-no-repeat lg:bg-right-bottom'>
    <div className='container mx-auto px-6 pt-36 pb-20 lg:pt-56 lg:pb-40'>
      <div className='max-w-3xl text-4xl lg:text-6xl font-bold'>
        Encontre vasos, plantas ornamentais e artigos de madeira artesanal
      </div>
      <p className='max-w-3xl mt-8 text-gray-600 dark:text-gray-300 text-xl lg:text-2xl'>
        Queremos deixar o seu jardim cada vez mais lindo! Temos uma enorme
        variedade de plantas, vasos e decorações para sua casa.
      </p>
      <div className='flex justify-center lg:justify-start mt-16'>
        <a
          className='w-40 lg:w-64 text-base lg:text-xl mr-2 lg:mr-4 shadow-md rounded p-4 text-center border-2 bg-green-800 border-green-800 dark:bg-green-900 dark:border-green-900 hover:opacity-75 text-white transition duration-300 ease-in-out'
          href='http://instagram.com/_u/jardim.caipira'
          target='_blank'
          rel='noreferrer noopener'
        >
          Ver Instagram
        </a>
        <a
          className='w-40 lg:w-64 text-base lg:text-xl ml-2 lg:mr-4 shadow-md rounded p-4 text-center border-2 hover:bg-green-800 border-green-800 text-green-800 dark:hover:bg-green-900 dark:border-green-900 dark:text-gray-800 hover:text-white transition duration-300 ease-in-out'
          href='https://api.whatsapp.com/send?phone=5585988709845&text=Ol%C3%A1!%20Peguei%20seu%20telefone%20no%20site%20do%20Jardim%20Caipira.'
          target='_blank'
          rel='noreferrer noopener'
        >
          Abrir WhatsApp
        </a>
      </div>
    </div>
  </header>
)

export default Hero
