import Papa from "papaparse";

export const extractDataFromFileCSV = (file: File) => {
  Papa.parse(file, {
    complete: (result) => {
      const headers = result.meta.fields || [];
      return {
        headers: headers,
        data: result.data,
        error: null,
      };
    },
    error: (error: Error) => {
      return {
        headers: null,
        data: null,
        error: error,
      };
    },
    header: true, // Optionally, specify if the first row contains headers
    skipEmptyLines: true,
  });
};

export const extractDataFromPathCSV = async (path: string) => {
  try {
    const response = await fetch(path); // Wait for the fetch request to complete
    if (!response.ok) {
      console.error("Network response was not ok");
      return {
        headers: null,
        data: null,
        error: response.statusText,
      };
    }
    const data = await response.text(); // Wait for the response to be parsed as JSON
    Papa.parse(data, {
      complete: (result) => {
        const headers = result.meta.fields || [];
        console.log(headers);
        return {
          headers: headers,
          data: result.data,
          error: null,
        };
      },
      error: (error: Error) => {
        return {
          headers: null,
          data: null,
          error: error,
        };
      },
      header: true, // Optionally, specify if the first row contains headers
      skipEmptyLines: true,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      headers: null,
      data: null,
      error: error,
    };
  }
};
