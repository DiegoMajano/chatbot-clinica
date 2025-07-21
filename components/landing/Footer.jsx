import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">© 2025 miCurita - Clinica. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Política de Privacidad
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Portal del Paciente
          </Link>
        </nav>
      </footer>
  )
}
