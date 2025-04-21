import Image from "next/image";

export default function Browse() {
  return (
    <section className="flex justify-center">
      <div className="container bg-[#F0F0F0] rounded-[40px] pt-10 mx-4">
        <span className="block text-center font-clash-display text-3xl xl:text-5xl font-bold lg:mt-4">
          BROWSE BY <br className="xl:hidden" /> dress STYLE
        </span>
        <div className="flex flex-col gap-8 p-6 lg:p-10 xl:p-16">
          <div className="flex flex-col lg:flex-row gap-8 justify-evenly lg:h-[350px]">
            <article className="bg-white h-64 lg:h-auto lg:flex-4/12 rounded-[20px] overflow-clip relative">
              <span className="absolute top-8 left-8 text-2xl lg:text-4xl font-bold z-50">
                Casual
              </span>
              <Image
                src={"/images/image 11.png"}
                width={1000}
                height={1000}
                alt="asd"
                className="w-full h-full object-cover scale-x-[-1]"
              />
            </article>
            <article className="bg-white h-64 lg:h-auto lg:flex-8/12 rounded-[20px] overflow-clip relative">
              <span className="absolute top-8 left-8 text-2xl xl:text-4xl font-bold z-50">
                Formal
              </span>
              <Image
                src={"/images/image 12.png"}
                width={1000}
                height={1000}
                alt="asd"
                className="w-full h-full object-cover scale-x-[-1]"
              />
            </article>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-evenly lg:h-[350px]">
            <article className="bg-white h-64 lg:h-auto lg:flex-8/12 rounded-[20px] overflow-clip relative">
              <span className="absolute top-8 left-8 text-2xl xl:text-4xl font-bold z-50">
                Party
              </span>
              <Image
                src={"/images/image 13.png"}
                width={1000}
                height={1000}
                alt="asd"
                className="w-full h-full object-cover object-right pr-40 lg:pr-96 mt-4 scale-x-[-1]"
              />
            </article>
            <article className="bg-white h-64 lg:h-auto lg:flex-4/12 rounded-[20px] overflow-clip relative">
              <span className="absolute top-8 left-8 text-2xl xl:text-4xl font-bold z-50">
                Gym
              </span>
              <Image
                src={"/images/image 14.png"}
                width={1000}
                height={1000}
                alt="asd"
                className="w-full h-full object-cover object-right pr-40 mt-4 scale-x-[-1]"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
