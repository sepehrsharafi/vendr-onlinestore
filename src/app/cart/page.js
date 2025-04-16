"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  // Calculate total price sum before rendering

  function CartItem({ imgSrc, title, price, quantity, size, color }) {
    let [itmeQuantity, setItemQuantity] = useState(quantity);

    function incrimentQuantity() {
      setItemQuantity(itmeQuantity + 1);
      console.log("item up");
    }

    function substractQuantity() {
      setItemQuantity(itmeQuantity - 1);
    }

    return (
      <article className="font-satoshi flex flex-row items-center justify-center gap-3 w-full">
        <Image
          src={imgSrc}
          width={400}
          height={400}
          alt="image"
          className="min-h-24 h-24 max-h-24 min-w-24 max-w-24 object-cover rounded-lg"
        />
        <div className="flex flex-col w-80">
          <div className="flex flex-row justify-between">
            <span className="text-[16px] font-bold line-clamp-1">{title}</span>
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
          <span className="text-[12px] font-normal">Size: {size}</span>
          <span className="text-[12px] font-normal">Color: {color}</span>
          <div className="flex flex-row items-center justify-between">
            <span className="text-xl font-bold">${price}</span>
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
                {itmeQuantity}
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
    <main className="w-full px-4">
      <h1 className="font-clash-display font-bold text-[32px] xl:text-[40px]">
        Your cart
      </h1>
      <section className=" border-[1px] border-gray-300 rounded-3xl p-4">
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
      </section>
      <section className="flex flex-col gap-3 font-satoshi text-[16px] border-[1px] border-gray-300 rounded-3xl p-4">
        <span className="text-xl font-bold">Order Summary</span>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <span className="text-black/60">Subtotal</span>
            <span className="font-bold">$565</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-black/60">Discount (20%)</span>
            <span className="font-bold">$565</span>
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
          <div className="flex flex-row items-center justify-between">
            <div className="relative bg-gray-200 rounded-full p-3">
              <svg
                className="h-5 w-5 absolute top-[14px] left-[14px]"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2305 10.4047L11.4711 2.64532C11.3264 2.4997 11.1543 2.38424 10.9647 2.30565C10.775 2.22707 10.5717 2.18691 10.3664 2.18751H3.12501C2.87637 2.18751 2.63791 2.28628 2.46209 2.46209C2.28628 2.63791 2.18751 2.87637 2.18751 3.12501V10.3664C2.18691 10.5717 2.22707 10.775 2.30565 10.9647C2.38424 11.1543 2.4997 11.3264 2.64532 11.4711L10.4047 19.2305C10.6977 19.5234 11.0951 19.688 11.5094 19.688C11.9237 19.688 12.3211 19.5234 12.6141 19.2305L19.2305 12.6141C19.5234 12.3211 19.688 11.9237 19.688 11.5094C19.688 11.0951 19.5234 10.6977 19.2305 10.4047ZM11.5094 17.6836L4.06251 10.2344V4.06251H10.2344L17.6813 11.5094L11.5094 17.6836ZM7.81251 6.56251C7.81251 6.80973 7.7392 7.05141 7.60184 7.25697C7.46449 7.46253 7.26927 7.62275 7.04086 7.71736C6.81245 7.81197 6.56112 7.83672 6.31864 7.78849C6.07617 7.74026 5.85344 7.62121 5.67862 7.44639C5.50381 7.27157 5.38476 7.04885 5.33652 6.80637C5.28829 6.56389 5.31305 6.31256 5.40766 6.08415C5.50227 5.85574 5.66248 5.66052 5.86804 5.52317C6.07361 5.38582 6.31528 5.31251 6.56251 5.31251C6.89403 5.31251 7.21197 5.4442 7.44639 5.67862C7.68081 5.91304 7.81251 6.23099 7.81251 6.56251Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>
              <input type="text" className="ml-8 -mr-24" />
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
      </section>
    </main>
  );
}
