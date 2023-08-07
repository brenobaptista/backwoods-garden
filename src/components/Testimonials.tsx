import { Heart } from './icons'

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

export default Testimonials
