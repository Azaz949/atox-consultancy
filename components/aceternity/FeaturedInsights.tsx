"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export function FeaturedInsights() {
  const cards1 = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const cards = services.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="features" className=" dark:bg-slate-400">
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Featured Insights
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Atox Consulting was a silver sponsor at Temenos Community Forum
              2024 (TCF), one of the world’s largest global banking technology
              conferences — where the financial community met to discuss modern
              technologies such as SaaS, Cloud, generative and explainable AI,
              big data and embedded finance.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "EVENTS",
    title: "Shaping new frontiers in banking at TCF 2024",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

const services = [
  {
    category: "SAP B1",
    title: "Support",
    src: "/support-live.jpg",
    description:
      "Our SAP B1 Support service ensures that your SAP Business One system operates smoothly and efficiently. We provide ongoing technical support, troubleshoot issues, and perform regular system checks to ensure optimal performance. Our team of experts is available to resolve any problems and answer questions, helping you get the most out of your SAP B1 investment.",
    tagline: "Your SAP B1, Our Expertise – Support You Can Rely On.",
    content : "",
  },
  {
    category: "SAP B1",
    title: "Implementation",
    src: "/implementation.jpg",
    description:
      "Our SAP B1 Implementation service is designed to help businesses successfully implement SAP Business One. We work closely with your team to understand your business needs and develop a customized implementation plan that meets your specific requirements. Our experienced consultants will guide you through every step of the implementation process, ensuring a smooth and successful deployment.",
    tagline: "Implementing SAP B1 – Your Path to Success.",
    content : "",
  },
  {
    category: "SAP B1",
    title: "Customization",
    src: "/customized.jpg",
    description:
      "Our SAP B1 Customization service is designed to help businesses tailor SAP Business One to meet their unique requirements. We work closely with your team to identify areas where customization is needed and develop solutions that enhance the functionality of your system. Our experienced consultants will guide you through every step of the customization process, ensuring that your SAP B1 system meets your specific needs.",
    tagline: "Customizing SAP B1 – Tailored Solutions for Your Business.",
    content : "",
  },
  {
    category: "SAP B1",
    title: "Training",
    src: "/support-live.jpg",
    description:
      "Our SAP B1 Training service is designed to help businesses get the most out of their SAP Business One system. We offer a range of training programs that cover all aspects of SAP B1, from basic functionality to advanced features. Our experienced trainers will work with your team to develop a customized training plan that meets your specific needs. Whether you are new to SAP B1 or looking to expand your knowledge, we have a training program that is right for you.",
    tagline: "Empowering Your Team – Training for Success.",
    content : "",
  },
];
