import { useState } from "react";
import Papa from "papaparse";

const CSVUpload = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [csvData, setCsvData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = event?.target;
    const file = target?.files?.[0];
    if (file) {
      parseCSV(file);
    }
  };

  const parseCSV = (file?: File) => {
    if (!file) {
      setError("No file selected");
      return;
    }

    // Reset error in case of a new file
    setError(null);

    Papa.parse(file, {
      complete: (result) => {
        // Success - Save parsed data
        setCsvData(result.data);
      },
      error: (error: Error) => {
        // Handle parsing error
        setError("Error parsing file: " + error.message);
      },
      header: true, // Optionally, specify if the first row contains headers
    });
  };

  return (
    <div>
      <h2>Upload and Parse CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {csvData && (
        <div>
          <h3>Parsed Data:</h3>
          <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CSVUpload;
