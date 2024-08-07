import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { HoverEffect } from "./ui/card-hover-effect";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  link : string,
}

const features: FeatureProps[] = [
  {
    link : "",
    icon: <MedalIcon />,
    title: "Consultation and Assessment",
    description:
      "We begin with an in-depth consultation to understand your business, goals, and specific needs. Our team listens to your challenges and objectives to tailor our approach accordingly.",
  },
  {
    link : "",
    icon: <MapIcon />,
    title: "Customized Solution Design",
    description:
      "Based on the assessment, we develop a strategic plan that outlines the best solutions for your business. Whether it's SAP implementation, a digital marketing campaign, or software development, our plans are customized to fit your unique requirements.",
  },
  {
    link : "",
    icon: <PlaneIcon />,
    title: "Implementation and Execution",
    description:
      " Our experts get to work, implementing the agreed-upon solutions with precision and efficiency. We keep you informed with regular updates and progress reports to ensure transparency and alignment.",
  },
  {
    link : "",
    icon: <GiftIcon />,
    title: "Review and Optimization",
    description:
      " Based on the review, we identify areas for further improvement and make necessary adjustments. Our commitment to continuous optimization ensures that you achieve sustained growth and maximum ROI.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Based on the review, we identify areas for further improvement and make
        necessary adjustments. Our commitment to continuous optimization ensures
        that you achieve sustained growth and maximum ROI.
      </p>
      <HoverEffect items={features} />
    </section>
  );
};
