export default function RSProPresentationSection({
  children,
  paragraphs
}: {
  children: string | JSX.Element
  paragraphs: string[]
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-red-600 text-lg">{children}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}
