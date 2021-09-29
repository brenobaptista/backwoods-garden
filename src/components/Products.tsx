import Image from 'next/image'

import cactos from '../../public/images/products/cactos.jpg'
import decoracao from '../../public/images/products/decoracao.jpg'
import suculenta from '../../public/images/products/suculenta.jpg'
import orquidea from '../../public/images/products/orquidea.jpg'
import gloxinia from '../../public/images/products/gloxinia.jpg'
import bungavile from '../../public/images/products/bungavile.jpg'

const Products = (): JSX.Element => (
  <section className='bg-white dark:bg-gray-800' id='produtos'>
    <div className='container mx-auto px-6 py-20'>
      <h1 className='text-4xl font-bold text-center mb-4'>
        Conheça Nossos Produtos
      </h1>
      <p className='text-gray-500 dark:text-gray-400 mb-12 text-center text-xl'>
        Visite nossa loja física ou acesse nossas redes sociais para mais
        informações.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='group flex justify-center items-center bg-black dark:bg-gray-800 text-gray-200'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image
              src={cactos}
              alt='Cactos'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Cactos
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center bg-black dark:bg-gray-800 text-gray-200'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image
              src={decoracao}
              alt='Decoração'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Decoração
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center bg-black dark:bg-gray-800 text-gray-200'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image
              src={suculenta}
              alt='Suculenta'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Suculenta
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center bg-black dark:bg-gray-800 text-gray-200'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image
              src={orquidea}
              alt='Orquídea'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Orquídea
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center bg-black dark:bg-gray-800 text-gray-200'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image
              src={gloxinia}
              alt='Gloxínia'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Gloxínia
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center bg-black dark:bg-gray-800 text-gray-200'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image
              src={bungavile}
              alt='Bungavile'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Bungavile
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Products
