"use client";

import { useState, useEffect } from "react";
import ProcurementDashboard from "./dashboards/ProcurementDashboard";
import SalesDashboard from "./dashboards/SalesDashboard";
import InventoryDashboard from "./dashboards/InventoryDashboard";
import FinanceDashboard from "./dashboards/FinanceDashboard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
  {
    id: "procurement",
    title: "Smart Procurement",
    description:
      "Streamline your procurement process with intelligent supplier management and automated purchase orders.",
    icon: "🛒",
    component: ProcurementDashboard,
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    id: "sales",
    title: "Sales Analytics",
    description:
      "Comprehensive sales tracking with advanced analytics to boost revenue and customer satisfaction.",
    icon: "📊",
    component: SalesDashboard,
    color: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
  },
  {
    id: "inventory",
    title: "Inventory Control",
    description:
      "Real-time inventory tracking with predictive analytics to optimize stock levels and reduce waste.",
    icon: "📦",
    component: InventoryDashboard,
    color: "from-green-50 to-green-100",
    borderColor: "border-green-200",
    textColor: "text-green-700",
  },
  {
    id: "finance",
    title: "Financial Management",
    description:
      "Complete financial oversight with automated reporting and real-time cash flow monitoring.",
    icon: "💰",
    component: FinanceDashboard,
    color: "from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
  },
];

export default function BusinessAreasSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 8000); // Increased to 8 seconds to give more time to view the UI

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Slider Navigation Dots */}
      <div className="flex justify-center space-x-2 mb-8">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-500 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Slider Content */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderData.map((slide) => {
        const DashboardComponent = slide.component;
        return (
          <div key={slide.id} className="w-full flex-shrink-0">
            <DashboardComponent />
          </div>
        );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators with Labels */}
      <div className="flex justify-center space-x-8 mt-8">
        {sliderData.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-100 text-orange-700"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="text-2xl">{slide.icon}</div>
            <div className="text-sm font-medium">{slide.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
