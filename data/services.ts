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

export const SAPServices: ServiceProps[] = [
  {
    id : 1,
    title: "SAP Implementation",
    link: "",
    description: "Transform your business operations with our customized SAP B1 Implementation services. We work closely with you to understand your business requirements and tailor SAP Business One to fit your unique needs. Our services cover everything from initial planning and system design to deployment and training, ensuring a seamless integration that aligns perfectly with your operational goals."
  },
  {
    id : 2,
    title:"SAP B1 Support",
    link: "",
    description: "Our SAP B1 Support services offer tailored assistance to ensure your SAP Business One system functions optimally. We provide troubleshooting, technical support, and ongoing maintenance, customized to address your specific system needs and business challenges, ensuring smooth and efficient operations."
  },
  {
    id : 3,
    title:"WhatsApp Integration with SAP Business One",
    link: "",
    description:"Enhance your customer communication with our WhatsApp Integration for SAP Business One. This customizable solution integrates WhatsApp with your SAP system, allowing you to tailor messaging and support functionalities to fit your specific customer interaction needs, improving engagement and responsiveness."
  },
  {
    id : 4,
    title:"Web Portal Integration with SAP Business One",
    link: "",
    description:"Our Web Portal Integration service connects your SAP system with your web portal, providing a customizable solution that enhances data synchronization and user interaction. We tailor the integration to fit your specific web portal requirements, ensuring a seamless and efficient connection between your online platform and SAP system."
  },
  {
    id : 5,
    title:"FBR Integration with SAP Business One",
    link: "",
    description:"Ensure regulatory compliance with our FBR Integration for SAP Business One. We customize the integration to automate your tax reporting and compliance processes, linking your SAP system with the Federal Board of Revenue to meet local requirements and streamline your financial operations."
  },
  {
    id : 6,
    title:"Flow HCM Integration with SAP Business One",
    link: "",
    description:"Optimize your human resource management with our customized Flow HCM Integration for SAP Business One. We integrate Flow HCM with SAP to fit your unique HR processes, enhancing employee data management, payroll, and performance tracking, while improving overall HR efficiency."
  },
  {
    id : 7,
    title:"Shopify Integration with SAP Business One",
    link: "",
    description:"Expand your e-commerce capabilities with our Shopify Integration for SAP Business One. We offer a customizable integration that synchronizes your Shopify store with SAP, aligning product data, orders, and customer information according to your specific business processes and requirements."
  },
  {
    id : 8,
    title:"QC Module Integration with SAP Business One",
    link: "",
    description:"Ensure consistent product quality with our QC Module Integration for SAP Business One. We customize the integration to include quality control modules that fit your specific quality management processes, helping you maintain high standards and improve product consistency."
  },
  {
    id : 9,
    title:"Database Administration",
    link: "",
    description:"Our Database Administration services provide customized management of your databases to ensure they are secure, optimized, and well-maintained. We offer tailored solutions for performance tuning, backup, security, and recovery, adapting to your specific data management needs and business requirements."
  },
  {
    id : 10,
    title:"SAP B1 Mobile App with SAP Business One",
    link: "",
    description:"Stay productive on the go with the SAP B1 Mobile App for SAP Business One. We offer customization options to ensure the app meets your specific business needs, providing real-time access to critical information and functionalities from your mobile device."
  },
  // {
  //   id : 11,
  //   title:"Database Administration",
  //   link: "",
  //   description:""
  // },
  
]
export interface ServiceProps {
  id: number;
  title: string;
  description: string;
  link?: string;
  icon?: JSX.Element;
}
