const Videos = (): JSX.Element => (
  <section className='bg-green-100' id='videos'>
    <div className='container mx-auto px-6 py-20'>
      <h1 className='text-4xl font-bold text-center mb-12'>Vídeos</h1>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 px-2 mb-4'>
          <div className='bg-white rounded shadow-md py-2'>
            <a href='https://youtu.be/v3ur8ny3R70'>
              <img
                width='640'
                height='320'
                src='https://youtu.be/v3ur8ny3R70'
                alt='COMO TRATAR RAÍZES PODRES COM A EVA DO JARDIM CAIPIRA!'
              />
              <div className='text-lg text-center font-semibold'>
                Como tratar raízes podres
              </div>
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-2 mb-4'>
          <div className='bg-white rounded shadow-md py-2'>
            <a href='https://youtu.be/uKapAnCC9Bg'>
              <img
                width='640'
                height='320'
                src='https://youtu.be/uKapAnCC9Bg'
                alt='RESULTADO DA ROSA DO DESERTO JARDIM CAIPIRA'
              />
              <div className='text-lg text-center font-semibold'>
                Resultado do tratamento
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Videos
