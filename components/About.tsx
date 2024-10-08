import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/pilot.png"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Atox Consulting
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At Atox Consulting, we are dedicated to empowering businesses
                through our expert services in SAP, Digital Marketing, and
                Software Solutions. Our mission is to drive growth and
                innovation for our clients, providing them with the tools and
                strategies needed to excel in today's competitive landscape.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
