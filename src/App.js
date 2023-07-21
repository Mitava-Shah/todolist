import React, { useState } from "react";
import './App.css';

function App() {
  const [cities, setCities] = useState([]);
  const [cities1, setCities1] = useState("");
  const [editCity, setEditCity] = useState({ id: null, name: "" });

  function show() {
    const newCity = { id: Date.now(), name: cities1 };
    setCities([...cities, newCity]);
    setCities1("");
  }

  function remove(id) {
    const updatedCities = cities.filter(city => city.id !== id);
    setCities(updatedCities);
  }

  function edit(id) {
    const cityToEdit = cities.find(city => city.id === id);
    setEditCity(cityToEdit);
  }

  function updateCity() {
    const updatedCities = cities.map(city =>
      city.id === editCity.id ? { ...city, name: editCity.name } : city
    );
    setCities(updatedCities);
    setEditCity({ id: null, name: "" });
  }

  return (
    <>
      <div className="box">
        <div className="container">
          <input
            className="text"
            type="text"
            value={cities1}
            onChange={(e) => setCities1(e.target.value)}
            placeholder="add city"
          />
          <button className="add-btn" onClick={show}>Add</button>
        </div>
        {cities.map((city) => (
          <ul className="list" key={city.id}>
            {editCity.id === city.id ? (
              <li className="list-item">
                <input
                  type="text"
                  value={editCity.name}
                  onChange={(e) => setEditCity({ ...editCity, name: e.target.value })}
                />
                <button className="update-btn" onClick={updateCity}>Update</button>
              </li>
            ) : (
              <li className="list-item">
                {city.name}
              </li>
            )}
            <button className="edit-btn" onClick={() => edit(city.id)}>Edit</button>
            <button className="rm-btn" onClick={() => remove(city.id)}>REMOVE</button>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
