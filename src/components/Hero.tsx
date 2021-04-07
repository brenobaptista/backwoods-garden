const Hero = (): JSX.Element => (
  <header className='py-36 lg:py-56 bg-green-100'>
    <div className='mx-4 lg:mx-40 text-4xl lg:text-6xl text-center font-bold'>
      Encontre vasos, plantas ornamentais e artigos de madeira artesanal.
    </div>
    <div className='flex justify-center mt-20'>
      <a
        className='w-40 lg:w-64 text-base lg:text-xl mr-2 lg:mr-4 shadow-lg rounded p-4 text-center border-2 border-green-600 hover:border-green-700 bg-green-600 hover:bg-green-700 text-white transition'
        href='http://instagram.com/_u/jardim.caipira'
      >
        Ver Produtos
      </a>
      <a
        className='w-40 lg:w-64 text-base lg:text-xl ml-2 lg:mr-4 shadow-lg rounded p-4 text-center border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-white transition'
        href='https://api.whatsapp.com/send?phone=5585988709845&text=Ol%C3%A1!%20Peguei%20seu%20telefone%20no%20site%20do%20Jardim%20Caipira.'
      >
        Abrir WhatsApp
      </a>
    </div>
  </header>
)

export default Hero
