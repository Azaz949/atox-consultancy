import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}
const FAQList: FAQProps[] = [
  {
    question: "Are your SAP solutions customizable to our specific business needs?",
    answer: "Yes, our SAP solutions are fully customizable to meet the unique requirements of your business.",
    value: "item-1",
  },
  {
    question: "How can your digital marketing strategies help boost our online presence?",
    answer: "Our digital marketing strategies are tailored to enhance your online visibility, engage your target audience, and drive measurable results.",
    value: "item-2",
  },
  {
    question: "What types of software development services do you offer?",
    answer: "We provide bespoke software development services, creating custom solutions that align with your business objectives and streamline your operations.",
    value: "item-3",
  },
  {
    question: "How do your data analytics solutions support informed decision-making?",
    answer: "Our data analytics solutions offer actionable insights that help you make informed decisions, optimize performance, and drive strategic growth.",
    value: "item-4",
  },
  {
    question: "Do you offer ongoing support for your services?",
    answer: "Yes, we provide comprehensive support and maintenance for all our solutions, ensuring your continued success and satisfaction.",
    value: "item-5",
  },
];
export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
