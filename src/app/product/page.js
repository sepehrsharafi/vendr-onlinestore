import Image from "next/image";

export default function Product() {
  return (
    <>
      <div className="flex flex-row justify-around mx-35">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col justify-between">
            <Image src={"/images/clothes2.png"} width={140} height={149} />
            <Image src={"/images/clothes3.png"} width={140} height={149} />
            <Image src={"/images/clothes4.png"} width={140} height={149} />
          </div>
          <Image src={"/images/clothes1.png"} width={408} height={473} />
        </div>
        <div className="flex flex-col ">
          <span className=" font-satoshi font-bold text-4xl text-[#000000]">
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
          <div className="flex flex-row font-Satoshi text-3xl font-bold gap-3 items-center mt-3">
            <span className="text-black ">$260</span>
            <span className="text-black/30 ">$300</span>
            <span
              className="px-3.5 py-1.5 text-red-500 font-medium bg-red-500/10
font-Satoshi rounded-[62px]"
            >
              -40%
            </span>
          </div>
          <p className="ine-clamp-2 w-[543px] font-Satoshi text-black/60 mt-3">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="border-b-[1px] mt-5 border-gray-300" />
          <div className="mt-5">
            <span className="font-Satoshi text-black/60">Set Colors</span>
            <div className="flex flex-row gap-4 mt-3.5">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18.5" cy="18.5" r="18.5" fill="#4F4631" />
              </svg>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
              </svg>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37 18.5C37 28.7173 28.7173 37 18.5 37C8.28273 37 0 28.7173 0 18.5C0 8.28273 8.28273 0 18.5 0C28.7173 0 37 8.28273 37 18.5Z"
                  fill="#31344F"
                />
              </svg>
            </div>
          </div>
          <div className="border-b-[1px] mt-5 border-gray-300" />
          <div className="mt-5 gap-3 flex flex-col">
            <span className="font-Satoshi text-black/60 ">Choose Size</span>
            <div className="flex flex-row gap-3">
              <button className="px-6 py-3 bg-zinc-100 rounded-[62px] ">
                Small
              </button>
              <button className="px-6 py-3 bg-zinc-100 rounded-[62px]">
                Medium
              </button>
              <button className="px-6 py-3 bg-black rounded-[62px] text-white">
                Large
              </button>
              <button className="px-6 py-3 bg-zinc-100 rounded-[62px]">
                X-Large
              </button>
            </div>
          </div>
          <div className="border-b-[1px] mt-5 border-gray-300" />
          <div className="flex flex-row  gap-3 mt-5.5">
            {/* -------------------------------- */}
            <div>
              <svg
                width="156"
                height="46"
                viewBox="0 0 156 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="156" height="46" rx="23" fill="#F0F0F0" />
                <path
                  d="M41.375 23C41.375 23.2984 41.2565 23.5845 41.0455 23.7955C40.8345 24.0065 40.5484 24.125 40.25 24.125H23.75C23.4516 24.125 23.1655 24.0065 22.9545 23.7955C22.7435 23.5845 22.625 23.2984 22.625 23C22.625 22.7016 22.7435 22.4155 22.9545 22.2045C23.1655 21.9935 23.4516 21.875 23.75 21.875H40.25C40.5484 21.875 40.8345 21.9935 41.0455 22.2045C41.2565 22.4155 41.375 22.7016 41.375 23Z"
                  fill="black"
                />
                <path
                  d="M77.992 18.84H75.56V17.432H79.496V29H77.992V18.84Z"
                  fill="black"
                />
                <path
                  d="M133.375 23C133.375 23.2984 133.256 23.5845 133.045 23.7955C132.835 24.0065 132.548 24.125 132.25 24.125H125.125V31.25C125.125 31.5484 125.006 31.8345 124.795 32.0455C124.585 32.2565 124.298 32.375 124 32.375C123.702 32.375 123.415 32.2565 123.205 32.0455C122.994 31.8345 122.875 31.5484 122.875 31.25V24.125H115.75C115.452 24.125 115.165 24.0065 114.955 23.7955C114.744 23.5845 114.625 23.2984 114.625 23C114.625 22.7016 114.744 22.4155 114.955 22.2045C115.165 21.9935 115.452 21.875 115.75 21.875H122.875V14.75C122.875 14.4516 122.994 14.1655 123.205 13.9545C123.415 13.7435 123.702 13.625 124 13.625C124.298 13.625 124.585 13.7435 124.795 13.9545C125.006 14.1655 125.125 14.4516 125.125 14.75V21.875H132.25C132.548 21.875 132.835 21.9935 133.045 22.2045C133.256 22.4155 133.375 22.7016 133.375 23Z"
                  fill="black"
                />
              </svg>
            </div>
            {/* -------------------------------- */}
            <button className="bg-black text-white px-6 py-3 w-full rounded-[62px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
