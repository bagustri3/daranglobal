'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DaranFurniturePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Daran Furniture",
    "url": `${siteUrl}/companies/daran-furniture`,
    "description": "Premium furniture and interior design solutions for residential and commercial spaces with contemporary aesthetics and superior craftsmanship.",
    "brand": {
      "@type": "Brand",
      "name": "Daran Furniture"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedCatalog, setSelectedCatalog] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    catalog: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const products = [
    {
      name: "Executive Office Collection",
      description: "Premium executive desks, chairs, and storage solutions designed for modern corporate environments.",
      image: "https://readdy.ai/api/search-image?query=Luxury%20executive%20office%20furniture%20collection%20with%20premium%20wooden%20desk%2C%20leather%20executive%20chair%2C%20and%20modern%20storage%20cabinets%2C%20sophisticated%20corporate%20interior%20design%2C%20high-end%20office%20furniture%20showroom&width=400&height=300&seq=exec-office&orientation=landscape",
      catalogName: "Executive Office Catalog"
    },
    {
      name: "Residential Living Sets",
      description: "Contemporary living room furniture including sofas, coffee tables, and entertainment units.",
      image: "https://readdy.ai/api/search-image?query=Modern%20residential%20living%20room%20furniture%20set%20with%20contemporary%20sofa%2C%20coffee%20table%2C%20and%20entertainment%20unit%2C%20elegant%20home%20interior%20design%2C%20premium%20furniture%20collection&width=400&height=300&seq=living-set&orientation=landscape",
      catalogName: "Residential Living Catalog"
    },
    {
      name: "Hotel & Hospitality",
      description: "Complete furniture solutions for hotels, restaurants, and hospitality venues worldwide.",
      image: "https://readdy.ai/api/search-image?query=Luxury%20hotel%20furniture%20collection%20with%20elegant%20bedroom%20sets%2C%20restaurant%20dining%20furniture%2C%20and%20hospitality%20interior%20design%2C%20premium%20hotel%20room%20furniture&width=400&height=300&seq=hotel-furniture&orientation=landscape",
      catalogName: "Hotel & Hospitality Catalog"
    },
    {
      name: "Custom Interior Design",
      description: "Bespoke furniture pieces and complete interior solutions tailored to client specifications.",
      image: "https://readdy.ai/api/search-image?query=Custom%20interior%20design%20showcase%20with%20bespoke%20furniture%20pieces%2C%20tailored%20interior%20solutions%2C%20luxury%20home%20design%2C%20personalized%20furniture%20collection&width=400&height=300&seq=custom-design&orientation=landscape",
      catalogName: "Custom Design Catalog"
    }
  ];

  const services = [
    {
      icon: "ri-pencil-ruler-2-line",
      title: "Interior Design Consultation",
      description: "Professional design consultation services to create functional and aesthetic spaces."
    },
    {
      icon: "ri-hammer-line",
      title: "Custom Manufacturing",
      description: "Bespoke furniture manufacturing using premium materials and craftsmanship."
    },
    {
      icon: "ri-truck-line",
      title: "Installation & Delivery",
      description: "Complete installation and delivery services for residential and commercial projects."
    },
    {
      icon: "ri-customer-service-2-line",
      title: "After-Sales Support",
      description: "Comprehensive warranty and maintenance services for all furniture pieces."
    }
  ];

  const handleDownloadCatalog = (catalogName: string) => {
    setSelectedCatalog(catalogName);
    setFormData(prev => ({ ...prev, catalog: catalogName }));
    setShowModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://readdy.ai/api/form/submit/catalog-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your catalog download will begin shortly.');
        // Simulate catalog download
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '#';
          link.download = `${selectedCatalog}.pdf`;
          link.click();
          setShowModal(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            catalog: ''
          });
          setSubmitStatus('');
        }, 2000);
      } else {
        setSubmitStatus('There was an error processing your request. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('There was an error processing your request. Please try again.');
    }

    setIsSubmitting(false);
  };

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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Luxury%20furniture%20showroom%20with%20modern%20contemporary%20furniture%20pieces%2C%20elegant%20interior%20design%2C%20premium%20furniture%20collection%2C%20sophisticated%20lighting%2C%20clean%20minimalist%20aesthetic%20with%20warm%20wooden%20tones&width=1920&height=600&seq=furniture-hero&orientation=landscape')`
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl text-white">
              <div className="mb-6">
                <Link href="/companies" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back to Companies
                </Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Daran Furniture</h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Premium furniture and interior design solutions for residential and commercial spaces, 
                combining functionality with aesthetic excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-red-800 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                  View Catalog
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                  Request Quote
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Crafting Excellence Since 1998</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Daran Furniture has been at the forefront of premium furniture manufacturing and interior design 
                  for over two decades. We specialize in creating bespoke furniture pieces and complete interior 
                  solutions for luxury homes, hotels, and corporate offices.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our commitment to quality craftsmanship, innovative design, and customer satisfaction has made 
                  us a trusted partner for clients across residential and commercial sectors worldwide.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-800 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-800 mb-2">25+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20furniture%20craftsman%20working%20on%20premium%20wooden%20furniture%20piece%20in%20modern%20workshop%2C%20skilled%20artisan%20crafting%20luxury%20furniture%2C%20woodworking%20expertise%2C%20quality%20furniture%20manufacturing&width=600&height=500&seq=craftsman&orientation=portrait"
                  alt="Furniture Craftsmanship"
                  className="rounded-lg shadow-lg object-cover w-full h-96"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Product Collections</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of furniture solutions designed to meet diverse needs 
                across residential and commercial spaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    <button 
                      onClick={() => handleDownloadCatalog(product.catalogName)}
                      className="inline-flex items-center bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-download-line mr-2"></i>
                      Download Catalog
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final installation, we provide comprehensive services 
                to bring your vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-4 group-hover:bg-red-800 transition-colors">
                    <i className={`${service.icon} text-2xl text-red-800 group-hover:text-white transition-colors`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Quality%20control%20inspection%20of%20premium%20furniture%20pieces%2C%20furniture%20quality%20testing%20laboratory%2C%20professional%20quality%20assurance%20process%2C%20certified%20furniture%20manufacturing%20standards&width=600&height=500&seq=quality-control&orientation=portrait"
                  alt="Quality Control"
                  className="rounded-lg shadow-lg object-cover w-full h-96"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality & Certifications</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our commitment to quality is reflected in our rigorous manufacturing processes and 
                  international certifications. Every piece of furniture undergoes comprehensive quality 
                  testing to ensure durability and safety.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">ISO 9001:2015 Quality Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">FSC Certified Sustainable Materials</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">GREENGUARD Indoor Air Quality</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-gray-700">BIFMA Safety Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Contact our design experts today to discuss your furniture and interior design needs. 
              Let us help you create spaces that inspire and impress.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Download Catalog</h3>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Please fill out the form below to download the {selectedCatalog}.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" data-readdy-form id="catalog-download-form">
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="modal-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <input type="hidden" name="catalog" value={formData.catalog} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-800 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting ? 'Processing...' : 'Download Catalog'}
                  </button>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg text-sm ${submitStatus.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
