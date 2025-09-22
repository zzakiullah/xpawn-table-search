"use client";

import { useEffect, useState } from "react";
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable";

import TableView from "./TableView";
import { datasets } from "./filters";

interface IMultiTableLayout {
  viewDatasets: boolean[];
}

export default function MultiTableLayout({ viewDatasets }: IMultiTableLayout) {
  const [indices, setIndices] = useState<number[]>([]);

  useEffect(() => {
    const newIndices = [];
    for (let i = 0; i < viewDatasets.length; i++) {
      if (viewDatasets[i]) {
        newIndices.push(i);
      }
    }
    setIndices(newIndices);
  }, [viewDatasets]);

  return (
    <ResizablePanelGroup direction="vertical" className="w-full h-full">
      {indices.map((n, i) => (
        <>
          <ResizablePanel key={i} defaultSize={100 / indices.length}>
            <TableView
              title={datasets[n].title}
              path={datasets[n].fpath}
              format={datasets[n].format}
            />
          </ResizablePanel>
          <ResizableHandle key={i + 10} withHandle />
        </>
      ))}
    </ResizablePanelGroup>
  );
}
