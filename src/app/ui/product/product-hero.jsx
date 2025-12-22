"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReviewCart from "./review-cart";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ProductDetails from "../product-details";

export default function ProductHero({ product, products }) {
  const [itemQuantity, setItemQuantity] = useState(product.quantity);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [activeTab, setActiveTab] = useState("Product Details");

  function changeSizeBtnColor(selectedSize) {
    setSelectedSize(selectedSize);
  }
  function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((total, review) => total + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }

  function handleColorSelect(color) {
    setSelectedColor(color);
  }

  function incrementQuantity() {
    setItemQuantity(itemQuantity + 1);
  }

  function decrementQuantity() {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <section className="flex flex-col xl:flex-col gap-4 ">
      <div className="flex flex-col xl:flex xl:flex-row gap-10">
        <div className="w-full flex flex-col-reverse gap-4 xl:flex-row xl:h-full 2xl:justify-center 2xl:flex-row">
          <div className="flex flex-row xl:flex-col gap-4 justify-between ">
            {product.imgSrc.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="image"
                className="h-28 w-full xl:w-[152px] xl:h-[152px] object-cover rounded-[20px]"
                width={100}
                height={100}
              />
            ))}
          </div>
          <div>
            <Image
              src={product.imgSrc[0]}
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-96 xl:w-96 xl:h-[499px] object-cover rounded-[20px]"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span className="font-clash-display font-bold text-2xl xl:text-4xl text-black">
            One Life Graphic shirt
          </span>
          <div className="flex flex-row gap-2 mt-3">
            <div className="flex flex-row gap-1.5 ">
              <Rating
                name="text-feedback"
                value={calculateAverageRating(product.reviews)}
                precision={0.5}
                readOnly
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </div>
            <div className="flex flex-row font-Satoshi">
              <span className="text-black ">
                {calculateAverageRating(product.reviews)}/
              </span>
              <span className="text-black/60 "> 5</span>
            </div>
          </div>
          <div className="flex flex-row items-center text-2xl font-bold font-Satoshi gap-2 mt-3">
            {product.discountedPrice ? (
              <div className="flex flex-row items-center text-2xl gap-x-2">
                <span className="text-gray-400 line-through">
                  ${product.price}
                </span>
                <span className="text-black">${product.discountedPrice}</span>
              </div>
            ) : (
              <span>${product.price}</span>
            )}
            {product.sale && (
              <span className="px-2 py-1 text-red-500 text-sm font-medium bg-red-500/10 rounded-[62px]">
                {product.sale}%
              </span>
            )}
          </div>
          <p className="text-sm font-normal text-black/60 mt-3">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="border-b-[1px] mt-5 border-gray-300" />
          <div className="mt-5">
            <span className="font-Satoshi text-black/60">Select Colors</span>
            <div className="flex flex-row gap-4 mt-3.5">
              {product.color.map((item, index) => {
                const colorName = Object.keys(item)[0];
                const colorValue = item[colorName];
                return (
                  <button
                    key={index}
                    className="h-9 w-9 rounded-full"
                    style={{ backgroundColor: colorValue }}
                    onClick={() => handleColorSelect(colorName)}
                  >
                    {colorName === selectedColor && (
                      <svg
                        className="h-4 w-4 mx-auto"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5306 5.03063L6.5306 13.0306C6.46092 13.1005 6.37813 13.156 6.28696 13.1939C6.1958 13.2317 6.09806 13.2512 5.99935 13.2512C5.90064 13.2512 5.8029 13.2317 5.71173 13.1939C5.62057 13.156 5.53778 13.1005 5.4681 13.0306L1.9681 9.53063C1.89833 9.46087 1.84299 9.37804 1.80524 9.28689C1.76748 9.19574 1.74805 9.09804 1.74805 8.99938C1.74805 8.90072 1.76748 8.80302 1.80524 8.71187C1.84299 8.62072 1.89833 8.53789 1.9681 8.46813C2.03786 8.39837 2.12069 8.34302 2.21184 8.30527C2.30299 8.26751 2.40069 8.24808 2.49935 8.24808C2.59801 8.24808 2.69571 8.26751 2.78686 8.30527C2.87801 8.34302 2.96083 8.39837 3.0306 8.46813L5.99997 11.4375L13.4693 3.96938C13.6102 3.82848 13.8013 3.74933 14.0006 3.74933C14.1999 3.74933 14.391 3.82848 14.5318 3.96938C14.6727 4.11028 14.7519 4.30137 14.7519 4.50063C14.7519 4.69989 14.6727 4.89098 14.5318 5.03188L14.5306 5.03063Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="border-b-[1px] mt-5 border-gray-300" />
          <div className="mt-5 gap-3 flex flex-col">
            <span className="font-Satoshi text-black/60 ">Choose Size</span>
            <div className="flex flex-wrap text-sm font-normal gap-3">
              <button
                className={`px-6 py-3 rounded-[62px] ${
                  selectedSize === "S" ? "bg-black text-white" : "bg-zinc-100"
                }`}
                onClick={() => changeSizeBtnColor("S")}
              >
                Small
              </button>
              <button
                className={`px-6 py-3 rounded-[62px] ${
                  selectedSize === "M" ? "bg-black text-white" : "bg-zinc-100"
                }`}
                onClick={() => changeSizeBtnColor("M")}
              >
                Medium
              </button>
              <button
                className={`px-6 py-3 rounded-[62px] ${
                  selectedSize === "L" ? "bg-black text-white" : "bg-zinc-100"
                }`}
                onClick={() => changeSizeBtnColor("L")}
              >
                Large
              </button>
              <button
                className={`px-6 py-4 rounded-[62px] ${
                  selectedSize === "XL" ? "bg-black text-white" : "bg-zinc-100"
                }`}
                onClick={() => changeSizeBtnColor("XL")}
              >
                X-Large
              </button>
            </div>
          </div>
          <div className="border-b-[1px] mt-5 border-gray-300 mb-6" />
          <div className="flex flex-row  gap-3 mt-5.5">
            <div className="flex flex-row items-center justify-around bg-[#F0F0F0] w-fit min-w-[100px] rounded-full">
              <button onClick={decrementQuantity}>
                <svg
                  className="w-4 h-4 m-3"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.75 8.5C14.75 8.69891 14.671 8.88968 14.5303 9.03033C14.3897 9.17098 14.1989 9.25 14 9.25H3C2.80109 9.25 2.61032 9.17098 2.46967 9.03033C2.32902 8.88968 2.25 8.69891 2.25 8.5C2.25 8.30109 2.32902 8.11032 2.46967 7.96967C2.61032 7.82902 2.80109 7.75 3 7.75H14C14.1989 7.75 14.3897 7.82902 14.5303 7.96967C14.671 8.11032 14.75 8.30109 14.75 8.5Z"
                    fill="black"
                  />
                </svg>
              </button>
              <span className="text-[16px] font-medium w-6 text-center">
                {itemQuantity}
              </span>
              <button onClick={incrementQuantity}>
                <svg
                  className="w-4 h-4 m-3"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.75 8.5C14.75 8.69891 14.671 8.88968 14.5303 9.03033C14.3897 9.17098 14.1989 9.25 14 9.25H9.25V14C9.25 14.1989 9.17098 14.3897 9.03033 14.5303C8.88968 14.671 8.69891 14.75 8.5 14.75C8.30109 14.75 8.11032 14.671 7.96967 14.5303C7.82902 14.3897 7.75 14.1989 7.75 14V9.25H3C2.80109 9.25 2.61032 9.17098 2.46967 9.03033C2.32902 8.88968 2.25 8.69891 2.25 8.5C2.25 8.30109 2.32902 8.11032 2.46967 7.96967C2.61032 7.82902 2.80109 7.75 3 7.75H7.75V3C7.75 2.80109 7.82902 2.61032 7.96967 2.46967C8.11032 2.32902 8.30109 2.25 8.5 2.25C8.69891 2.25 8.88968 2.32902 9.03033 2.46967C9.17098 2.61032 9.25 2.80109 9.25 3V7.75H14C14.1989 7.75 14.3897 7.82902 14.5303 7.96967C14.671 8.11032 14.75 8.30109 14.75 8.5Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <button className="bg-black text-white px-6 py-3 w-full rounded-[62px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex xl:gap-3">
        <div className="text-black/60 text-base flex flex-row justify-between items-center font-normal mt-12.5 ">
          <button
            onClick={() => handleTabClick("Product Details")}
            className={
              activeTab === "Product Details"
                ? "text-black  w-full border-b-2 border-black"
                : "text-black/60  w-full border-b-2 border-gray-300"
            }
          >
            Product Details
          </button>
          <button
            onClick={() => handleTabClick("Rating & Reviews")}
            className={
              activeTab === "Rating & Reviews"
                ? "text-black  w-full border-b-2 border-black"
                : "text-black/60  w-full border-b-2 border-gray-300"
            }
          >
            Rating & Reviews
          </button>
          <button
            onClick={() => handleTabClick("FAQs")}
            className={
              activeTab === "FAQs"
                ? "text-black  w-full border-b-2 border-black"
                : "text-black/60  w-full border-b-2 border-gray-300"
            }
          >
            FAQs
          </button>
        </div>
        <div className="mx-4 flex flex-row font-Satoshi items-center justify-between">
          <span
            className="text-black text-xl
              font-bold"
          >
            All Reviews
            <span className="ml-1.5 text-black/60 text-sm font-normal">
              (451)
            </span>
          </span>
          <div className="flex flex-row justify-between items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#F0F0F0" />
              <path
                d="M20.9375 19.6875V26.875C20.9375 27.1236 20.8387 27.3621 20.6629 27.5379C20.4871 27.7137 20.2486 27.8125 20 27.8125C19.7514 27.8125 19.5129 27.7137 19.3371 27.5379C19.1613 27.3621 19.0625 27.1236 19.0625 26.875V19.6875C19.0625 19.4389 19.1613 19.2004 19.3371 19.0246C19.5129 18.8488 19.7514 18.75 20 18.75C20.2486 18.75 20.4871 18.8488 20.6629 19.0246C20.8387 19.2004 20.9375 19.4389 20.9375 19.6875ZM25.625 25C25.3764 25 25.1379 25.0988 24.9621 25.2746C24.7863 25.4504 24.6875 25.6889 24.6875 25.9375V26.875C24.6875 27.1236 24.7863 27.3621 24.9621 27.5379C25.1379 27.7137 25.3764 27.8125 25.625 27.8125C25.8736 27.8125 26.1121 27.7137 26.2879 27.5379C26.4637 27.3621 26.5625 27.1236 26.5625 26.875V25.9375C26.5625 25.6889 26.4637 25.4504 26.2879 25.2746C26.1121 25.0988 25.8736 25 25.625 25ZM27.5 21.875H26.5625V13.125C26.5625 12.8764 26.4637 12.6379 26.2879 12.4621C26.1121 12.2863 25.8736 12.1875 25.625 12.1875C25.3764 12.1875 25.1379 12.2863 24.9621 12.4621C24.7863 12.6379 24.6875 12.8764 24.6875 13.125V21.875H23.75C23.5014 21.875 23.2629 21.9738 23.0871 22.1496C22.9113 22.3254 22.8125 22.5639 22.8125 22.8125C22.8125 23.0611 22.9113 23.2996 23.0871 23.4754C23.2629 23.6512 23.5014 23.75 23.75 23.75H27.5C27.7486 23.75 27.9871 23.6512 28.1629 23.4754C28.3387 23.2996 28.4375 23.0611 28.4375 22.8125C28.4375 22.5639 28.3387 22.3254 28.1629 22.1496C27.9871 21.9738 27.7486 21.875 27.5 21.875ZM14.375 22.5C14.1264 22.5 13.8879 22.5988 13.7121 22.7746C13.5363 22.9504 13.4375 23.1889 13.4375 23.4375V26.875C13.4375 27.1236 13.5363 27.3621 13.7121 27.5379C13.8879 27.7137 14.1264 27.8125 14.375 27.8125C14.6236 27.8125 14.8621 27.7137 15.0379 27.5379C15.2137 27.3621 15.3125 27.1236 15.3125 26.875V23.4375C15.3125 23.1889 15.2137 22.9504 15.0379 22.7746C14.8621 22.5988 14.6236 22.5 14.375 22.5ZM16.25 19.375H15.3125V13.125C15.3125 12.8764 15.2137 12.6379 15.0379 12.4621C14.8621 12.2863 14.6236 12.1875 14.375 12.1875C14.1264 12.1875 13.8879 12.2863 13.7121 12.4621C13.5363 12.6379 13.4375 12.8764 13.4375 13.125V19.375H12.5C12.2514 19.375 12.0129 19.4738 11.8371 19.6496C11.6613 19.8254 11.5625 20.0639 11.5625 20.3125C11.5625 20.5611 11.6613 20.7996 11.8371 20.9754C12.0129 21.1512 12.2514 21.25 12.5 21.25H16.25C16.4986 21.25 16.7371 21.1512 16.9129 20.9754C17.0887 20.7996 17.1875 20.5611 17.1875 20.3125C17.1875 20.0639 17.0887 19.8254 16.9129 19.6496C16.7371 19.4738 16.4986 19.375 16.25 19.375ZM21.875 15.625H20.9375V13.125C20.9375 12.8764 20.8387 12.6379 20.6629 12.4621C20.4871 12.2863 20.2486 12.1875 20 12.1875C19.7514 12.1875 19.5129 12.2863 19.3371 12.4621C19.1613 12.6379 19.0625 12.8764 19.0625 13.125V15.625H18.125C17.8764 15.625 17.6379 15.7238 17.4621 15.8996C17.2863 16.0754 17.1875 16.3139 17.1875 16.5625C17.1875 16.8111 17.2863 17.0496 17.4621 17.2254C17.6379 17.4012 17.8764 17.5 18.125 17.5H21.875C22.1236 17.5 22.3621 17.4012 22.5379 17.2254C22.7137 17.0496 22.8125 16.8111 22.8125 16.5625C22.8125 16.3139 22.7137 16.0754 22.5379 15.8996C22.3621 15.7238 22.1236 15.625 21.875 15.625Z"
                fill="black"
              />
            </svg>
            <button className="text-xs px-3 py-4 font-medium rounded-[62px] bg-black text-white gap-3">
              Write a Review
            </button>
          </div>
        </div>
        <div className="grid xl:grid xl:grid-cols-2 gap-4">
          {product.reviews.map((review, index) => (
            <ReviewCart review={review} key={index} />
          ))}
        </div>
      </div>
      <button className="rounded-[62px] outline-1 outline-black/10 px-9 py-3.5 text-black text-sm font-medium flex justify-center mx-auto xl:px-14">
        Load More Reviews
      </button>
      <span className="text-black text-3xl font-bold font-clash-display text-center flex flex-row justify-center mt-12">
        You might also like
      </span>
      <div className="flex w-full xl:w-fit overflow-x-auto px-7 xl:px-0 flex-row mx-auto gap-6">
        {products.map((product, index) => (
          <ProductDetails
            key={index}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice}
            rate={product.rate}
          />
        ))}
      </div>
    </section>
  );
}
