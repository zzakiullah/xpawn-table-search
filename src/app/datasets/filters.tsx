import { LuText, LuImage, LuAudioLines } from "react-icons/lu";
import { VscTable, VscJson } from "react-icons/vsc";

const datasets = [
  {
    id: 0,
    value: "Patient Risk Prediction",
    path: "",
  },
  {
    id: 1,
    value: "Protein Binding Sequence",
  },
  {
    id: 2,
    value: "Lung Cancer",
  },
  {
    id: 3,
    value: "Fast Food Restaurants",
  },
  {
    id: 4,
    value: "Payments",
  },
];

const sizes = [
  {
    label: "<1K",
    degree: 3,
  },
  {
    label: "1K",
    degree: 3,
  },
  {
    label: "10K",
    degree: 4,
  },
  {
    label: "100K",
    degree: 5,
  },
  {
    label: "1M",
    degree: 6,
  },
  {
    label: "10M",
    degree: 7,
  },
  {
    label: "100M",
    degree: 8,
  },
  {
    label: "1B",
    degree: 9,
  },
  {
    label: "10B",
    degree: 10,
  },
  {
    label: "100B",
    degree: 11,
  },
  {
    label: "1T",
    degree: 12,
  },
  {
    label: ">1T",
    degree: 12,
  },
];

const mods = [
  {
    label: "Audio",
    icon: <LuAudioLines className="text-red-600" />,
  },
  {
    label: "Image",
    icon: <LuImage className="text-orange-600" />,
  },
  {
    label: "Text",
    icon: <LuText className="text-amber-600" />,
  },
];

const formats = [
  {
    label: "CSV",
    icon: <VscTable />,
  },
  {
    label: "JSON",
    icon: <VscJson />,
  },
];

const themes = [
  {
    label: "Health/Medicine",
    icon: "⚕️",
  },
  {
    label: "Biology",
    icon: "🧬",
  },
  {
    label: "Food",
    icon: "🍔",
  },
  {
    label: "Automotive",
    icon: "🚗",
  },
  {
    label: "Finance",
    icon: "💸",
  },
];

export { datasets, sizes, mods, formats, themes };
