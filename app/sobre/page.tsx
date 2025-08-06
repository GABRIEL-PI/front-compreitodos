"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Heart, Shield, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SobrePage() {
  const features = [
    {
      icon: <Target className="h-12 w-12 text-red-600" />,
      title: "Curadoria Especializada",
      description:
        "Nossa equipe analisa milhares de produtos diariamente para encontrar apenas as melhores ofertas com desconto real.",
    },
    {
      icon: <Clock className="h-12 w-12 text-red-600" />,
      title: "Atualizações em Tempo Real",
      description: "Ofertas atualizadas a cada hora. Nunca perca uma promoção relâmpago ou oferta por tempo limitado.",
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Verificação de Qualidade",
      description: "Todos os produtos passam por nossa verificação de qualidade, avaliações e histórico de preços.",
    },
    {
      icon: <Zap className="h-12 w-12 text-red-600" />,
      title: "Notificações Instantâneas",
      description: "Receba alertas no WhatsApp sobre ofertas da sua categoria favorita assim que elas aparecem.",
    },
  ]

  const stats = [
    { number: "50K+", label: "Produtos Analisados", icon: "📊" },
    { number: "100K+", label: "Usuários Ativos", icon: "👥" },
    { number: "R$ 2M+", label: "Economizados pelos Usuários", icon: "💰" },
    { number: "24/7", label: "Monitoramento", icon: "⏰" },
  ]

  const team = [
    {
      name: "Ana Silva",
      role: "Fundadora & CEO",
      description: "Especialista em e-commerce com 8 anos de experiência em marketplaces.",
      avatar: "/placeholder.svg?height=150&width=150&text=Ana",
    },
    {
      name: "Carlos Santos",
      role: "Head de Tecnologia",
      description: "Desenvolvedor full-stack responsável pela automação e análise de dados.",
      avatar: "/placeholder.svg?height=150&width=150&text=Carlos",
    },
    {
      name: "Maria Oliveira",
      role: "Curadora de Produtos",
      description: "Analista de produtos com foco em qualidade e melhores preços.",
      avatar: "/placeholder.svg?height=150&width=150&text=Maria",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20 text-white pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">❤️ NOSSA HISTÓRIA</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nascemos da paixão por encontrar as melhores ofertas e ajudar pessoas a economizar dinheiro de verdade!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-gray-800 mb-8">Nossa Missão</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Democratizar o acesso às melhores ofertas da Shopee, economizando tempo e dinheiro dos nossos usuários.
              Acreditamos que todos merecem ter acesso a produtos de qualidade com preços justos.
            </p>
            <div className="bg-red-50 p-8 rounded-2xl">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-600 mb-4">Nosso Compromisso</h3>
              <p className="text-gray-700">
                "Encontrar, verificar e compartilhar apenas ofertas reais que realmente valem a pena. Sua economia é
                nossa prioridade!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-gray-800 mb-12">Nossos Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-gray-800 mb-12">Como Funcionamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-gray-800 mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <div className="text-red-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-gray-800 mb-12">Nosso Processo</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Monitoramento</h3>
                <p className="text-gray-600">
                  Nossos sistemas monitoram milhares de produtos 24/7 em busca de ofertas reais.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Verificação</h3>
                <p className="text-gray-600">
                  Cada oferta é verificada manualmente para garantir qualidade e desconto real.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Compartilhamento</h3>
                <p className="text-gray-600">Publicamos apenas as melhores ofertas para nossa comunidade economizar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">JUNTE-SE À NOSSA COMUNIDADE!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mais de 100.000 pessoas já economizam conosco. Seja o próximo a descobrir ofertas incríveis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-red-700 font-black text-lg px-8 py-4 rounded-full"
              onClick={() => window.open("https://chat.whatsapp.com/HjGP23vWJu3GWP1lnDt3IR?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAadTJmGxAVpzMHFxQNXcnGmKofI3Q7mQRB9FbrIcZqyffK19Ni1N26j6h4PHsg_aem_qQ4o098G59Db6259exwWaA", "_blank", "noopener,noreferrer")}
            >
              📱 Receber Ofertas no WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg px-8 py-4 rounded-full bg-transparent"
              onClick={() => window.open("https://chat.whatsapp.com/HjGP23vWJu3GWP1lnDt3IR?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAadTJmGxAVpzMHFxQNXcnGmKofI3Q7mQRB9FbrIcZqyffK19Ni1N26j6h4PHsg_aem_qQ4o098G59Db6259exwWaA", "_blank", "noopener,noreferrer")}

            >
              🔍 Ver Todas as Ofertas
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
