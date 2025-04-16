import Image from "next/image";

export default function ProductSection({ title, products }) {
  function Article({ imgSrc, title, rate, price, discountedPrice }) {
    return (
      <article className="font-satoshi min-w-64 flex flex-col gap-[10px]">
        <Image
          src={imgSrc}
          width={400}
          height={400}
          alt="image"
          className="w-64 h-64 object-cover rounded-[13px] xl:rounded-[20px]"
        />
        <div className="flex flex-col gap-[6px]">
          <span className="block text-[16px] xl:text-xl font-bold truncate max-w-64 overflow-clip">
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
            <div className="text-[12px] xl:text-[14px]">
              <span>{rate}/</span>
              <span className="text-gray-600">5</span>
            </div>
          </div>
          <div className="text-xl xl:text-2xl font-bold">
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
    <section className="w-full flex flex-col gap-16 my-14">
      <h1 className="font-clash-display text-[32px] xl:text-5xl font-bold text-center">
        {title}
      </h1>
      <div className="flex w-full xl:w-fit overflow-x-auto px-7 flex-row mx-auto gap-12">
        {products.map((item, index) => (
          <Article
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
