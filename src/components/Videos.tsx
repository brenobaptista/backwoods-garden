import Image from 'next/image'

import raizesPodres from '../../public/images/thumbnails/como-tratar-raizes-podres.jpg'
import resultadoRaizes from '../../public/images/thumbnails/resultado-do-tratamento.jpg'

const Videos = (): JSX.Element => (
  <section className='bg-indigo-100 dark:bg-gray-700' id='videos'>
    <div className='container mx-auto px-6 py-20'>
      <h1 className='text-4xl font-bold text-center mb-4'>
        Acesse Nossos Vídeos
      </h1>
      <p className='text-gray-600 dark:text-gray-300 mb-12 text-center text-xl'>
        Assista aos vídeos gratuitos que ensinam lições valiosas no cuidado das
        raízes de suas plantas.
      </p>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
          <div className='bg-white dark:bg-gray-800 rounded shadow-2xl'>
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
              <p className='text-lg lg:text-2xl text-center font-semibold pt-2 pb-4'>
                Como tratar raízes podres
              </p>
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
          <div className='bg-white dark:bg-gray-800 rounded shadow-2xl'>
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
              <p className='text-lg lg:text-2xl text-center font-semibold pt-2 pb-4'>
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
