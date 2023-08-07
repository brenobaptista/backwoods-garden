import Image from 'next/image'

import raizesPodres from '../../public/images/thumbnails/como-tratar-raizes-podres.jpg'
import resultadoRaizes from '../../public/images/thumbnails/resultado-do-tratamento.jpg'

const Videos = () => (
  <section className='bg-indigo-100 dark:bg-gray-700' id='videos'>
    <div className='container mx-auto px-6 py-20'>
      <h1 className='mb-4 text-center text-4xl font-bold'>
        Acesse Nossos Vídeos
      </h1>
      <p className='mb-12 text-center text-xl text-gray-600 dark:text-gray-300'>
        Assista aos vídeos gratuitos que ensinam lições valiosas no cuidado das
        raízes de suas plantas.
      </p>
      <div className='flex flex-wrap'>
        <div className='mb-8 w-full px-4 md:mb-0 md:w-1/2'>
          <div className='rounded bg-white shadow-2xl dark:bg-gray-800'>
            <a
              href='https://youtu.be/v3ur8ny3R70'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Image
                src={raizesPodres}
                alt='Como tratar raízes podres'
                placeholder='blur'
                className='rounded'
              />
              <p className='p-4 text-center text-lg font-semibold lg:text-2xl'>
                Como tratar raízes podres
              </p>
            </a>
          </div>
        </div>
        <div className='mb-8 w-full px-4 md:mb-0 md:w-1/2'>
          <div className='rounded bg-white shadow-2xl dark:bg-gray-800'>
            <a
              href='https://youtu.be/uKapAnCC9Bg'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Image
                src={resultadoRaizes}
                alt='Resultado do tratamento'
                placeholder='blur'
                className='rounded'
              />
              <p className='p-4 text-center text-lg font-semibold lg:text-2xl'>
                Resultado do tratamento
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Videos
