import Image from "next/image";
import ProductDetails from "./product-details";

export default function ProductSection({ title, products }) {
  return (
    <section className="w-full flex flex-col gap-16 my-14">
      <h1 className="font-clash-display text-[32px] xl:text-5xl font-bold text-center">
        {title}
      </h1>
      <div className="flex w-full xl:w-fit overflow-x-auto px-7 xl:px-0 flex-row mx-auto gap-6">
        {products.map((item, index) => (
          <ProductDetails
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            rate={item.rate}
            price={item.price}
            discountedPrice={item.discountedPrice}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="transition-all duration-200 w-full md:w-fit mx-4 bg-white hover:bg-gray-100 text-[14px] xl:text-[16px] font-medium py-4 px-20 border-[1px] border-black/10 rounded-full">
          View All
        </button>
      </div>
    </section>
  );
}
