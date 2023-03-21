export default function RSProArticleLayout({
  children,
  bordered = false
}: {
  children: JSX.Element | JSX.Element[]
  bordered?: boolean
}) {
  return (
    <article className="w-full px-16">
      <div
        className={`flex flex-col w-full gap-8 items-center py-10 ${
          bordered ? 'border-b-2 border-gray-300' : ''
        }`}>
        {children}
      </div>
    </article>
  )
}
