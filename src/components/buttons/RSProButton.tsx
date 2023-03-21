export default function RSProButton({ children }: { children: string | JSX.Element }) {
  return (
    <div className="bg-red-100 flex justify-center p-4 w-full">
      <button className="bg-red-600 border text-white px-4 py-2 rounded-lg hover:bg-transparent hover:border-red-600 hover:text-red-600 hover:shadow-md transition-all duration-200">
        {children}
      </button>
    </div>
  )
}
