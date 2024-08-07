export const services: ServiceProps[] = [
  {
    id: 1,
    title: "Consultation and Assessment",
    link: "",
    description:
      "We begin with an in-depth consultation to understand your business, goals, and specific needs. Our team listens to your challenges and objectives to tailor our approach accordingly.",
  },
  {
    id: 2,
    title: "Customized Solution Design",
    link: "",
    description:
      "Based on the assessment, we develop a strategic plan that outlines the best solutions for your business. Whether it's SAP implementation, a digital marketing campaign, or software development, our plans are customized to fit your unique requirements.",
  },
  {
    id: 3,
    title: "Implementation and Execution",
    link: "",
    description:
      " Our experts get to work, implementing the agreed-upon solutions with precision and efficiency. We keep you informed with regular updates and progress reports to ensure transparency and alignment.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    link: "",
    description:
      "We don't stop once the solution is implemented. Our team continuously monitors performance and makes adjustments as needed to optimize results. We are committed to delivering ongoing value and support to help your business thrive.",
  },
];

export interface ServiceProps {
  id: number;
  title: string;
  description: string;
  link?: string;
  icon?: JSX.Element;
}
