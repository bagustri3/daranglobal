
import Link from 'next/link';

interface CompanyCardProps {
  name: string;
  description: string;
  industry: string;
  website?: string;
  image: string;
  companySlug?: string;
}

export default function CompanyCard({ name, description, industry, website, image, companySlug }: CompanyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group animate-fade-in-up">
      <div className="relative overflow-hidden bg-black/50">
        <img 
          src={image}
          alt={name}
          className="w-full h-64 object-fit object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="text-sm text-red-600 font-semibold mb-2 transform transition-all duration-300 group-hover:text-red-700">{industry}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 transform transition-all duration-300 group-hover:text-red-800">{name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">{description}</p>
        
        <div className="flex gap-3">
          {website ? (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">Visit Website</span>
              <i className="ri-external-link-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          ) : companySlug ? (
            <Link 
              href={`/companies/${companySlug}`}
              className="inline-flex items-center bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">Learn More</span>
              <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>
          ) : (
            <button className="inline-flex items-center bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed whitespace-nowrap opacity-75">
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
