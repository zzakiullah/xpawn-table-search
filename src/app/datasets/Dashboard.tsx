"use client";

import { useState } from "react";
import { FiFilter, FiSearch, FiDatabase } from "react-icons/fi";

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

/**
 * Dataset links:
 * https://huggingface.co/datasets/lvimuth/HealthRisk-1500-Medical-Risk-Prediction/raw/main/Full_Patient_Risk_Prediction_Dataset.csv
 * */

const datasets = [
    {
        id: "dataset-1",
        value: "Patient Risk Prediction"
    },
    {
        id: "dataset-2",
        value: "Protein Binding Sequence"
    },
    {
        id: "dataset-3",
        value: "Lung Cancer"
    },
    {
        id: "dataset-4",
        value: "Fast Food Restaurants"
    },
    {
        id: "dataset-5",
        value: "Recipes"
    },
];

export default function Dashboard() {
  const [searchVal, setSearchVal] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="font-sans w-full h-screen">
      <ResizablePanel
        defaultSize={25}
        className="flex flex-col gap-4 p-6 w-full h-screen"
      >
        <div className="flex flex-row items-center gap-2 text-xl">
            <FiFilter />
            <h2 className="font-medium">
                Filter
            </h2>
        </div>
        <div className="relative border">
          <Input
            type="text"
            placeholder="Search data"
            className="pl-9 pr-3"
            value={searchVal}
            onChange={handleSearchChange}
          />
          <div
            className="flex flex-col items-center justify-center absolute top-0 bottom-0 mx-3 mb-0.25 text-neutral-500"
          >
            <FiSearch />
          </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2 text-md">
                <FiDatabase />
                <h3 className="font-medium">
                    Select dataset(s)
                </h3>
            </div>
            {datasets.map((d) => (
                <div key={d.id} className="flex flex-row items-center gap-2 text-md">
                    <Checkbox id={d.id} />
                    <Label htmlFor={d.id} className="font-normal">
                        {d.value}
                    </Label>
                </div>
            ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75} className="h-screen">
        
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
