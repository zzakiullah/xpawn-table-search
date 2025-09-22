import Papa from "papaparse";

export const parseCSV = (file: File) => {
  Papa.parse(file, {
    complete: (result) => {
      return {
        data: result.data,
        error: null,
      };
    },
    error: (error: Error) => {
      return {
        data: null,
        error: error,
      };
    },
    header: true, // Optionally, specify if the first row contains headers
  });
};
