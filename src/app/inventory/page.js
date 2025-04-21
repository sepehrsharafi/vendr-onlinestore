import Image from "next/image";
import { Filter } from "../ui/filter-box";

export default function Page() {
  function Product({ imgSrc, title, rate, price, discountedPrice }) {
    return (
      <article className="flex flex-col gap-1 xl:gap-2 w-40 xl:w-64">
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt="image"
          className="w-40 h-40 xl:w-64 xl:h-64 object-cover rounded-xl"
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
      <main className="max-w-[1103px] flex flex-row justify-center items-start gap-4 font-satoshi mx-4 w-fit xl:mx-auto">
        <section className="hidden xl:block">
          <Filter />
        </section>
        <section className="flex flex-col w-fit">
          <section className="flex flex-row items-center justify-between my-3 w-full">
            <div className="flex flex-row items-baseline gap-2">
              <span className="text-2xl xl:text-[32px] font-bold">Casual</span>
              <span className="text-[14px]">Showing 1-10 of 100 Products</span>
            </div>
            <button className="xl:hidden">
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
          </section>
          <div className="flex flex-wrap justify-between max-w-[1075px] gap-y-4 sm:justify-between">
            <Product
              imgSrc={"/images/a7234235e66d6695d9d7098fc3289872.png"}
              title={"Gradient Graphic T-shirt"}
              rate={4}
              price={120}
              discountedPrice={140}
            />
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
