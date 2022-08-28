import "./App.css";
import React, { useEffect, useState } from "react";

const cl = console.log;

const Search = (props) => {
  const resultUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&classification=${props.classification}&century=${props.century}&keyword=${props.queryString}`;

  const submitHandler = async (event) => {
    event.preventDefault();
    cl(
      "keyword: " +
        props.queryString +
        "; classification: " +
        props.classification +
        "; century: " +
        props.century
    );

    const fetchQueryResults = async (
      centuryInput,
      classificationInput,
      queryStringInput
    ) => {
      try {
        const response = await fetch(resultUrl);
        const data = await response.json();
        props.setArt(data);
        props.setSearched(true);
        cl(data);
      } catch (error) {
        cl(error);
      }
    };

    await fetchQueryResults(
      props.century,
      props.classification,
      props.queryString
    );
  };

  const searchChangeHandler = (event) => {
    event.preventDefault();
    props.setQueryString(event.target.value);
  };

  const classificationChangeHandler = (event) => {
    event.preventDefault();
    props.setClassification(event.target.value);
  };

  const centuryChangeHandler = (event) => {
    event.preventDefault();
    props.setCentury(event.target.value);
  };

  if (!props.classificationList.records || !props.centuryList.records) {
    return <></>;
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={submitHandler}>
        <fieldset>
          <label name="search-bar">Search: </label>
          <input name="search-bar" onChange={searchChangeHandler}></input>
        </fieldset>

        <fieldset>
          <label name="classification">
            Classification ({props.classificationList.records.length}):
          </label>
          <select name="classification" onChange={classificationChangeHandler}>
            <option>any</option>
            {props.classificationList.records.map((classification) => {
              return (
                <option key={classification.name}>{classification.name}</option>
              );
            })}
          </select>
          <label name="century">
            Century ({props.centuryList.records.length}):
          </label>
          <select name="century" onChange={centuryChangeHandler}>
            <option>any</option>
            {props.centuryList.records.map((century) => {
              return <option key={century.name}>{century.name}</option>;
            })}
          </select>
          <button>Search</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Search;
