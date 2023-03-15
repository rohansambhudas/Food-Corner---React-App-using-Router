import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Food Corner
            </h1>
            <p class="mb-8 leading-relaxed">
              Offering a unique Royal Indian experience, this restaurant is
              ideal for those wanting to enjoy an Indian vegetarian meal.
              Shakahari offers a plethora of diverse and delectable cuisines
              from various parts of India.
            </p>
            <div class="flex justify-center">
              <Link to="/menu">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Menu
                </button>
              </Link>
              <Link to="/contactus">
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
