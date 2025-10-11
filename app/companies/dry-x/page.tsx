import Link from 'next/link';

export default function DryXPage() {
  const products = [
    {
      name: "Silica Gel Packets",
      description: "High-quality silica gel desiccants in various sizes for packaging and storage applications.",
      image: "https://readdy.ai/api/search-image?query=Professional%20silica%20gel%20packets%20and%20desiccant%20products%20for%20packaging%2C%20moisture%20control%20sachets%2C%20industrial%20desiccant%20materials%2C%20clean%20packaging%20facility%20with%20quality%20control&width=400&height=300&seq=silica-packets&orientation=landscape"
    },
    {
      name: "Container Desiccants",
      description: "Heavy-duty moisture control solutions for shipping containers and large storage areas.",
      image: "https://readdy.ai/api/search-image?query=Industrial%20container%20desiccant%20systems%20for%20shipping%20containers%2C%20large-scale%20moisture%20control%20equipment%2C%20cargo%20protection%20solutions%2C%20professional%20logistics%20facility&width=400&height=300&seq=container-desiccant&orientation=landscape"
    },
    {
      name: "Pharmaceutical Grade",
      description: "USP-grade desiccants specifically designed for pharmaceutical and medical applications.",
      image: "https://readdy.ai/api/search-image?query=Pharmaceutical%20grade%20desiccant%20products%20in%20clean%20laboratory%20environment%2C%20medical%20packaging%20moisture%20control%2C%20sterile%20pharmaceutical%20manufacturing%20facility&width=400&height=300&seq=pharma-grade&orientation=landscape"
    },
    {
      name: "Electronics Protection",
      description: "Specialized moisture control solutions for sensitive electronic components and devices.",
      image: "https://readdy.ai/api/search-image?query=Electronics%20moisture%20protection%20systems%2C%20desiccant%20solutions%20for%20electronic%20components%2C%20clean%20room%20electronics%20manufacturing%2C%20moisture%20control%20for%20sensitive%20devices&width=400&height=300&seq=electronics-protection&orientation=landscape"
    }
  ];

  const applications = [
    {
      icon: "ri-medicine-bottle-line",
      title: "Pharmaceutical",
      description: "Protecting medicines and medical devices from moisture damage during storage and transport."
    },
    {
      icon: "ri-computer-line",
      title: "Electronics",
      description: "Safeguarding sensitive electronic components from humidity-related failures."
    },
    {
      icon: "ri-restaurant-line",
      title: "Food Packaging",
      description: "Extending shelf life and maintaining quality of packaged food products."
    },
    {
      icon: "ri-shirt-line",
      title: "Textiles",
      description: "Preventing mold and mildew in textile storage and shipping applications."
    },
    {
      icon: "ri-camera-line",
      title: "Optical Equipment",
      description: "Protecting cameras, lenses, and precision instruments from moisture."
    },
    {
      icon: "ri-seedling-line",
      title: "Agriculture",
      description: "Maintaining seed viability and protecting agricultural products during storage."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20industrial%20moisture%20control%20facility%20with%20advanced%20desiccant%20production%20equipment%2C%20clean%20manufacturing%20environment%2C%20professional%20quality%20control%20laboratory%2C%20industrial%20packaging%20systems&width=1920&height=600&seq=dryx-hero&orientation=landscape')`
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Dry X</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Specialized moisture control and silica gel solutions for packaging, storage, and industrial 
              applications to protect valuable products worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                View Products
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Technical Support
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leading Moisture Control Solutions</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dry X has been a pioneer in moisture control technology for over 15 years, serving 
                pharmaceutical, electronics, food packaging, and industrial sectors globally. Our innovative 
                desiccant solutions protect billions of dollars worth of products annually.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With state-of-the-art manufacturing facilities and rigorous quality control processes, 
                we deliver reliable moisture protection solutions that meet the highest industry standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                  <div className="text-gray-600">Products Protected Daily</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20moisture%20control%20laboratory%20with%20scientific%20testing%20equipment%2C%20quality%20control%20analysis%20of%20desiccant%20products%2C%20professional%20laboratory%20technician%20conducting%20moisture%20tests&width=600&height=500&seq=lab-testing&orientation=portrait"
                alt="Laboratory Testing"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive moisture control solutions designed for diverse industries and applications, 
              from small packaging to large-scale industrial use.
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
                  <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors whitespace-nowrap">
                    Technical Specs →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our moisture control solutions serve critical applications across multiple industries, 
              ensuring product integrity and extending shelf life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <i className={`${application.icon} text-2xl text-blue-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-gray-600 leading-relaxed">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20desiccant%20manufacturing%20technology%2C%20automated%20production%20line%20for%20silica%20gel%20products%2C%20modern%20industrial%20equipment%2C%20quality%20control%20systems%20in%20clean%20manufacturing%20facility&width=600&height=500&seq=manufacturing-tech&orientation=portrait"
                alt="Manufacturing Technology"
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Manufacturing Technology</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our cutting-edge manufacturing facilities utilize the latest technology to produce 
                high-performance desiccants with consistent quality and reliability. Automated 
                production lines ensure precision and efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 mt-1">
                    <i className="ri-check-line text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Automated Production</h4>
                    <p className="text-gray-600">State-of-the-art automated systems ensure consistent quality and high-volume production.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 mt-1">
                    <i className="ri-check-line text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Control</h4>
                    <p className="text-gray-600">Rigorous testing at every stage ensures products meet international standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 mt-1">
                    <i className="ri-check-line text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Custom Solutions</h4>
                    <p className="text-gray-600">Tailored desiccant solutions designed for specific industry requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Protect Your Products Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our technical experts to find the right moisture control solution for your specific needs. 
            We provide comprehensive support from product selection to implementation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Get Technical Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Request Samples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}