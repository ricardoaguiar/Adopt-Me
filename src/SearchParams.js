import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seatle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    //pet.breeds('dog').then(console.log, console.error);
    setBreeds([]);
    setBreed('');
    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <h1> {location} </h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        {/* <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map((breedString) => (
              <option key={brededString} value={brededString}>
                {brededString}
              </option>
            ))}
          </select>
        </label> */}
        {/* the above is abstracted to useDropdown and return the below */}
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
