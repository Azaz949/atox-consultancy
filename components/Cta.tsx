import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas & Concepts{" "}
            </span>
            In One Interface
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          At Atox Consulting, we provide a unified interface where all your ideas and concepts converge seamlessly. Our platform offers a holistic view of your projects, combining innovative solutions and expert guidance to drive your business forward.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Contact Us Now</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View all Products
          </Button>
        </div>
      </div>
    </section>
  );
};