const Footer = (): JSX.Element => (
  <footer className='bg-gray-100'>
    <div className='container mx-auto p-6'>
      <div className='flex flex-wrap'>
        <div className='md:w-1/6' />
        <div className='w-full md:w-1/4 text-center md:text-left'>
          <h3 className='uppercase mt-6 md:mt-0 md:mb-6 font-bold'>Contato</h3>
          <ul className='mb-4 text-gray-600'>
            <li className='mt-2'>
              <a
                href='https://api.whatsapp.com/send?phone=5585988709845&text=Ol%C3%A1!%20Peguei%20seu%20telefone%20no%20site%20do%20Jardim%20Caipira.'
                className='hover:underline hover:text-orange-500'
              >
                WhatsApp
              </a>
            </li>
            <li className='mt-2'>
              <a
                href='https://www.instagram.com/jardim.caipira'
                className='hover:underline hover:text-orange-500'
              >
                Instagram
              </a>
            </li>
            <li className='mt-2'>
              <a
                href='https://www.facebook.com/jardimcaipira'
                className='hover:underline hover:text-orange-500'
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-1/4 text-center md:text-left'>
          <h3 className='uppercase mt-6 md:mt-0 md:mb-6 font-bold'>Endereço</h3>
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
          <h3 className='uppercase mt-6 md:mt-0 md:mb-6 font-bold'>Horários</h3>
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
