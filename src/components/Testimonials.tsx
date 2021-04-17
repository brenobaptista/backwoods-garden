import Heart from './icons/Heart'

const Testimonials = (): JSX.Element => (
  <section className='bg-gray-100' id='avaliacoes'>
    <div className='container mx-auto px-6 py-20'>
      <h1 className='text-4xl font-bold text-center mb-12'>Avaliações</h1>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/3 px-2 mb-4'>
          <div className='bg-white rounded shadow-md py-4'>
            <p className='text-base px-6 mb-5'>
              Ótimo atendimento, a Eva é super atenciosa e ama o que faz, sem
              contar a variedade! Adoro esse lugar 😁👏
            </p>
            <p className='flex justify-start space-x-1.5 text-gray-500 text-xs md:text-sm px-6'>
              <Heart width={16} height={18} />
              <span>Fernanda (Facebook)</span>
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/3 px-2 mb-4'>
          <div className='bg-white rounded shadow-md py-4'>
            <p className='text-base px-6 mb-5'>
              Local com diversas opções de plantas! Fiquei encantada! Tem muitas
              opções de vasos também. O adubo é de excelente qualidade e é
              vendido em diversos tamanhos de sacas. Aceita cartões de débito e
              crédito (o que facilita pra quem não anda com dinheiro hoje em
              dia).
            </p>
            <p className='flex justify-start space-x-1.5 text-gray-500 text-xs md:text-sm px-6'>
              <Heart width={16} height={18} />
              <span>Dhayana (Google)</span>
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/3 px-2 mb-4'>
          <div className='bg-white rounded shadow-md py-4'>
            <p className='text-base px-6 mb-5'>
              Eva tem um excelente atendimento e muito amor pelo que faz,
              realmente ela transfere todo esse amor e carinho para as plantas.
            </p>
            <p className='flex justify-start space-x-1.5 text-gray-500 text-xs md:text-sm px-6'>
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
