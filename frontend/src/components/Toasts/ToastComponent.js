"use client";

import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";

export default function ToastComponent() {
  return (
    <div className="flex items-center w-full">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal flex-grow">
          Improve password difficulty.
        </div>
        <Toast.Toggle />
      </Toast>{" "}
    </div>
  );
}
