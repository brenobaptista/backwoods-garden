import {
  Clock,
  Comment,
  Facebook,
  Heart,
  Instagram,
  Map,
  WhatsApp
} from './icons'

const Footer = (): JSX.Element => (
  <footer className='bg-white dark:bg-gray-800'>
    <div className='container mx-auto md:mb-0 p-6'>
      <div className='flex flex-wrap'>
        <div className='md:w-1/6' />
        <div className='w-full md:w-1/4 text-center md:text-left'>
          <h2 className='flex justify-center md:justify-start space-x-1.5 uppercase mt-6 md:mt-0 md:mb-6 font-bold'>
            <Comment width={16} height={24} />
            <span>Contato</span>
          </h2>
          <ul className='mb-4'>
            <li className='w-28 mx-auto md:mx-0 mt-2 text-gray-600 dark:text-gray-400 hover:opacity-75'>
              <a
                href='https://api.whatsapp.com/send?phone=5585988709845&text=Ol%C3%A1!%20Peguei%20seu%20telefone%20no%20site%20do%20Jardim%20Caipira.'
                className='flex justify-center md:justify-start space-x-1.5'
                target='_blank'
                rel='noreferrer noopener'
              >
                <WhatsApp width={16} height={24} />
                <span>WhatsApp</span>
              </a>
            </li>
            <li className='w-28 mx-auto md:mx-0 mt-2 text-gray-600 dark:text-gray-400 hover:opacity-75'>
              <a
                href='http://instagram.com/_u/jardim.caipira'
                className='flex justify-center md:justify-start space-x-1.5'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Instagram width={16} height={24} />
                <span>Instagram</span>
              </a>
            </li>
            <li className='w-28 mx-auto md:mx-0 mt-2 text-gray-600 dark:text-gray-400 hover:opacity-75'>
              <a
                href='https://www.facebook.com/jardimcaipira'
                className='flex justify-center md:justify-start space-x-1.5'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Facebook width={16} height={24} />
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-1/4 text-center md:text-left'>
          <h2 className='flex justify-center md:justify-start space-x-1.5 uppercase mt-6 md:mt-0 md:mb-2 font-bold'>
            <Map width={16} height={24} />
            <span>Endereço</span>
          </h2>
          <a
            href='https://www.google.com.br/maps/place/Jardim+Caipira/@-3.8029819,-38.5665152,17z/data=!3m1!4b1!4m5!3m4!1s0x7c74e7965496a1f:0x219909ae318f6f47!8m2!3d-3.8029871!4d-38.5643339'
            className='block my-2 w-28 mx-auto md:mx-0 text-gray-600 dark:text-gray-400 hover:opacity-75'
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
        <div className='w-full md:w-1/4 text-center md:text-left'>
          <h2 className='flex justify-center md:justify-start space-x-1.5 uppercase mt-6 md:mt-0 md:mb-6 font-bold'>
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
    <div className='bg-gray-100 dark:bg-gray-900 text-center py-2 flex flex-col sm:block'>
      <span>© 2019-{new Date().getFullYear()} Jardim Caipira. </span>
      <span>
        Feito com
        <div className='inline-flex'>
          <Heart width={26} height={13} />
        </div>
        por{' '}
        <a
          href='https://brenobaptista.vercel.app/'
          className='text-gray-600 dark:text-gray-400 hover:opacity-75'
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
