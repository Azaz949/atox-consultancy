"use client";
import { serviceList } from "../Services";
import { GlareCard } from "../ui/glare-card";

export function GlareCardDemo() {
  return (
    <div className="flex  gap-4 m-24">

        {
            serviceList.map(({ icon, title, description }: ServiceProps) => (
                <GlareCard key={title} className="flex flex-col items-start justify-end py-8 px-6">
                    <p className="font-bold text-white text-lg">{title}</p>
                    <p className="font-normal text-base text-neutral-200 mt-4">
                        {description}
                    </p>
                </GlareCard>
            ))

        }
    </div>
  );
}
