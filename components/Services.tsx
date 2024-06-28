import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Custom SAP Solutions",
    description:
      "At Atox Consulting, we deliver tailored SAP solutions designed to optimize your business processes and maximize the value of your technology investments.",
    icon: <ChartIcon />,
  },
  {
    title: "Digital Marketing Strategies",
    description:
      "Our expert team crafts innovative digital marketing strategies that enhance your online presence, engage your target audience, and drive measurable results.",
    icon: <WalletIcon />,
  },
  {
    title: "Software Development",
    description:
      "We provide bespoke software development services, creating robust and scalable solutions that meet your unique business requirements and drive operational efficiency.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            At Atox Consulting, our client-centric approach ensures we
            prioritize your needs, delivering tailored solutions that drive your
            success and foster long-term partnerships.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={"/cube-leg.png"}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
