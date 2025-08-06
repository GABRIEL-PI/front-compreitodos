import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">📋 TERMOS DE USO</h1>
          <p className="text-xl md:text-2xl mb-8">Condições para uso do Comprei Todos</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Última atualização:</strong> Janeiro de 2024
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-600 mb-6">
                Ao acessar e usar o site Comprei Todos, você concorda em cumprir e estar vinculado aos seguintes termos
                e condições de uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-600 mb-6">
                O Comprei Todos é um serviço de curadoria de ofertas que identifica e compartilha produtos com desconto
                na plataforma Shopee. Não somos vendedores diretos e atuamos como afiliados, recebendo comissões pelas
                vendas realizadas através de nossos links.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Responsabilidades do Usuário</h2>
              <ul className="text-gray-600 mb-6 list-disc pl-6">
                <li>Usar o serviço apenas para fins legais e de acordo com estes termos</li>
                <li>Não tentar interferir no funcionamento do site ou sistemas</li>
                <li>Não usar o serviço para atividades fraudulentas ou prejudiciais</li>
                <li>Verificar informações de produtos diretamente na Shopee antes de comprar</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Limitações de Responsabilidade</h2>
              <p className="text-gray-600 mb-6">O Comprei Todos não se responsabiliza por:</p>
              <ul className="text-gray-600 mb-6 list-disc pl-6">
                <li>Qualidade, autenticidade ou disponibilidade dos produtos</li>
                <li>Problemas com entregas, devoluções ou garantias</li>
                <li>Alterações de preços ou promoções após a publicação</li>
                <li>Disputas entre usuários e vendedores da Shopee</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Propriedade Intelectual</h2>
              <p className="text-gray-600 mb-6">
                Todo o conteúdo do site, incluindo textos, imagens, logos e design, é propriedade do Comprei Todos ou de
                seus licenciadores. É proibida a reprodução sem autorização prévia.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Privacidade</h2>
              <p className="text-gray-600 mb-6">
                Coletamos apenas informações necessárias para fornecer nosso serviço (como número de WhatsApp para
                notificações). Não compartilhamos dados pessoais com terceiros, exceto quando necessário para o
                funcionamento do serviço.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Modificações</h2>
              <p className="text-gray-600 mb-6">
                Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas serão
                comunicadas através do site. O uso continuado após as modificações constitui aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Rescisão</h2>
              <p className="text-gray-600 mb-6">
                Podemos suspender ou encerrar seu acesso ao serviço a qualquer momento, por qualquer motivo, incluindo
                violação destes termos.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Lei Aplicável</h2>
              <p className="text-gray-600 mb-6">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais
                competentes do Brasil.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contato</h2>
              <p className="text-gray-600 mb-6">
                Para dúvidas sobre estes termos, entre em contato através da nossa página de contato ou pelo e-mail:
                contato@compreitodos.com.br
              </p>

              <div className="bg-red-50 p-6 rounded-lg mt-8">
                <p className="text-red-700 font-medium">
                  <strong>Importante:</strong> Ao usar nosso serviço, você confirma ter lido, compreendido e concordado
                  com todos os termos acima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
