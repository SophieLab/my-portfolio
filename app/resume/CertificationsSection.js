import React from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Card from "@/components/Card";
import resumeData from "./resumeData";

const CertificationsSection = () => (
  <div className="mb-8">
<h2 className="text-5xl font-bold text-white opacity-40 mt-5 mb-12">{resumeData.cv.certifications.title}</h2>
    <ScrollArea className="h-[400px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {resumeData.cv.certifications.items.map((item, index) => (
          <Card key={index} title={item.name} subtitle={item.issuer}>
            <p className="text-sm text-gray-600">{item.date}</p>
          </Card>
        ))}
      </div>
    </ScrollArea>
  </div>
);

export default CertificationsSection;
