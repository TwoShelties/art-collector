import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Preview from "./Preview";
import Display from "./Display";
import Credits from "./Credits";
import { useEffect, useState } from "react";

const App = (props) => {
  const cl = console.log;

  const BASE_URL = "https://api.harvardartmuseums.org";
  const KEY = "a75672e6-d812-466a-94ce-8ac179d918b6";

  const [queryString, setQueryString] = useState("");
  const [century, setCentury] = useState("");
  const [classification, setClassification] = useState("");

  const [url, setUrl] = useState(
    `${BASE_URL}/object?apikey=${KEY}&classification=${classification}&century=${century}&keyword=${queryString}`
  );

  const [art, setArt] = useState({});
  const [selectedArt, setSelectedArt] = useState(null);

  const [searchResults, setSearchResults] = useState("");

  // Here we get the total amount of classifications and centuries
  // and we map their names in the search <option> tags:

  const [classificationList, setClassificationList] = useState({});
  const classificationUrl = `${BASE_URL}/classification?apikey=${KEY}&size=100&sort=name`;

  const fetchClassifications = async () => {
    try {
      const response = await fetch(classificationUrl);
      const data = await response.json();
      setClassificationList(data);
    } catch (error) {
      cl(error);
    }
  };

  useEffect(() => {
    fetchClassifications();
  }, []);

  const [centuryList, setCenturyList] = useState({});
  const centuryUrl = `${BASE_URL}/century?apikey=${KEY}&size=100&sort=name`;

  const fetchCenturies = async () => {
    try {
      const response = await fetch(centuryUrl);
      const data = await response.json();
      setCenturyList(data);
    } catch (error) {
      cl(error);
    }
  };

  useEffect(() => {
    fetchCenturies();
  }, []);

  const [searched, setSearched] = useState(false);

  //===========================================================//

  return (
    <div className="App">
      <Header />
      <Search
        BASE_URL={BASE_URL}
        KEY={KEY}
        art={art}
        setArt={setArt}
        setSearchResults={setSearchResults}
        queryString={queryString}
        setQueryString={setQueryString}
        century={century}
        setCentury={setCentury}
        classification={classification}
        setClassification={setClassification}
        url={url}
        setUrl={setUrl}
        classificationList={classificationList}
        setClassificationList={setClassificationList}
        centuryList={centuryList}
        setCenturyList={setCenturyList}
        searched={searched}
        setSearched={setSearched}
      />
      <div className="art-container">
        <Preview
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          art={art}
          setArt={setArt}
          setSelectedArt={setSelectedArt}
          searched={searched}
          classificationList={classificationList}
          centuryList={centuryList}
        />

        <Display
          selectedArt={selectedArt}
          searchResults={searchResults}
          art={art}
          setArt={setArt}
          BASE_URL={BASE_URL}
          KEY={KEY}
        />
      </div>
      <Credits />
    </div>
  );
};

export default App;
