import CompanyCard from '../../components/CompanyCard';

export const metadata = {
  title: 'Our Companies - Daran Global',
  description:
    'Discover our diverse portfolio of industry-leading companies including Daran Furniture, Dry X, and Orminia. Each company excels in their respective markets.',
  openGraph: {
    title: 'Our Companies - Daran Global',
    description: 'Discover our diverse portfolio of industry-leading companies.',
    type: 'website',
  },
};

export default function CompaniesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Companies',
    url: `${siteUrl}/companies`,
    description:
      'Discover our diverse portfolio of industry-leading companies including Daran Furniture, Dry X, and Orminia.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Organization',
            name: 'Daran Furniture',
            description: 'Premium furniture and interior design solutions',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Organization',
            name: 'Orminia',
            description: 'Container house and steel construction specialists',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Organization',
            name: 'Cocomodo',
            description: 'Premium coconut-based products and food ingredients',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Organization',
            name: 'FantechDrill',
            description: 'Advanced drilling solutions for industrial applications',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Organization',
            name: 'Dry X',
            description: 'Advanced moisture control solutions and silica gel products',
          },
        },
      ],
    },
  };

  const companies = [
    {
      name: 'Daran Furniture',
      description:
        'Premium furniture and interior design solutions for residential and commercial spaces with contemporary aesthetics and superior craftsmanship.',
      industry: 'Furniture & Interior Design',
      image:
        'https://readdy.ai/api/search-image?query=Modern%20luxury%20furniture%20showroom%20with%20contemporary%20sofas%2C%20elegant%20dining%20sets%2C%20premium%20wooden%20tables%2C%20sophisticated%20interior%20design%2C%20high-end%20furniture%20display%2C%20professional%20lighting%2C%20clean%20minimalist%20aesthetic%2C%20upscale%20furniture%20store%20atmosphere&width=800&height=600&seq=daran-furniture&orientation=landscape',
      companySlug: 'daran-furniture',
    },
    {
      name: 'Orminia',
      description:
        'Container house and steel construction specialists creating modern bungalows and residential solutions using repurposed shipping containers.',
      industry: 'Container Houses & Steel Construction',
      image:
        'https://readdy.ai/api/search-image?query=Modern%20container%20house%20bungalow%20with%20steel%20construction%2C%20shipping%20container%20home%20with%20contemporary%20design%2C%20container%20architecture%20residential%20building%2C%20steel%20frame%20container%20house&width=800&height=600&seq=orminia&orientation=landscape',
      companySlug: 'orminia',
    },
    {
      name: 'Cocomodo',
      description:
        'Premium coconut charcoal briquettes for shisha, hookah, and BBQ applications. High-quality, smokeless, and long-lasting charcoal from Indonesia.',
      industry: 'Coconut Charcoal Products',
      image:
        'https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe3303fadbf3b6365b88a.png',
      companySlug: 'cocomodo',
    },
    {
      name: 'FantechDrill',
      description:
        'Advanced drilling solutions delivering precision engineering, innovative technology, and unmatched reliability for demanding industrial drilling projects worldwide.',
      industry: 'Drilling Equipment & Solutions',
      image: 'https://fantechdrill.com/logo-full.webp',
      companySlug: 'fantechdrill',
    },
    {
      name: 'Dry X',
      description:
        'Advanced moisture control solutions and silica gel products for industrial applications, food preservation, and pharmaceutical packaging.',
      industry: 'Moisture Control & Chemical Solutions',
      image:
        'https://readdy.ai/api/search-image?query=Industrial%20moisture%20control%20facility%20with%20silica%20gel%20production%20equipment%2C%20chemical%20processing%20machinery%2C%20quality%20control%20laboratory%2C%20industrial%20packaging%20systems%2C%20professional%20manufacturing%20environment%2C%20clean%20industrial%20setting%2C%20advanced%20technology%20equipment&width=800&height=600&seq=dry-x&orientation=landscape',
      companySlug: 'dry-x',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen pt-20">
        <section
          className="relative py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20corporate%20business%20portfolio%20showcase%2C%20multiple%20industry%20sectors%2C%20diverse%20business%20operations%2C%20professional%20corporate%20environment%2C%20industrial%20excellence%2C%20contemporary%20business%20facilities%2C%20global%20business%20network%2C%20corporate%20success&width=1920&height=800&seq=companies-hero&orientation=landscape')`,
          }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Our <span className="gradient-text">Companies</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Discover our diverse portfolio of industry-leading companies, each excelling in their
              respective markets.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Excellence Across Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
                Each company in our portfolio represents years of expertise, innovation, and
                commitment to delivering exceptional value to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CompanyCard {...company} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Why Choose Our Companies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                Our portfolio companies share common values of excellence, innovation, and customer
                satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'ri-award-line',
                  title: 'Industry Leaders',
                  description: 'Each company is a recognized leader in their respective industry',
                },
                {
                  icon: 'ri-customer-service-2-line',
                  title: 'Customer Focus',
                  description: 'Dedicated to exceeding customer expectations in every interaction',
                },
                {
                  icon: 'ri-lightbulb-line',
                  title: 'Innovation',
                  description: 'Continuously developing new solutions and improving existing ones',
                },
                {
                  icon: 'ri-global-line',
                  title: 'Global Reach',
                  description: 'Serving clients across multiple countries and continents',
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center p-6 bg-gray-50 rounded-lg hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-800 to-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Contact us to learn more about how our companies can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <a
                href="/contact"
                className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
              >
                Learn About Us
              </a>
            </div>
          </div>

          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-float animation-delay-200"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full animate-float animation-delay-500"></div>
        </section>
      </div>
    </>
  );
}
