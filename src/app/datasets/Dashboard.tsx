"use client";

import { useState } from "react";
import { FiFilter, FiSearch, FiDatabase, FiPlus, FiRotateCw } from "react-icons/fi";

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

const datasets = [
  {
    id: "dataset-1",
    value: "Patient Risk Prediction",
  },
  {
    id: "dataset-2",
    value: "Protein Binding Sequence",
  },
  {
    id: "dataset-3",
    value: "Lung Cancer",
  },
  {
    id: "dataset-4",
    value: "Fast Food Restaurants",
  },
  {
    id: "dataset-5",
    value: "Recipes",
  },
];

const sizeLabels = [
  "<1K",
  "1K",
  "10K",
  "100K",
  "1M",
  "10M",
  "100M",
  "1B",
  "10B",
  "100B",
  "1T",
  ">1T",
];

export default function Dashboard() {
  const [searchVal, setSearchVal] = useState<string>("");
  const [minSize, setMinSize] = useState<number>(0);
  const [maxSize, setMaxSize] = useState<number>(sizeLabels.length - 1);

  const [showModReset, setShowModReset] = useState<boolean>(false);
  const [showSizeReset, setShowSizeReset] = useState<boolean>(false);
  const [showFormatReset, setShowFormatReset] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
  };

  const handleUpload = () => {
    document.getElementById("upload-dataset")?.click();
  };

  const handleSizeSliderChange = (value: number[]) => {
    setMinSize(value[0]);
    setMaxSize(value[1]);
    if (value[0] === 0 && value[1] === sizeLabels.length - 1) {
      setShowSizeReset(false);
    } else {
      setShowSizeReset(true);
    }
  };

  const handleModReset = () => {
    setShowModReset(false);
  };

  const handleSizeReset = () => {
    setMinSize(0);
    setMaxSize(sizeLabels.length - 1);
  };

  const handleFormatReset = () => {
    setShowFormatReset(false);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="font-sans w-full h-screen">
      <ResizablePanel defaultSize={25} className="flex flex-col gap-5 p-6 w-full h-screen">
        <div className="flex flex-row items-center gap-2 text-xl">
          <FiFilter />
          <h2 className="font-medium">Filter</h2>
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search data"
            className="pl-9 pr-3"
            value={searchVal}
            onChange={handleSearchChange}
          />
          <div className="flex flex-col items-center justify-center absolute top-0 bottom-0 mx-3 mb-0.25 text-neutral-500">
            <FiSearch />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2 text-md">
            <FiDatabase />
            <h3 className="font-medium">Select dataset(s)</h3>
          </div>
          {datasets.map((d) => (
            <div key={d.id} className="flex flex-row items-center gap-2 text-md cursor-pointer">
              <Checkbox id={d.id} className="cursor-pointer" />
              <Label htmlFor={d.id} className="font-normal cursor-pointer">
                {d.value}
              </Label>
            </div>
          ))}
          <Button variant="outline" className="mt-1 cursor-pointer" onClick={handleUpload}>
            <div className="flex flex-row items-center gap-2 text-md">
              <FiPlus />
              <label htmlFor="upload-dataset" className="cursor-pointer">
                Upload Dataset
              </label>
              <input id="upload-dataset" type="file" accept=".csv" className="hidden"></input>
            </div>
          </Button>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-row items-center justify-between gap-2 text-sm">
            <h4 className="font-normal text-neutral-500">Modalities</h4>
            <Button
              size="sm"
              variant="outline"
              className={`cursor-pointer ${!showModReset && "invisible"}`}
              onClick={handleModReset}
            >
              <FiRotateCw />
              Reset
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-row items-center justify-between gap-2 text-sm">
            <div className="flex flex-row items-center justify-between gap-2 text-sm">
              <h4 className="font-normal text-neutral-500">Size (rows):</h4>
              <span className="font-mono text-black">
                {sizeLabels[minSize]} &mdash; {sizeLabels[maxSize]}
              </span>
            </div>
            <Button
              size="sm"
              variant="outline"
              className={`cursor-pointer ${!showSizeReset && "invisible"}`}
              onClick={handleSizeReset}
            >
              <FiRotateCw />
              Reset
            </Button>
          </div>
          <Slider
            defaultValue={[minSize, maxSize]}
            value={[minSize, maxSize]}
            max={sizeLabels.length - 1}
            step={1}
            onValueChange={handleSizeSliderChange}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-row items-center justify-between gap-2 text-sm">
            <h4 className="font-normal text-neutral-500">Format</h4>
            <Button
              size="sm"
              variant="outline"
              className={`cursor-pointer ${!showFormatReset && "invisible"}`}
              onClick={handleFormatReset}
            >
              <FiRotateCw />
              Reset
            </Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75} className="h-screen"></ResizablePanel>
    </ResizablePanelGroup>
  );
}
