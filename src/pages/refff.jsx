import React, { useState } from "react";

// Reusing some lucide-react icons by defining them as SVGs
// In a real setup, you would import these from 'lucide-react'
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-down"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-up"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const Smile = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-smile"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </svg>
);

const FileText = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-file-text"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const Calendar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-calendar"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const ReceiptText = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-receipt-text"
  >
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2h-2.5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2H6a2 2 0 0 0-2 2Z" />
    <path d="M14 8H8" />
    <path d="M16 12H8" />
    <path d="M16 16H8" />
  </svg>
);

const User = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Settings = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-settings"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.28a2 2 0 0 0 .73 2.73l.09.09a2 2 0 0 1 0 2.83l-.08.08a2 2 0 0 0-.73 2.73l.78 1.28a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.28a2 2 0 0 0-.73-2.73l-.09-.09a2 2 0 0 1 0-2.83l.08-.08a2 2 0 0 0 .73-2.73l-.78-1.28a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// --- Shadcn/ui Button Component (Simplified for direct use) ---
// In a real shadcn/ui setup, this would be imported from '@/components/ui/button'
const Button = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-gray-800 text-white hover:bg-gray-700", // Dark button for active tab
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Shadcn/ui Accordion Components (Simplified for direct use) ---
// In a real shadcn/ui setup, these would be imported from '@/components/ui/accordion'
const Accordion = ({
  children,
  type = "single",
  collapsible = true,
  className,
  ...props
}) => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value) => {
    if (type === "single") {
      setOpenItem(openItem === value ? null : value);
    } else {
      // For multiple, would need a more complex state (array of open items)
    }
  };

  return (
    <div className={className} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child, {
            isOpen: openItem === child.props.value,
            onToggle: () => handleToggle(child.props.value),
            collapsible: collapsible,
          });
        }
        return child;
      })}
    </div>
  );
};

const AccordionItem = ({
  children,
  value,
  isOpen,
  onToggle,
  collapsible,
  className,
}) => (
  <div className={`border-b border-gray-200 ${className}`}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === AccordionTrigger) {
        return React.cloneElement(child, { isOpen, onToggle });
      }
      if (React.isValidElement(child) && child.type === AccordionContent) {
        return React.cloneElement(child, { isOpen });
      }
      return child;
    })}
  </div>
);

const AccordionTrigger = ({ children, isOpen, onToggle, className }) => (
  <button
    onClick={onToggle}
    className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}
    data-state={isOpen ? "open" : "closed"}
  >
    {children}
    {isOpen ? <ChevronUp /> : <ChevronDown />}
  </button>
);

const AccordionContent = ({ children, isOpen, className }) => (
  <div
    data-state={isOpen ? "open" : "closed"}
    className={`overflow-hidden text-sm transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-[500px] py-4" : "max-h-0"
    } ${className}`}
  >
    <div className="pb-4 pt-0">{children}</div>
  </div>
);

// --- End Shadcn/ui Accordion Components ---

const App = () => {
  const [activeTab, setActiveTab] = useState("General");

  const faqData = [
    {
      icon: <Smile />,
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
    },
    {
      icon: <FileText />,
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time. Our plans are flexible to meet your needs as your business grows.",
    },
    {
      icon: <FileText />,
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. Cancellations will take effect at the end of your current billing period.",
    },
    {
      icon: <ReceiptText />,
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, custom information such as PO numbers or tax IDs can be added to your invoices. Please contact support for assistance.",
    },
    {
      icon: <Calendar />,
      question: "How does billing work?",
      answer:
        "Billing is done on a monthly or annual basis, depending on your chosen plan. You will receive an invoice via email.",
    },
    {
      icon: <User />,
      question: "How do I change my account email?",
      answer:
        "You can change your account email in your profile settings. Navigate to 'Account' and then 'Change Email'.",
    },
    {
      icon: <Settings />,
      question: "How does support work?",
      answer:
        "We offer 24/7 email support for all plans. Enterprise plans also include dedicated phone support and a personal account manager.",
    },
    {
      icon: <FileText />,
      question: "Do you provide tutorials?",
      answer:
        "Yes, we have an extensive library of video tutorials and written guides available in our knowledge base.",
    },
  ];

  const tabs = ["General", "Pricing", "Dashboard", "API"];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-inter antialiased">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-4xl text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Frequently asked questions
        </h1>
        <p className="text-gray-500 mb-8">
          These are the most commonly asked questions about Untitled UI. <br />
          Can't find what you’re looking for?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Chat to our friendly team!
          </a>
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="text-left">
          <Accordion type="single" collapsible className="w-full">
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
};

export default App;
...............