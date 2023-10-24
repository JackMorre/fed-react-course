import { useState } from "react";

export function SearchForm({ categories, setUrl }) {
  const [category, setCategory] = useState(1);
  const [seachTerm, setSearchTerm] = useState("");

  function changeCategory({ target }) {
    setUrl(`https://www.dnd5eapi.co/api/${target.value}`);
  }

  function handleChange({ target }) {
    setSearchTerm(target.value);
    console.log(target.value);
  }

  const as = Array.from(Array(10), (_, i) => i);
  return (
    <div className="middle form-container">
      <h3>{`you have selected the number ${category}`}</h3>
      <div className="button-container">
        {Object.keys(categories).map((key) => {
          return (
            <button
              key={key}
              className="button"
              value={key}
              onClick={changeCategory}
            >
              {key}
            </button>
          );
        })}
      </div>

      <input
        onChange={handleChange}
        value={seachTerm}
        type="text"
        placeholder="Seach..."
      ></input>
      <button className="form-submit">Submit</button>
    </div>
  );
}
