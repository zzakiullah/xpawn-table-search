"use client";

import { useEffect, useState } from "react";
import { FiFilter, FiSearch, FiRotateCw } from "react-icons/fi";

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { IDataset, datasets, sizes, mods, formats, themes } from "./filters";

import TableView from "./TableView";
import MultiTableLayout from "@/app/datasets/MultiTableLayout";

export default function Dashboard() {
  const [filteredDatasets, setFilteredDatasets] = useState<IDataset[]>(datasets);
  const [viewDatasets, setViewDatasets] = useState<boolean[]>(
    new Array(datasets.length).fill(false),
  );

  const [searchVal, setSearchVal] = useState<string>("");
  const [minSize, setMinSize] = useState<number>(0);
  const [maxSize, setMaxSize] = useState<number>(sizes.length - 1);

  const [showModReset, setShowModReset] = useState<boolean>(false);
  const [showSizeReset, setShowSizeReset] = useState<boolean>(false);
  const [showFormatReset, setShowFormatReset] = useState<boolean>(false);
  const [showThemeReset, setShowThemeReset] = useState<boolean>(false);

  const [selectedMods, setSelectedMods] = useState<boolean[]>(new Array(mods.length).fill(false));
  const [selectedFormats, setSelectedFormats] = useState<boolean[]>(
    new Array(formats.length).fill(false),
  );
  const [selectedThemes, setSelectedThemes] = useState<boolean[]>(
    new Array(themes.length).fill(false),
  );

  useEffect(() => {
    let newFilteredDatasets = datasets;

    newFilteredDatasets =
      searchVal.trim().length > 0
        ? newFilteredDatasets.filter(
            (d) =>
              d.title.toLowerCase().includes(searchVal.trim().toLowerCase()) ||
              d.fpath.toLowerCase().includes(searchVal.trim().toLowerCase()),
          )
        : newFilteredDatasets;

    newFilteredDatasets = showModReset
      ? newFilteredDatasets.filter((d) => selectedMods[d.modality])
      : newFilteredDatasets;

    newFilteredDatasets = showSizeReset
      ? newFilteredDatasets.filter(
          (d) => sizes[minSize].value <= d.size && d.size <= sizes[maxSize].value,
        )
      : newFilteredDatasets;

    newFilteredDatasets = showFormatReset
      ? newFilteredDatasets.filter((d) => selectedFormats[d.format])
      : newFilteredDatasets;

    newFilteredDatasets = showThemeReset
      ? newFilteredDatasets.filter((d) => selectedThemes[d.theme])
      : newFilteredDatasets;

    setFilteredDatasets(newFilteredDatasets);
  }, [searchVal, minSize, maxSize, selectedMods, selectedFormats, selectedThemes]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchVal = event.target.value;
    setSearchVal(newSearchVal);
  };

  // const handleUpload = () => {
  //   document.getElementById("upload-dataset")?.click();
  // };

  const handleModClick = (index: number) => {
    const newMods = selectedMods.map((m, i) => (i === index ? !m : m));
    setSelectedMods(newMods);
    if (newMods.includes(true)) {
      setShowModReset(true);
    } else {
      setShowModReset(false);
    }
  };

  const handleModReset = () => {
    const newMods = selectedMods.map(() => false);
    setSelectedMods(newMods);
    setShowModReset(false);
  };

  const handleSizeSliderChange = (value: number[]) => {
    setMinSize(value[0]);
    setMaxSize(value[1]);
    if (value[0] === 0 && value[1] === sizes.length - 1) {
      setShowSizeReset(false);
    } else {
      setShowSizeReset(true);
    }
  };

  const handleSizeReset = () => {
    setMinSize(0);
    setMaxSize(sizes.length - 1);
    setShowModReset(false);
  };

  const handleFormatClick = (index: number) => {
    const newFormats = selectedFormats.map((f, i) => (i === index ? !f : f));
    setSelectedFormats(newFormats);
    if (newFormats.includes(true)) {
      setShowFormatReset(true);
    } else {
      setShowFormatReset(false);
    }
  };

  const handleFormatReset = () => {
    const newFormats = selectedFormats.map(() => false);
    setSelectedFormats(newFormats);
    setShowFormatReset(false);
  };

  const handleThemeClick = (index: number) => {
    const newThemes = selectedThemes.map((m, i) => (i === index ? !m : m));
    setSelectedThemes(newThemes);
    if (newThemes.includes(true)) {
      setShowThemeReset(true);
    } else {
      setShowThemeReset(false);
    }
  };

  const handleThemeReset = () => {
    const newThemes = selectedThemes.map(() => false);
    setSelectedThemes(newThemes);
    setShowThemeReset(false);
  };

  const onViewDatasetChange = (id: number) => {
    let newViewDatasets = viewDatasets.map((v, i) => (i === id ? !v : v));
    setViewDatasets(newViewDatasets);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="h-minus-header font-sans w-full">
      <ResizablePanel defaultSize={25} className="w-full h-minus-header">
        <ScrollArea className="flex flex-col w-full h-minus-header">
          <div className="flex flex-col gap-5 p-6 w-full">
            <div className="flex flex-row items-center gap-2 text-xl">
              <FiFilter />
              <h2 className="font-medium">Filter</h2>
            </div>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search datasets..."
                className="pl-9 pr-3"
                value={searchVal}
                onChange={handleSearchChange}
              />
              <div className="flex flex-col items-center justify-center absolute top-0 bottom-0 mx-3 mb-0.25 text-neutral-500">
                <FiSearch />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row items-center justify-between gap-2 text-sm">
                <h4 className="font-normal text-neutral-500">Modality</h4>
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
              <div className="flex flex-wrap items-center gap-2">
                {mods.map((m, i) => (
                  <Badge
                    key={i}
                    asChild
                    className={`cursor-pointer ${selectedMods[i] ? "bg-neutral-200" : "bg-secondary"} text-secondary-foreground hover:bg-neutral-200`}
                  >
                    <button onClick={() => handleModClick(i)}>
                      {m.icon}
                      {m.label}
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-row items-center justify-between gap-2 text-sm">
                <div className="flex flex-row items-center justify-between gap-2 text-sm">
                  <h4 className="font-normal text-neutral-500">Size (rows)</h4>
                  <span className="font-mono text-black">
                    {sizes[minSize].label} &mdash; {sizes[maxSize].label}
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
                max={sizes.length - 1}
                step={1}
                onValueChange={handleSizeSliderChange}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
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
              <div className="flex flex-wrap items-center gap-2">
                {formats.map((f, i) => (
                  <Badge
                    key={i}
                    asChild
                    className={`cursor-pointer ${selectedFormats[i] ? "bg-neutral-200" : "bg-secondary"} text-secondary-foreground hover:bg-neutral-200`}
                  >
                    <button onClick={() => handleFormatClick(i)}>
                      {f.icon}
                      {f.label}
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-row items-center justify-between gap-2 text-sm">
                <h4 className="font-normal text-neutral-500">Theme</h4>
                <Button
                  size="sm"
                  variant="outline"
                  className={`cursor-pointer ${!showThemeReset && "invisible"}`}
                  onClick={handleThemeReset}
                >
                  <FiRotateCw />
                  Reset
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {themes.map((t, i) => (
                  <Badge
                    key={i}
                    asChild
                    className={`cursor-pointer ${selectedThemes[i] ? "bg-neutral-200" : "bg-secondary"} text-secondary-foreground hover:bg-neutral-200`}
                  >
                    <button onClick={() => handleThemeClick(i)}>
                      {t.icon} {t.label}
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">View dataset(s)</h3>
              {filteredDatasets.map((d) => (
                <div key={d.id} className="flex flex-row items-center gap-2 text-md cursor-pointer">
                  <Checkbox
                    id={`dataset-${d.id}`}
                    className="cursor-pointer"
                    checked={viewDatasets[d.id]}
                    onCheckedChange={() => onViewDatasetChange(d.id)}
                  />
                  <Label htmlFor={`dataset-${d.id}`} className="font-normal cursor-pointer">
                    {d.title}
                  </Label>
                </div>
              ))}
              {/* <Button variant="outline" className="mt-1 cursor-pointer" onClick={handleUpload}>
                <div className="flex flex-row items-center gap-2 text-md">
                  <FiPlus />
                  <label htmlFor="upload-dataset" className="cursor-pointer">
                    Upload Dataset
                  </label>
                  <input id="upload-dataset" type="file" accept=".csv" className="hidden"></input>
                </div>
              </Button> */}
            </div>
          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75} className="grow">
        {viewDatasets.includes(true) ? (
          <MultiTableLayout viewDatasets={viewDatasets} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="font-normal">Select a dataset to view</p>
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
