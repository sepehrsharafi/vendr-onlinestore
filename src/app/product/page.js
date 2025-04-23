import Image from "next/image";
import ProductHero from "../ui/product-hero";

export default function Product() {
  const productItem = {
    imgSrc: [
      "/images/a7234235e66d6695d9d7098fc3289872.png",
      "/images/d5fcac5632cf6823570ca2d1d53d7d73.png",
      "/images/7cc557f42cf1d489f7cc811856b90e9f.png",
    ],
    quantity: 5,
    size: "Large",
    color: [
      { darkGreen: "#4F4631" },
      { green: "#314F49" },
      { blue: "#31344F" },
    ],
  };
  return (
    <main className="font-satoshi max-w-[1103px] mx-auto p-5">
      <ProductHero product={productItem} />
    </main>
  );
}
