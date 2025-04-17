"use client";

import * as React from "react";
import Slider from "@mui/material/Slider";

export function Filter() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function ColorItem({ color }) {
    return (
      <span
        className={`border-[2px] border-black/20 rounded-full bg-[${color}] w-full h-full`}
      ></span>
    );
  }

  function SizeItem({ size }) {
    return (
      <span className="text-black/60 text-sm font-normal bg-gray-200 px-5 py-3 rounded-full">
        {size}
      </span>
    );
  }

  return (
    <div className="w-[312px] xl:flex flex-col gap-6 hidden  border-[1.7px] border-gray-300 rounded-2xl px-5 py-4">
      <div className="w-[264px]  flex flex-row items-center justify-between">
        <span className="text-xl font-bold">Filters</span>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.125 12.2152V20.8402C13.125 21.1385 13.0065 21.4247 12.7955 21.6357C12.5845 21.8467 12.2984 21.9652 12 21.9652C11.7016 21.9652 11.4155 21.8467 11.2045 21.6357C10.9935 21.4247 10.875 21.1385 10.875 20.8402V12.2152C10.875 11.9168 10.9935 11.6307 11.2045 11.4197C11.4155 11.2087 11.7016 11.0902 12 11.0902C12.2984 11.0902 12.5845 11.2087 12.7955 11.4197C13.0065 11.6307 13.125 11.9168 13.125 12.2152ZM18.75 18.5902C18.4516 18.5902 18.1655 18.7087 17.9545 18.9197C17.7435 19.1307 17.625 19.4168 17.625 19.7152V20.8402C17.625 21.1385 17.7435 21.4247 17.9545 21.6357C18.1655 21.8467 18.4516 21.9652 18.75 21.9652C19.0484 21.9652 19.3345 21.8467 19.5455 21.6357C19.7565 21.4247 19.875 21.1385 19.875 20.8402V19.7152C19.875 19.4168 19.7565 19.1307 19.5455 18.9197C19.3345 18.7087 19.0484 18.5902 18.75 18.5902ZM21 14.8402H19.875V4.34018C19.875 4.04181 19.7565 3.75566 19.5455 3.54468C19.3345 3.33371 19.0484 3.21518 18.75 3.21518C18.4516 3.21518 18.1655 3.33371 17.9545 3.54468C17.7435 3.75566 17.625 4.04181 17.625 4.34018V14.8402H16.5C16.2016 14.8402 15.9155 14.9587 15.7045 15.1697C15.4935 15.3807 15.375 15.6668 15.375 15.9652C15.375 16.2635 15.4935 16.5497 15.7045 16.7607C15.9155 16.9717 16.2016 17.0902 16.5 17.0902H21C21.2984 17.0902 21.5845 16.9717 21.7955 16.7607C22.0065 16.5497 22.125 16.2635 22.125 15.9652C22.125 15.6668 22.0065 15.3807 21.7955 15.1697C21.5845 14.9587 21.2984 14.8402 21 14.8402ZM5.25 15.5902C4.95163 15.5902 4.66548 15.7087 4.4545 15.9197C4.24353 16.1307 4.125 16.4168 4.125 16.7152V20.8402C4.125 21.1385 4.24353 21.4247 4.4545 21.6357C4.66548 21.8467 4.95163 21.9652 5.25 21.9652C5.54837 21.9652 5.83452 21.8467 6.0455 21.6357C6.25647 21.4247 6.375 21.1385 6.375 20.8402V16.7152C6.375 16.4168 6.25647 16.1307 6.0455 15.9197C5.83452 15.7087 5.54837 15.5902 5.25 15.5902ZM7.5 11.8402H6.375V4.34018C6.375 4.04181 6.25647 3.75566 6.0455 3.54468C5.83452 3.33371 5.54837 3.21518 5.25 3.21518C4.95163 3.21518 4.66548 3.33371 4.4545 3.54468C4.24353 3.75566 4.125 4.04181 4.125 4.34018V11.8402H3C2.70163 11.8402 2.41548 11.9587 2.2045 12.1697C1.99353 12.3807 1.875 12.6668 1.875 12.9652C1.875 13.2635 1.99353 13.5497 2.2045 13.7607C2.41548 13.9717 2.70163 14.0902 3 14.0902H7.5C7.79837 14.0902 8.08452 13.9717 8.2955 13.7607C8.50647 13.5497 8.625 13.2635 8.625 12.9652C8.625 12.6668 8.50647 12.3807 8.2955 12.1697C8.08452 11.9587 7.79837 11.8402 7.5 11.8402ZM14.25 7.34018H13.125V4.34018C13.125 4.04181 13.0065 3.75566 12.7955 3.54468C12.5845 3.33371 12.2984 3.21518 12 3.21518C11.7016 3.21518 11.4155 3.33371 11.2045 3.54468C10.9935 3.75566 10.875 4.04181 10.875 4.34018V7.34018H9.75C9.45163 7.34018 9.16548 7.45871 8.9545 7.66968C8.74353 7.88066 8.625 8.16681 8.625 8.46518C8.625 8.76355 8.74353 9.0497 8.9545 9.26067C9.16548 9.47165 9.45163 9.59018 9.75 9.59018H14.25C14.5484 9.59018 14.8345 9.47165 15.0455 9.26067C15.2565 9.0497 15.375 8.76355 15.375 8.46518C15.375 8.16681 15.2565 7.88066 15.0455 7.66968C14.8345 7.45871 14.5484 7.34018 14.25 7.34018Z"
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
        <div className="flex flex-col gap-3 my-4">
          <div className="flex justify-evenly gap-4 h-10">
            <ColorItem color={"#00C12B"} />
            <ColorItem color={"#F50606"} />
            <ColorItem color={"#F5DD06"} />
            <ColorItem color={"#F57906"} />
            <ColorItem color={"#06CAF5"} />
          </div>
          <div className="flex justify-evenly gap-4 h-10">
            <ColorItem color={"#063AF5"} />
            <ColorItem color={"#7D06F5"} />
            <ColorItem color={"#F506A4"} />
            <ColorItem color={"#FFFFFF"} />
            <ColorItem color={"#000000"} />
          </div>
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
    </div>
  );
}
