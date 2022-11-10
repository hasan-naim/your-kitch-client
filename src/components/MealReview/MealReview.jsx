import React from "react";

function MealReview({ review }) {
  const { details, name, img, rating, email } = review;
  const ratingArr = Array.from({ length: rating });
  return (
    <div>
      <div className="bg-white max-w-xl h-full rounded-md px-10 py-8 mx-auto flex gap-4">
        <div className="avatar placeholder items-center">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
            {img?.length > 6 ? (
              <img src={img} alt="" />
            ) : (
              <>
                {name ? (
                  <span className="text-xl font-medium">
                    {name?.slice(0, 1)}
                  </span>
                ) : (
                  <span className="text-xl font-medium uppercase">
                    {email?.slice(0, 1)}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase mb-1">{name}</h4>
          <p className="mb-1">{details}</p>
          <div className="flex mt-2">
            {ratingArr.map((rat, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="#f59e0b"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealReview;
