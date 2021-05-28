const Products = (): JSX.Element => (
  <section className='bg-white' id='produtos'>
    <div className='container mx-auto px-6 py-20'>
      <h1 className='text-4xl font-bold text-center mb-12'>Produtos</h1>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/3 px-2 mb-2'>
          <img
            src='/images/products/cactos.jpg'
            alt='Cactos'
            className='rounded'
            width={480}
            height={480}
          />
        </div>
        <div className='w-full md:w-1/3 px-2 mb-2'>
          <img
            src='/images/products/decoracao.jpg'
            alt='Decoração'
            className='rounded'
            width={480}
            height={480}
          />
        </div>
        <div className='w-full md:w-1/3 px-2 mb-2'>
          <img
            src='/images/products/suculenta.jpg'
            alt='Suculenta'
            className='rounded'
            width={480}
            height={480}
          />
        </div>
        <div className='w-full md:w-1/3 px-2 mb-2'>
          <img
            src='/images/products/orquidea.jpg'
            alt='Orquídea'
            className='rounded'
            width={480}
            height={480}
          />
        </div>
        <div className='w-full md:w-1/3 px-2 mb-2'>
          <img
            src='/images/products/gloxinia.jpg'
            alt='Gloxinia'
            className='rounded'
            width={480}
            height={480}
          />
        </div>
        <div className='w-full md:w-1/3 px-2 mb-2'>
          <img
            src='/images/products/bungavile.jpg'
            alt='Bungavile'
            className='rounded'
            width={480}
            height={480}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Products
