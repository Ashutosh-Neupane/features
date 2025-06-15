import React from "react";

const FeatureGridItem = ({
  title,
  description,
  imageUrl,
  colSpan = 1,
  rowSpan = 1,
}) => {
  // Define Tailwind classes for responsive column spans
  const colSpanClasses = {
    1: "lg:col-span-2",
    1.5: "lg:col-span-3",
    2: "lg:col-span-4",
    3: "lg:col-span-6",
  };

  // Define Tailwind classes for responsive row spans
  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
  };

  // Determine the effective column and row span classes
  const effectiveColSpan = colSpanClasses[colSpan] || colSpanClasses[1];
  const effectiveRowSpan = rowSpanClasses[rowSpan] || rowSpanClasses[1];

  return (
    <div
      // Use CSS animation for initial reveal instead of state/useEffect
      className={`
        col-span-full md:col-span-3 ${effectiveColSpan} ${effectiveRowSpan}
        bg-transparent shadow-none hover:shadow-none
        flex flex-col mb-6 h-auto w-full max-w-[708px] mx-auto overflow-hidden
        animate-fade-in-up transition-transform duration-300 hover:scale-103
      `}
      style={{
         // You can add a staggered delay if you want using data-index in FeaturesGridPage
         // For now, no specific inline style for animation delay here
      }}
    >
      {/* Text Section */}
      <div
        className="px-3 overflow-hidden p-3 "
        style={{
          maxHeight: "33.33%",
          flexShrink: 1,
          flexGrow: 0,
        }}
      >
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div
        className="overflow-hidden bg-gray-50"
        style={{
          minHeight: "66.66%",
          flexGrow: 1,
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Image+Load+Error'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-xs italic rounded-xl">
            No image available
          </div>
        )}
      </div>
    </div>
  );
};
export default FeatureGridItem;