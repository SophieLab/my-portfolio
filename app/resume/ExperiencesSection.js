import React from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Card from "@/components/card";
import resumeData from "./resumeData";

const ExperiencesSection = () => (
  <div className="mb-8">
    <h2 className="text-5xl font-bold text-white opacity-40 mt-5 mb-12">{resumeData.cv.experiences.title}</h2>
    <p className="mb-4 text-gray-600">{resumeData.cv.experiences.description}</p>
    <ScrollArea className="h-[400px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {resumeData.cv.experiences.items.map((item, index) => (
          <Card key={index} title={item.position} subtitle={item.company}>
            <p className="text-sm text-gray-600">{item.duration}</p>
          </Card>
        ))}
      </div>
    </ScrollArea>
  </div>
);

export default ExperiencesSection;
