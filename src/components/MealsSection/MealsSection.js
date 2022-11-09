import React, { useEffect, useState } from "react";
import MealCard from "../MealCard/MealCard";
import { Link } from "react-router-dom";
import axios from "axios";
function MealsSection() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/meals?size=0").then((res) => {
      const data = res?.data?.meals;
      setMeals([...data]);
    });
  }, []);

  return (
    <div className="my-20">
      <div className="container">
        <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-14 font-mono">
          Meals
        </h1>
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <MealCard meal={meal} />
          ))}
        </div>
        <div className="mx-auto mt-12 w-full text-center">
          <div className="btn-group">
            <button className="btn">1</button>
            <button className="btn btn-active">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link className="btn btn-primary text-white">See All</Link>
        </div>
      </div>
    </div>
  );
}

export default MealsSection;
