import React from 'react'
import { Button } from '../ui/button'
import { Badge, Calendar, Clock, Phone, Shield } from 'lucide-react'
import Image from 'next/image'


export default function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <Badge variant="outline" className="w-fit">
                                Trusted Healthcare Since 1995
                            </Badge>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                                Tu salud, nuestra prioridad
                            </h1>
                            <p className="max-w-[600px] text-gray-600 md:text-xl">
                                Servicios de salud integrales con médicos experimentados, instalaciones modernas y atención personalizada para ti y tu familia.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                <Calendar className="mr-2 h-4 w-4" />
                                Agendar cita
                            </Button>
                            <Button variant="outline" size="lg">
                                <Phone className="mr-2 h-4 w-4" />
                                Llamar ahora
                            </Button>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>Atención de emergencias 24/7</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Shield className="h-4 w-4" />
                                <span>Seguros aceptados</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg"
                            width="600"
                            height="400"
                            alt="Modern clinic interior"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
