"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

export default function TopBannerComponent({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(timer);
            setIsVisible(false);
            onClose();
            return 0;
          }
          return prevProgress - 1;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-600 text-white">
      <div className="h-1 bg-blue-500">
        <div
          className="h-full bg-blue-300 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-bold">Welcome Back</span>
            <span className="text-sm font-medium">
              You successfully logged in
            </span>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              onClose();
            }}
            className="text-white hover:text-blue-200 transition-colors"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
