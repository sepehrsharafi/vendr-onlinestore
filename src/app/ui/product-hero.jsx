"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProductHero({ product }) {
  const [itemQuantity, setItemQuantity] = useState(product.quantity);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.color[0]);

  function changeSizeBtnColor(selectedSize) {
    setSelectedSize(selectedSize);
  }

  function handleColorSelect(color) {
    console.log(color);
    setSelectedColor(color);
  }

  function incrementQuantity() {
    setItemQuantity(itemQuantity + 1);
    console.log("item up");
  }

  function decrementQuantity() {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  }

  return (
    <section className="flex flex-col xl:h-[499px] xl:flex-row gap-4 ">
      <div className="w-full flex flex-col-reverse gap-4  xl:flex-row xl:h-full">
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
      {/* <div className="flex flex-col-reverse w-full xl:flex-row gap-3">
        <div className="flex flex-row gap-3 xl:flex-col xl:justify-center overflow-auto xl:h-full xl:overflow-y-auto xl:overflow-x-hidden">
          {product.imgSrc.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="image"
              className="h-28 w-full xl:w-36 xl:h-full object-cover rounded-[20px]"
              width={100}
              height={100}
            />
          ))}
        </div>
        <Image
          src={product.imgSrc[0]}
          alt="image"
          width={1000}
          height={1000}
          className="w-full h-96 xl:w-96 xl:h-[499px] object-cover rounded-[20px]"
        />
      </div> */}
      <div className="flex flex-col w-full">
        <span className="font-clash-display font-bold text-2xl xl:text-4xl text-black">
          One Life Graphic shirt
        </span>
        <div className="flex flex-row gap-2 mt-3">
          <div className="gap-1.5 flex flex-row">
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3562 0.143784L15.8569 7.68174L24.1077 8.68172L18.0204 14.3404L19.619 22.4964L12.3562 18.4557L5.09341 22.4964L6.69201 14.3404L0.604756 8.68172L8.85555 7.68174L12.3562 0.143784Z"
                fill="#FFC633"
              />
            </svg>
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3562 0.143784L15.8569 7.68174L24.1077 8.68172L18.0204 14.3404L19.619 22.4964L12.3562 18.4557L5.09341 22.4964L6.69201 14.3404L0.604756 8.68172L8.85555 7.68174L12.3562 0.143784Z"
                fill="#FFC633"
              />
            </svg>
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3562 0.143784L15.8569 7.68174L24.1077 8.68172L18.0204 14.3404L19.619 22.4964L12.3562 18.4557L5.09341 22.4964L6.69201 14.3404L0.604756 8.68172L8.85555 7.68174L12.3562 0.143784Z"
                fill="#FFC633"
              />
            </svg>
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3562 0.143784L15.8569 7.68174L24.1077 8.68172L18.0204 14.3404L19.619 22.4964L12.3562 18.4557L5.09341 22.4964L6.69201 14.3404L0.604756 8.68172L8.85555 7.68174L12.3562 0.143784Z"
                fill="#FFC633"
              />
            </svg>
            <svg
              width="12"
              height="23"
              viewBox="0 0 12 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.73719 22.4964L12 18.4557V0.143784L8.49932 7.68174L0.248535 8.68172L6.33579 14.3404L4.73719 22.4964Z"
                fill="#FFC633"
              />
            </svg>
          </div>
          <div className="flex flex-row ">
            <span className="text-black font-Satoshi"> 4.5/</span>
            <span className="text-black/60 font-Satoshi"> 5</span>
          </div>
        </div>
        <div className="flex flex-row items-center text-2xl font-bold font-Satoshi gap-2 mt-3">
          <span className="text-black ">$260</span>
          <span className="text-gray-300 line-through">$300</span>
          <span className="px-2 py-1 text-red-500 text-sm font-medium bg-red-500/10 rounded-[62px]">
            -40%
          </span>
        </div>
        <p className="text-sm font-normal text-black/60 mt-3">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
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
              className={`px-6 py-3 rounded-[62px] ${
                selectedSize === "XL" ? "bg-black text-white" : "bg-zinc-100"
              }`}
              onClick={() => changeSizeBtnColor("XL")}
            >
              X-Large
            </button>
          </div>
        </div>
        <div className="border-b-[1px] mt-5 border-gray-300" />
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
    </section>
  );
}
