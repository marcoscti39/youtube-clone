import React from "react";

const ResultsTitle = ({ highlightedTerm }: { highlightedTerm: string }) => {
  return (
    <h1 className="text-2xl font-semibold py-4">
      Results for: <span className="text-primary-red">{highlightedTerm}</span>{" "}
    </h1>
  );
};

export default ResultsTitle;
