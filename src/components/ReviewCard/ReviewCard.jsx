import React from "react";

function ReviewCard({ review, handleDelete, handleEdit }) {
  const { details, email, name, img, rating, _id } = review;
  const ratingArr = Array.from({ length: rating });
  // console.log(review);
  return (
    <>
      {/* modal end */}
      <div>
        <div className="bg-white max-w-xl h-full rounded-md px-10 py-8 mx-auto flex gap-4 items-center">
          <div className="avatar placeholder items-center">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
              {img ? (
                <img src={img} alt="" />
              ) : (
                <>
                  {name ? (
                    <>
                      <span className="text-xl font-medium uppercase">
                        {name.slice(0, 1)}
                      </span>
                    </>
                  ) : (
                    <span className="uppercase text-xl font-medium">
                      {email.slice(0, 1)}
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
          <div className="ml-auto space-x-3">
            <button onClick={() => handleEdit(_id)}>
              <label htmlFor="my-modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 hover:scale-[1.3] duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </label>
            </button>
            <button onClick={() => handleDelete(_id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-red-600 hover:scale-[1.3] duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
