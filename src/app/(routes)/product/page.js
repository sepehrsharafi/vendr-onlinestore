import ProductHero from "@/app/ui/product/product-hero";

export default function Product() {
  function calculateDiscountedPrice(price, salePercentage) {
    return price - (price * salePercentage) / 100;
  }
  const products = [
    {
      imgSrc: "/images/5fc84f87eeac1062fbe47f49c192d4f2.png",
      title: "T-SHIRT WITH TAPE DETAILS",
      rate: 4.5,
      price: 120,
      sale: 10,
    },
    {
      imgSrc: "/images/7cc557f42cf1d489f7cc811856b90e9f.png",
      title: "SKINNY FIT JEANS",
      rate: 4,
      price: 240,
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
      sale: 20,
    },
  ].map((product) => {
    if (product.sale) {
      return {
        ...product,
        discountedPrice: calculateDiscountedPrice(product.price, product.sale),
      };
    }
    return product;
  });
  const productItem = {
    imgSrc: [
      "/images/a7234235e66d6695d9d7098fc3289872.png",
      "/images/d5fcac5632cf6823570ca2d1d53d7d73.png",
      "/images/7cc557f42cf1d489f7cc811856b90e9f.png",
    ],
    quantity: 5,
    price: 120,
    sale: 40,
    size: "Large",
    color: [
      { darkGreen: "#4F4631" },
      { green: "#314F49" },
      { blue: "#31344F" },
    ],
    reviews: [
      {
        rating: 4.5,
        author: "John Doe",
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        publishedDate: "2023-05-22",
      },
      {
        rating: 4,
        author: "John Doe",
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        publishedDate: "2023-05-22",
      },
      {
        rating: 2,
        author: "John Doe",
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        publishedDate: "2023-05-22",
      },
    ],
  };
  return (
    <main className="font-satoshi max-w-[1103px] mx-auto p-5">
      <ProductHero product={productItem} products={products} />
    </main>
  );
}