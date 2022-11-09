import React, { useEffect, useState } from "react";
import MealCard from "../components/MealCard/MealCard";
import axios from "axios";
function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/meals?size=0").then((res) => {
      const data = res?.data?.meals;
      setMeals([...data]);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="mt-12">
          <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-14 font-mono">
            Meals
          </h1>

          <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {meals.map((meal) => (
              <MealCard meal={meal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meals;
