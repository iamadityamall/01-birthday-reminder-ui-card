import React from "react";
import List from "./List";
import { data } from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearItems = () => {
    setPeople([]);
  };

  return (
    <main className="flex justify-center items-center h-screen bg-blue-300">
      <section className="bg-white flex flex-col font-mono w-[80vw] p-6 rounded-lg space-y-3 shadow-lg lg:w-[50vw]">
        <h3>{people.length} birthdays remaining</h3>
        <List people={people} setPeople={setPeople} />
        <button
          className="p-2 text-xl bg-pink-300 text-white"
          onClick={clearItems}
        >
          clear all
        </button>
        {people.length === 0 && (
          <button
            className="p-2 text-xl bg-pink-300 text-white"
            onClick={() => setPeople(data)}
          >
            reset
          </button>
        )}
      </section>
    </main>
  );
};

export default App;
