"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    alert("Mensagem enviada com sucesso! Responderemos em até 24 horas.")
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">📞 FALE CONOSCO</h1>
          <p className="text-xl md:text-2xl mb-8">Estamos aqui para ajudar você a economizar ainda mais!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-gray-800 mb-8">Envie sua Mensagem</h2>
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="assunto" className="block text-sm font-bold text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <select
                        id="assunto"
                        name="assunto"
                        required
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="sugestao-produto">Sugestão de Produto</option>
                        <option value="problema-oferta">Problema com Oferta</option>
                        <option value="duvida-geral">Dúvida Geral</option>
                        <option value="parceria">Parceria</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-bold text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        rows={6}
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
                        placeholder="Descreva sua mensagem detalhadamente..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                    >
                      📨 Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-gray-800 mb-8">Outras Formas de Contato</h2>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <MessageCircle className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">WhatsApp</h3>
                        <p className="text-gray-600 mb-3">Fale conosco diretamente pelo WhatsApp</p>
                        <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open("https://chat.whatsapp.com/HjGP23vWJu3GWP1lnDt3IR?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAadTJmGxAVpzMHFxQNXcnGmKofI3Q7mQRB9FbrIcZqyffK19Ni1N26j6h4PHsg_aem_qQ4o098G59Db6259exwWaA", "_blank", "noopener,noreferrer")}>💬 Abrir WhatsApp</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">E-mail</h3>
                        <p className="text-gray-600 mb-2">contato@compreitodos.com.br</p>
                        <p className="text-sm text-gray-500">Respondemos em até 24 horas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Horário de Atendimento</h3>
                        <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-gray-600">Sábado: 9h às 14h</p>
                        <p className="text-sm text-gray-500 mt-2">Ofertas são atualizadas 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Localização</h3>
                        <p className="text-gray-600">São Paulo, SP - Brasil</p>
                        <p className="text-sm text-gray-500 mt-2">Atendimento 100% digital</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-800 mb-6">Antes de entrar em contato...</h2>
          <p className="text-xl text-gray-600 mb-8">Que tal dar uma olhada nas perguntas mais frequentes?</p>
          <Link href="/faq">
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4 bg-transparent"
            >
              📋 Ver Perguntas Frequentes
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
