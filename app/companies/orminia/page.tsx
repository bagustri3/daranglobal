import Link from 'next/link';

export default function OrminiaPage() {
  const projects = [
    {
      name: "Smart Office Complex",
      description: "Modern 50-story office building with integrated smart building technologies and sustainable design.",
      image: "https://readdy.ai/api/search-image?query=Modern%20smart%20office%20building%20with%20glass%20facade%20and%20contemporary%20architecture%2C%20high-rise%20commercial%20building%20with%20sustainable%20design%20features%2C%20professional%20architectural%20photography&width=400&height=300&seq=smart-office&orientation=landscape"
    },
    {
      name: "Residential Towers",
      description: "Luxury residential complex featuring innovative living spaces and community amenities.",
      image: "https://readdy.ai/api/search-image?query=Contemporary%20residential%20tower%20complex%20with%20modern%20architecture%2C%20luxury%20apartment%20buildings%20with%20balconies%20and%20green%20spaces%2C%20urban%20residential%20development&width=400&height=300&seq=residential-towers&orientation=landscape"
    },
    {
      name: "Cultural Center",
      description: "Award-winning cultural center combining traditional elements with contemporary architectural design.",
      image: "https://readdy.ai/api/search-image?query=Modern%20cultural%20center%20building%20with%20innovative%20architectural%20design%2C%20contemporary%20public%20building%20with%20artistic%20facade%2C%20cultural%20architecture%20with%20unique%20geometric%20patterns&width=400&height=300&seq=cultural-center&orientation=landscape"
    },
    {
      name: "Sustainable Campus",
      description: "Educational campus designed with LEED Platinum certification and renewable energy systems.",
      image: "https://readdy.ai/api/search-image?query=Sustainable%20educational%20campus%20with%20green%20building%20design%2C%20modern%20university%20buildings%20with%20solar%20panels%20and%20eco-friendly%20architecture%2C%20LEED%20certified%20construction&width=400&height=300&seq=sustainable-campus&orientation=landscape"
    }
  ];

  const services = [
    {
      icon: "ri-building-line",
      title: "Architectural Design",
      description: "Innovative architectural solutions for commercial, residential, and institutional projects."
    },
    {
      icon: "ri-hammer-line",
      title: "Construction Management",
      description: "End-to-end project management from planning to completion with quality assurance."
    },
    {
      icon: "ri-leaf-line",
      title: "Sustainable Design",
      description: "Eco-friendly building solutions with LEED certification and energy efficiency focus."
    },
    {
      icon: "ri-smartphone-line",
      title: "Smart Building Integration",
      description: "Advanced building automation and IoT integration for modern intelligent structures."
    },
    {
      icon: "ri-pencil-ruler-line",
      title: "Urban Planning",
      description: "Comprehensive urban development and master planning for large-scale projects."
    },
    {
      icon: "ri-tools-line",
      title: "Renovation & Restoration",
      description: "Expert renovation services for historic buildings and modern structure upgrades."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Contemporary%20architectural%20building%20with%20innovative%20design%2C%20modern%20glass%20and%20steel%20structure%2C%20cutting-edge%20architecture%20with%20geometric%20patterns%2C%20professional%20architectural%20photography%20with%20dramatic%20lighting&width=1920&height=600&seq=orminia-hero&orientation=landscape')`
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Orminia</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Contemporary building and architectural services delivering innovative design solutions 
              for modern construction projects with sustainable and smart building technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                View Portfolio
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Start Your Project
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Shaping Tomorrow's Architecture</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Orminia stands at the forefront of contemporary architecture and construction, specializing 
                in sustainable design, smart building technologies, and cutting-edge construction methodologies. 
                Since our founding, we have delivered over 200 landmark projects across multiple continents.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our multidisciplinary team of architects, engineers, and construction specialists work 
                collaboratively to create buildings that are not only aesthetically striking but also 
                environmentally responsible and technologically advanced.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20architect%20team%20working%20on%20building%20blueprints%20and%203D%20models%2C%20modern%20architectural%20office%20with%20design%20drawings%2C%20collaborative%20architecture%20workspace&width=600&height=500&seq=architect-team&orientation=portrait"
                alt="Architect Team"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of innovative architectural projects that showcase our commitment 
              to design excellence and sustainable construction practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive architectural and construction services from initial concept 
              to final completion, ensuring excellence at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <i className={`${service.icon} text-2xl text-green-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Sustainable%20green%20building%20with%20solar%20panels%20and%20eco-friendly%20architecture%2C%20LEED%20certified%20construction%20with%20renewable%20energy%20systems%2C%20environmentally%20conscious%20building%20design&width=600&height=500&seq=sustainable-building&orientation=portrait"
                alt="Sustainable Building"
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sustainable Architecture</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are committed to creating environmentally responsible buildings that minimize 
                environmental impact while maximizing energy efficiency and occupant comfort. 
                Our sustainable design approach integrates renewable energy, green materials, and smart systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">LEED Platinum Certified Projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">Net-Zero Energy Buildings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">Renewable Energy Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mr-3">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">Smart Building Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to architectural excellence has been recognized with numerous 
              prestigious awards and certifications from industry organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AIA Gold Medal</h3>
              <p className="text-gray-600 text-sm">American Institute of Architects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                <i className="ri-trophy-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Green Building Award</h3>
              <p className="text-gray-600 text-sm">World Green Building Council</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                <i className="ri-medal-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Innovation Prize</h3>
              <p className="text-gray-600 text-sm">International Architecture Foundation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                <i className="ri-star-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Excellence Award</h3>
              <p className="text-gray-600 text-sm">Global Construction Council</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Partner with Orminia to bring your architectural vision to life. Our team of experts 
            is ready to help you create innovative, sustainable, and intelligent buildings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}