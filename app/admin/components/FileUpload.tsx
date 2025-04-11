"use client";
import * as React from "react";

export const FileUpload: React.FC = () => {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
  };

  return (
    <div
      className={`flex flex-col grow justify-center items-center px-20 py-10 text-lg text-center text-black rounded-xl border border-dashed border-neutral-400 transition-colors ${
        isDragging ? "bg-neutral-50" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      role="button"
      tabIndex={0}
      aria-label="File upload area"
    >
      <div className="flex flex-col items-center max-w-full w-[248px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/e7b22d4067a835fddb0ee6c8299304178e3838f7?placeholderIfAbsent=true"
          alt="Upload icon"
          className="object-contain aspect-square w-[50px]"
        />
        <p className="self-stretch mt-3.5">Drag and drop your files here</p>
        <p className="mt-2.5 text-sm">Or</p>
        <button
          className="px-5 py-2.5 mt-3.5 max-w-full whitespace-nowrap rounded-md border border-black border-solid w-[106px]"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          Browse
        </button>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          aria-label="File input"
        />
        <p className="mt-4 text-sm">1080 x 1080 px</p>
      </div>
    </div>
  );
};
