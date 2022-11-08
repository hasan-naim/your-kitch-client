import React from "react";
import MealCard from "../MealCard/MealCard";
import meal1 from "../../assets/meals/meal1.jpg";
import meal2 from "../../assets/meals/meal2.jpg";
import meal3 from "../../assets/meals/meal3.jpg";
import meal4 from "../../assets/meals/meal4.jpg";
import meal5 from "../../assets/meals/meal5.jpg";
import meal6 from "../../assets/meals/meal6.jpg";
import { Link } from "react-router-dom";
const meals = [
  {
    title: "something",
    desc: "some description will go here",
    img: meal1,
  },
  {
    title: "something",
    desc: "some description will go here",
    img: meal2,
  },
  {
    title: "something",
    desc: "some description will go here",
    img: meal3,
  },
  {
    title: "something",
    desc: "some description will go here",
    img: meal4,
  },
  {
    title: "something",
    desc: "some description will go here",
    img: meal5,
  },
  {
    title: "something",
    desc: "some description will go here",
    img: meal6,
  },
];

function MealsSection() {
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
