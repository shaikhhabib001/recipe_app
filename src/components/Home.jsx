import React, { useContext } from "react";
import { GlobalState } from "./GlobalContext";
import Card from "./Card";

function Home() {
  const { data, loading } = useContext(GlobalState);

  return (
    <div>
      {loading ? (
        <h1 className="text-2xl font-bold text-center">
          Loading Please wait...
        </h1>
      ) : data && data.length ? (
        <div className="mx-4 flex align-middle justify-between flex-wrap gap-4">
          {data.map((e) => {
            return <Card data={e} key={e.id} />;
          })}
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-center text-red-800">
          Item Not Found
        </h1>
      )}
    </div>
  );
}

export default Home;
