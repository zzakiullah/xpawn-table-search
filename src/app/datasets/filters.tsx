import { LuText, LuImage, LuAudioLines } from "react-icons/lu";
import { VscTable, VscJson } from "react-icons/vsc";

interface IDataset {
  id: number;
  value: string;
  fpath: string;
  modality: number;
  size: number;
  format: number;
  theme: number;
}

const datasets: IDataset[] = [
  {
    id: 0,
    value: "Patient Risk Prediction",
    fpath: "/Full_Patient_Risk_Prediction_Dataset.csv",
    modality: 2,
    size: 1500,
    format: 0,
    theme: 0,
  },
  {
    id: 1,
    value: "Protein Binding Sequence",
    fpath: "/peptides.csv",
    modality: 2,
    size: 16370,
    format: 0,
    theme: 1,
  },
  {
    id: 2,
    value: "Lung Cancer",
    fpath: "/Lung_Cancer_Survey.csv",
    modality: 2,
    size: 309,
    format: 0,
    theme: 0,
  },
  {
    id: 3,
    value: "Fast Food Restaurants",
    fpath: "/Fast_Food_Restaurants.csv",
    modality: 2,
    size: 10000,
    format: 0,
    theme: 2,
  },
  {
    id: 4,
    value: "Payments",
    fpath: "/payments.json",
    modality: 2,
    size: 5,
    format: 1,
    theme: 4,
  },
];

const sizes = [
  {
    label: "0",
    value: 1,
  },
  {
    label: "10",
    value: 10,
  },
  {
    label: "100",
    value: 100,
  },
  {
    label: "1K",
    value: 1000,
  },
  {
    label: "10K",
    value: 10000,
  },
  {
    label: "100K",
    value: 100000,
  },
];

const mods = [
  {
    id: "audio",
    label: "Audio",
    icon: <LuAudioLines className="text-red-600" />,
  },
  {
    id: "image",
    label: "Image",
    icon: <LuImage className="text-orange-600" />,
  },
  {
    id: "text",
    label: "Text",
    icon: <LuText className="text-amber-600" />,
  },
];

const formats = [
  {
    id: "csv",
    label: "CSV",
    icon: <VscTable />,
  },
  {
    id: "json",
    label: "JSON",
    icon: <VscJson />,
  },
];

const themes = [
  {
    id: "health",
    label: "Health/Medicine",
    icon: "⚕️",
  },
  {
    id: "biology",
    label: "Biology",
    icon: "🧬",
  },
  {
    id: "food",
    label: "Food",
    icon: "🍔",
  },
  {
    id: "automotive",
    label: "Automotive",
    icon: "🚗",
  },
  {
    id: "finance",
    label: "Finance",
    icon: "💸",
  },
];

export type { IDataset };
export { datasets, sizes, mods, formats, themes };
