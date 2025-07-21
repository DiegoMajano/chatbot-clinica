import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Heart,} from "lucide-react"

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
            <Link href="/" className="flex items-center justify-center">
                <Heart className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Clinica miCurita</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Servicios
                </Link>
                <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Sobre miCurita
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Contáctanos
                </Link>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Agendar cita
                </Button>
            </nav>
        </header>
    )
}
