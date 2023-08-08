import Image from 'next/image'

import Header from './Header'
import {
  Clock,
  Comment,
  Facebook,
  Heart,
  Instagram,
  Map,
  WhatsApp
} from '@/icons'
import raizesPodres from 'public/images/thumbnails/como-tratar-raizes-podres.jpg'
import resultadoRaizes from 'public/images/thumbnails/resultado-do-tratamento.jpg'
import cactos from 'public/images/products/cactos.jpg'
import decoracao from 'public/images/products/decoracao.jpg'
import suculenta from 'public/images/products/suculenta.jpg'
import orquidea from 'public/images/products/orquidea.jpg'
import gloxinia from 'public/images/products/gloxinia.jpg'
import bungavile from 'public/images/products/bungavile.jpg'

const Page = () => (
  <div className='text-gray-800 dark:text-gray-200'>
    <Header />
    <Hero />
    <Products />
    <Testimonials />
    <Videos />
    <Footer />
  </div>
)

const Hero = () => (
  <header className='bg-indigo-100 dark:bg-gray-700 lg:bg-hero-desktop lg:bg-right-bottom lg:bg-no-repeat'>
    <div className='container mx-auto px-6 pb-20 pt-36 lg:pb-40 lg:pt-56'>
      <div className='max-w-3xl text-4xl font-bold lg:text-6xl'>
        Encontre vasos, plantas ornamentais e artigos de madeira artesanal
      </div>
      <p className='mt-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300 lg:text-2xl'>
        Queremos deixar o seu jardim cada vez mais lindo! Temos uma enorme
        variedade de plantas, vasos e decorações para sua casa.
      </p>
      <div className='mt-16 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 lg:justify-start'>
        <a
          className='flex w-64 justify-center space-x-2 rounded border-2 border-gray-700 bg-gray-700 p-4 text-center text-base text-white shadow-xl transition duration-300 ease-in-out hover:opacity-75 motion-reduce:transition-none dark:border-gray-800 dark:bg-gray-800 lg:text-xl'
          href='http://instagram.com/_u/jardim.caipira'
          target='_blank'
          rel='noreferrer noopener'
        >
          <Instagram width={18} height={28} />
          <span>Ver Instagram</span>
        </a>
        <a
          className='flex w-64 justify-center space-x-2 rounded border-2 border-gray-700 p-4 text-center text-base text-gray-700 shadow-xl transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white motion-reduce:transition-none dark:border-gray-800 dark:text-white dark:hover:bg-gray-800 lg:text-xl'
          href='https://api.whatsapp.com/send?phone=5585988709845&text=Ol%C3%A1!%20Peguei%20seu%20telefone%20no%20site%20do%20Jardim%20Caipira.'
          target='_blank'
          rel='noreferrer noopener'
        >
          <WhatsApp width={18} height={24} />
          <span>Abrir WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
)

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

