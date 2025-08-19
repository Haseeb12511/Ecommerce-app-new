import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Smile,
  FileText,
  Calendar,
  ReceiptText,
  User,
  Settings,
  Plus,
  ChevronDownIcon,
} from "lucide-react";

function FAQ() {
  const faqData = [
    {
      icon: <Smile className="w-5 h-5" />,
      question: "Do you offer free shipping?",
      answer:
        "Yes! We offer free standard shipping on orders above $50 within Pakistan.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we’ll send you a tracking link via email and SMS.",
    },
    {
      icon: <ReceiptText className="w-5 h-5" />,
      question: "What is your return policy?",
      answer:
        "You can return any item within 7 days of delivery for a full refund or exchange.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      question: "Do you have cash on delivery?",
      answer: "Yes, we offer cash on delivery for all orders nationwide.",
    },
    {
      icon: <User className="w-5 h-5" />,
      question: "How do I change my delivery address?",
      answer:
        "Go to your account settings, update your address, or contact us before your order is shipped.",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      question: "Do you have customer support?",
      answer:
        "Yes, our team is available 7 days a week via chat, email, and phone.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      question: "Are your products authentic?",
      answer:
        "Absolutely! All our products come with original brand warranties and quality assurance.",
    },
  ];

  return (
    <div className="min-h-screen font-inter antialiased bg-gray-100">
      {/* Top Section */}
      <div className="w-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 ">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Have questions? Here you'll find the answers most valued by our
              customers, along with access to step-by-step instructions and
              support.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/assets/Faqs.svg"
              alt="FAQs illustration"
              className="object-contain w-72 md:w-96"
            />
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className=" p-8  w-full max-w-6xl mx-auto relative">
        <Accordion type="multiple" className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="cursor-pointer">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="p-2 bg-gray-100 rounded-full">{faq.icon}</div>
                  <span className="text-lg font-medium">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 pl-11">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;

//////////////////////////////////////////////////////////////////////////////

// // src/pages/FAQ.jsx
// import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion";
// import { Input } from "@/components/ui/input";

// export default function FAQ() {
//   const [search, setSearch] = useState("");

//   const faqs = [
//     {
//       question: "How can I track my order?",
//       answer:
//         "Once your order ships, you’ll receive an email with tracking details. You can also view your order status in your account dashboard.",
//     },
//     {
//       question: "What is your return policy?",
//       answer:
//         "We accept returns within 14 days of delivery. Items must be unused and in original packaging. Refunds are issued once we receive and inspect the return.",
//     },
//     {
//       question: "Do you offer international shipping?",
//       answer:
//         "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary based on your location.",
//     },
//     {
//       question: "Can I cancel my order after placing it?",
//       answer:
//         "Orders can be cancelled within 2 hours of placing them. After that, we start processing and may not be able to cancel.",
//     },
//     {
//       question: "How can I contact customer support?",
//       answer:
//         "You can reach us via the contact form, email, or phone. Our support team is available Monday to Friday, 9 AM - 6 PM.",
//     },
//   ];

//   const filteredFAQs = faqs.filter((faq) =>
//     faq.question.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <div className="relative h-60 md:h-96 w-full overflow-hidden rounded-b-lg">
//         <img
//           src="https://images.unsplash.com/photo-1495427513693-3f40da04b3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVscHxlbnwwfHwwfHx8MA%3D%3D"
//           alt="Help Center"
//           className="w-full h-full object-cover brightness-90"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 md:px-16">
//           <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
//             Help Center
//           </h1>
//           <p className="text-center max-w-2xl">
//             Find answers to common questions, or reach out to our support team.
//           </p>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="container mx-auto px-6 lg:px-16 -mt-10 mb-8">
//         <Input
//           placeholder="Search FAQs..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:max-w-xl mx-auto shadow-lg"
//         />
//       </div>

//       {/* FAQ Accordion */}
//       <div className="container mx-auto px-6 lg:px-16 py-6">
//         {filteredFAQs.length === 0 ? (
//           <p className="text-gray-500 text-center">No results found.</p>
//         ) : (
//           <Accordion
//             type="single"
//             collapsible
//             className="w-full max-w-3xl mx-auto"
//           >
//             {filteredFAQs.map((faq, index) => (
//               <AccordionItem
//                 key={index}
//                 value={`item-${index}`}
//                 className="border-b"
//               >
//                 <AccordionTrigger className="text-lg font-medium py-4">
//                   {faq.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-600 pb-4">
//                   {faq.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         )}
//       </div>
//     </div>
//   );
// }
