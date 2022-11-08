import React from "react";
import MealCard from "../MealCard/MealCard";

function MealsSection() {
  return (
    <div className="my-20">
      <div className="container">
        <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-14 font-mono">
          Meals
        </h1>
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MealCard />
          <MealCard />
          <MealCard />
        </div>
      </div>
    </div>
  );
}

export default MealsSection;