const Testimonials = () => (
  <section className='bg-gray-100 dark:bg-gray-900' id='avaliacoes'>
    <div className='container mx-auto px-6 py-20'>
      <div className='flex flex-wrap'>
        <div className='mb-4 w-full px-2 md:w-1/3'>
          <div className='rounded bg-white py-4 shadow-lg dark:bg-gray-800'>
            <p className='mb-5 px-6 text-base'>
              Ótimo atendimento, a Eva é super atenciosa e ama o que faz, sem
              contar a variedade! Adoro esse lugar 😁👏
            </p>
            <p className='flex justify-start space-x-1.5 px-6 text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
              <Heart width={16} height={18} />
              <span>Fernanda (Facebook)</span>
            </p>
          </div>
        </div>
        <div className='mb-4 w-full px-2 md:w-1/3'>
          <div className='rounded bg-white py-4 shadow-lg dark:bg-gray-800'>
            <p className='mb-5 px-6 text-base'>
              Local com diversas opções de plantas! Fiquei encantada! Tem muitas
              opções de vasos também. O adubo é de excelente qualidade e é
              vendido em diversos tamanhos de sacas. Aceita cartões de débito e
              crédito (o que facilita pra quem não anda com dinheiro hoje em
              dia).
            </p>
            <p className='flex justify-start space-x-1.5 px-6 text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
              <Heart width={16} height={18} />
              <span>Dhayana (Google)</span>
            </p>
          </div>
        </div>
        <div className='mb-4 w-full px-2 md:w-1/3'>
          <div className='rounded bg-white py-4 shadow-lg dark:bg-gray-800'>
            <p className='mb-5 px-6 text-base'>
              Eva tem um excelente atendimento e muito amor pelo que faz,
              realmente ela transfere todo esse amor e carinho para as plantas.
            </p>
            <p className='flex justify-start space-x-1.5 px-6 text-xs text-gray-500 dark:text-gray-400 md:text-sm'>
              <Heart width={16} height={18} />
              <span>Silvia (Facebook)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

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

const Footer = () => (
  <footer className='bg-white dark:bg-gray-800'>
    <div className='container mx-auto p-6 md:mb-0'>
      <div className='flex flex-wrap'>
        <div className='md:w-1/6' />
        <div className='w-full text-center md:w-1/4 md:text-left'>
          <h2 className='mt-6 flex justify-center space-x-1.5 font-bold uppercase md:mb-6 md:mt-0 md:justify-start'>
            <Comment width={16} height={24} />
            <span>Contato</span>
          </h2>
          <ul className='mb-4'>
            <li className='mx-auto mt-2 w-28 text-gray-600 hover:opacity-75 dark:text-gray-400 md:mx-0'>
              <a
                href='https://api.whatsapp.com/send?phone=5585988709845&text=Ol%C3%A1!%20Peguei%20seu%20telefone%20no%20site%20do%20Jardim%20Caipira.'
                className='flex justify-center space-x-1.5 md:justify-start'
                target='_blank'
                rel='noreferrer noopener'
              >
                <WhatsApp width={16} height={24} />
                <span>WhatsApp</span>
              </a>
            </li>
            <li className='mx-auto mt-2 w-28 text-gray-600 hover:opacity-75 dark:text-gray-400 md:mx-0'>
              <a
                href='http://instagram.com/_u/jardim.caipira'
                className='flex justify-center space-x-1.5 md:justify-start'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Instagram width={16} height={24} />
                <span>Instagram</span>
              </a>
            </li>
            <li className='mx-auto mt-2 w-28 text-gray-600 hover:opacity-75 dark:text-gray-400 md:mx-0'>
              <a
                href='https://www.facebook.com/jardimcaipira'
                className='flex justify-center space-x-1.5 md:justify-start'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Facebook width={16} height={24} />
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full text-center md:w-1/4 md:text-left'>
          <h2 className='mt-6 flex justify-center space-x-1.5 font-bold uppercase md:mb-2 md:mt-0 md:justify-start'>
            <Map width={16} height={24} />
            <span>Endereço</span>
          </h2>
          <a
            href='https://www.google.com.br/maps/place/Jardim+Caipira/@-3.8029819,-38.5665152,17z/data=!3m1!4b1!4m5!3m4!1s0x7c74e7965496a1f:0x219909ae318f6f47!8m2!3d-3.8029871!4d-38.5643339'
            className='mx-auto my-2 block w-28 text-gray-600 hover:opacity-75 dark:text-gray-400 md:mx-0'
            target='_blank'
            rel='noreferrer noopener'
          >
            Abrir no mapa
          </a>
          <p>
            Rua Um, 307
            <br />
            Jardim Cearense
            <br />
            Fortaleza - CE
            <br />
            60712-247
          </p>
        </div>
        <div className='w-full text-center md:w-1/4 md:text-left'>
          <h2 className='mt-6 flex justify-center space-x-1.5 font-bold uppercase md:mb-6 md:mt-0 md:justify-start'>
            <Clock width={16} height={24} />
            <span>Horários</span>
          </h2>
          <p>
            Segunda: Fechado
            <br />
            Terça a Sexta: 7h–11h, 15h–18h
            <br />
            Sábado e Domingo: 7h-13h
          </p>
        </div>
      </div>
    </div>
    <div className='flex flex-col bg-gray-100 py-2 text-center dark:bg-gray-900 sm:block'>
      <span>© 2019-{new Date().getFullYear()} Jardim Caipira. </span>
      <span>
        Feito com
        <div className='inline-flex'>
          <Heart width={26} height={13} />
        </div>
        por{' '}
        <a
          href='https://www.brenobaptista.com/'
          className='text-gray-600 hover:opacity-75 dark:text-gray-400'
          target='_blank'
          rel='noreferrer noopener'
        >
          Breno Baptista
        </a>
      </span>
    </div>
  </footer>
)

export default Page
