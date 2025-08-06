import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { ImageCarousel } from './components/ImageCarousel';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);

  const promoTexts = [
    "🎁 Compre o conjunto e ganhe limpa pratas grátis!",
    "✨ Ofertas exclusivas. Sofisticação em cada detalhe"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromoIndex((prevIndex) => 
        prevIndex === promoTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(timer);
  }, [promoTexts.length]);

  const categories = [
    { id: 'pulseiras', name: 'Pulseiras' },
    { id: 'cordoes', name: 'Cordões' },
    { id: 'conjuntos', name: 'Conjuntos' },
    { id: 'brincos', name: 'Brincos' },
    { id: 'aneis', name: 'Anéis' }
  ];

  const products = [
    {
      id: 1,
      name: 'Pulseira Delicada',
      image: 'PHOTO-2025-08-04-13-57-34.jpg',
      category: 'PULSEIRA'
    },
    {
      id: 2,
      name: 'Produto Especial',
      image: 'PHOTO-2025-08-04-13-57-37 2.jpg',
      category: 'PRODUTO'
    },
    {
      id: 3,
      name: 'Joia Exclusiva',
      image: '1df0a827-0012-40e8-8fcb-e51fccdaca70.jpg',
      category: 'JOIA'
    },
    {
      id: 5,
      name: 'Peça Artesanal',
      image: 'PHOTO-2025-08-04-13-57-35.jpg',
      category: 'ARTESANAL'
    }
  ];
  const carouselImages = [
    '/3824CF76-C806-4B46-BB3E-3021AA234509.PNG',
    '/C1A14A38-CCAD-4210-B711-E0CD887AD6F8.PNG',
    '/FD773244-81D7-4185-A0B5-591DE7377406.PNG',
    '/EF784273-D6B0-41D8-B97F-0B3A3530F846.PNG'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Barra Promocional */}
      <div className="bg-[#4a9b7a] text-white text-center py-2 px-4">
        <div className="text-sm font-medium h-6 flex items-center justify-center">
          <p className="transition-opacity duration-500">
            {promoTexts[currentPromoIndex]}
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#61b795] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Menu Mobile - Esquerda */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors touch-manipulation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo Centralizada */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo site.png" 
                  alt="Marie Pratas Logo" 
                  className="h-12 sm:h-16 object-contain"
                />
              </div>
            </div>

            {/* Ícones - Direita */}
            <div className="w-12"></div>
          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-3 border-t border-white/20">
              <nav className="flex flex-col space-y-3 pt-3">
                <a href="#home" className="text-white hover:text-white/80 transition-colors py-2 px-1 touch-manipulation">
                  Início
                </a>
                <a href="#produtos" className="text-white hover:text-white/80 transition-colors py-2 px-1 touch-manipulation">
                  Produtos
                </a>
                <a href="#sobre" className="text-white hover:text-white/80 transition-colors py-2 px-1 touch-manipulation">
                  Sobre
                </a>
                <a href="#contato" className="text-white hover:text-white/80 transition-colors py-2 px-1 touch-manipulation">
                  Contato
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Carrossel de Imagens */}
      <section className="py-4 sm:py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* Seção WhatsApp */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 tracking-wide leading-tight">
            Escolha suas <span className="font-serif italic text-[#61b795]">peças</span> e fale conosco
          </h2>
          <a
            href="http://wa.me/55083996480802?text=Vim%20do%20site%20tenho%20interesse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20b858] transition-all duration-300 transform active:scale-95 shadow-lg hover:shadow-xl touch-manipulation text-sm sm:text-base"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Botões das Categorias */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            {/* Primeira linha - 3 botões */}
            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center w-full max-w-sm sm:max-w-none">
              <button className="flex-1 sm:flex-none px-3 py-2 sm:px-4 sm:py-2 bg-white border border-gray-300 text-black rounded-lg font-medium hover:border-black hover:shadow-md transition-all duration-300 shadow-sm text-xs sm:text-sm touch-manipulation active:scale-95 min-w-0">
                Pulseiras
              </button>
              <button className="flex-1 sm:flex-none px-3 py-2 sm:px-4 sm:py-2 bg-white border border-gray-300 text-black rounded-lg font-medium hover:border-black hover:shadow-md transition-all duration-300 shadow-sm text-xs sm:text-sm touch-manipulation active:scale-95 min-w-0">
                Colares
              </button>
              <button className="flex-1 sm:flex-none px-3 py-2 sm:px-4 sm:py-2 bg-white border border-gray-300 text-black rounded-lg font-medium hover:border-black hover:shadow-md transition-all duration-300 shadow-sm text-xs sm:text-sm touch-manipulation active:scale-95 min-w-0">
                Conjuntos
              </button>
            </div>
            {/* Segunda linha - 2 botões */}
            <div className="flex gap-2 sm:gap-3 justify-center w-full max-w-xs sm:max-w-none">
              <button className="flex-1 sm:flex-none px-3 py-2 sm:px-4 sm:py-2 bg-white border border-gray-300 text-black rounded-lg font-medium hover:border-black hover:shadow-md transition-all duration-300 shadow-sm text-xs sm:text-sm touch-manipulation active:scale-95 min-w-0">
                Brincos
              </button>
              <button className="flex-1 sm:flex-none px-3 py-2 sm:px-4 sm:py-2 bg-white border border-gray-300 text-black rounded-lg font-medium hover:border-black hover:shadow-md transition-all duration-300 shadow-sm text-xs sm:text-sm touch-manipulation active:scale-95 min-w-0">
                Anéis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden touch-manipulation">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    A partir de R$
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="bg-[#61b795] text-white py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-white/80 text-sm sm:text-base">
            Joias em pratas italianas • Qualidade e elegância
          </p>
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
            <p className="text-white/60 text-xs sm:text-sm">
              © 2024 Marie Pratas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;