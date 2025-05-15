import React, { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'question number one?',
    answer: 'answer one',
  },
  {
    question: 'question number two?',
    answer: 'answer two',
  },
  {
    question: 'question number three?',
    answer: 'answer three',
  },
  {
    question: 'question number foure?',
    answer: 'answer foure',
  },
  {
    question: 'question number five?',
    answer: 'answer five',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[100%] mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 font-medium focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
