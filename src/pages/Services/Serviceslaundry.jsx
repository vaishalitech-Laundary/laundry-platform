import React, { useEffect, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";

import data from "./serviceData.json";
import { set } from "react-hook-form";

const Serviceslaundry = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const [filterdData, setFilterdData] = useState(data);
  const [filters, setFilters] = useState({
    name: [],
    category: [],
    fabricType: [],
    rating: 0,
    serviceMode: [],
    deliveryTime: [],
    minimumPrice: 0,
    // maximumPrice: 100000,
  });
  const [name, setName] = useState([]);
  const [category, setCategory] = useState([]);
  const [fabricType, setFabricType] = useState([]);
  const [rating, setRating] = useState([]);
  const [serviceMode, setServiceMode] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState([]);
  useEffect(() => {
    let name = new Map();
    let category = new Map();
    let fabricType = new Map();
    let rating = new Map();
    let serviceMode = new Map();
    let deliveryTime = new Map();

    const mapLookup = {
      name,
      category,
      fabricType,
      rating,
      serviceMode,
      deliveryTime,
    };

    data.forEach((item) => {
      for (let key in item) {
        if (mapLookup[key]) {
          if (!mapLookup[key].has(item[key])) {
            mapLookup[key].set(item[key], true);
          }
        }
      }
    });
    // convert the map into array
    const nameArray = Array.from(name.keys());
    const categoryArray = Array.from(category.keys());
    const fabricTypeArray = Array.from(fabricType.keys());
    const ratingArray = Array.from(rating.keys());
    ratingArray.sort((a, b) => b - a);
    const serviceModeArray = Array.from(serviceMode.keys());
    const deliveryTimeArray = Array.from(deliveryTime.keys());
    // set the state with the array
    setName(nameArray);
    setCategory(categoryArray);
    setFabricType(fabricTypeArray);
    setRating(ratingArray);
    setServiceMode(serviceModeArray);
    setDeliveryTime(deliveryTimeArray);
  }, []);
  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    console.log(name, value, checked);
    if (name === "rating") {
      setFilters((prev) => ({
        ...prev,
        rating: value,
      }));
    } else if (name === "range") {
      setFilters((prev) => ({
        ...prev,
        minimumPrice: Number(value * 10),
      }));
    } else if (name === "minimumPrice") {
      setFilters((prev) => ({
        ...prev,
        minimumPrice: Number(value),
      }));
    }
    // else if(name==='maximumPrice'){
    //   setFilters(prev => ({
    //     ...prev,
    //     maximumPrice: Number(value),
    //   }));
    // }
    else if (checked) {
      setFilters((prev) => ({
        ...prev,
        [name]: [...prev[name], value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: prev[name].filter((item) => item !== value),
      }));
    }
  };
  useEffect(() => {
    console.log(filters);
    let tempdata = data.map((item) => {
      let isMatch = true;
      if (filters.name.length > 0) {
        isMatch = isMatch && filters.name.includes(item.name);
      }
      if (filters.category.length > 0) {
        isMatch = isMatch && filters.category.includes(item.category);
      }
      if (filters.fabricType.length > 0) {
        isMatch = isMatch && filters.fabricType.includes(item.fabricType);
      }
      if (filters.rating > 0) {
        isMatch = isMatch && item.rating >= filters.rating;
      }
      if (filters.minimumPrice > 0) {
        isMatch = isMatch && item.price >= filters.minimumPrice;
      }
      if (filters.serviceMode.length > 0) {
        isMatch = isMatch && filters.serviceMode.includes(item.serviceMode);
      }
      if (filters.deliveryTime.length > 0) {
        isMatch = isMatch && filters.deliveryTime.includes(item.deliveryTime);
      }
      return isMatch ? item : null;
    });
    setFilterdData(tempdata.filter((item) => item !== null));
    setCurrentPage(1);
  }, [filters]);

  const [favorites, setFavorites] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({
    "SERVICE CATEGORY": true,
    "FABRIC TYPE": true,
    RATING: true,
    "SERVICE MODE": true,
    PRICE: true,
    "DELIVERY TIME": true,
    "Wash & Fold": true,
    NAME: true,
    CATEGORY: true,
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Add this function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo(0, 1000);
  };

  const handleSortChange = (e) => {
    const { value } = e.target;
    console.log(value);

    if (value === "Price: Low to High") {
      setFilterdData((prevData) =>
        [...prevData].sort((a, b) => a.price - b.price)
      );
    } else if (value === "Price: High to Low") {
      setFilterdData((prevData) =>
        [...prevData].sort((a, b) => b.price - a.price)
      );
    } else if (value === "Rating") {
      setFilterdData((prevData) =>
        [...prevData].sort((a, b) => b.rating - a.rating)
      );
    }
  };

  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Add a useEffect for detecting screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileFiltersVisible(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 mt-5 md:mt-0">
      <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-[#1F3C5F] mb-6 sm:mb-10">
        Our Laundry Services
      </h1>

      {/* Mobile filter toggle button - only visible on small screens */}
      <button 
        className="md:hidden w-full flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-3 mb-4"
        onClick={() => setMobileFiltersVisible(!mobileFiltersVisible)}
      >
        <div className="flex items-center">
          <span className="mr-2">☰</span>
          <span>Filters</span>
          {Object.values(filters).some(val => Array.isArray(val) ? val.length > 0 : val > 0) && (
            <span className="ml-2 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {/* Count active filters */}
              {Object.values(filters).reduce((count, val) => 
                count + (Array.isArray(val) ? val.length : val > 0 ? 1 : 0), 0)}
            </span>
          )}
        </div>
        <FaChevronDown size={12} className={mobileFiltersVisible ? "transform rotate-180" : ""} />
      </button>

      {/* Top filter bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-4 gap-3 sm:gap-0">
        <div className="hidden md:flex items-center border border-gray-300 rounded-md px-3 py-2">
          <span className="mr-2">☰</span>
          <span>Filter</span>
          <span className="ml-2 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {/* Same count as above */}
          </span>
        </div>

        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Wash & Fold"
            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="flex items-center">
          <span className="text-sm mr-2">Sort by:</span>
          <div className="relative flex-grow sm:flex-grow-0">
            <select
              className="w-full sm:w-auto bg-white border border-gray-300 rounded-md px-3 py-2 appearance-none pr-8"
              onChange={handleSortChange}
            >
              <option>Trending</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
            <FaChevronDown className="absolute right-2 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Suggestions bar - make scrollable on mobile */}
      <div className="flex items-center text-sm mb-5 overflow-x-auto pb-2 -mx-4 px-4">
        <span className="text-gray-500 mr-2 whitespace-nowrap">Suggestion:</span>
        <span className="bg-gray-100 rounded-full px-3 py-1 mr-2 whitespace-nowrap">
          Normal wash
        </span>
        <span className="bg-gray-100 rounded-full px-3 py-1 mr-2 whitespace-nowrap">
          Regular Wash & Fold
        </span>
        <span className="bg-gray-100 rounded-full px-3 py-1 mr-2 whitespace-nowrap">
          Premium Wash & Fold
        </span>
        <span className="ml-auto text-xs text-gray-500 whitespace-nowrap">
          <b>{filterdData.length}</b> results found{" "}
        </span>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left sidebar filters - conditionally show on mobile */}
        <div className={`${mobileFiltersVisible ? 'block' : 'hidden'} md:block w-full md:w-64 md:flex-shrink-0 transition-all duration-300 mb-4 md:mb-0`}>
          {/* Name Type Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory("NAME")}
            >
              <h3 className="font-bold text-sm">NAME</h3>
              {expandedCategories["NAME"] ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </div>

            {expandedCategories["NAME"] && (
              <div className="px-4 py-2">
                {name.map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center py-1"
                  >
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4"
                        onChange={handleFilterChange}
                        name="name"
                        value={item}
                      />
                      <span>{item}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Category Type Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory("CATEGORY")}
            >
              <h3 className="font-bold text-sm">CATEGORY</h3>
              {expandedCategories["CATEGORY"] ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </div>

            {expandedCategories["CATEGORY"] && (
              <div className="px-4 py-2">
                {category.map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center py-1"
                  >
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4"
                        onChange={handleFilterChange}
                        name="category"
                        value={item}
                      />
                      <span>{item}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Fabric Type Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory("FABRIC TYPE")}
            >
              <h3 className="font-bold text-sm">FABRIC TYPE</h3>
              {expandedCategories["FABRIC TYPE"] ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </div>

            {expandedCategories["FABRIC TYPE"] && (
              <div className="px-4 py-2">
                {fabricType.map((fabric) => (
                  <div
                    key={fabric}
                    className="flex justify-between items-center py-1"
                  >
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4"
                        onChange={handleFilterChange}
                        name="fabricType"
                        value={fabric}
                      />
                      <span>{fabric}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory("RATING")}
            >
              <h3 className="font-bold text-sm">RATING</h3>
              {expandedCategories["RATING"] ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </div>

            {expandedCategories["RATING"] && (
              <div className="px-4 py-2">
                {rating.map((rating) => (
                  <div
                    key={rating}
                    className="flex justify-between items-center py-1"
                  >
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        className="mr-2 h-4 w-4"
                        onChange={handleFilterChange}
                      />
                      <span className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span> {rating}{" "}
                        & UP
                      </span>
                    </label>
                    {/* <span className="text-gray-500 text-sm">1345</span> */}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Service Mode Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory("SERVICE MODE")}
            >
              <h3 className="font-bold text-sm">SERVICE MODE</h3>
              {expandedCategories["SERVICE MODE"] ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </div>

            {expandedCategories["SERVICE MODE"] && (
              <div className="px-4 py-2">
                {serviceMode.map((mode) => (
                  <div
                    key={mode}
                    className="flex justify-between items-center py-1"
                  >
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4"
                        onChange={handleFilterChange}
                        name="serviceMode"
                        value={mode}
                      />
                      <span>{mode}</span>
                    </label>
                    {/* <span className="text-gray-500 text-sm">1345</span> */}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory("PRICE")}
            >
              <h3 className="font-bold text-sm">PRICE</h3>
              {expandedCategories["PRICE"] ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </div>

            {expandedCategories["PRICE"] && (
              <div className="px-4 py-2">
                <div className="py-2">
                  <input
                    type="range"
                    className="w-full"
                    onChange={handleFilterChange}
                    name="range"
                  />
                </div>
                <div className="flex gap-2 mb-3">
                  <div className="flex-1">
                    <label className="text-xs text-gray-500">$ min:</label>
                    <input
                      type="text"
                      name="minimumPrice"
                      onChange={handleFilterChange}
                      value={filters.minimumPrice}
                      className="w-full border border-gray-300 rounded p-1 text-sm"
                    />
                  </div>
                  {/* <div className="flex-1">
                    <label className="text-xs text-gray-500">$ max:</label>
                    <input type="text" name='maximumPrice' onChange={handleFilterChange} value={filters.maximumPrice} className="w-full border border-gray-300 rounded p-1 text-sm" />
                  </div> */}
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="mr-2 h-4 w-4" />
                    <span>Paid</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Delivery Time Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory("DELIVERY TIME")}
            >
              <h3 className="font-bold text-sm">DELIVERY TIME</h3>
              {expandedCategories["DELIVERY TIME"] ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </div>

            {expandedCategories["DELIVERY TIME"] && (
              <div className="px-4 py-2">
                {deliveryTime.map((time) => (
                  <div
                    key={time}
                    className="flex justify-between items-center py-1"
                  >
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4"
                        onChange={handleFilterChange}
                        name="deliveryTime"
                        value={time}
                      />
                      <span>{time}</span>
                    </label>
                    {/* <span className="text-gray-500 text-sm">1345</span> */}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium py-2.5 px-4 rounded-md border border-blue-200 transition duration-200 ease-in-out"
            onClick={() => {
              // Reset filters state
              setFilters({
                name: [],
                category: [],
                fabricType: [],
                rating: 0,
                serviceMode: [],
                deliveryTime: [],
                minimumPrice: 0,
              });

              // Reset checkbox and radio inputs
              const checkboxes = document.querySelectorAll(
                'input[type="checkbox"]'
              );
              checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
              });

              const radioButtons = document.querySelectorAll(
                'input[type="radio"]'
              );
              radioButtons.forEach((radio) => {
                radio.checked = false;
              });

              // Reset range sliders
              const rangeInputs = document.querySelectorAll(
                'input[type="range"]'
              );
              rangeInputs.forEach((range) => {
                range.value = range.min || 0;
              });

              // Reset text inputs (except search)
              const textInputs = document.querySelectorAll(
                '.px-4.py-2 input[type="text"]'
              );
              textInputs.forEach((input) => {
                input.value = "";
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Clear filters
          </button>
        </div>

        {/* Main content area with service cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filterdData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-gray-100 shadow-sm h-90"
              >
                {/* Service image with favorite button */}
                <div className="relative h-48">
                  <img
                    src={
                      item.image ||
                      "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    }
                    alt={item.description}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    {favorites[item.id] ? (
                      <FaHeart className="text-red-500" size={16} />
                    ) : (
                      <FaRegHeart size={16} />
                    )}
                  </button>
                </div>

                {/* item details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs uppercase font-medium text-orange-600 mb-1">
                      {item.heading || item.category}
                    </div>
                    <div className="text-xl font-bold mb-2 text-right">
                      {item.priceLabel}
                    </div>
                  </div>
                  <p className="text-base font-medium text-gray-800 mb-3">
                    {item.shortDescription || item.description}
                  </p>

                  {/* Rating and details in a row */}
                  <div className="flex items-center justify-between">
                    {/* Rating */}
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>

                    {/* View details button */}
                    <button className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                      View Details <FaChevronRight size={10} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {/* Show message if no results */}
          {filterdData.length === 0 && (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-500">
                No services match your filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination - adjust for mobile */}
      <div className="flex justify-center mt-6 sm:mt-10 items-center overflow-x-auto py-2">
        {/* Adjust the inner content for better mobile display */}
        {(() => {
          const totalItems = filterdData.length;
          const totalPages = Math.ceil(totalItems / itemsPerPage);

          // Don't show pagination if only one page
          if (totalPages <= 1) return null;

          // Calculate which page numbers to show
          const pageNumbers = [];
          const maxVisiblePages = 5;

          let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
          );
          let endPage = startPage + maxVisiblePages - 1;

          if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
          }

          for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
          }

          return (
            <>
              {/* Previous button */}
              <button
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentPage === 1
                    ? "border border-gray-200 text-gray-400"
                    : "border border-gray-300 cursor-pointer hover:bg-gray-100"
                }`}
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
              >
                &lt;
              </button>

              {/* On mobile, show fewer page numbers */}
              {isMobile ? (
                <div className="mx-2 text-sm">
                  Page {currentPage} of {totalPages}
                </div>
              ) : (
                <>
                  {/* First page button (if not visible in current range) */}
                  {startPage > 1 && (
                    <>
                      <button
                        className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 mx-1 hover:bg-gray-100"
                        onClick={() => handlePageChange(1)}
                      >
                        01
                      </button>
                      {startPage > 2 && <span className="mx-1">...</span>}
                    </>
                  )}

                  {/* Page number buttons */}
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      className={`flex items-center justify-center w-8 h-8 rounded-full mx-1 ${
                        currentPage === number
                          ? "bg-blue-900 text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                      onClick={() => handlePageChange(number)}
                    >
                      {number.toString().padStart(2, "0")}
                    </button>
                  ))}

                  {/* Last page button (if not visible in current range) */}
                  {endPage < totalPages && (
                    <>
                      {endPage < totalPages - 1 && (
                        <span className="mx-1">...</span>
                      )}
                      <button
                        className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 mx-1 hover:bg-gray-100"
                        onClick={() => handlePageChange(totalPages)}
                      >
                        {totalPages.toString().padStart(2, "0")}
                      </button>
                    </>
                  )}
                </>
              )}

              {/* Next button */}
              <button
                className={`flex items-center justify-center w-8 h-8 rounded-full ml-1 ${
                  currentPage === totalPages
                    ? "border border-gray-200 text-gray-400"
                    : "border border-gray-300 cursor-pointer hover:bg-gray-100"
                }`}
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </>
          );
        })()}
      </div>
    </div>
  );
};

export default Serviceslaundry;
