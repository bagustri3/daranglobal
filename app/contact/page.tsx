import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us - Daran Global",
  description:
    "Get in touch with Daran Global to discuss your project requirements.",
  openGraph: {
    title: "Contact Us - Daran Global",
    description:
      "Get in touch with Daran Global to discuss your project requirements.",
    type: "website",
  },
};

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Daran Global",
    url: `${siteUrl}/contact`,
    description:
      "Get in touch with Daran Global to discuss your project requirements.",
    mainEntity: {
      "@type": "Organization",
      name: "Daran Global",
      telephone: "+1-555-123-4567",
      email: "info@daranglobal.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Corporate Plaza",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10001",
        addressCountry: "US",
      },
    },
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20reception%20area%20with%20professional%20business%20environment%2C%20contemporary%20office%20interior%20design%2C%20business%20meeting%20space%2C%20corporate%20headquarters%20lobby%2C%20professional%20contact%20center&width=1920&height=600&seq=contact-hero&orientation=landscape')`,
          }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Get in touch with Daran Global to discuss your project
              requirements and discover how we can help bring your vision to
              life.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full flex-shrink-0">
                      <i className="ri-map-pin-line text-xl text-red-800"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Headquarters
                      </h3>
                      <p className="text-gray-600">
                        CAMİ ŞERİF NEIGHBORHOOD
                        <br />
                        5225 ST. OTHELLO PLAZA NO: 18
                        <br />
                        INNER DOOR NO: 1 AKDENİZ/ MERSİN
                        <br />
                        TURKEY
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full flex-shrink-0">
                      <i className="ri-phone-line text-xl text-red-800"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Phone
                      </h3>
                      <p className="text-gray-600">Main: +90 (532) 451-3916</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full flex-shrink-0">
                      <i className="ri-mail-line text-xl text-red-800"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        General: info@daranglobal.com
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full flex-shrink-0">
                      <i className="ri-time-line text-xl text-red-800"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM (GMT+3)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Find Us
                  </h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d564.7518316867084!2d34.628596879885826!3d36.80129200286183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1765992481463!5m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
