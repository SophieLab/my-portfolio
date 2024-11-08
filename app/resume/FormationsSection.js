import React from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Card from "@/components/Card";
import resumeData from "./resumeData";

const FormationsSection = () => (
  <div className="mb-8">
 <h2 className="text-3xl font-medium text-white mb-8">{resumeData.cv.formations.title}</h2>
    <ScrollArea className="h-[400px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {resumeData.cv.formations.items.map((item, index) => (
          <Card key={index} title={item.degree} subtitle={item.institution}>
            <p className="text-sm text-gray-600">{item.duration}</p>
          </Card>
        ))}
      </div>
    </ScrollArea>
  </div>
);

export default FormationsSection;
