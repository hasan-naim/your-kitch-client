import React from "react";

function MealCard({ meal }) {
  const { img, title, desc } = meal;
  return (
    <>
      <div class="max-w-sm bg-white rounded-lg border border-gray-300 shadow-md">
        <div className="w-full h-[284px] overflow-hidden rounded-t-lg">
          <img
            class="rounded-t-lg"
            className="w-full h-full bg-cover bg-center object-cover"
            src={img}
            alt=""
          />
        </div>
        <div class="p-5 bg-white rounded-b-lg">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tigh">{title}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">{desc}</p>
          <a href="#" class="btn btn-primary">
            Details
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default MealCard;
