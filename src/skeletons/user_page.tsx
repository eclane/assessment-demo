import React from "react";

export default function UserPageSkeleton() {
  return (
    <div className="grid grid-cols-2">
      <div className="block animate-pulse mb-8">
        <div className="h-14 w-14 bg-gray-200 rounded-full mb-4"></div>
        <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
}
