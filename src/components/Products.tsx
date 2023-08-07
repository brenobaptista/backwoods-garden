import Image from 'next/image'

import cactos from '../../public/images/products/cactos.jpg'
import decoracao from '../../public/images/products/decoracao.jpg'
import suculenta from '../../public/images/products/suculenta.jpg'
import orquidea from '../../public/images/products/orquidea.jpg'
import gloxinia from '../../public/images/products/gloxinia.jpg'
import bungavile from '../../public/images/products/bungavile.jpg'

const Products = () => (
  <section className='bg-white dark:bg-gray-800' id='produtos'>
    <div className='container mx-auto px-6 py-20'>
      <h1 className='mb-4 text-center text-4xl font-bold'>
        Conheça Nossos Produtos
      </h1>
      <p className='mb-12 text-center text-xl text-gray-500 dark:text-gray-400'>
        Visite nossa loja física ou acesse nossas redes sociais para mais
        informações.
      </p>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='group flex items-center justify-center'>
          <div className='transition duration-300 ease-in-out group-hover:opacity-50 group-hover:blur-sm motion-reduce:transition-none dark:group-hover:opacity-25'>
            <Image
              src={cactos}
              alt='Cactos'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none'>
            <span className='text-3xl font-bold leading-relaxed tracking-wider'>
              Cactos
            </span>
          </div>
        </div>
        <div className='group flex items-center justify-center'>
          <div className='transition duration-300 ease-in-out group-hover:opacity-50 group-hover:blur-sm motion-reduce:transition-none dark:group-hover:opacity-25'>
            <Image
              src={decoracao}
              alt='Decoração'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none'>
            <span className='text-3xl font-bold leading-relaxed tracking-wider'>
              Decoração
            </span>
          </div>
        </div>
        <div className='group flex items-center justify-center'>
          <div className='transition duration-300 ease-in-out group-hover:opacity-50 group-hover:blur-sm motion-reduce:transition-none dark:group-hover:opacity-25'>
            <Image
              src={suculenta}
              alt='Suculenta'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none'>
            <span className='text-3xl font-bold leading-relaxed tracking-wider'>
              Suculenta
            </span>
          </div>
        </div>
        <div className='group flex items-center justify-center'>
          <div className='transition duration-300 ease-in-out group-hover:opacity-50 group-hover:blur-sm motion-reduce:transition-none dark:group-hover:opacity-25'>
            <Image
              src={orquidea}
              alt='Orquídea'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none'>
            <span className='text-3xl font-bold leading-relaxed tracking-wider'>
              Orquídea
            </span>
          </div>
        </div>
        <div className='group flex items-center justify-center'>
          <div className='transition duration-300 ease-in-out group-hover:opacity-50 group-hover:blur-sm motion-reduce:transition-none dark:group-hover:opacity-25'>
            <Image
              src={gloxinia}
              alt='Gloxínia'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none'>
            <span className='text-3xl font-bold leading-relaxed tracking-wider'>
              Gloxínia
            </span>
          </div>
        </div>
        <div className='group flex items-center justify-center'>
          <div className='transition duration-300 ease-in-out group-hover:opacity-50 group-hover:blur-sm motion-reduce:transition-none dark:group-hover:opacity-25'>
            <Image
              src={bungavile}
              alt='Bungavile'
              placeholder='blur'
              className='rounded'
            />
          </div>
          <div className='absolute opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none'>
            <span className='text-3xl font-bold leading-relaxed tracking-wider'>
              Bungavile
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Products
