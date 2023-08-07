import {
  Clock,
  Comment,
  Facebook,
  Heart,
  Instagram,
  Map,
  WhatsApp
} from './icons'

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

export default Footer
