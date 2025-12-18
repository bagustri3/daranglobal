import Faq from '@/components/Faq';
import Link from 'next/link';

export const metadata = {
  title: 'Cocomodo - Premium Coconut Charcoal Briquettes in Indonesia | Daran Global',
  description:
    'Premium coconut charcoal briquettes for shisha, hookah, and BBQ applications. High-quality, smokeless, and long-lasting charcoal from Indonesia.',
  openGraph: {
    title: 'Cocomodo - Premium Coconut Charcoal Briquettes in Indonesia | Daran Global',
    description:
      'Premium coconut charcoal briquettes for shisha, hookah, and BBQ applications. High-quality, smokeless, and long-lasting charcoal from Indonesia.',
    type: 'website',
  },
};

export default function CocomodoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Daran Furniture',
    url: `${siteUrl}/companies/cocomodo`,
    description:
      'Premium coconut charcoal briquettes for shisha, hookah, and BBQ applications. High-quality, smokeless, and long-lasting charcoal from Indonesia.',
    brand: {
      '@type': 'Brand',
      name: 'Cocomodo',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/6530ee1eb287ff8af04f4d0b.jpeg')`,
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <div className="mb-8 animate-fade-in-up">
            <img
              src="https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe3303fadbf3b6365b88a.png"
              alt="Cocomodo"
              className="h-24 mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-300">
            Premium Coconut Charcoal Briquettes
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Sustainable Heat, Superior Flavor - Elevate Your Experience with the Pinnacle of
            Indonesian Quality
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Why Our Products?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-300">
              Unmatched grilling experience with high-quality, smokeless, and long-lasting coconut
              charcoal from Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: 'ri-leaf-line',
                title: 'Eco-Friendly',
                description:
                  'No trees are harmed in the making of our product. We use fresh coconut shells left over from processing, turning waste into something valuable and sustainable.',
              },
              {
                icon: 'ri-fire-line',
                title: 'Minimal Ash',
                description:
                  'Leaves minimal residue and produces less ash, ensuring a clean and hassle-free grilling experience.',
              },
              {
                icon: 'ri-star-line',
                title: 'High Quality',
                description:
                  'Created using premium coconut shells with high fixed carbon content and long burning time for superior performance.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 bg-gray-50 rounded-lg hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow"
                  style={{ backgroundColor: '#b52223' }}
                >
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="relative max-w-5xl mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70 rounded-lg z-0"></div>
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/653611b7c59fe1cfe241e6d9.png"
              alt="Coconut Charcoal Quality"
              className="relative z-10 w-full h-80 object-fit rounded-lg shadow-none"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Premium coconut charcoal briquettes designed for various applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Cocomodo C2',
                image:
                  'https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe137f8ca330fdbe68013.jpeg',
              },
              {
                name: 'Cocomodo C3',
                image:
                  'https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe1373fadbf616465b740.jpeg',
              },
              {
                name: 'Cocomodo 25',
                image:
                  'https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe137a5d23607f5eb4c4b.jpeg',
              },
              {
                name: 'Cocomodo 26 20kg',
                image:
                  'https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe1373fadbf3c0d65b742.jpeg',
              },
              {
                name: 'Cocomodo 26 18kg',
                image:
                  'https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe137a5d23680a3eb4c49.jpeg',
              },
              {
                name: 'Cocomodo 27 18kg',
                image:
                  'https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe1373fadbf12ce65b73f.jpeg',
              },
              {
                name: 'Cocomodo 27 20kg',
                image:
                  'https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/651fe137f8ca334f1ae68014.jpeg',
              },
            ].map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 text-center">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Manufacturing Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/ZienWw8SbdJEMwjcK9z0/media/65360aff152234652b22f24b.png"
              alt="Manufacturing and Packing Process"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Frequently Asked Questions
            </h2>
          </div>

          <Faq />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Shipment Information
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Commodity</h3>
                <p className="text-gray-600">Coconut Charcoal Briquettes</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">HS Code</h3>
                <p className="text-gray-600">4402.20.10 or 4402.90.00</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">20ft Container</h3>
                <p className="text-gray-600">20 Tons</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">40HC Container</h3>
                <p className="text-gray-600">25 Tons</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cargo Type</h3>
                <p className="text-gray-600">Non DG Cargo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Contact us from any of our global offices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                country: 'Indonesia',
                address: 'Jl. Horizon Broadway Blok M6 No. 6 BSD, Tangerang Indonesia',
                phone: '+62 811 6044 747',
                email: 'info@cocomodo-int.com',
              },
              {
                country: 'Turkey',
                address:
                  'Ziya Gokalp Mah. Suleyman Demirel Bulvari No: 7, Mall of Istanbul D Blok No 174, Basaksehir - Istanbul',
                phone: '+90 532 451 3916',
              },
              {
                country: 'Russia',
                address: 'Podsosenskiy Pereulok, 23 стр 4, Moscow, Russia, 105062',
                phone: '+7 919 762-97-48',
              },
              {
                country: 'Iraq',
                phone: '+964 751 126 5603',
              },
              {
                country: 'Saudi Arabia',
                phone: '+966 56 543 2404',
              },
              {
                country: 'Syria',
                phone: '+963 985 533 082',
              },
            ].map((office, index) => (
              <div
                key={office.country}
                className="bg-white rounded-lg shadow-lg p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#b52223' }}
                >
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{office.country}</h3>
                {office.address && (
                  <p className="text-gray-600 mb-2 text-sm leading-relaxed">{office.address}</p>
                )}
                {office.phone && (
                  <p className="text-gray-600 mb-1">
                    <i className="ri-phone-line mr-2" style={{ color: '#b52223' }}></i>
                    {office.phone}
                  </p>
                )}
                {office.email && (
                  <p className="text-gray-600">
                    <i className="ri-mail-line mr-2" style={{ color: '#b52223' }}></i>
                    {office.email}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              <i className="ri-time-line mr-2" style={{ color: '#b52223' }}></i>
              Mon – Sat 9:00am - 8:00pm
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom right, #b52223, #991b1c)' }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Opportunity in Coconut Charcoal
          </h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Premium Charcoal Quality
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Get in on a great business opportunity! We've got top-notch coconut charcoal—high
            quality, no smoke, and long-lasting heat. People love eco-friendly options, and our
            product is perfect for grilling. Join us, and let's make a mark in the booming market
            for premium coconut charcoal. It's a recipe for success!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg inline-block"
              style={{ color: '#b52223' }}
            >
              Request Information
            </Link>
            <a
              href="https://cocomodo-int.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
    border-2 border-white text-white
    hover:bg-white hover:text-[#b52223]
    px-8 py-4 rounded-lg text-lg font-semibold
    transition-all duration-300 ease-in-out
    cursor-pointer whitespace-nowrap
    transform hover:scale-105 hover:shadow-lg
    inline-flex items-center justify-center
  "
            >
              Visit Website
              <i className="ri-external-link-line ml-2"></i>
            </a>
          </div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full animate-float animation-delay-500"></div>
      </section>
    </div>
  );
}
