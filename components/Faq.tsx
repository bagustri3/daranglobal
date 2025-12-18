'use client';
import React, { useState } from 'react';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {[
        {
          question: "What's the Quality of Your Product?",
          answer:
            'Fixed Carbon: 85% (by Different)\nCalorie: More Than 7500 KCAL/KG\nMoisture: 5% MAX\nAsh Content: 1.8 - 2.2%\nAsh Colour: White/Grey\nIgnition Time: More Than 2 Hours\n\nWith high quality control, we ensure consistency in every production.',
        },
        {
          question: "What's your production Capacity/Month?",
          answer: '900 MT/Month and can be expanded',
        },
        {
          question: 'How long is your delivery time?',
          answer:
            'Estimated delivery is about 30 Days after Down Payment Received.\n• Shipping Booking: min 2 weeks before ETD\n• Inspection by independent surveyor\n• Stuffing: 3-5 days before ETD',
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
            <i
              className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-2xl`}
              style={{ color: '#b52223' }}
            ></i>
          </button>
          {openFaq === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
