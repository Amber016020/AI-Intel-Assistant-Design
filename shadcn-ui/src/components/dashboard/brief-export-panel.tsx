// src/components/dashboard/brief-export-panel.tsx

import React, { useState } from "react";

type ExportFormat = "pdf" | "ppt" | "md";

interface BriefExportPanelProps {
  insight?: string | null;
}

export const BriefExportPanel: React.FC<BriefExportPanelProps> = ({ insight }) => {
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>("pdf");

  const handleExport = () => {
    if (!insight) return;

    let mimeType = "text/plain;charset=utf-8";
    let fileName = "ai-brief";

    switch (selectedFormat) {
      case "pdf":
        mimeType = "application/pdf"; // hint for system
        fileName += ".pdf";
        break;
      case "ppt":
        mimeType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
        fileName += ".pptx";
        break;
      case "md":
        mimeType = "text/markdown;charset=utf-8";
        fileName += ".md";
        break;
    }

    const blob = new Blob([insight], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-black/30 border border-white/10 p-4 rounded-lg text-white">
      <h2 className="text-lg font-semibold text-purple-300 mb-2">
        Mini Brief Exporter
      </h2>
      <p className="text-slate-300 mb-4">
        Generate a concise summary report and export it in your preferred format.
      </p>

      <div className="mb-4">
        <label className="mr-3 text-slate-200">Choose format:</label>
        <select
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value as ExportFormat)}
          className="bg-black/40 border border-white/20 px-3 py-1 rounded text-white"
        >
          <option value="pdf">PDF</option>
          <option value="ppt">PowerPoint</option>
          <option value="md">Markdown</option>
        </select>
      </div>

      <button
        onClick={handleExport}
        disabled={!insight}
        className={`${
          insight ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-600 cursor-not-allowed"
        } text-white font-semibold px-4 py-2 rounded`}
      >
        Export Brief
      </button>

      <div className="mt-6 p-4 bg-black/40 border border-white/10 rounded text-sm text-slate-200">
        <h3 className="font-semibold text-purple-400 mb-2">Preview</h3>
        <pre className="whitespace-pre-wrap">{insight || "No insight available."}</pre>
      </div>
    </div>
  );
};
