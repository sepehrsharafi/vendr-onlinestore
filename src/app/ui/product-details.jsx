import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
export default function ProductDetails({
  imgSrc,
  title,
  price,
  discountedPrice,
  rate,
}) {
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
            <div className="flex flex-row gap-1.5 ">
              <Rating
                name="text-feedback"
                value={rate}
                precision={0.5}
                readOnly
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </div>
          </div>
          <div className="text-[12px] xl:text-[14px]">
            <span>{rate}</span>
          </div>
        </div>
        <div className="text-xl xl:text-2xl font-bold">
          {discountedPrice ? (
            <>
              <span className="text-gray-400 line-through">${price}</span>
              <span className="ml-2 text-black">${discountedPrice}</span>
            </>
          ) : (
            <span>${price}</span>
          )}
        </div>
      </div>
    </article>
  );
}
