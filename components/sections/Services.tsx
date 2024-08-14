import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SAPServices } from "@/data/services";

export const Services = () => {
  return (
    <section id="services" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Services
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Based on the review, we identify areas for further improvement and make
        necessary adjustments. Our commitment to continuous optimization ensures
        that you achieve sustained growth and maximum ROI.
      </p>
      <HoverEffect items={SAPServices} />
    </section>
  );
};
