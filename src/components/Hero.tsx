const Hero = (): JSX.Element => (
  <header className='bg-green-100'>
    <div className='container mx-auto px-6 pt-36 pb-20 lg:pt-56 lg:pb-40'>
      <div className='mx-4 lg:mx-40 text-4xl lg:text-6xl text-center font-bold'>
        Encontre vasos, plantas ornamentais e artigos de madeira artesanal.
      </div>
      <div className='flex justify-center mt-20'>
        <a
          className='w-40 lg:w-64 text-base lg:text-xl mr-2 lg:mr-4 shadow-md rounded p-4 text-center border-2 border-green-600 hover:border-green-700 bg-green-600 hover:bg-green-700 text-white transition'
          href='http://instagram.com/_u/jardim.caipira'
          target='_blank'
          rel='noreferrer noopener'
        >
          Ver Instagram
        </a>
        <a
          className='w-40 lg:w-64 text-base lg:text-xl ml-2 lg:mr-4 shadow-md rounded p-4 text-center border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-white transition'
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
