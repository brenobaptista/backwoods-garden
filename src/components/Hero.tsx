const Hero = (): JSX.Element => (
  <header className='py-36 lg:py-56 bg-green-100'>
    <div className='mx-4 lg:mx-40 text-4xl lg:text-6xl text-center font-medium'>
      Encontre vasos, plantas ornamentais e artigos de madeira artesanal.
    </div>
    <div className='flex justify-center mt-20'>
      <button
        type='button'
        className='w-40 lg:w-64 text-base lg:text-xl mr-2 lg:mr-4 shadow-lg rounded p-4 border-2 border-green-600 hover:border-green-700 bg-green-600 hover:bg-green-700 text-white'
      >
        Ver Produtos
      </button>
      <button
        type='button'
        className='w-40 lg:w-64 text-base lg:text-xl ml-2 lg:mr-4 shadow-lg rounded p-4 border-2 border-green-600 hover:border-green-800 text-green-600 hover:text-green-800'
      >
        Abrir WhatsApp
      </button>
    </div>
  </header>
)

export default Hero
