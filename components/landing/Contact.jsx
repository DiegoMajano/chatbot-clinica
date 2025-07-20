import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Contact() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                            Agenda tu cita
                        </h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            ¿Listo para dar el siguiente paso en tu atención médica? Contáctanos hoy para agendar una cita.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Información de Contacto</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Teléfono</p>
                                        <p className="text-sm text-gray-600">(503) 7822-1744</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Correo electrónico</p>
                                        <p className="text-sm text-gray-600">info@healthcareclinic.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Dirección</p>
                                        <p className="text-sm text-gray-600">
                                            426 Diagonal Dr Luis Edmundo Vásquez
                                            <br />
                                            Colonia Médica, San Salvador, El Salvador
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Horario</p>
                                        <p className="text-sm text-gray-600">
                                            Lun-Vie: 7AM-6PM
                                            <br />
                                            Sáb: 8AM-2PM
                                            <br />
                                            Dom: Solo emergencias
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Solicitar Cita</CardTitle>
                            <CardDescription>
                                Completa el siguiente formulario y nos pondremos en contacto para agendar tu cita.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">
                                            Nombre
                                        </label>
                                        <Input id="firstName" placeholder="Edmundo" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">
                                            Apellido
                                        </label>
                                        <Input id="lastName" placeholder="Morales" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Correo electrónico
                                    </label>
                                    <Input id="email" type="email" placeholder="edmundo.morales@ejemplo.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Teléfono
                                    </label>
                                    <Input id="phone" type="tel" placeholder="7822-1744" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium">
                                        Servicio requerido
                                    </label>
                                    <Input id="service" placeholder="Chequeo general, consulta, etc." />
                                </div>
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                    Solicitar Cita
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
