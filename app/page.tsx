import HeroSection from '../components/HeroSection';
import CompanyCard from '../components/CompanyCard';

export const metadata = {
  title: "Daran Global – Equipment, Furniture & Architecture",
  description: "Leading diversified corporate group delivering excellence in industrial equipment, custom furniture solutions, advanced moisture control systems, and contemporary architecture. We provide innovative, sustainable, and high-quality solutions for businesses, residences, and institutions, combining precision engineering, ergonomic design, environmental comfort, and modern architectural innovation to ensure efficiency, durability, and lasting impact.",
  keywords: "Diversified corporate group, Industrial equipment, Custom furniture, Moisture control systems, Contemporary architecture, Innovative machinery, Ergonomic furniture, Sustainable design",
  openGraph: {
    title: "Daran Global – Equipment, Furniture & Architecture",
    description: "Leading diversified corporate group delivering excellence in industrial equipment, custom furniture solutions, advanced moisture control systems, and contemporary architecture.",
    type: "website",
  },
};

const companies = [
  {
    name: "Daran Furniture",
    description: "Premium furniture and interior design solutions for residential and commercial spaces with contemporary aesthetics and superior craftsmanship.",
    industry: "Furniture & Interior Design",
    image: "https://readdy.ai/api/search-image?query=Modern%20luxury%20furniture%20showroom%20with%20contemporary%20sofas%2C%20elegant%20dining%20sets%2C%20premium%20wooden%20tables%2C%20sophisticated%20interior%20design%2C%20high-end%20furniture%20display%2C%20professional%20lighting%2C%20clean%20minimalist%20aesthetic%2C%20upscale%20furniture%20store%20atmosphere&width=800&height=600&seq=daran-furniture&orientation=landscape",
    companySlug: "daran-furniture"
  },
  {
    name: "Dry X",
    description: "Advanced moisture control solutions and silica gel products for industrial applications, food preservation, and pharmaceutical packaging.",
    industry: "Moisture Control & Chemical Solutions",
    image: "https://readdy.ai/api/search-image?query=Industrial%20moisture%20control%20facility%20with%20silica%20gel%20production%20equipment%2C%20chemical%20processing%20machinery%2C%20quality%20control%20laboratory%2C%20industrial%20packaging%20systems%2C%20professional%20manufacturing%20environment%2C%20clean%20industrial%20setting%2C%20advanced%20technology%20equipment&width=800&height=600&seq=dry-x&orientation=landscape",
    companySlug: "dry-x"
  },
  {
    name: "Orminia",
    description: "Contemporary architecture and construction services specializing in sustainable building solutions and innovative design concepts.",
    industry: "Architecture & Construction",
    image: "https://readdy.ai/api/search-image?query=Modern%20contemporary%20architecture%20building%20with%20glass%20facade%2C%20sustainable%20construction%20materials%2C%20innovative%20design%20elements%2C%20green%20building%20technology%2C%20architectural%20excellence%2C%20professional%20construction%20site%2C%20modern%20urban%20development%2C%20sophisticated%20building%20design&width=800&height=600&seq=orminia&orientation=landscape",
    companySlug: "orminia"
  },
  {
    name: "FantechDrill",
    description: "Advanced drilling solutions delivering precision engineering, innovative technology, and unmatched reliability for demanding industrial drilling projects worldwide.",
    industry: "Drilling Equipment & Solutions",
    image: "https://fantechdrill.com/logo-full.webp",
    companySlug: "fantechdrill"
  }
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Daran Global",
    "url": "https://daranglobal.com",
    "logo": "https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/fb467e4e7a399168a060cedfdb073e6f",
    "description": "Leading diversified corporate group delivering excellence in industrial equipment, custom furniture solutions, advanced moisture control systems, and contemporary architecture.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Corporate Plaza",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    },
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <HeroSection />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Companies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A diversified portfolio of industry-leading companies, each excelling in their respective fields 
                while sharing our commitment to quality and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {companies.map((company, index) => (
                <div 
                  key={company.name}
                  style={{ animationDelay: `${index * 200}ms` }}
                  className="animate-fade-in-up"
                >
                  <CompanyCard {...company} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Excellence Across
                  <span className="block gradient-text">Multiple Industries</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With decades of combined experience, our portfolio companies represent 
                  the pinnacle of innovation and quality in their respective fields. 
                  From cutting-edge furniture design to advanced moisture control solutions, 
                  we deliver excellence that exceeds expectations.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg hover-lift">
                    <div className="text-3xl font-bold text-red-600 mb-2 animate-pulse-glow">5+</div>
                    <div className="text-gray-700 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg hover-lift">
                    <div className="text-3xl font-bold text-red-600 mb-2 animate-pulse-glow">100+</div>
                    <div className="text-gray-700 font-medium">Projects Completed</div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-right">
                <div className="relative">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20in%20modern%20corporate%20office%20environment%2C%20diverse%20group%20of%20executives%20in%20business%20meeting%2C%20contemporary%20office%20interior%20with%20glass%20walls%2C%20collaborative%20workspace%2C%20professional%20atmosphere%2C%20successful%20business%20people%2C%20modern%20corporate%20culture&width=800&height=600&seq=team-excellence&orientation=landscape"
                    alt="Excellence in Business"
                    className="rounded-lg shadow-xl hover-lift"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center animate-float">
                    <i className="ri-award-line text-white text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-800 to-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Ready to Build the Future Together?
              </h2>
              <p className="text-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
                Partner with Daran Global and experience the difference that comes from 
                working with industry leaders committed to excellence and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
                <a 
                  href="/contact"
                  className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
                >
                  Get In Touch
                </a>
                <a 
                  href="/companies"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
                >
                  Explore Companies
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
