import React from "react";
import { ScrollArea, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from "@radix-ui/react-scroll-area";
import Card from "@/components/card";
import resumeData from "./resumeData";

const FormationsSection = () => {
  const formations = resumeData.cv.formations;

  return (
    <div className="mb-8">
      <h2 className="text-5xl font-bold text-white opacity-40 mt-5 mb-12">
        {formations?.title || "Formations"}
      </h2>

      <ScrollArea className="h-[400px] rounded overflow-hidden bg-gray-900/50 p-2">
        <ScrollAreaViewport>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {formations?.items?.length > 0 ? (
              formations.items.map((item, index) => (
                <Card key={index} title={item.degree} subtitle={item.institution}>
                  <p className="text-sm text-gray-400">{item.duration}</p>
                </Card>
              ))
            ) : (
              <p className="text-gray-400">Aucune formation disponible.</p>
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

export default FormationsSection;
