'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";

const sanity = sanityClient({
  projectId: "wxmkh6cz",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: true,
});

interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  colors: string[];
  slug: { current: string };
  inventory: number;
  status: string;
  description: string;
  imageUrl: string;
}

const ProduceCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [errorMessage, setErrorMessage] = useState<string>(''); // Error message state

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == 'product']{
          _id,
          productName,
          category,
          price,
          colors,
          "imageUrl": image.asset->url,
          slug,
          inventory,
          status,
          description
        }
      `;

      const data = await sanity.fetch(query);
      if (data.length === 0) {
        throw new Error('No products found');
      }
      setProducts(data);
      setFilteredProducts(data); 
    } catch (error) {
      console.log("Error Fetching Products:", error);
      setErrorMessage('Product load nahi ho raha, please try again'); 
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} has been added to your cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };
  
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    
    console.log("Selected Category: ", category);  // Debugging line
    
    if (category === 'All') {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered); // Filter products by category
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="py-10">
      <div className="container px-4 mx-auto space-y-6">
        <h2 className="text-2xl text-left md:text-3xl font-medium mt-4 mb-4">Products APIs Data</h2>

        {/* Error Message Display */}
        {errorMessage && (
          <div className="bg-red-500 text-white text-center p-3 rounded-md mb-4">
            {errorMessage}
          </div>
        )}

        {/* Category Filter Dropdown */}
        <div className="mb-4">
          <label htmlFor="category" className="text-lg font-medium">Filter by Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="ml-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="All">All</option>
            <option value="Category1">Category1</option>
            <option value="Category2">Category2</option>
            <option value="Category3">Category3</option>
          </select>
        </div>

        {/* Product Cards Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={300}
                height={300}
                loading="lazy"
                className="w-full h-48 object-cover hover:scale-110"
              />

              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.productName}</h2>
                <p className="mt-2 text-sm">{product.description}</p>

                <div className="mt-2">
                  <p className="text-sm font-bold">Available Colors:</p>
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <span key={index} className="px-2 py-1 text-black bg-slate-400">{color}</span>
                    ))}
                  </div>
                </div>

                <p className="mt-2 text-sm font-bold">Status: {product.status}</p>
                <p className="mt-1 text-sm font-bold">Inventory: {product.inventory} left</p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-slate-600 text-lg font-bold">${product.price.toFixed(2)}</p>
                </div>

                <button
                  className="mt-4 w-full bg-black text-white py-2 hover:bg-gray-900 hover:scale-110"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 py-5">
          <h2 className="text-2xl text-left md:text-3xl font-medium text-black mb-4">Cart Summary</h2>
          {cart.length > 0 ? (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center bg-[#000000] shadow-sm p-4 rounded-md">
                  <Image src={item.imageUrl} alt={item.productName} width={50} height={50} className="mr-4" />
                  <div className="flex-grow">
                    <p className="font-medium text-white">{item.productName}</p>
                    <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded">Remove</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-black text-center font-normal">Your Cart Is Empty, Please Add Product</p>
          )}
          <hr className="mt-14"/>
        </div>
      </div>
    </div>
  );
};

export default ProduceCards;
