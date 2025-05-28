import * as React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
export default function ProductHero({ review }) {
  return (
    <article className="rounded-[20px] outline  outline-black/10 p-6 gap-3 flex flex-col w-full">
      <div className="flex flex-row gap-1.5 ">
        <Rating
          name="text-feedback"
          value={review.rating}
          precision={0.5}
          readOnly
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center">
            <span> {review.author}</span>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex items-center justify-center"
            >
              <path
                d="M9.5 1.97083C7.97338 1.97083 6.48104 2.42352 5.2117 3.27167C3.94235 4.11982 2.95302 5.32532 2.36881 6.73574C1.78459 8.14615 1.63174 9.69814 1.92957 11.1954C2.2274 12.6927 2.96254 14.0681 4.04202 15.1476C5.12151 16.227 6.49686 16.9622 7.99415 17.26C9.49144 17.5578 11.0434 17.405 12.4538 16.8208C13.8643 16.2366 15.0698 15.2472 15.9179 13.9779C16.7661 12.7085 17.2188 11.2162 17.2188 9.68958C17.2166 7.6431 16.4027 5.68106 14.9556 4.23398C13.5085 2.7869 11.5465 1.97299 9.5 1.97083ZM12.8888 8.3284L8.73258 12.4847C8.67744 12.5399 8.61195 12.5837 8.53987 12.6135C8.46779 12.6434 8.39053 12.6588 8.3125 12.6588C8.23448 12.6588 8.15721 12.6434 8.08513 12.6135C8.01305 12.5837 7.94757 12.5399 7.89243 12.4847L6.11118 10.7034C5.99976 10.592 5.93717 10.4409 5.93717 10.2833C5.93717 10.1258 5.99976 9.97466 6.11118 9.86325C6.22259 9.75184 6.37369 9.68925 6.53125 9.68925C6.68881 9.68925 6.83992 9.75184 6.95133 9.86325L8.3125 11.2252L12.0487 7.48825C12.1038 7.43308 12.1693 7.38932 12.2414 7.35947C12.3135 7.32961 12.3907 7.31425 12.4688 7.31425C12.5468 7.31425 12.624 7.32961 12.6961 7.35947C12.7682 7.38932 12.8337 7.43308 12.8888 7.48825C12.944 7.54341 12.9878 7.6089 13.0176 7.68098C13.0475 7.75306 13.0628 7.83031 13.0628 7.90833C13.0628 7.98634 13.0475 8.06359 13.0176 8.13567C12.9878 8.20775 12.944 8.27324 12.8888 8.3284Z"
                fill="#01AB31"
              />
            </svg>
          </div>
          <p>{review.review}</p>
        </div>
        <span className="text-black/60 font-medium">
          Posted on{" "}
          {new Date(review.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </article>
  );
}
