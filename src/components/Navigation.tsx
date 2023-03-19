import Link from 'next/link'
import { useRouter } from 'next/router'

const navigationItems = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Proyectos RSPro',
    path: '/proyectos'
  },
  {
    name: 'Presentación',
    path: '/presentacion'
  },
  {
    name: 'Contacto',
    path: '/contacto'
  }
]

export default function Navigation() {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {navigationItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`${currentPath === item.path ? 'font-bold' : 'font-light'}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
