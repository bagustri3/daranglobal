"use client";

import React from "react";

export default function Button({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <button
      onClick={() => {
        const downloadUrl =
          "https://drive.google.com/uc?export=download&confirm=t&id=1Z9qmc7b2UDhnBcQkOexoYdr7-Cu1rrVw";
        window.open(downloadUrl, "_blank");
      }}
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap"
    >
      View Container Homes
    </button>
  );
}
