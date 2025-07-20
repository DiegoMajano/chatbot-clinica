import { Award, Heart, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                                ¿Por qué elegir nuestra clinica?
                            </h2>
                            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Con más de 25 años de experiencia, brindamos servicios de atención médica excepcionales con un enfoque centrado en el paciente.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex items-start gap-3">
                                <Users className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Médicos expertos</h3>
                                    <p className="text-sm text-gray-600">Médicos certificados y personal médico experimentado</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Tecnología avanzada</h3>
                                    <p className="text-sm text-gray-600">Equipos e instalaciones médicas de última generación</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Heart className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Atención personalizada</h3>
                                    <p className="text-sm text-gray-600">Planes de tratamiento personalizados para las necesidades de cada paciente</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Award className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Calidad y seguridad</h3>
                                    <p className="text-sm text-gray-600">Centro acreditado que cumple con los más altos estándares de seguridad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xpbmljfGVufDB8fDB8fHww"
                            width="600"
                            height="400"
                            alt="Medical team"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
