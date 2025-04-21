import Image from "next/image";
import { Filter } from "../ui/filter-box";
import FilterMobile from "../ui/filter-mobile";

export default function Page() {
  function Product({ imgSrc, title, rate, price, discountedPrice }) {
    return (
      <article className="flex flex-col gap-1 xl:gap-2 w-[47%] sm:w-40 xl:w-64">
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
            <div className="flex flex-row items-center text-[12px] xl:text-[14px]">
              <span>{rate}/</span>
              <span className="text-gray-600">5</span>
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
          <Filter />
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
            <Product
              imgSrc={"/images/a7234235e66d6695d9d7098fc3289872.png"}
              title={"Gradient Graphic T-shirt"}
              rate={4}
              price={120}
              discountedPrice={140}
            />{" "}
            <Product
              imgSrc={"/images/485b30fd30b3226e09bb8f8e494c260b.png"}
              title={"Polo with Tipping Details"}
              rate={4.5}
              price={180}
            />
            <Product
              imgSrc={"/images/ff941dde9bc0e54431b8d8fe3182f5e9.png"}
              title={"Skinny Fit Jeans"}
              rate={3.5}
              price={260}
              discountedPrice={340}
            />
            <Product
              imgSrc={"/images/12942762aefb7c7ac954e78b76284504.png"}
              title={"Black Striped T-shirt"}
              rate={4}
              price={120}
              discountedPrice={150}
            />
            <Product
              imgSrc={"/images/5fc84f87eeac1062fbe47f49c192d4f2.png"}
              title={"CHECKERED SHIRT"}
              rate={4}
              price={180}
            />
            <Product
              imgSrc={"/images/7cc557f42cf1d489f7cc811856b90e9f.png"}
              title={"Sleeve Striped T-shirt"}
              rate={4}
              price={130}
              discountedPrice={180}
            />
          </div>
        </section>
      </main>
    </>
  );
}
