"use client"

import Image from "next/image";
import { useState } from "react";
import { Filter } from "@/app/ui/filter-box";
import FilterMobile from "@/app/ui/filter-mobile";

const products = [
  {
    imgSrc: "/images/a7234235e66d6695d9d7098fc3289872.png",
    title: "Gradient Graphic T-shirt",
    rate: 4,
    price: 120,
    discountedPrice: 140,
    category: "T-shirts",
    color: "#F5DD06",
    size: "Medium",
  },

  {
      imgSrc: "/images/4a66d9ca1401101dee4cc689f8bb5ad2.png",
      title: "Gradient Graphic T-shirt",
      price: 145,
      quantity: 5,
     category: "T-shirts",
    color: "#662020",
    size: "Large",
    },
    {
      imgSrc: "/images/5fc84f87eeac1062fbe47f49c192d4f2.png",
      title: "Checkered Shirt",
      price: 180,
      quantity: 5,
    category: "T-shirts",
    color: "#7D06F5",
    size: "X-Large",
    },

        {
      imgSrc: "/images/ff941dde9bc0e54431b8d8fe3182f5e9.png",
      title: "Skinny Fit Jeans",
      price: 240,
      quantity: 50,
        category: "T-shirts",
    color: "#F506A4",
    size: "2X-Large",
    },
        {
      imgSrc: "/images/ff941dde9bc0e54431b8d8fe3182f5e9.png",
      title: "Skinny Fit Jeans",
      price: 240,
      quantity: 50,
    category: "T-shirts",
    color: "#000000",
    size: "3X-Large",
    },
            {
      imgSrc: "/images/ff941dde9bc0e54431b8d8fe3182f5e9.png",
      title: "Skinny Fit Jeans",
      price: 240,
      quantity: 50,
        category: "T-shirts",
    color: "#F5DD06",
    size: "4X-Large",
    },
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([20, 300]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const filteredProducts = products.filter((product) => {
    let match = true;
    if (selectedCategory) match = match && product.category === selectedCategory;
    if (selectedColor) match = match && product.color === selectedColor;
    if (selectedSize) match = match && product.size === selectedSize;
    match = match && product.price >= priceRange[0] && product.price <= priceRange[1];
    return match;
  });

  function Product({ imgSrc, title, rate, price, discountedPrice }) {
    return (
      <article className="flex flex-col gap-1 xl:gap-2 w-[47%] sm:w-40 xl:w-64 ">
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt="image"
          className="w-full aspect-square object-cover rounded-xl"
        />
        <div>
          <span className="text-[16px] xl:text-xl font-bold line-clamp-1">
            {title}
          </span>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-row items-center gap-1">
              <svg
                className="w-[15.5px] h-[15.5px] xl:w-[18.5px] xl:h-[18.5px]"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.79246 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79246 13.701L3.35842 16.7243L4.55449 10.6219L0 6.38809L6.17325 5.63991L8.79246 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                className="w-[15.5px] h-[15.5px] xl:w-[18.5px] xl:h-[18.5px]"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.79246 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79246 13.701L3.35842 16.7243L4.55449 10.6219L0 6.38809L6.17325 5.63991L8.79246 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                className="w-[15.5px] h-[15.5px] xl:w-[18.5px] xl:h-[18.5px]"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.79246 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79246 13.701L3.35842 16.7243L4.55449 10.6219L0 6.38809L6.17325 5.63991L8.79246 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                className="w-[15.5px] h-[15.5px] xl:w-[18.5px] xl:h-[18.5px]"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.79246 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79246 13.701L3.35842 16.7243L4.55449 10.6219L0 6.38809L6.17325 5.63991L8.79246 0Z"
                  fill="#FFC633"
                />
              </svg>
            </div>
          </div>
          <div className="font-bold text-xl xl:text-2xl">
            <span>${price}</span>
            <span className="ml-2 text-gray-400 line-through">
              {discountedPrice}
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <>
      <main className="max-w-[1103px] flex flex-row justify-center items-start gap-4 font-satoshi mx-4 w-fit xl:mx-auto lg:mt-10">
        <section className="hidden xl:block">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </section>
        <section className="flex flex-col w-fit">
          <section className="flex flex-row items-center justify-between my-3 w-full">
            <div className="flex flex-row items-baseline gap-2">
              <span className="text-2xl xl:text-[32px] font-bold">Casual</span>
              <span className="text-[14px] xl:text-base">
                Showing 1-10 of 100 Products
              </span>
            </div>
            <FilterMobile />
          </section>
          <div className="flex flex-wrap justify-evenly lg:justify-between max-w-[1075px] gap-4 mx-auto">
            {filteredProducts.map((product, idx) => (
              <Product key={idx} {...product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}