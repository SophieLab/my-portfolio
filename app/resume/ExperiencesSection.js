import React from "react";
import { ScrollArea, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from "@radix-ui/react-scroll-area";
import Card from "@/components/card";
import resumeData from "./resumeData";

const ExperiencesSection = () => {
  const experiences = resumeData.cv.experiences;

  return (
    <div className="mb-8">
      <h2 className="text-5xl font-bold text-white opacity-40 mt-5 mb-12">
        {experiences?.title || "Expériences"}
      </h2>
      <p className="mb-4 text-gray-600">{experiences?.description || "Liste des expériences professionnelles"}</p>

      <ScrollArea className="h-[400px] rounded overflow-hidden bg-gray-900/50 p-2">
        <ScrollAreaViewport>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {experiences?.items?.length > 0 ? (
              experiences.items.map((item, index) => (
                <Card key={index} title={item.position} subtitle={item.company}>
                  <p className="text-sm text-gray-400">{item.duration}</p>
                </Card>
              ))
            ) : (
              <p className="text-gray-400">Aucune expérience disponible.</p>
            )}
          </div>
        </ScrollAreaViewport>

        {/* ScrollBar personnalisée */}
        <ScrollAreaScrollbar orientation="vertical" className="bg-gray-700 rounded">
          <ScrollAreaThumb className="bg-gray-500 rounded-full" />
        </ScrollAreaScrollbar>
      </ScrollArea>
    </div>
  );
};

export default ExperiencesSection;
