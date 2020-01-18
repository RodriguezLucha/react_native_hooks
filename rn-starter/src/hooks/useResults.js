import { useEffect, useState } from "react";
import drinks from "../api/drinks";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // const searchApi = async searchTerm => {
  const searchApi = async term => {
    ////https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a

    try {
      const response = await drinks.get("/search", {
        params: {
          f: "a"
        }
      });
      console.log('IT WORKS');
      setResults(response.data.drinks);
    } catch (err) {
      console.log('FAIL');
      setErrorMessage("404: Drunk");
    }
  };

  useEffect(() => {
    // searchApi('pasta');
    /*Tip: If you’re familiar with React class lifecycle methods,
     you can think of useEffect Hook as componentDidMount, 
     componentDidUpdate, and componentWillUnmount combined.
     */
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};
