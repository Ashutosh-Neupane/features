import React from "react";

// FeatureGridItem Component
const FeatureGridItem = ({
  title,
  description,
  imageUrl,
  colSpan = 1,
  rowSpan = 1,
}) => {
  const colSpanClasses = {
    1: "lg:col-span-2",
    1.5: "lg:col-span-3",
    2: "lg:col-span-4",
    3: "lg:col-span-6",
  };

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
  };

  const effectiveColSpan = colSpanClasses[colSpan] || colSpanClasses[1];
  const effectiveRowSpan = rowSpanClasses[rowSpan] || rowSpanClasses[1];

  return (
    <div
      className={`col-span-full md:col-span-3 ${effectiveColSpan} ${effectiveRowSpan} bg-transparent rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full`}
    >
      {/* Text Section */}
      <div
        className="px-3 overflow-hidden p-3"
        style={{
          maxHeight: "33.33%", // max 1/3 height
          flexShrink: 1,
          flexGrow: 0,
        }}
      >
        <h3 className="text-xs font-bold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-[10px] font-bold text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div
        className="overflow-hidden"
        style={{
          minHeight: "66.66%", // minimum 2/3 height
          flexGrow: 1,
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-b-md  rounded-xl transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center  text-xs italic rounded-b-md">
            No image
          </div>
        )}
      </div>
    </div>
  );
};

// Main Page Component
const FeaturesGridPage = () => {
  const features = [
    {
      title: "Online Storefront",
      description:
        "Create stunning storefronts that differentiate your brand. Offer an effortless journey for your customers in an intuitive platform.",
      imageUrl: "/onlineStorefront.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "CRM and Loyalty Points",
      description:
        "Create a comprehensive customer record. Identify your top customers with sales history. Reward your loyal customers for their purchases.",
      imageUrl: "/loyality.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Sales Reporting",
      description:
        "Get detailed reporting of sales, profit, and customer behavior. Make informed decisions with comprehensive insights from your business.",
      imageUrl: "/sales.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Online Payments (eSewa, Khalti, FonePay & More)",
      description:
        "Accept online payments. Integrate with popular payment gateways to offer flexibility and convenience to your customers.",
      imageUrl: "/onlinePayment.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Delivery Channel Integration",
      description:
        "Seamlessly manage orders and deliveries. Integrate with various delivery partners to expand your reach and offer convenience.",
      imageUrl: "/deliveryChannel.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Accounting and eBilling (IRD Verified)",
      description:
        "Automate accounting tasks. Generate IRD verified bills with ease. Reconcile all transactions and manage your finances effortlessly.",
      imageUrl: "/accounting.png",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      title: "Point of Sale (POS)",
      description:
        "Efficiently process sales and manage inventory. Optimize your POS operations for a smooth customer experience.",
      imageUrl: "/pointofsales.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Omnichannel Customer Support",
      description:
        "Provide exceptional customer support across all channels. Resolve queries and build strong customer relationships.",
      imageUrl: "/omniChannel.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Discount and Gift Card Management",
      description:
        "Create and manage discounts and promotions. Offer gift cards to attract new customers and boost sales.",
      imageUrl: "/Card.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Advanced Analytics with Dashboard",
      description:
        "Gain valuable insights from your data. Monitor key performance indicators (KPIs) with interactive dashboards.",
      imageUrl: "/analytics.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Multi Store/Warehouse Management",
      description:
        "Manage multiple stores and warehouses from one central location. Track inventory, sales, and operations efficiently.",
      imageUrl: "/multistore.png",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Barcode and Inventory Management",
      description:
        "Automate inventory tracking with barcodes. Streamline your stock management and reduce manual errors.",
      imageUrl: "/barcode.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b h-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
          <h1 className="text-lg font-bold text-[#0C2D57]">lungta</h1>
          <nav className="space-x-4 hidden md:flex text-sm">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              How it works
            </a>
            <a href="#" className="hover:text-blue-600">
              About Us
            </a>
            <a href="#" className="text-blue-600 font-semibold">
              Features
            </a>
            <a href="#" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
          <div className="space-x-2 hidden md:flex text-sm">
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <main className="flex-1 overflow-y-auto pb-[100px]">
        <div
          className="w-3/4 mx-auto h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4"
          style={{ gridTemplateRows: "repeat(4, 1fr)" }}
        >
          {features.map((feature, index) => (
            <FeatureGridItem
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              colSpan={feature.colSpan}
              rowSpan={feature.rowSpan}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0C2D57] text-white text-xs h-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
          <div>
            <span className="font-bold">lungta</span> &copy; 2025 Dots and
            Dashes Technology
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-gray-300">
              FB
            </a>
            <a href="#" className="hover:text-gray-300">
              IG
            </a>
            <a href="#" className="hover:text-gray-300">
              YT
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesGridPage;
