import React from "react";
import EmotionClassifier from "@/components/classifier/EmotionClassifier";
import ItineraryForm from "@/components/classifier/TextInput";

const model = () => {
  return (
    <div className="h-screen">
      <EmotionClassifier />
    </div>
  );
};

export default model;
