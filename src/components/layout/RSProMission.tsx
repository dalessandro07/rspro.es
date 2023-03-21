const rsproParagraphs = [
  'Una forma de vida que une el interés de aprender y experimentar mediante la acción focalizada en la mejora de uno mismo en bien de los demás.',
  'En esta página web podrá encontrar proyectos RSPro con los que motivarse para crecer con impacto positivo hacia nuestra sociedad.'
]

export default function RSProMission({ children }: { children: string | JSX.Element }) {
  return (
    <section className="flex flex-col gap-10 items-center">
      <h2 className="text-2xl text-center text-red-600 font-semibold">{children}</h2>

      <article className="flex flex-col gap-6">
        {rsproParagraphs.map((paragraph, index) => (
          <p key={index} className="italic text-center">
            {paragraph}
          </p>
        ))}
      </article>
    </section>
  )
}
