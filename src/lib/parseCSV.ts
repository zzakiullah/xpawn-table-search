import Papa from "papaparse";

export const extractDataFromPathCSV = async (path: string) => {
  try {
    // Fetch the CSV file
    const response = await fetch(path);

    // Check if the response is valid
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Get the CSV text
    const csvText = await response.text();

    // Parse the CSV data using Papa Parse
    const result = Papa.parse(csvText, {
      header: true, // Tells Papa to treat the first row as headers
      skipEmptyLines: true, // Optionally skip empty lines
    });

    // Extract headers and data
    const headers = result.meta.fields || [];
    const data = result.data || [];

    return { headers, data, error: null }; // Return parsed data
  } catch (error) {
    console.error("Error parsing CSV:", error);
    return { headers: null, data: null, error }; // Return the error if any
  }
};
