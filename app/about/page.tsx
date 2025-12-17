export const metadata = {
  title: "About Us - Daran Global",
  description: "Learn about Daran Global's journey, values, and leadership. Building excellence across industries through innovation, quality, and unwavering commitment to our clients.",
  openGraph: {
    title: "About Us - Daran Global",
    description: "Learn about Daran Global's journey, values, and leadership.",
    type: "website",
  },
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Daran Global",
    "url": `${siteUrl}/about`,
    "description": "Learn about Daran Global's journey, values, and leadership. Building excellence across industries through innovation, quality, and unwavering commitment to our clients.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Daran Global",
      "url": siteUrl,
      "foundingDate": "1998",
      "numberOfEmployees": "500+",
      "slogan": "Building the Future Together"
    }
  };

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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20corporate%20headquarters%20building%20with%20glass%20facade%2C%20professional%20business%20environment%2C%20contemporary%20architecture%20with%20clean%20lines%2C%20corporate%20office%20complex%2C%20sophisticated%20business%20atmosphere%2C%20industrial%20excellence%2C%20global%20business%20concept%2C%20executive%20leadership&width=1920&height=800&seq=about-hero&orientation=landscape')`
          }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              About <span className="gradient-text">Daran Global</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Building excellence across industries through innovation, quality, and unwavering commitment to our clients.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded with a vision to create lasting impact across multiple industries, 
                  Daran Global has grown from a single company into a diversified portfolio 
                  of market-leading businesses.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our journey began with a simple belief: that excellence in one area can 
                  inspire and drive excellence in others. Today, we operate across furniture 
                  design, moisture control solutions, and contemporary architecture.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center animate-pulse-glow">
                    <i className="ri-lightbulb-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation First</h3>
                    <p className="text-gray-600">Driving progress through creative solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-right">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20executives%20in%20modern%20boardroom%20meeting%2C%20diverse%20leadership%20team%20discussing%20strategy%2C%20contemporary%20corporate%20office%20interior%2C%20successful%20business%20professionals%2C%20collaborative%20leadership%2C%20modern%20conference%20room%20with%20glass%20walls&width=800&height=600&seq=our-story&orientation=landscape"
                  alt="Our Story"
                  className="rounded-lg shadow-xl hover-lift"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                The principles that guide everything we do across all our companies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "ri-shield-check-line",
                  title: "Quality Excellence",
                  description: "We maintain the highest standards in every product and service we deliver, ensuring lasting value for our clients."
                },
                {
                  icon: "ri-lightbulb-line",
                  title: "Innovation",
                  description: "Continuously pushing boundaries and exploring new possibilities to stay ahead of industry trends."
                },
                {
                  icon: "ri-team-line",
                  title: "Collaboration",
                  description: "Building strong partnerships with clients, suppliers, and communities to achieve mutual success."
                }
              ].map((value, index) => (
                <div 
                  key={value.title} 
                  className="text-center p-8 bg-white rounded-lg shadow-lg hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <i className={`${value.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20industrial%20manufacturing%20facility%20with%20advanced%20machinery%2C%20high-tech%20production%20line%2C%20quality%20control%20systems%2C%20professional%20manufacturing%20environment%2C%20industrial%20excellence%2C%20automated%20production%20equipment%2C%20clean%20industrial%20setting&width=800&height=600&seq=leadership&orientation=landscape"
                  alt="Leadership"
                  className="rounded-lg shadow-xl hover-lift"
                />
              </div>
              
              <div className="animate-fade-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership & Vision</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our leadership team brings together decades of experience across multiple 
                  industries, providing strategic direction and operational excellence that 
                  drives our continued growth and success.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With a clear vision for the future, we continue to expand our portfolio 
                  while maintaining the core values that have made each of our companies 
                  leaders in their respective markets.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover-lift">
                    <div className="text-2xl font-bold text-red-600 mb-2 animate-pulse-glow">15+</div>
                    <div className="text-gray-700 text-sm">Countries Served</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover-lift">
                    <div className="text-2xl font-bold text-red-600 mb-2 animate-pulse-glow">1000+</div>
                    <div className="text-gray-700 text-sm">Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-800 to-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Join Our Journey
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Be part of our continued growth and success. Explore opportunities to work with 
              industry leaders committed to excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <a 
                href="/contact"
                className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </a>
              <a 
                href="/companies"
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
              >
                View Companies
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
