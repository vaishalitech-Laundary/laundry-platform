import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaChevronDown, FaChevronUp, FaSearch, FaChevronRight } from 'react-icons/fa';

const Serviceslaundry = () => {
  const [activeFilters, setActiveFilters] = useState({
    serviceCategory: {
      'Wash & Fold': true,
      'Regular Wash': false,
      'Premium Wash': false,
      'Heavy-Duty Wash': true,
    },
    fabricType: {
      'Cotton': false,
      'Silk': false,
      'Wool': false,
      'Denim': true,
      'Delicate Fabrics': false,
    },
    rating: {
      '5 Star': false,
      '4 Star & up': false,
      '3 Star & up': true,
      '2 Star & up': false,
      '1 Star & up': false,
    },
    serviceMode: {
      'Pickup & Delivery': false,
      'Walk-in Service': false,
      'Home Service': false,
    },
    deliveryTime: {
      'Same Day': false,
      '24 Hours': false,
      '48 Hours': true,
      '3+ Days': false,
    },
    paid: false
  });

  const [favorites, setFavorites] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({
    'SERVICE CATEGORY': true,
    'FABRIC TYPE': true,
    'RATING': true,
    'SERVICE MODE': true,
    'PRICE': true,
    'DELIVERY TIME': true,
    'Wash & Fold': true
  });

  const services = [
    {
      id: 1,
      category: 'WASH & FOLD',
      price: '₹50/kg',
      description: 'Clothes are washed, dried, and neatly folded.',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      category: 'DRY CLEANING',
      price: '₹120/item',
      description: 'Specialized cleaning for delicate fabrics.',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      category: 'IRONING',
      price: '₹15/item',
      description: 'Professional wrinkle-free ironing for all fabrics.',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      category: 'STAIN REMOVAL',
      price: '₹30/item',
      description: 'Tough stain removal using fabric-safe methods.',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      category: 'WASH & FOLD',
      price: '₹50/kg',
      description: 'Clothes are washed, dried, and neatly folded.',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      category: 'DRY CLEANING',
      price: '₹120/item',
      description: 'Specialized cleaning for delicate fabrics.',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551761429-8232f9f5955c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      category: 'STAIN REMOVAL',
      price: '₹30/item',
      description: 'Tough stain removal using fabric-safe methods.',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 8,
      category: 'IRONING',
      price: '₹15/item',
      description: 'Professional wrinkle-free ironing for all fabrics.',
      rating: 4.7,
      image: 'https://s3-alpha-sig.figma.com/img/c044/1a61/757285c7920869880de731dac2b0bbcc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VYcXHgOLfZNL8FmsnWvTJbYfFhyeRAFbP~ljeAVpLpmw~o6tnASEiVA3XzzSUTyOSnRuoWmTlrTm9~P2WHe3Nj9y3tZ1bkL7peGgBj8Y44S-ZRDx2XGIMxHEfz0YLLHbUR38jG-5aTcq9CJlIADEOqhSKkJNNEzgsMyLch6Ezsuu4YFxsg1DyXeXZFMX1VwTYuMeWjaqx~QgdIdcfnQBuwYNHyPoBU60LFKGU3F~ClJVBRNLnMJmwRMXW1qEHft46k5i2HC4~e511C0MJbbuRLMvCrFo6pQcaskUHuLjhXsaa9LqAIyGUdLh24HRmbrq-RGoqI9Vm84ZWU6DafKLMQ__'
    },
    {
      id: 9,
      category: 'WASH & FOLD',
      price: '₹50/kg',
      description: 'Clothes are washed, dried, and neatly folded.',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 10,
      category: 'STAIN REMOVAL',
      price: '₹30/item',
      description: 'Tough stain removal using fabric-safe methods.',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 11,
      category: 'IRONING',
      price: '₹15/item',
      description: 'Professional wrinkle-free ironing for all fabrics.',
      rating: 4.7,
      image: 'https://s3-alpha-sig.figma.com/img/c044/1a61/757285c7920869880de731dac2b0bbcc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VYcXHgOLfZNL8FmsnWvTJbYfFhyeRAFbP~ljeAVpLpmw~o6tnASEiVA3XzzSUTyOSnRuoWmTlrTm9~P2WHe3Nj9y3tZ1bkL7peGgBj8Y44S-ZRDx2XGIMxHEfz0YLLHbUR38jG-5aTcq9CJlIADEOqhSKkJNNEzgsMyLch6Ezsuu4YFxsg1DyXeXZFMX1VwTYuMeWjaqx~QgdIdcfnQBuwYNHyPoBU60LFKGU3F~ClJVBRNLnMJmwRMXW1qEHft46k5i2HC4~e511C0MJbbuRLMvCrFo6pQcaskUHuLjhXsaa9LqAIyGUdLh24HRmbrq-RGoqI9Vm84ZWU6DafKLMQ__'
    },
    {
      id: 12,
      category: 'WASH & FOLD',
      price: '₹50/kg',
      description: 'Clothes are washed, dried, and neatly folded.',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleFilter = (category, filter) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [filter]: !prev[category][filter]
      }
    }));
  };

  const categoryIcons = {
    'Wash & Fold': 'washing-machine',
    'Dry Cleaning': 'spray-bottle',
    'Ironing & Pressing': 'iron',
    'Stain Removal': 'eraser',
    'Shoe Cleaning': 'shoe',
    'Carpet & Curtain Cleaning': 'broom',
    'Health & Fitness': 'dumbbell'
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className='text-center font-bold text-5xl text-[#1F3C5F] mb-15'>Our Laundry Services</h1>
      {/* Top filter bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <span className="mr-2">☰</span>
          <span>Filter</span>
          <span className="ml-2 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
        </div>

        <div className="flex-1 mx-4 relative">
          <input 
            type="text" 
            placeholder="Wash & Fold" 
            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="flex items-center">
          <span className="text-sm mr-2">Sort by:</span>
          <div className="relative">
            <select className="bg-white border border-gray-300 rounded-md px-3 py-2 appearance-none pr-8">
              <option>Trending</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
            <FaChevronDown className="absolute right-2 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Suggestions bar */}
      <div className="flex items-center text-sm mb-5">
        <span className="text-gray-500 mr-2">Suggestion:</span>
        <span className="bg-gray-100 rounded-full px-3 py-1 mr-2">Normal wash</span>
        <span className="bg-gray-100 rounded-full px-3 py-1 mr-2">Regular Wash & Fold</span>
        <span className="bg-gray-100 rounded-full px-3 py-1 mr-2">Premium Wash & Fold</span>
        <span className="ml-auto text-xs text-gray-500"><b>3,145,684</b> results found for <b> "Wash & Fold"</b></span>
      </div>

      {/* Main content area */}
      <div className="flex gap-6">
        {/* Left sidebar filters */}
        <div className="w-64 flex-shrink-0">
          {/* Service Category Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory('SERVICE CATEGORY')}
            >
              <h3 className="font-bold text-sm">SERVICE CATEGORY</h3>
              {expandedCategories['SERVICE CATEGORY'] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </div>
            
            {expandedCategories['SERVICE CATEGORY'] && (
              <div className="px-4 py-2">
                <div 
                  className="flex justify-between items-center py-2 cursor-pointer"
                  onClick={() => toggleCategory('Wash & Fold')}
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-blue-500">🧺</span>
                    <span className="font-medium">Wash & Fold</span>
                  </div>
                  {expandedCategories['Wash & Fold'] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                </div>
                
                {expandedCategories['Wash & Fold'] && (
                  <div className="ml-6">
                    <div className="flex justify-between items-center py-1">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="mr-2 h-4 w-4" 
                          checked={activeFilters.serviceCategory['Regular Wash']}
                          onChange={() => toggleFilter('serviceCategory', 'Regular Wash')}
                        />
                        <span>Regular Wash</span>
                      </label>
                      <span className="text-gray-500 text-sm">574</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="mr-2 h-4 w-4" 
                          checked={activeFilters.serviceCategory['Premium Wash']}
                          onChange={() => toggleFilter('serviceCategory', 'Premium Wash')}
                        />
                        <span>Premium Wash</span>
                      </label>
                      <span className="text-gray-500 text-sm">568</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="mr-2 h-4 w-4" 
                          checked={activeFilters.serviceCategory['Heavy-Duty Wash']}
                          onChange={() => toggleFilter('serviceCategory', 'Heavy-Duty Wash')}
                        />
                        <span>Heavy-Duty Wash</span>
                      </label>
                      <span className="text-gray-500 text-sm">1345</span>
                    </div>
                  </div>
                )}

                {/* Other categories */}
                {['Dry Cleaning', 'Ironing & Pressing', 'Stain Removal', 'Shoe Cleaning', 'Carpet & Curtain Cleaning', 'Health & Fitness'].map((category) => (
                  <div key={category} className="flex justify-between items-center py-2 cursor-pointer">
                    <div className="flex items-center">
                      <span className="mr-2 text-blue-500">
                        {category === 'Dry Cleaning' ? '🧴' :
                         category === 'Ironing & Pressing' ? '👔' :
                         category === 'Stain Removal' ? '📦' :
                         category === 'Shoe Cleaning' ? '👞' :
                         category === 'Carpet & Curtain Cleaning' ? '🧹' : '🏋️‍♂️'}
                      </span>
                      <span className="font-medium">{category}</span>
                    </div>
                    <FaChevronDown size={12} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Fabric Type Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory('FABRIC TYPE')}
            >
              <h3 className="font-bold text-sm">FABRIC TYPE</h3>
              {expandedCategories['FABRIC TYPE'] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </div>
            
            {expandedCategories['FABRIC TYPE'] && (
              <div className="px-4 py-2">
                {['Cotton', 'Silk', 'Wool', 'Denim', 'Delicate Fabrics'].map((fabric) => (
                  <div key={fabric} className="flex justify-between items-center py-1">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-2 h-4 w-4" 
                        checked={activeFilters.fabricType[fabric]}
                        onChange={() => toggleFilter('fabricType', fabric)}
                      />
                      <span>{fabric}</span>
                    </label>
                    <span className="text-gray-500 text-sm">
                      {fabric === 'Silk' ? '12,736' : '1345'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory('RATING')}
            >
              <h3 className="font-bold text-sm">RATING</h3>
              {expandedCategories['RATING'] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </div>
            
            {expandedCategories['RATING'] && (
              <div className="px-4 py-2">
                {['5 Star', '4 Star & up', '3 Star & up', '2 Star & up', '1 Star & up'].map((rating) => (
                  <div key={rating} className="flex justify-between items-center py-1">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-2 h-4 w-4" 
                        checked={activeFilters.rating[rating]}
                        onChange={() => toggleFilter('rating', rating)}
                      />
                      <span className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span> {rating}
                      </span>
                    </label>
                    <span className="text-gray-500 text-sm">1345</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Service Mode Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory('SERVICE MODE')}
            >
              <h3 className="font-bold text-sm">SERVICE MODE</h3>
              {expandedCategories['SERVICE MODE'] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </div>
            
            {expandedCategories['SERVICE MODE'] && (
              <div className="px-4 py-2">
                {['Pickup & Delivery', 'Walk-in Service', 'Home Service'].map((mode) => (
                  <div key={mode} className="flex justify-between items-center py-1">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-2 h-4 w-4" 
                        checked={activeFilters.serviceMode[mode]}
                        onChange={() => toggleFilter('serviceMode', mode)}
                      />
                      <span>{mode}</span>
                    </label>
                    <span className="text-gray-500 text-sm">1345</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory('PRICE')}
            >
              <h3 className="font-bold text-sm">PRICE</h3>
              {expandedCategories['PRICE'] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </div>
            
            {expandedCategories['PRICE'] && (
              <div className="px-4 py-2">
                <div className="py-2">
                  <input type="range" className="w-full" />
                </div>
                <div className="flex gap-2 mb-3">
                  <div className="flex-1">
                    <label className="text-xs text-gray-500">$ min:</label>
                    <input type="text" className="w-full border border-gray-300 rounded p-1 text-sm" />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500">$ max:</label>
                    <input type="text" className="w-full border border-gray-300 rounded p-1 text-sm" />
                  </div>
                </div>
                <div className="flex justify-between items-center py-1">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="mr-2 h-4 w-4" 
                      checked={activeFilters.paid}
                      onChange={() => setActiveFilters({...activeFilters, paid: !activeFilters.paid})}
                    />
                    <span>Paid</span>
                  </label>
                  <span className="text-gray-500 text-sm">1345</span>
                </div>
              </div>
            )}
          </div>

          {/* Delivery Time Filter */}
          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center px-4 py-3 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory('DELIVERY TIME')}
            >
              <h3 className="font-bold text-sm">DELIVERY TIME</h3>
              {expandedCategories['DELIVERY TIME'] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </div>
            
            {expandedCategories['DELIVERY TIME'] && (
              <div className="px-4 py-2">
                {['Same Day', '24 Hours', '48 Hours', '3+ Days'].map((time) => (
                  <div key={time} className="flex justify-between items-center py-1">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-2 h-4 w-4" 
                        checked={activeFilters.deliveryTime[time]}
                        onChange={() => toggleFilter('deliveryTime', time)}
                      />
                      <span>{time}</span>
                    </label>
                    <span className="text-gray-500 text-sm">1345</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main content area with service cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              {/* Service image with favorite button */}
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.description}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  onClick={() => toggleFavorite(service.id)}
                >
                  {favorites[service.id] ? 
                    <FaHeart className="text-red-500" size={16} /> : 
                    <FaRegHeart size={16} />
                  }
                </button>
              </div>
              
              {/* Service details */}
              <div className="p-4">
                <div className='flex items-center justify-between mb-1'>
                    <div className="text-xs uppercase font-medium text-orange-600 mb-1">{service.category}</div>
                    <div className="text-xl font-bold mb-2 text-right">{service.price}</div>
                </div>
                <p className="text-base font-medium text-gray-800 mb-3">{service.description}</p>
                
                {/* Rating and details in a row */}
                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                  
                  {/* View details button */}
                  <button className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                    View Details <FaChevronRight size={10} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 items-center">
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300">
          &lt;
        </button>
        
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 mx-1">
          01
        </button>
        
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-white mx-1">
          02
        </button>
        
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 mx-1">
          03
        </button>
        
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 mx-1">
          04
        </button>
        
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 mx-1">
          05
        </button>
        
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 ml-1">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Serviceslaundry;