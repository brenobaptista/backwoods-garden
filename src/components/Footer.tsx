import Clock from './icons/Clock'
import Comment from './icons/Comment'
import Map from './icons/Map'

const Footer = (): JSX.Element => (
  <footer className='bg-white'>
    <div className='container mx-auto p-6'>
      <div className='flex flex-wrap'>
        <div className='md:w-1/6' />
        <div className='w-full md:w-1/4 text-center md:text-left'>
          <h2 className='flex space-x-1.5 uppercase mt-6 md:mt-0 md:mb-6 font-bold'>
            <Comment width={16} height={24} />
            <span>Contato</span>
          </h2>
          <ul className='mb-4 text-gray-600'>
            <li className='mt-2'>
              <a
                href='https://api.whatsapp.com/send?phone=5585988709845&text=Ol%C3%A1!%20Peguei%20seu%20telefone%20no%20site%20do%20Jardim%20Caipira.'
                className='hover:underline hover:text-orange-500'
                target='_blank'
                rel='noreferrer noopener'
              >
                WhatsApp
              </a>
            </li>
            <li className='mt-2'>
              <a
                href='http://instagram.com/_u/jardim.caipira'
                className='hover:underline hover:text-orange-500'
                target='_blank'
                rel='noreferrer noopener'
              >
                Instagram
              </a>
            </li>
            <li className='mt-2'>
              <a
                href='https://www.facebook.com/jardimcaipira'
                className='hover:underline hover:text-orange-500'
                target='_blank'
                rel='noreferrer noopener'
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-1/4 text-center md:text-left'>
          <h2 className='flex space-x-1.5 uppercase mt-6 md:mt-0 md:mb-6 font-bold'>
            <Map width={16} height={24} />
            <span>Endereço</span>
          </h2>
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
          <h2 className='flex space-x-1.5 uppercase mt-6 md:mt-0 md:mb-6 font-bold'>
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
  </footer>
)

export default Footer
