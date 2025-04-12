"use client";
import * as React from "react";

interface ActionButtonsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onGoBack?: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onEdit,
  onDelete,
  onGoBack,
}) => {
  return (
    <div className="flex flex-col gap-6 mt-32 w-[393px] max-sm:w-full">
      <button
        onClick={onEdit}
        className="w-full h-12 text-lg font-bold text-black bg-white rounded-3xl border border-solid cursor-pointer border-zinc-300 border-opacity-90"
        aria-label="Edit survey"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="w-full h-12 text-lg font-bold text-white bg-red-600 rounded-3xl border border-solid cursor-pointer border-zinc-300 border-opacity-90"
        aria-label="Delete survey"
      >
        Delete
      </button>
      <button
        onClick={onGoBack}
        className="text-lg font-bold text-center text-black cursor-pointer w-full"
        aria-label="Go back to previous page"
      >
        Go back
      </button>
    </div>
  );
};
