import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const GlobalState = createContext(null);
function GlobalContext({ children }) {
  const [searchParams, setSearchParams] = useState("pizza");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      publisher: "Closet Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
      title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
      id: "664c8f193e7aa067e94e8706",
    },
    {
      publisher: "Closet Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
      title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
      id: "664c8f193e7aa067e94e8610",
    },
    {
      publisher: "Simply Recipes",
      image_url:
        "http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg",
      title: "How to Grill Pizza",
      id: "664c8f193e7aa067e94e8534",
    },
    {
      publisher: "Simply Recipes",
      image_url:
        "http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg",
      title: "Homemade Pizza",
      id: "664c8f193e7aa067e94e8531",
    },
    {
      publisher: "Closet Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg",
      title: "Pizza Dip",
      id: "664c8f193e7aa067e94e84c1",
    },
    {
      publisher: "A Spicy Perspective",
      image_url:
        "http://forkify-api.herokuapp.com/images/IMG_4351180x1804f4a.jpg",
      title: "Greek Pizza",
      id: "664c8f193e7aa067e94e8438",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/391236ba85.jpg",
      title: "Veggie Pizza",
      id: "664c8f193e7aa067e94e845a",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/7988559586.jpg",
      title: "Valentine Pizza",
      id: "664c8f193e7aa067e94e8454",
    },
    {
      publisher: "My Baking Addiction",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg",
      title: "Pizza Dip",
      id: "664c8f193e7aa067e94e840d",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/5100898cc5.jpg",
      title: "Pizza Casserole",
      id: "664c8f193e7aa067e94e836b",
    },
    {
      publisher: "BBC Good Food",
      image_url:
        "http://forkify-api.herokuapp.com/images/1649634_MEDIUMd3fc.jpg",
      title: "Pitta pizzas",
      id: "664c8f193e7aa067e94e838d",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/567c8fe.jpg",
      title: "Pizza Pinwheels",
      id: "664c8f193e7aa067e94e836e",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/104254d419.jpg",
      title: "Pesto Pizza",
      id: "664c8f193e7aa067e94e8355",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/636003da23.jpg",
      title: "Hummus Pizza",
      id: "664c8f193e7aa067e94e82fa",
    },
    {
      publisher: "What's Gaby Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaMonkeyBread67f8.jpg",
      title: "Pizza Monkey Bread",
      id: "664c8f193e7aa067e94e8ab9",
    },
    {
      publisher: "BBC Good Food",
      image_url:
        "http://forkify-api.herokuapp.com/images/679637_MEDIUM765c.jpg",
      title: "Puff pizza tart",
      id: "664c8f193e7aa067e94e8abd",
    },
    {
      publisher: "My Baking Addiction",
      image_url:
        "http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg",
      title: "Barbecue Chicken Pizza",
      id: "664c8f193e7aa067e94e89c9",
    },
    {
      publisher: "Epicurious",
      image_url: "http://forkify-api.herokuapp.com/images/51150600f4cb.jpg",
      title: "Veggi-Prosciutto Pizza",
      id: "664c8f193e7aa067e94e89af",
    },
    {
      publisher: "The Pioneer Woman",
      image_url: "http://forkify-api.herokuapp.com/images/pizza3464.jpg",
      title: "Pizza Potato Skins",
      id: "664c8f193e7aa067e94e88b9",
    },
    {
      publisher: "Two Peas and Their Pod",
      image_url:
        "http://forkify-api.herokuapp.com/images/minifruitpizzas52c00.jpg",
      title: "Mini Fruit Pizzas",
      id: "664c8f193e7aa067e94e880a",
    },
    {
      publisher: "Bon Appetit",
      image_url:
        "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
      title: "No-Knead Pizza Dough",
      id: "664c8f193e7aa067e94e8783",
    },
    {
      publisher: "The Pioneer Woman",
      image_url:
        "http://forkify-api.herokuapp.com/images/4797377235_c07589b7d4_be953.jpg",
      title: "Mexican “Flatbread” Pizza",
      id: "664c8f193e7aa067e94e86af",
    },
    {
      publisher: "The Pioneer Woman",
      image_url:
        "http://forkify-api.herokuapp.com/images/grilledveggie79bd.jpg",
      title: "Grilled Veggie Pizza",
      id: "664c8f193e7aa067e94e867b",
    },
    {
      publisher: "The Pioneer Woman",
      image_url: "http://forkify-api.herokuapp.com/images/burger53be.jpg",
      title: "Supreme Pizza Burgers",
      id: "664c8f193e7aa067e94e863b",
    },
    {
      publisher: "The Pioneer Woman",
      image_url: "http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg",
      title: "Pepperoni Pizza Burgers",
      id: "664c8f193e7aa067e94e863d",
    },
    {
      publisher: "Closet Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg",
      title: "Taco Quesadilla Pizzas",
      id: "664c8f193e7aa067e94e84de",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/580542e3ec.jpg",
      title: "Hot Pizza Dip",
      id: "664c8f193e7aa067e94e82f4",
    },
    {
      publisher: "Lisa's Kitchen",
      image_url:
        "http://forkify-api.herokuapp.com/images/hummus_pizza25f37.jpg",
      title: "Homemade Spicy Hummus Pizza",
      id: "664c8f193e7aa067e94e8ad1",
    },
    {
      publisher: "My Baking Addiction",
      image_url:
        "http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg",
      title: "Simple No Knead Pizza Dough",
      id: "664c8f193e7aa067e94e8a79",
    },
    {
      publisher: "Chow",
      image_url:
        "http://forkify-api.herokuapp.com/images/30624_RecipeImage_620x413_pepperoni_pizza_dip_4774d.jpg",
      title: "Pepperoni Pizza Dip Recipe",
      id: "664c8f193e7aa067e94e8a31",
    },
    {
      publisher: "What's Gaby Cooking",
      image_url: "http://forkify-api.herokuapp.com/images/PizzaHandPie4e08.jpg",
      title: "Pepperoni Pizza Hand Pies",
      id: "664c8f193e7aa067e94e8a13",
    },
    {
      publisher: "What's Gaby Cooking",
      image_url: "http://forkify-api.herokuapp.com/images/IMG_15866d21.jpg",
      title: "Grilled BBQ Chicken Pizza",
      id: "664c8f193e7aa067e94e8a12",
    },
    {
      publisher: "Whats Gaby Cooking",
      image_url: "http://forkify-api.herokuapp.com/images/IMG_98428b96.jpg",
      title: "Loaded Veggie and Prosciutto Pizza",
      id: "664c8f193e7aa067e94e898a",
    },
    {
      publisher: "BBC Good Food",
      image_url:
        "http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg",
      title: "Pizza bianco with artichoke hearts",
      id: "664c8f193e7aa067e94e897b",
    },
    {
      publisher: "Vintage Mixer",
      image_url:
        "http://forkify-api.herokuapp.com/images/CauliflowerPizzaCrustRecipe06fdc.jpg",
      title: "Cauliflower Pizza Crust Recipe",
      id: "664c8f193e7aa067e94e8906",
    },
    {
      publisher: "101 Cookbooks",
      image_url:
        "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
      title: "Best Pizza Dough Ever",
      id: "664c8f193e7aa067e94e8704",
    },
    {
      publisher: "The Pioneer Woman",
      image_url:
        "http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg",
      title: "PW’s Favorite Pizza",
      id: "664c8f193e7aa067e94e86ba",
    },
    {
      publisher: "The Pioneer Woman",
      image_url:
        "http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg",
      title: "One Basic Pizza Crust",
      id: "664c8f193e7aa067e94e8673",
    },
    {
      publisher: "The Pioneer Woman",
      image_url:
        "http://forkify-api.herokuapp.com/images/5278973957_3f9f9a21c2_o7a1b.jpg",
      title: "Fig-Prosciutto Pizza with Arugula",
      id: "664c8f193e7aa067e94e866f",
    },
    {
      publisher: "The Pioneer Woman",
      image_url: "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
      title: "Deep Dish Fruit Pizza",
      id: "664c8f193e7aa067e94e8658",
    },
    {
      publisher: "Real Simple",
      image_url:
        "http://forkify-api.herokuapp.com/images/pizza_30061a5d763.jpg",
      title: "Salami and Brussels Sprouts Pizza",
      id: "664c8f193e7aa067e94e8605",
    },
    {
      publisher: "Real Simple",
      image_url:
        "http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg",
      title: "English-Muffin Egg Pizzas",
      id: "664c8f193e7aa067e94e85be",
    },
    {
      publisher: "BBC Good Food",
      image_url:
        "http://forkify-api.herokuapp.com/images/1813674_MEDIUM6f4a.jpg",
      title: "Salami &amp; peppadew pizza",
      id: "664c8f193e7aa067e94e856b",
    },
    {
      publisher: "Closet Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
      title: "Pizza Quesadillas (aka Pizzadillas)",
      id: "664c8f193e7aa067e94e84c2",
    },
    {
      publisher: "What's Gaby Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/PepperoniPizzaMonkeyBread8cd5.jpg",
      title: "Pepperoni Pizza Monkey Bread",
      id: "664c8f193e7aa067e94e8433",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/191121d99d.jpg",
      title: "Fast English Muffin Pizzas",
      id: "664c8f193e7aa067e94e82b4",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/100111309d9.jpg",
      title: "Double Crust Stuffed Pizza",
      id: "664c8f193e7aa067e94e8297",
    },
    {
      publisher: "My Baking Addiction",
      image_url:
        "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg",
      title: "Spicy Chicken and Pepper Jack Pizza",
      id: "5ed6604591c37cdc054bc886",
    },
    {
      publisher: "All Recipes",
      image_url: "http://forkify-api.herokuapp.com/images/237891b5e4.jpg",
      title: "Jay’s Signature Pizza Crust",
      id: "5ed6604591c37cdc054bc990",
    },
    {
      publisher: "Two Peas and Their Pod",
      image_url:
        "http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg",
      title: "Peach, Basil, Mozzarella, & Balsamic Pizza",
      id: "664c8f193e7aa067e94e882f",
    },
    {
      publisher: "Two Peas and Their Pod",
      image_url:
        "http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg",
      title: "Avocado Pita Pizza with Cilantro Sauce",
      id: "664c8f193e7aa067e94e880c",
    },
    {
      publisher: "Bon Appetit",
      image_url:
        "http://forkify-api.herokuapp.com/images/figandgoatcheesepizzawitharugula646698d.jpg",
      title: "Fig and Goat Cheese Pizza with Arugula",
      id: "664c8f193e7aa067e94e877e",
    },
    {
      publisher: "The Pioneer Woman",
      image_url:
        "http://forkify-api.herokuapp.com/images/4433733640_8b0a5d19fbace0.jpg",
      title: "CPK’s BBQ Chicken Pizza",
      id: "664c8f193e7aa067e94e86b9",
    },
    {
      publisher: "Closet Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg",
      title: "Avocado Breakfast Pizza with Fried Egg",
      id: "664c8f193e7aa067e94e8476",
    },
    {
      publisher: "Real Simple",
      image_url:
        "http://forkify-api.herokuapp.com/images/20meals14_30007e78232.jpg",
      title: "Artichoke Pizzas With Lemony Green Bean Salad",
      id: "664c8f193e7aa067e94e85a2",
    },
    {
      publisher: "Closet Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/Thai2BChicken2BPizza2Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg",
      title: "Thai Chicken Pizza with Sweet Chili Sauce",
      id: "664c8f193e7aa067e94e84e2",
    },
    {
      publisher: "Two Peas and Their Pod",
      image_url:
        "http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg",
      title: "Sweet Potato Kale Pizza with Rosemary & Red Onion",
      id: "664c8f193e7aa067e94e8823",
    },
    {
      publisher: "Closet Cooking",
      image_url:
        "http://forkify-api.herokuapp.com/images/Strawberry2BBalsamic2BPizza2Bwith2BChicken252C2BSweet2BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg",
      title:
        "Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon",
      id: "664c8f193e7aa067e94e8482",
    },
    {
      publisher: "Jamie Oliver",
      image_url:
        "http://forkify-api.herokuapp.com/images/395_1_1350903959_lrgdd8a.jpg",
      title:
        "Egg, prosciutto, artichokes, olives, mozzarella, tomato sauce &amp; basil pizza topping",
      id: "664c8f193e7aa067e94e8937",
    },
  ]);

  const fetchData = async () => {
    try {
      setLoading(true);
      let responce = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      setSearchParams("");
      setData(responce.data.data.recipes);
    } catch (e) {
      console.log("Error fetching data");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <GlobalState.Provider
      value={{
        searchParams: searchParams,
        setSearchParams: setSearchParams,
        fetchData,
        data,
        loading,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
}

export default GlobalContext;
