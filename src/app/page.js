import Image from "next/image";
import ProductSection from "./ui/product-section";
import Browse from "./ui/browse-section";

export default function Home() {
  const products = [
    {
      imgSrc: "/images/5fc84f87eeac1062fbe47f49c192d4f2.png",
      title: "T-SHIRT WITH TAPE DETAILS",
      rate: 4.5,
      price: 120,
    },
    {
      imgSrc: "/images/7cc557f42cf1d489f7cc811856b90e9f.png",
      title: "SKINNY FIT JEANS",
      rate: 4.5,
      price: 240,
      discountedPrice: 260,
    },
    {
      imgSrc: "/images/a7234235e66d6695d9d7098fc3289872.png",
      title: "CHECKERED SHIRT",
      rate: 4.5,
      price: 180,
    },
    {
      imgSrc: "/images/ff941dde9bc0e54431b8d8fe3182f5e9.png",
      title: "SLEEVE STRIPED T-SHIRT",
      rate: 4.5,
      price: 130,
      discountedPrice: 160,
    },
  ];

  const topSelling = [
    {
      imgSrc: "/images/d9029bd465a4c7158689ab1619693014.png",
      title: "VERTICAL STRIPED SHIRT",
      rate: 4.5,
      price: 212,
      discountedPrice: 232,
    },
    {
      imgSrc: "/images/d5fcac5632cf6823570ca2d1d53d7d73.png",
      title: "COURAGE GRAPHIC T-SHIRT",
      rate: 4.5,
      price: 145,
    },
    {
      imgSrc: "/images/4a66d9ca1401101dee4cc689f8bb5ad2.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      rate: 4.5,
      price: 80,
    },
    {
      imgSrc: "/images/08e2ff8a46be56aa933f031aed3abe75.png",
      title: "FADED SKINNY JEANS",
      rate: 4.5,
      price: 210,
    },
  ];

  return (
    <main className="font-satoshi">
      <ProductSection title={"NEW ARRIVALS"} products={products} />
      <div className="bg-gray-200 h-0.5 text-center mx-16 xl:mx-40 py-[1px] gap-2" />
      <ProductSection title={"TOP SELLING"} products={topSelling} />
      <Browse />
    </main>
  );
}
