export const extractDataFromPathJSON = async (path: string) => {
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
    const data = await response.json(); // Wait for the response to be parsed as JSON
    return {
      headers: Object.keys(data[0]),
      data: data,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      headers: null,
      data: null,
      error: error,
    };
  }
};
