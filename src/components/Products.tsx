const Products = (): JSX.Element => (
  <section className='bg-white dark:bg-gray-800' id='produtos'>
    <div className='container mx-auto px-6 py-20'>
      <h1 className='text-4xl font-bold text-center mb-4'>
        Conheça Nossos Produtos
      </h1>
      <p className='text-gray-500 mb-12 text-center text-xl'>
        Visite nossa loja física ou acesse nossas redes sociais para mais
        informações.
      </p>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/3 p-4'>
          <div className='group flex justify-center items-center bg-black text-gray-200 rounded'>
            <div className='group-hover:opacity-25 transition duration-300 ease-in-out'>
              <img
                src='/images/products/cactos.jpg'
                alt='Cactos'
                className='rounded'
                width={480}
                height={480}
              />
            </div>
            <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
              <span className='text-3xl font-bold tracking-wider leading-relaxed'>
                Cactos
              </span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-4'>
          <div className='group flex justify-center items-center bg-black text-gray-200 rounded'>
            <div className='group-hover:opacity-25 transition duration-300 ease-in-out'>
              <img
                src='/images/products/decoracao.jpg'
                alt='Decoração'
                className='rounded'
                width={480}
                height={480}
              />
            </div>
            <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
              <span className='text-3xl font-bold tracking-wider leading-relaxed'>
                Decoração
              </span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-4'>
          <div className='group flex justify-center items-center bg-black text-gray-200 rounded'>
            <div className='group-hover:opacity-25 transition duration-300 ease-in-out'>
              <img
                src='/images/products/suculenta.jpg'
                alt='Suculenta'
                className='rounded'
                width={480}
                height={480}
              />
            </div>
            <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
              <span className='text-3xl font-bold tracking-wider leading-relaxed'>
                Suculenta
              </span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-4'>
          <div className='group flex justify-center items-center bg-black text-gray-200 rounded'>
            <div className='group-hover:opacity-25 transition duration-300 ease-in-out'>
              <img
                src='/images/products/orquidea.jpg'
                alt='Orquídea'
                className='rounded'
                width={480}
                height={480}
              />
            </div>
            <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
              <span className='text-3xl font-bold tracking-wider leading-relaxed'>
                Orquídea
              </span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-4'>
          <div className='group flex justify-center items-center bg-black text-gray-200 rounded'>
            <div className='group-hover:opacity-25 transition duration-300 ease-in-out'>
              <img
                src='/images/products/gloxinia.jpg'
                alt='Gloxínia'
                className='rounded'
                width={480}
                height={480}
              />
            </div>
            <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
              <span className='text-3xl font-bold tracking-wider leading-relaxed'>
                Gloxínia
              </span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-4'>
          <div className='group flex justify-center items-center bg-black text-gray-200 rounded'>
            <div className='group-hover:opacity-25 transition duration-300 ease-in-out'>
              <img
                src='/images/products/bungavile.jpg'
                alt='Bungavile'
                className='rounded'
                width={480}
                height={480}
              />
            </div>
            <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
              <span className='text-3xl font-bold tracking-wider leading-relaxed'>
                Bungavile
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Products
