import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
//import image from "/growth.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "SAP Implementation",
    description:
      " Seamlessly deploy customized SAP systems to optimize your business processes.",
    image: "/looking-ahead.png",
  },
  {
    title: "SAP Optimization",
    description:
      "Ensure continuous, peak performance of your SAP systems with ongoing support.",
    image: "/reflecting.png",
  },
  {
    title: "Social Media Manager",
    description:
      "Manage and optimize your social media presence from a single dashboard.",
    image: "/growth.png",
  },
];

const featureList: string[] = [
  "Custom SAP Solutions",
  "Digital Marketing Strategies",
  "Software Development",
  "Data Analytics",
  "Client Testimonials",
  "Pricing",
  "Contact Form",
  "Our Team",
  "Responsive Design",
  "Newsletter",
  "Client-Centric Services",
  "Innovative Solutions",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
