import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  const param = useParams();
  const [data, setdata] = useState({
    publisher: "Simply Recipes",
    ingredients: [
      {
        quantity: 1.5,
        unit: "cups",
        description: "warm water",
      },
      {
        quantity: 1,
        unit: "",
        description: "package of active dry yeast",
      },
      {
        quantity: 3.5,
        unit: "cups",
        description: "bread flour",
      },
      {
        quantity: 2,
        unit: "tbsps",
        description: "olive oil",
      },
      {
        quantity: 2,
        unit: "tsps",
        description: "salt",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "sugar",
      },
      {
        quantity: null,
        unit: "",
        description: "Olive oil",
      },
      {
        quantity: null,
        unit: "",
        description: "Cornmeal",
      },
      {
        quantity: null,
        unit: "",
        description: "Tomato sauce",
      },
      {
        quantity: null,
        unit: "",
        description: "Mozzarella or parmesan cheese shredded",
      },
      {
        quantity: null,
        unit: "",
        description: "Feta cheese",
      },
      {
        quantity: null,
        unit: "",
        description: "Mushrooms thinly sliced",
      },
      {
        quantity: null,
        unit: "",
        description: "Bell peppers stems and seeds removed thinly sliced",
      },
      {
        quantity: null,
        unit: "",
        description: "Italian sausage cooked ahead",
      },
      {
        quantity: null,
        unit: "",
        description: "Chopped fresh basil",
      },
      {
        quantity: null,
        unit: "",
        description: "Pesto",
      },
      {
        quantity: null,
        unit: "",
        description: "Pepperoni thinly sliced",
      },
      {
        quantity: null,
        unit: "",
        description: "Onions thinly sliced",
      },
      {
        quantity: null,
        unit: "",
        description: "Sliced ham",
      },
      {
        quantity: null,
        unit: "",
        description:
          "A pizza stone highly recommended if you want your pizza dough to be crusty",
      },
      {
        quantity: null,
        unit: "",
        description: "A pizza peel or a flat baking sheet",
      },
      {
        quantity: null,
        unit: "",
        description:
          "A pizza wheel for cutting the pizza not required but easier to deal with than a knife",
      },
    ],
    source_url: "http://www.simplyrecipes.com/recipes/homemade_pizza/",
    image_url:
      "http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg",
    title: "Homemade Pizza",
    servings: 4,
    cooking_time: 135,
    id: "664c8f193e7aa067e94e8531",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetchData(param.id);
  }, [param]);

  const fetchData = async (id) => {
    try {
      setLoading(true);
      let responce = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      setdata(responce.data.data.recipe);
    } catch (e) {
      console.log("Error fetching data");
      setdata({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
              src={data.image_url}
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold">{data.title}</h1>
          <p className="text-sm">{data.publisher}</p>
          <IconButton className="bg-blue-500 hover:bg-blue-600 duration-200 cursor-pointer text-white py-2 px-4 rounded ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </IconButton>
          <h1>Ingedients</h1>

          <ul>
            {data.ingredients.map((ing, index) => {
              return (
                <li key={index}>{`${ing.quantity || ""} ${ing.unit || ""} ${
                  ing.description
                }`}</li>
              );
            })}
          </ul>
          <div className="flex gap-2 mt-4">
            <a className="bg-blue-500 hover:bg-blue-600 duration-200 cursor-pointer text-white py-2 px-4 rounded ">
              Original Source
            </a>
          </div>
        </div>
        <div className="row-center-2">
        </div>
      </div>
    </>
  );
}

export default Details;
