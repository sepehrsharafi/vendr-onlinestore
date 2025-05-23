"use client";

import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function FilterMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function ColorItem({ color }) {
    return (
      <span
        className="border-[2px] border-black/20 rounded-full w-10 h-10"
        style={{ backgroundColor: color }}
      ></span>
    );
  }

  function SizeItem({ size }) {
    return (
      <span className="text-black/60 text-sm font-normal bg-[#F0F0F0] px-5 py-3 rounded-full">
        {size}
      </span>
    );
  }

  function handelClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen && (
        <div className="overflow-clip z-50">
          <div className="absolute top-0 left-0 h-full bg-black/40 w-full" />
          <div
            style={{ scrollbarWidth: "none" }}
            className="fixed bottom-0 left-0 flex flex-col gap-4 h-4/6 w-full overflow-auto p-5 bg-white rounded-t-3xl"
          >
            <div className="w-full  flex flex-row items-center justify-between">
              <span className="text-xl font-bold">Filters</span>
              <svg
                onClick={handelClick}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5459 18.4541C19.7572 18.6654 19.876 18.952 19.876 19.2509C19.876 19.5498 19.7572 19.8365 19.5459 20.0478C19.3346 20.2592 19.0479 20.3779 18.749 20.3779C18.4501 20.3779 18.1635 20.2592 17.9521 20.0478L12 14.0937L6.0459 20.0459C5.83455 20.2573 5.54791 20.376 5.24902 20.376C4.95014 20.376 4.66349 20.2573 4.45215 20.0459C4.2408 19.8346 4.12207 19.5479 4.12207 19.2491C4.12207 18.9502 4.2408 18.6635 4.45215 18.4522L10.4062 12.5L4.45402 6.54593C4.24268 6.33459 4.12395 6.04795 4.12395 5.74906C4.12395 5.45017 4.24268 5.16353 4.45402 4.95218C4.66537 4.74084 4.95201 4.62211 5.2509 4.62211C5.54978 4.62211 5.83643 4.74084 6.04777 4.95218L12 10.9062L17.954 4.95125C18.1654 4.7399 18.452 4.62117 18.7509 4.62117C19.0498 4.62117 19.3364 4.7399 19.5478 4.95125C19.7591 5.16259 19.8778 5.44924 19.8778 5.74812C19.8778 6.04701 19.7591 6.33365 19.5478 6.545L13.5937 12.5L19.5459 18.4541Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>
            </div>
            <div className="self-stretch h-0 outline-[1px] mx-4 outline-offset-[-0.20px] outline-black/10"></div>
            <div className="flex flex-col text-[16px] text-black/60 gap-3">
              <div className="flex flex-row justify-between">
                T-shirts
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53073 2.55958L11.5307 7.55958C11.6007 7.62926 11.6561 7.71205 11.694 7.80322C11.7318 7.89438 11.7513 7.99212 11.7513 8.09083C11.7513 8.18954 11.7318 8.28728 11.694 8.37845C11.6561 8.46961 11.6007 8.5524 11.5307 8.62208L6.53073 13.6221C6.38984 13.763 6.19874 13.8421 5.99948 13.8421C5.80023 13.8421 5.60913 13.763 5.46823 13.6221C5.32734 13.4812 5.24818 13.2901 5.24818 13.0908C5.24818 12.8916 5.32734 12.7005 5.46823 12.5596L9.93761 8.09021L5.46761 3.62083C5.32671 3.47994 5.24756 3.28884 5.24756 3.08958C5.24756 2.89032 5.32671 2.69923 5.46761 2.55833C5.60851 2.41744 5.7996 2.33828 5.99886 2.33828C6.19812 2.33828 6.38921 2.41744 6.53011 2.55833L6.53073 2.55958Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
              <div className="flex flex-row justify-between">
                Shorts
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53073 2.55958L11.5307 7.55958C11.6007 7.62926 11.6561 7.71205 11.694 7.80322C11.7318 7.89438 11.7513 7.99212 11.7513 8.09083C11.7513 8.18954 11.7318 8.28728 11.694 8.37845C11.6561 8.46961 11.6007 8.5524 11.5307 8.62208L6.53073 13.6221C6.38984 13.763 6.19874 13.8421 5.99948 13.8421C5.80023 13.8421 5.60913 13.763 5.46823 13.6221C5.32734 13.4812 5.24818 13.2901 5.24818 13.0908C5.24818 12.8916 5.32734 12.7005 5.46823 12.5596L9.93761 8.09021L5.46761 3.62083C5.32671 3.47994 5.24756 3.28884 5.24756 3.08958C5.24756 2.89032 5.32671 2.69923 5.46761 2.55833C5.60851 2.41744 5.7996 2.33828 5.99886 2.33828C6.19812 2.33828 6.38921 2.41744 6.53011 2.55833L6.53073 2.55958Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
              <div className="flex flex-row justify-between">
                Shirts
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53073 2.55958L11.5307 7.55958C11.6007 7.62926 11.6561 7.71205 11.694 7.80322C11.7318 7.89438 11.7513 7.99212 11.7513 8.09083C11.7513 8.18954 11.7318 8.28728 11.694 8.37845C11.6561 8.46961 11.6007 8.5524 11.5307 8.62208L6.53073 13.6221C6.38984 13.763 6.19874 13.8421 5.99948 13.8421C5.80023 13.8421 5.60913 13.763 5.46823 13.6221C5.32734 13.4812 5.24818 13.2901 5.24818 13.0908C5.24818 12.8916 5.32734 12.7005 5.46823 12.5596L9.93761 8.09021L5.46761 3.62083C5.32671 3.47994 5.24756 3.28884 5.24756 3.08958C5.24756 2.89032 5.32671 2.69923 5.46761 2.55833C5.60851 2.41744 5.7996 2.33828 5.99886 2.33828C6.19812 2.33828 6.38921 2.41744 6.53011 2.55833L6.53073 2.55958Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
              <div className="flex flex-row justify-between">
                Hoodie
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53073 2.55958L11.5307 7.55958C11.6007 7.62926 11.6561 7.71205 11.694 7.80322C11.7318 7.89438 11.7513 7.99212 11.7513 8.09083C11.7513 8.18954 11.7318 8.28728 11.694 8.37845C11.6561 8.46961 11.6007 8.5524 11.5307 8.62208L6.53073 13.6221C6.38984 13.763 6.19874 13.8421 5.99948 13.8421C5.80023 13.8421 5.60913 13.763 5.46823 13.6221C5.32734 13.4812 5.24818 13.2901 5.24818 13.0908C5.24818 12.8916 5.32734 12.7005 5.46823 12.5596L9.93761 8.09021L5.46761 3.62083C5.32671 3.47994 5.24756 3.28884 5.24756 3.08958C5.24756 2.89032 5.32671 2.69923 5.46761 2.55833C5.60851 2.41744 5.7996 2.33828 5.99886 2.33828C6.19812 2.33828 6.38921 2.41744 6.53011 2.55833L6.53073 2.55958Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
              <div className="flex flex-row justify-between">
                Jeans
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53073 2.55958L11.5307 7.55958C11.6007 7.62926 11.6561 7.71205 11.694 7.80322C11.7318 7.89438 11.7513 7.99212 11.7513 8.09083C11.7513 8.18954 11.7318 8.28728 11.694 8.37845C11.6561 8.46961 11.6007 8.5524 11.5307 8.62208L6.53073 13.6221C6.38984 13.763 6.19874 13.8421 5.99948 13.8421C5.80023 13.8421 5.60913 13.763 5.46823 13.6221C5.32734 13.4812 5.24818 13.2901 5.24818 13.0908C5.24818 12.8916 5.32734 12.7005 5.46823 12.5596L9.93761 8.09021L5.46761 3.62083C5.32671 3.47994 5.24756 3.28884 5.24756 3.08958C5.24756 2.89032 5.32671 2.69923 5.46761 2.55833C5.60851 2.41744 5.7996 2.33828 5.99886 2.33828C6.19812 2.33828 6.38921 2.41744 6.53011 2.55833L6.53073 2.55958Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="self-stretch h-0 outline-[1px] mx-3 outline-offset-[-0.20px] outline-black/10"></div>
            <div>
              <span className="text-xl font-bold mb-2 block">Price</span>
              <div className="flex justify-between text-base font-medium">
                {<span>${value[0]}</span>}
                {<span>${value[1]}</span>}
              </div>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </div>
            <div className="self-stretch h-0 outline-[1px] mx-3 outline-offset-[-0.20px] outline-black/10"></div>
            <div>
              <span className="text-xl font-bold mb-2 block">Colors</span>
              <div className="flex flex-wrap gap-5 my-4">
                <ColorItem color="#22c55e" />
                <ColorItem color="#7f1d1d" />
                <ColorItem color="#F5DD06" />
                <ColorItem color="#F57906" />
                <ColorItem color="#06CAF5" />
                <ColorItem color="#662020" />
                <ColorItem color="#7D06F5" />
                <ColorItem color="#F506A4" />
                <ColorItem color="#FFFFFF" />
                <ColorItem color="#000000" />
              </div>
            </div>
            <div className="self-stretch h-0 outline-[1px] mx-3 outline-offset-[-0.20px] outline-black/10"></div>
            <div>
              <span className="text-xl font-bold mb-2 block">Size</span>
              <div className="flex flex-wrap gap-3">
                <SizeItem size="XX-Small" />
                <SizeItem size="X-Small" />
                <SizeItem size="Small" />
                <SizeItem size="Medium" />
                <SizeItem size="Large" />
                <SizeItem size="X-Large" />
                <SizeItem size="2X-Large" />
                <SizeItem size="3X-Large" />
                <SizeItem size="4X-Large" />
              </div>
            </div>
            <button className="text-lg font-medium bg-black w-full text-white py-4 rounded-full">
              Apply
            </button>
          </div>
        </div>
      )}
      <button onClick={handelClick} className="xl:hidden">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="16" fill="#F0F0F0" />
          <path
            d="M16.75 15.75V21.5C16.75 21.6989 16.671 21.8897 16.5303 22.0303C16.3897 22.171 16.1989 22.25 16 22.25C15.8011 22.25 15.6103 22.171 15.4697 22.0303C15.329 21.8897 15.25 21.6989 15.25 21.5V15.75C15.25 15.5511 15.329 15.3603 15.4697 15.2197C15.6103 15.079 15.8011 15 16 15C16.1989 15 16.3897 15.079 16.5303 15.2197C16.671 15.3603 16.75 15.5511 16.75 15.75ZM20.5 20C20.3011 20 20.1103 20.079 19.9697 20.2197C19.829 20.3603 19.75 20.5511 19.75 20.75V21.5C19.75 21.6989 19.829 21.8897 19.9697 22.0303C20.1103 22.171 20.3011 22.25 20.5 22.25C20.6989 22.25 20.8897 22.171 21.0303 22.0303C21.171 21.8897 21.25 21.6989 21.25 21.5V20.75C21.25 20.5511 21.171 20.3603 21.0303 20.2197C20.8897 20.079 20.6989 20 20.5 20ZM22 17.5H21.25V10.5C21.25 10.3011 21.171 10.1103 21.0303 9.96967C20.8897 9.82902 20.6989 9.75 20.5 9.75C20.3011 9.75 20.1103 9.82902 19.9697 9.96967C19.829 10.1103 19.75 10.3011 19.75 10.5V17.5H19C18.8011 17.5 18.6103 17.579 18.4697 17.7197C18.329 17.8603 18.25 18.0511 18.25 18.25C18.25 18.4489 18.329 18.6397 18.4697 18.7803C18.6103 18.921 18.8011 19 19 19H22C22.1989 19 22.3897 18.921 22.5303 18.7803C22.671 18.6397 22.75 18.4489 22.75 18.25C22.75 18.0511 22.671 17.8603 22.5303 17.7197C22.3897 17.579 22.1989 17.5 22 17.5ZM11.5 18C11.3011 18 11.1103 18.079 10.9697 18.2197C10.829 18.3603 10.75 18.5511 10.75 18.75V21.5C10.75 21.6989 10.829 21.8897 10.9697 22.0303C11.1103 22.171 11.3011 22.25 11.5 22.25C11.6989 22.25 11.8897 22.171 12.0303 22.0303C12.171 21.8897 12.25 21.6989 12.25 21.5V18.75C12.25 18.5511 12.171 18.3603 12.0303 18.2197C11.8897 18.079 11.6989 18 11.5 18ZM13 15.5H12.25V10.5C12.25 10.3011 12.171 10.1103 12.0303 9.96967C11.8897 9.82902 11.6989 9.75 11.5 9.75C11.3011 9.75 11.1103 9.82902 10.9697 9.96967C10.829 10.1103 10.75 10.3011 10.75 10.5V15.5H10C9.80109 15.5 9.61032 15.579 9.46967 15.7197C9.32902 15.8603 9.25 16.0511 9.25 16.25C9.25 16.4489 9.32902 16.6397 9.46967 16.7803C9.61032 16.921 9.80109 17 10 17H13C13.1989 17 13.3897 16.921 13.5303 16.7803C13.671 16.6397 13.75 16.4489 13.75 16.25C13.75 16.0511 13.671 15.8603 13.5303 15.7197C13.3897 15.579 13.1989 15.5 13 15.5ZM17.5 12.5H16.75V10.5C16.75 10.3011 16.671 10.1103 16.5303 9.96967C16.3897 9.82902 16.1989 9.75 16 9.75C15.8011 9.75 15.6103 9.82902 15.4697 9.96967C15.329 10.1103 15.25 10.3011 15.25 10.5V12.5H14.5C14.3011 12.5 14.1103 12.579 13.9697 12.7197C13.829 12.8603 13.75 13.0511 13.75 13.25C13.75 13.4489 13.829 13.6397 13.9697 13.7803C14.1103 13.921 14.3011 14 14.5 14H17.5C17.6989 14 17.8897 13.921 18.0303 13.7803C18.171 13.6397 18.25 13.4489 18.25 13.25C18.25 13.0511 18.171 12.8603 18.0303 12.7197C17.8897 12.579 17.6989 12.5 17.5 12.5Z"
            fill="black"
          />
        </svg>
      </button>
    </>
  );
}
