import Image from 'next/image'

const rsproOptions = [
  {
    title: 'Explore proyectos RSPro',
    description: 'Ideas con la experiencia de otras personas.',
    image: '/images/explorar.jpg'
  },
  {
    title: 'Plan RSPro',
    description: '¿Necesita un plan?',
    image: '/images/plan.jpg'
  },
  {
    title: 'Inscriba su proyecto RSPro',
    description: 'Comparta lo aprendido.',
    image: '/images/inscripcion.jpg'
  }
]

export default function RSProOptions() {
  return (
    <article className="flex justify-between gap-8 w-full">
      {rsproOptions.map((option, index) => (
        <section className="flex flex-col gap-5 items-center" key={index}>
          <Image src={option.image} alt={option.title} width={320} height={320} />
          <h3 className="text-2xl text-center font-semibold text-red-600">{option.title}</h3>
          <p className="text-center">{option.description}</p>
        </section>
      ))}
    </article>
  )
}
