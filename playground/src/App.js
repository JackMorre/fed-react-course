import axios from "axios";
import { useEffect, useState } from "react";

import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";

export function App() {
  const [url, setUrl] = useState("https://www.dnd5eapi.co/api/");
  const [categories, setCategories] = useState("");
  useEffect(() => {
    if (!categories) {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setCategories(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [url]);
  return (
    <div>
      <Banner />
      <SearchForm categories={categories} setUrl={setUrl} />
    </div>
  );
}
