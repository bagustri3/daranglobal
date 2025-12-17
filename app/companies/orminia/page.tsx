import Button from "@/components/Button";
import Link from "next/link";

export const metadata = {
  title: "Orminia - Container Houses & Steel Construction | Daran Global",
  description:
    "Container house and steel construction specialists creating modern bungalows and residential solutions using repurposed shipping containers.",
  openGraph: {
    title: "Orminia - Container Houses & Steel Construction",
    description:
      "Container house and steel construction specialists creating modern bungalows.",
    type: "website",
  },
};

export default function OrminiaPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Orminia",
    url: `${siteUrl}/companies/orminia`,
    description:
      "Container house and steel construction specialists creating modern bungalows and residential solutions using repurposed shipping containers.",
    brand: {
      "@type": "Brand",
      name: "Orminia",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const projects = [
    {
      name: "Modern Container Bungalow",
      description:
        "Luxury single-story container home featuring open-plan living with steel frame construction and contemporary finishes.",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20container%20house%20bungalow%20with%20steel%20construction%2C%20single%20story%20shipping%20container%20home%20with%20large%20windows%2C%20contemporary%20container%20architecture%20with%20wooden%20deck%2C%20minimalist%20container%20house%20design&width=400&height=300&seq=container-bungalow&orientation=landscape",
    },
    {
      name: "Steel Frame Villa",
      description:
        "Multi-container villa combining multiple units to create spacious family living with industrial-chic aesthetics.",
      image:
        "https://readdy.ai/api/search-image?query=Multi-container%20steel%20frame%20villa%2C%20connected%20shipping%20container%20house%20with%20modern%20design%2C%20large%20container%20home%20with%20glass%20facades%2C%20industrial%20style%20container%20architecture&width=400&height=300&seq=steel-villa&orientation=landscape",
    },
    {
      name: "Compact Container Studio",
      description:
        "Efficient single-container studio perfect for remote work or guest accommodation with smart space utilization.",
      image:
        "https://readdy.ai/api/search-image?query=Compact%20container%20studio%20house%2C%20small%20shipping%20container%20home%20office%2C%20single%20container%20dwelling%20with%20modern%20interior%2C%20efficient%20container%20house%20design&width=400&height=300&seq=container-studio&orientation=landscape",
    },
    {
      name: "Container House Complex",
      description:
        "Multi-unit container housing development showcasing scalable steel construction for residential communities.",
      image:
        "https://readdy.ai/api/search-image?query=Container%20house%20complex%20development%2C%20multiple%20shipping%20container%20homes%20in%20community%2C%20steel%20construction%20container%20housing%20project%2C%20modern%20container%20residential%20development&width=400&height=300&seq=container-complex&orientation=landscape",
    },
  ];

  const services = [
    {
      icon: "ri-home-4-line",
      title: "Container House Design",
      description:
        "Custom container home designs from single units to multi-container luxury residences.",
    },
    {
      icon: "ri-building-2-line",
      title: "Steel Construction",
      description:
        "Expert steel frame construction and structural modifications for container buildings.",
    },
    {
      icon: "ri-tools-line",
      title: "Container Conversion",
      description:
        "Complete shipping container conversion services including insulation, electrical, and plumbing.",
    },
    {
      icon: "ri-paint-brush-line",
      title: "Interior Finishing",
      description:
        "Modern interior design and finishing services for comfortable container living spaces.",
    },
    {
      icon: "ri-truck-line",
      title: "Delivery & Installation",
      description:
        "Professional delivery and on-site installation of prefabricated container houses.",
    },
    {
      icon: "ri-customer-service-line",
      title: "Maintenance Support",
      description:
        "Ongoing maintenance and modification services for existing container structures.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Modern%20container%20house%20construction%20site%20with%20steel%20framework%2C%20shipping%20container%20home%20being%20built%2C%20industrial%20construction%20with%20container%20modules%2C%20steel%20construction%20workers%20building%20container%20house&width=1920&height=600&seq=orminia-hero&orientation=landscape')`,
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl text-white">
              <div className="mb-6">
                <Link
                  href="/companies"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back to Companies
                </Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Orminia</h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Innovative container house and steel construction specialists
                creating modern bungalows and residential solutions using
                repurposed shipping containers and advanced steel frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
               <Button  />
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Revolutionizing Container Living
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Orminia specializes in transforming shipping containers into
                  beautiful, functional homes and bungalows. Our expertise in
                  steel construction and container modification allows us to
                  create unique living spaces that are both sustainable and
                  cost-effective.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From single-container studios to multi-unit family homes, we
                  design and build container houses that combine industrial
                  strength with modern comfort. Our steel construction expertise
                  ensures structural integrity while maintaining the flexibility
                  of modular design.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      150+
                    </div>
                    <div className="text-gray-600">Container Homes Built</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      8+
                    </div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Container%20house%20construction%20team%20working%20on%20steel%20frame%2C%20workers%20building%20shipping%20container%20home%2C%20container%20house%20assembly%20process%2C%20steel%20construction%20professionals&width=600&height=500&seq=container-team&orientation=portrait"
                  alt="Container Construction Team"
                  className="rounded-lg shadow-lg object-cover w-full h-96"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured Container Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of innovative container houses and
                bungalows that showcase the versatility and beauty of steel
                construction and container architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <button className="text-green-600 hover:text-green-700 font-semibold transition-colors whitespace-nowrap">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Container Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive container house construction services from design
                consultation to final installation and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                    <i
                      className={`${service.icon} text-2xl text-green-600 group-hover:text-white transition-colors`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20container%20house%20interior%20with%20steel%20beams%2C%20contemporary%20container%20home%20living%20space%2C%20industrial%20chic%20interior%20design%2C%20container%20house%20with%20exposed%20steel%20structure&width=600&height=500&seq=container-interior&orientation=portrait"
                  alt="Container House Interior"
                  className="rounded-lg shadow-lg object-cover w-full h-96"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Container Houses?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Container houses offer unique advantages combining
                  sustainability, affordability, and speed of construction. Our
                  steel construction expertise ensures these benefits are
                  maximized while maintaining comfort and style.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Eco-Friendly & Sustainable Construction
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Fast Construction & Installation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Cost-Effective Housing Solutions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Modular & Expandable Design
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">
                      Durable Steel Frame Construction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Construction Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial design to final installation, we follow a proven
                process to deliver your container house on time and within
                budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Design Consultation
                </h3>
                <p className="text-gray-600 text-sm">
                  Custom design based on your needs and site requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Container Preparation
                </h3>
                <p className="text-gray-600 text-sm">
                  Steel modification and container conversion in our facility
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Quality Control
                </h3>
                <p className="text-gray-600 text-sm">
                  Thorough inspection and testing before delivery
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Installation</h3>
                <p className="text-gray-600 text-sm">
                  Professional on-site installation and final setup
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Your Container Home?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Start your journey to sustainable, affordable living with
              Orminia's container houses. Our team is ready to help you design
              and build your perfect container bungalow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                View Gallery
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
