import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';

export default function Form({history}) {
  const enterSite = e => {
    e.preventDefault()
    history.push('/BusList');
}
  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);
  useEffect(function () {
    if (sources.length !== 0) {
      return;
    }
    const promise = axios.get('http://localhost:4200/routes');
    const x = promise.then(function (response) {
      setSources(
        response.data.map(function (item) {
          return item.source;
        })
      );
      setDestinations(
        response.data.map(function (item) {
          return item.destination;
        })
      );
    });
  });

  console.log(sources, destinations);
  return (
    <div id="search_div">
      <section id="search">
        <div className="searchwrap">
          <select name="source" className="f1 search-box searchwrap">
            <option disabled selected value="">
              Source
            </option>
            {sources.map(function (source, index) {
              return (
                <option key={index} value={source}>
                  {source}
                </option>
              );
            })}
          </select>
          <select name="destination" className="f1 search-box searchwrap">
            <option disabled selected value="">
              Destination
            </option>
            {destinations.map(function (destination, index) {
              return (
                <option key={index} value={destination}>
                  {destination}
                </option>
              );
            })}
          </select>
          <input type="date" placeholder="Date" className="f1 search-box searchwrap"></input>
          <input
            type="number"
            placeholder="Number of People"
            className="f1 search-box searchwrap">

          </input>
          <a href="#" onClick={e => enterSite(e)}> <button className="f1 button" id="search_btn"> Search </button> </a>
        </div>
      </section>
    </div>
  );
}