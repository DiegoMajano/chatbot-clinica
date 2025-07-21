import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Activity, Stethoscope, UserCheck } from 'lucide-react'

export default function Services() {
    return (
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Nuestros servicios médicos</h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Servicios de salud integrales brindados por profesionales médicos con experiencia, utilizando equipos de última tecnología.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Stethoscope className="h-10 w-10 text-blue-600" />
                            <CardTitle>Medicina General</CardTitle>
                            <CardDescription>
                                Atención primaria integral para adultos y niños, con énfasis en la prevención y exámenes de salud.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Evaluaciones médicas anuales</li>
                                <li>• Control y seguimiento de enfermedades crónicas</li>
                                <li>• Aplicación de vacunas</li>
                                <li>• Pruebas de detección y tamizaje</li>

                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Activity className="h-10 w-10 text-blue-600" />
                            <CardTitle>Cardiología</CardTitle>
                            <CardDescription>
                                Atención cardiológica especializada con herramientas de diagnóstico avanzadas y opciones de tratamiento para la salud cardiovascular.                            </CardDescription>
                            </CardHeader>
                        <CardContent>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• ECG y pruebas de esfuerzo físico</li>
                                <li>• Terapias para enfermedades cardiovasculares</li>
                                <li>• Manejo de hipertensión arterial</li>
                                <li>• Programas de rehabilitación cardiovascular</li>

                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <UserCheck className="h-10 w-10 text-blue-600" />
                            <CardTitle>Pediatría</CardTitle>
                            <CardDescription>
                                Atención especializada para bebés, niños y adolescentes, con un enfoque en su crecimiento y desarrollo.                            
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Revisiones pediátricas de rutina</li>
                                <li>• Aplicación de vacunas</li>
                                <li>• Monitoreo del crecimiento infantil</li>
                                <li>• Evaluaciones del desarrollo psicomotor</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
