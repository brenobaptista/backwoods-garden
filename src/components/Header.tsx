const Header = (): JSX.Element => (
  <header className='py-40 md:py-60 bg-green-100'>
    <div className='mx-20 md:mx-40 lg:mx-60 text-5xl md:text-6xl text-center font-medium text-gray-800'>
      Encontre vasos, plantas ornamentais e artigos de madeira artesanal.
    </div>
    <div className='flex justify-center mt-20'>
      <button
        type='button'
        className='w-40 md:w-64 text-base md:text-xl mr-2 md:mr-4 shadow-lg rounded p-4 border-2 border-green-600 hover:border-green-700 bg-green-600 hover:bg-green-700 text-white'
      >
        Ver Produtos
      </button>
      <button
        type='button'
        className='w-40 md:w-64 text-base md:text-xl ml-2 md:mr-4 shadow-lg rounded p-4 border-2 border-green-600 hover:border-green-800 text-green-600 hover:text-green-800'
      >
        Abrir WhatsApp
      </button>
    </div>
  </header>
)

export default Header
