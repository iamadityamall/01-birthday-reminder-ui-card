import React from "react";
import { GrClose } from "react-icons/gr";

const List = ({ people, setPeople }) => {
  const delItem = (id) => {
    setPeople((prevPeople) => {
        let newPeople = prevPeople.filter((person) => person.id !== id);
        return newPeople;
    })
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article
            key={id}
            className="flex space-x-4 p-1 items-center justify-between"
          >
            <div className="flex space-x-5">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-600 p-0.5 shadow-xl"
              ></img>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold">{name}</h3>
                <p>{age}</p>
              </div>
            </div>
            <button
              className="text-2xl text-red-500"
              onClick={() => delItem(id)}
            >
              <GrClose />
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
