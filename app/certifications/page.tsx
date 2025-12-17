export const metadata = {
  title: "Certifications & Quality - Daran Global",
  description: "Our commitment to excellence is validated through rigorous certifications including ISO 9001, ISO 14001, ISO 45001, and quality standards.",
  openGraph: {
    title: "Certifications & Quality - Daran Global",
    description: "Our commitment to excellence is validated through rigorous certifications and quality standards.",
    type: "website",
  },
};

export default function CertificationsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Certifications & Quality",
    "url": `${siteUrl}/certifications`,
    "description": "Our commitment to excellence is validated through rigorous certifications including ISO 9001, ISO 14001, ISO 45001, and quality standards.",
    "about": {
      "@type": "Organization",
      "name": "Daran Global",
      "certification": [
        "ISO 9001:2015",
        "ISO 14001:2015",
        "ISO 45001:2018",
        "CE Marking",
        "OHSAS 18001"
      ]
    }
  };

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management Systems certification ensuring consistent quality across all our operations.",
      category: "Quality Management",
      icon: "ri-award-line"
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management Systems certification demonstrating our commitment to sustainability.",
      category: "Environmental",
      icon: "ri-leaf-line"
    },
    {
      title: "ISO 45001:2018",
      description: "Occupational Health and Safety Management Systems certification ensuring workplace safety.",
      category: "Safety",
      icon: "ri-shield-check-line"
    },
    {
      title: "CE Marking",
      description: "European Conformity marking for our industrial equipment and machinery products.",
      category: "Product Compliance",
      icon: "ri-checkbox-circle-line"
    },
    {
      title: "OHSAS 18001",
      description: "Occupational Health and Safety Assessment Series certification for workplace safety management.",
      category: "Safety",
      icon: "ri-first-aid-kit-line"
    },
    {
      title: "Green Building Council",
      description: "Sustainable building practices certification for our architectural and construction services.",
      category: "Sustainability",
      icon: "ri-building-line"
    }
  ];

  const qualityStandards = [
    {
      title: "Six Sigma Methodology",
      description: "Implementation of Six Sigma principles across all business processes to minimize defects and improve efficiency."
    },
    {
      title: "Lean Manufacturing",
      description: "Adoption of lean manufacturing principles to eliminate waste and optimize production processes."
    },
    {
      title: "Total Quality Management",
      description: "Comprehensive quality management approach involving all employees in continuous improvement efforts."
    },
    {
      title: "Statistical Process Control",
      description: "Use of statistical methods to monitor and control manufacturing processes for consistent quality."
    }
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Quality%20control%20laboratory%20with%20certification%20documents%20and%20testing%20equipment%2C%20professional%20quality%20assurance%20environment%2C%20ISO%20certification%20standards%2C%20industrial%20quality%20testing%20facility%2C%20compliance%20and%20certification&width=1920&height=600&seq=cert-hero&orientation=landscape')`
          }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Certifications & Quality</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Our commitment to excellence is validated through rigorous certifications and 
              quality standards that ensure superior products and services.
            </p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest industry standards through comprehensive certifications 
                and continuous compliance monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-6">
                    <i className={`${cert.icon} text-2xl text-red-800`}></i>
                  </div>
                  <div className="text-sm text-red-600 font-semibold mb-2">{cert.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Standards</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our quality management approach encompasses proven methodologies and 
                continuous improvement practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {qualityStandards.map((standard, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{standard.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit & Compliance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Audit & Compliance</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We undergo regular third-party audits to ensure compliance with international 
                  standards and regulations. Our comprehensive audit program covers all aspects 
                  of our operations, from manufacturing processes to environmental impact.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our dedicated compliance team works continuously to monitor regulatory changes 
                  and ensure our operations remain compliant across all jurisdictions where we operate.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-red-800">100%</div>
                  <div className="text-gray-600">Compliance Rate Across All Certifications</div>
                </div>
              </div>
              <div 
                className="h-96 bg-cover bg-center rounded-xl"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20audit%20and%20compliance%20meeting%2C%20business%20executives%20reviewing%20certification%20documents%2C%20quality%20assurance%20team%20in%20modern%20office%2C%20compliance%20monitoring%20and%20reporting%2C%20corporate%20governance&width=600&height=400&seq=audit&orientation=landscape')`
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-red-800 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Quality by Numbers</h2>
              <p className="text-xl max-w-3xl mx-auto">
                Our commitment to quality is reflected in our performance metrics and achievements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-red-200">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <div className="text-red-200">Quality Score</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-red-200">Quality Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-red-200">Major Non-Conformities</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}