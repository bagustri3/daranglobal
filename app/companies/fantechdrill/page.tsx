import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "FantechDrill - Advanced Drilling Solutions | Daran Global",
  description: "FantechDrill delivers precision engineering, innovative technology, and unmatched reliability for demanding drilling projects. Global leader in hammer drills, drill bits, and industrial drilling equipment.",
  openGraph: {
    title: "FantechDrill - Advanced Drilling Solutions",
    description: "Global leader in precision drilling equipment and solutions for industrial applications.",
    type: "website",
  },
};

export default function FantechDrillPage() {
  const products = [
    {
      name: "Hammer Drills",
      description: "Drills that combine rotary drilling with a hammering action for tough materials. FantechDrill's hammer drills are designed for durability and efficiency, particularly in Mining and Blasting drill applications.",
      image: "https://shopcdnpro.grainajz.com/category/358653/1693/1d3a35da8d2b4424aacd921454de566d/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17479886014190.png"
    },
    {
      name: "Drill Bits",
      description: "Cutting tools used to remove material to create holes, typically used with drills. FantechDrill offers a wide range for different materials and applications, especially for Mining and Blasting drill components.",
      image: "https://i.imgur.com/I6wlCdw.jpeg"
    }
  ];

  const offices = [
    {
      name: "Headquarters",
      location: "Mersin, Turkey",
      address: "CAMİ ŞERİF NEIGHBORHOOD 5225 ST. OTHELLO PLAZA NO: 18 INNER DOOR NO: 1 AKDENİZ/ MERSİN",
      phone: "+90 532 451 39 16",
      email: "info@fantechdrills.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM (GMT+3)",
      icon: "ri-building-line"
    },
    {
      name: "Manufacturing Office",
      location: "Ningbo, China",
      address: "Room A2306, No. 993 Tiantong North Road NINGBO CHINA 315192",
      phone: "0086 574 8821 8089",
      mobile: "0086 1377 700 9320",
      email: "info@fantechdrill.com",
      hours: "Monday - Friday: 08:00 - 17:00 (GMT+8)",
      icon: "ri-factory-line"
    },
    {
      name: "Branch Office",
      location: "West Bandung, Indonesia",
      address: "KM 35 PADALARANG, WEST BANDUNG",
      phone: "+62 821-2159-0077",
      email: "info@fantechdrills.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM (GMT+7)",
      icon: "ri-global-line"
    }
  ];

  const values = [
    {
      icon: "ri-shield-check-line",
      title: "Safety",
      description: "We prioritize the safety of our products, ensuring they meet and exceed global safety standards. Our drilling solutions are designed with user safety as the paramount concern."
    },
    {
      icon: "ri-award-line",
      title: "Quality",
      description: "Every product undergoes rigorous quality control processes. We use premium materials and precision engineering to deliver drilling solutions that stand the test of time."
    },
    {
      icon: "ri-hand-coin-line",
      title: "Value",
      description: "We deliver exceptional value through innovative design, durability, and performance. Our solutions optimize operational efficiency while reducing long-term costs."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Industrial%20drilling%20equipment%20in%20action%2C%20heavy%20machinery%20drilling%20operation%2C%20mining%20site%20with%20drilling%20rigs%2C%20professional%20drilling%20technology%2C%20industrial%20construction%20site%2C%20powerful%20drilling%20machines%2C%20precision%20engineering%20equipment&width=1920&height=800&seq=fantechdrill-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6 animate-fade-in-up">
              <Image
                src="https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/f8538d8d8338da7f28ddc65746c6f7fb.png"
                alt="FantechDrill"
                width={300}
                height={100}
                className="mx-auto h-24 w-auto drop-shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
              Advanced Drilling Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
              Delivering precision engineering, innovative technology, and unmatched reliability for your most demanding drilling projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <a 
                href="https://fantechdrill.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg text-center"
              >
                Visit Website
              </a>
              <Link 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              At FantechDrill, we're committed to excellence in every aspect of our operations, guided by three fundamental principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-gray-50 p-8 rounded-lg hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Premium Drilling Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Explore our comprehensive range of high-performance drilling equipment designed for various industrial applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-80 bg-gray-100 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain object-center hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
              Global Presence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              With strategic locations across three continents, we deliver exceptional drilling solutions worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div 
                key={office.name}
                className="bg-gray-800 p-8 rounded-lg hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                  <i className={`${office.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">{office.name}</h3>
                <p className="text-orange-500 font-semibold mb-6">{office.location}</p>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <i className="ri-map-pin-line mt-1 mr-3 text-orange-500"></i>
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-phone-line mt-1 mr-3 text-orange-500"></i>
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  {office.mobile && (
                    <div className="flex items-start">
                      <i className="ri-smartphone-line mt-1 mr-3 text-orange-500"></i>
                      <span className="text-sm">{office.mobile}</span>
                    </div>
                  )}
                  <div className="flex items-start">
                    <i className="ri-mail-line mt-1 mr-3 text-orange-500"></i>
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-time-line mt-1 mr-3 text-orange-500"></i>
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Contact us to learn more about our drilling solutions and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <a 
              href="https://fantechdrill.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
            >
              Visit FantechDrill
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
