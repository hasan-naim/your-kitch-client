import React from "react";

function MealCard() {
  return (
    <>
      <div class="max-w-sm bg-white rounded-lg border border-gray-300 shadow-md">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps21444_TH132767B05_02_1b_WEB-9.jpg?resize=696,696"
            alt=""
          />
        </a>
        <div class="p-5 bg-white rounded-b-lg">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tigh">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
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
