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
} from "lucide-react";

function FAQ() {
  //   const faqData = [
  //     {
  //       icon: <Smile className="w-5 h-5" />,
  //       question: "Is there a free trial available?",
  //       answer:
  //         "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running.",
  //     },
  //     {
  //       icon: <FileText className="w-5 h-5" />,
  //       question: "Can I change my plan later?",
  //       answer:
  //         "Yes, you can change your plan at any time. Our plans are flexible to meet your needs as your business grows.",
  //     },
  //     {
  //       icon: <FileText className="w-5 h-5" />,
  //       question: "What is your cancellation policy?",
  //       answer:
  //         "You can cancel your subscription at any time. Cancellations will take effect at the end of your current billing period.",
  //     },
  //     {
  //       icon: <ReceiptText className="w-5 h-5" />,
  //       question: "Can other info be added to an invoice?",
  //       answer:
  //         "Yes, custom information such as PO numbers or tax IDs can be added to your invoices. Please contact support for assistance.",
  //     },
  //     {
  //       icon: <Calendar className="w-5 h-5" />,
  //       question: "How does billing work?",
  //       answer:
  //         "Billing is done on a monthly or annual basis, depending on your chosen plan. You will receive an invoice via email.",
  //     },
  //     {
  //       icon: <User className="w-5 h-5" />,
  //       question: "How do I change my account email?",
  //       answer:
  //         "You can change your account email in your profile settings. Navigate to 'Account' and then 'Change Email'.",
  //     },
  //     {
  //       icon: <Settings className="w-5 h-5" />,
  //       question: "How does support work?",
  //       answer:
  //         "We offer 24/7 email support for all plans. Enterprise plans also include dedicated phone support and a personal account manager.",
  //     },
  //     {
  //       icon: <FileText className="w-5 h-5" />,
  //       question: "Do you provide tutorials?",
  //       answer:
  //         "Yes, we have an extensive library of video tutorials and written guides available in our knowledge base.",
  //     },
  //   ];

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-inter antialiased">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-4xl text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 mb-8">
          Find answers to common shopping questions. <br />
          Shop smarter, faster, and with confidence.
        </p>

        {/* Accordion */}
        <div className="text-left">
          <Accordion type="multiple" className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="p-2 bg-gray-100 rounded-full">
                      {faq.icon}
                    </div>
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
    </div>
  );
}

export default FAQ;
