import React, { useState } from "react";
import PetCard from "./PetCard";
import "./PetShop.css";

function PetShop() {
  const [searchQuery, setSearchQuery] = useState("");
  const dogs = [
    // your dog data array
    {
      weight: { imperial: "6 - 13", metric: "3 - 6" },
      height: { imperial: "9 - 11.5", metric: "23 - 29" },
      id: 1,
      name: "Affenpinscher",
      bred_for: "Small rodent hunting, lapdog",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      image: require("./images/1.jpeg"),
    },
    // more dog objects...
  ];

  // Function to handle changes in search query
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter dogs based on search query
  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="Shop">
        <h1 className="PetShop-heading">Welcome to your dream shop!</h1>
        {/* Add search bar */}
        <input
          type="text"
          placeholder="Search for a dog..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
      <div>
        {filteredDogs.map((dog) => (
          <PetCard
            key={dog.id}
            life={dog.life_span}
            name={dog.name}
            breed={dog.breed_group}
            image={dog.image}
            price={dog.price} // Assuming you have 'price' in your dog object
            temperament={dog.temperament}
          />
        ))}
      </div>
    </>
  );
}

export default PetShop;
