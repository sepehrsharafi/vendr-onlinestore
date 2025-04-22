"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  // Calculate total price sum before rendering

  function CartItem({ imgSrc, title, price, quantity, size, color }) {
    let [itemQuantity, setItemQuantity] = useState(quantity);

    function incrimentQuantity() {
      setItemQuantity(itemQuantity + 1);
      console.log("item up");
    }

    function substractQuantity() {
      if (itemQuantity > 1) {
        setItemQuantity(itemQuantity - 1);
      }
    }

    return (
      <article className="font-satoshi flex flex-row items-center justify-between gap-3 w-full xl:min-w-[587px]">
        <Image
          src={imgSrc}
          width={400}
          height={400}
          alt="image"
          className="min-h-24 h-24 max-h-24 min-w-24 max-w-24 xl:min-h-32 xl:h-32 xl:max-h-32 xl:min-w-32 xl:max-w-32 object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between w-80 xl:w-full">
          <div className="flex flex-row justify-between">
            <span className="text-[16px] xl:text-xl font-bold line-clamp-1">
              {title}
            </span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.875 3.75H13.75V3.125C13.75 2.62772 13.5525 2.15081 13.2008 1.79917C12.8492 1.44754 12.3723 1.25 11.875 1.25H8.125C7.62772 1.25 7.15081 1.44754 6.79917 1.79917C6.44754 2.15081 6.25 2.62772 6.25 3.125V3.75H3.125C2.95924 3.75 2.80027 3.81585 2.68306 3.93306C2.56585 4.05027 2.5 4.20924 2.5 4.375C2.5 4.54076 2.56585 4.69973 2.68306 4.81694C2.80027 4.93415 2.95924 5 3.125 5H3.75V16.25C3.75 16.5815 3.8817 16.8995 4.11612 17.1339C4.35054 17.3683 4.66848 17.5 5 17.5H15C15.3315 17.5 15.6495 17.3683 15.8839 17.1339C16.1183 16.8995 16.25 16.5815 16.25 16.25V5H16.875C17.0408 5 17.1997 4.93415 17.3169 4.81694C17.4342 4.69973 17.5 4.54076 17.5 4.375C17.5 4.20924 17.4342 4.05027 17.3169 3.93306C17.1997 3.81585 17.0408 3.75 16.875 3.75ZM8.75 13.125C8.75 13.2908 8.68415 13.4497 8.56694 13.5669C8.44973 13.6842 8.29076 13.75 8.125 13.75C7.95924 13.75 7.80027 13.6842 7.68306 13.5669C7.56585 13.4497 7.5 13.2908 7.5 13.125V8.125C7.5 7.95924 7.56585 7.80027 7.68306 7.68306C7.80027 7.56585 7.95924 7.5 8.125 7.5C8.29076 7.5 8.44973 7.56585 8.56694 7.68306C8.68415 7.80027 8.75 7.95924 8.75 8.125V13.125ZM12.5 13.125C12.5 13.2908 12.4342 13.4497 12.3169 13.5669C12.1997 13.6842 12.0408 13.75 11.875 13.75C11.7092 13.75 11.5503 13.6842 11.4331 13.5669C11.3158 13.4497 11.25 13.2908 11.25 13.125V8.125C11.25 7.95924 11.3158 7.80027 11.4331 7.68306C11.5503 7.56585 11.7092 7.5 11.875 7.5C12.0408 7.5 12.1997 7.56585 12.3169 7.68306C12.4342 7.80027 12.5 7.95924 12.5 8.125V13.125ZM12.5 3.75H7.5V3.125C7.5 2.95924 7.56585 2.80027 7.68306 2.68306C7.80027 2.56585 7.95924 2.5 8.125 2.5H11.875C12.0408 2.5 12.1997 2.56585 12.3169 2.68306C12.4342 2.80027 12.5 2.95924 12.5 3.125V3.75Z"
                fill="#FF3333"
              />
            </svg>
          </div>
          <span className="text-[12px] xl:text-[14px] font-normal">
            Size: {size}
          </span>
          <span className="text-[12px] xl:text-[14px] font-normal">
            Color: {color}
          </span>
          <div className="flex flex-row items-center justify-between">
            <span className="text-xl xl:text-2xl font-bold">${price}</span>
            <div className="flex flex-row items-center justify-around bg-[#F0F0F0] w-fit min-w-[100px] rounded-full">
              <button onClick={substractQuantity}>
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
              <button onClick={incrimentQuantity}>
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
          </div>
        </div>
      </article>
    );
  }

  const cartItemData = [
    {
      imgSrc: "4a66d9ca1401101dee4cc689f8bb5ad2.png",
      title: "Gradient Graphic T-shirt",
      price: 145,
      quantity: 5,
      size: "Large",
      color: "White",
    },
    {
      imgSrc: "5fc84f87eeac1062fbe47f49c192d4f2.png",
      title: "Checkered Shirt",
      price: 180,
      quantity: 5,
      size: "Medium",
      color: "Red",
    },
    {
      imgSrc: "ff941dde9bc0e54431b8d8fe3182f5e9.png",
      title: "Skinny Fit Jeans",
      price: 240,
      quantity: 50,
      size: "Large",
      color: "Blue",
    },
  ];
  const totalPriceSum = cartItemData.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <main className="max-w-[1102px] mx-auto w-full px-4 xl:px-0">
      <h1 className="font-clash-display font-bold text-[32px] xl:text-[40px] mb-5 xl:mb-6">
        Your cart
      </h1>
      <section className="max-w-[470px] xl:max-w-none mx-auto flex flex-col xl:flex-row justify-center gap-5">
        <div className=" border-[1px] border-gray-300 rounded-3xl p-4">
          {cartItemData.map((item, index) => (
            <React.Fragment key={index}>
              <CartItem
                imgSrc={`/images/${item.imgSrc}`}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                size={item.size}
                color={item.color}
              />

              {index < cartItemData.length - 1 && (
                <div className="bg-gray-300 h-[1px] my-3 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col w-full h-fit gap-3 font-satoshi text-[16px] xl:text-xl border-[1px] border-gray-300 rounded-3xl p-4">
          <span className="text-xl xl:text-2xl font-bold">Order Summary</span>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <span className="text-black/60">Subtotal</span>
              <span className="font-bold">${totalPriceSum}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-black/60">Discount (20%)</span>
              <span className="font-bold text-red-600">-$565</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-black/60">Delivery Fee</span>
              <span className="font-bold">$565</span>
            </div>
            <div className="bg-gray-300 h-[1px] my-3 mx-4" />
            <div className="flex justify-between">
              <span className="">Total</span>
              <span className="text-xl font-bold">${totalPriceSum}</span>
            </div>
            <div className="flex flex-row gap-3 items-center justify-between">
              <div className="w-full h-[48px] xl:h-[52px] bg-[#F0F0F0] rounded-full">
                <div className="relative h-full flex items-center">
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="pr-4 pl-12 py-3 text-slate-900 rounded w-full h-full text-base font-normal outline-0"
                  />

                  <div className="absolute left-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0766 12.4857L13.7653 3.17444C13.5917 2.9997 13.3851 2.86115 13.1576 2.76685C12.93 2.67254 12.686 2.62435 12.4397 2.62507H3.75001C3.45164 2.62507 3.16549 2.7436 2.95451 2.95457C2.74353 3.16555 2.62501 3.4517 2.62501 3.75007V12.4398C2.62429 12.6861 2.67248 12.9301 2.76679 13.1576C2.86109 13.3852 2.99963 13.5918 3.17438 13.7654L12.4856 23.0766C12.8372 23.4281 13.3141 23.6256 13.8113 23.6256C14.3084 23.6256 14.7853 23.4281 15.1369 23.0766L23.0766 15.1369C23.4281 14.7853 23.6255 14.3085 23.6255 13.8113C23.6255 13.3141 23.4281 12.8373 23.0766 12.4857ZM13.8113 21.2204L4.87501 12.2813V4.87507H12.2813L21.2175 13.8113L13.8113 21.2204ZM9.37501 7.87507C9.37501 8.17174 9.28703 8.46175 9.12221 8.70842C8.95739 8.9551 8.72312 9.14736 8.44903 9.26089C8.17494 9.37442 7.87334 9.40412 7.58237 9.34625C7.2914 9.28837 7.02413 9.14551 6.81435 8.93573C6.60457 8.72595 6.46171 8.45868 6.40383 8.1677C6.34595 7.87673 6.37566 7.57513 6.48919 7.30104C6.60272 7.02695 6.79498 6.79269 7.04165 6.62786C7.28833 6.46304 7.57834 6.37507 7.87501 6.37507C8.27283 6.37507 8.65436 6.5331 8.93567 6.81441C9.21697 7.09571 9.37501 7.47724 9.37501 7.87507Z"
                        fill="black"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="font-medium bg-black text-white text-center py-3 px-6 rounded-full">
                Apply
              </button>
            </div>
            <button className="font-medium bg-black text-white flex flex-row items-center w-full justify-center py-3 rounded-full">
              Go to Checkout
              <svg
                className="w-5 h-5 ml-2"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9133 3.71169L17.5383 9.33669C17.6257 9.42379 17.695 9.52728 17.7423 9.64124C17.7897 9.75519 17.814 9.87737 17.814 10.0008C17.814 10.1241 17.7897 10.2463 17.7423 10.3603C17.695 10.4742 17.6257 10.5777 17.5383 10.6648L11.9133 16.2898C11.7372 16.4659 11.4983 16.5649 11.2492 16.5649C11.0001 16.5649 10.7613 16.4659 10.5852 16.2898C10.409 16.1137 10.3101 15.8748 10.3101 15.6258C10.3101 15.3767 10.409 15.1378 10.5852 14.9617L14.6094 10.9375L3.125 10.9375C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 9.99997C2.1875 9.75133 2.28627 9.51288 2.46209 9.33706C2.6379 9.16125 2.87636 9.06247 3.125 9.06247L14.6094 9.06247L10.5844 5.03826C10.4083 4.86214 10.3093 4.62326 10.3093 4.37419C10.3093 4.12512 10.4083 3.88625 10.5844 3.71013C10.7605 3.53401 10.9994 3.43506 11.2484 3.43506C11.4975 3.43506 11.7364 3.53401 11.9125 3.71013L11.9133 3.71169Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
