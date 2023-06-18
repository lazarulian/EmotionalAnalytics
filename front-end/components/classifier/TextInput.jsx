import React, { useState } from "react";
import axios from "axios";

const ItineraryForm = () => {
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setItinerary(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/generate-ics", { itinerary });
      const { data } = response;
      const file = new File([data], "itinerary.ics", { type: "text/calendar" });
      setIcsFile(file);
    } catch (error) {
      console.error("Error generating ICS file:", error);
    }
  };

  return (
    <div className="">
      <form className="form-control" onSubmit={handleSubmit}>
        <textarea
          value={itinerary}
          onChange={handleInputChange}
          className="block my-5 p-2.5 w-full text-sm  rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Paste your itinerary here"
          rows="20"
        />
        {!icsFile && (
          <button
            type="submit"
            disabled={loading}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-300 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {loading ? "Generating..." : "Generate ICS"}
            </span>
          </button>
        )}
      </form>
      {icsFile && (
        <button
          onClick={handleDownload}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          disabled={!icsFile}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in bg-gray-900 duration-300 rounded-md group-hover:bg-opacity-0">
            Download
          </span>
        </button>
      )}
    </div>
  );
};

export default ItineraryForm;
