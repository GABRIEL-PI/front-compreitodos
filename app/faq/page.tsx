"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mb-4">
      <CardContent className="p-0">
        <button
          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-bold text-gray-800 text-lg">{question}</h3>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="h-5 w-5 text-red-600 flex-shrink-0" />
          )}
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Como funciona o Comprei Todos?",
      answer:
        "Nossos sistemas monitoram milhares de produtos na Shopee 24/7, identificando ofertas reais com descontos significativos. Nossa equipe verifica cada oferta manualmente antes de publicar, garantindo que você encontre apenas produtos de qualidade com preços justos.",
    },
    {
      question: "As ofertas são realmente verdadeiras?",
      answer:
        "Sim! Verificamos o histórico de preços de cada produto antes de publicar. Só compartilhamos ofertas com desconto real, não preços inflacionados. Nossa equipe testa links e disponibilidade constantemente.",
    },
    {
      question: "Com que frequência as ofertas são atualizadas?",
      answer:
        "Nossas ofertas são atualizadas a cada hora. Ofertas relâmpago e promoções por tempo limitado são adicionadas em tempo real. Recomendamos verificar o site várias vezes ao dia para não perder nenhuma oportunidade.",
    },
    {
      question: "Como posso receber notificações das melhores ofertas?",
      answer:
        "Você pode se cadastrar para receber notificações via WhatsApp. Basta inserir seu número na página inicial e escolher as categorias de seu interesse. Enviamos apenas as melhores ofertas, sem spam.",
    },
    {
      question: "Vocês ganham comissão das vendas?",
      answer:
        "Sim, somos afiliados da Shopee e recebemos uma pequena comissão quando você compra através dos nossos links. Isso não afeta o preço do produto para você e nos ajuda a manter o serviço gratuito.",
    },
    {
      question: "Por que alguns produtos ficam indisponíveis rapidamente?",
      answer:
        "Muitas ofertas são por tempo limitado ou têm estoque reduzido. Como compartilhamos com milhares de usuários, os produtos mais atrativos podem esgotar rapidamente. Por isso recomendamos agir rápido quando encontrar algo interessante.",
    },
    {
      question: "Posso sugerir produtos para vocês analisarem?",
      answer:
        "Claro! Entre em contato conosco através da página de contato ou WhatsApp. Nossa equipe analisará o produto e, se atender nossos critérios de qualidade e preço, incluiremos em nossas ofertas.",
    },
    {
      question: "Vocês oferecem garantia dos produtos?",
      answer:
        "Não oferecemos garantia direta, pois não somos vendedores. A garantia é fornecida pela Shopee e pelos vendedores. Sempre recomendamos verificar a reputação do vendedor e ler avaliações antes de comprar.",
    },
    {
      question: "Como posso entrar em contato com vocês?",
      answer:
        "Você pode nos contatar através da página de contato, WhatsApp ou redes sociais. Respondemos todas as mensagens em até 24 horas. Para sugestões de produtos, use nosso formulário específico.",
    },
    {
      question: "O serviço é realmente gratuito?",
      answer:
        "Sim, nosso serviço é 100% gratuito para usuários. Não cobramos nada para acessar ofertas ou receber notificações. Nossa receita vem das comissões de afiliado, mantendo o serviço sustentável.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">❓ PERGUNTAS FREQUENTES</h1>
          <p className="text-xl md:text-2xl mb-8">Tire todas suas dúvidas sobre o Comprei Todos!</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">NÃO ENCONTROU SUA RESPOSTA?</h2>
          <p className="text-xl mb-8">Entre em contato conosco e teremos prazer em ajudar!</p>
          <Link href="/contato">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-red-700 font-black text-xl px-12 py-6 rounded-full"
            >
              💬 FALAR CONOSCO
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
