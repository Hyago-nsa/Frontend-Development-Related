import React from "react";
import cars from "../data"

console.log(cars);

const [honda,tesla] = cars;

const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {coloursByPopularity: [hondaTopColour]} = honda;

const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;
const {coloursByPopularity: [teslaTopColour]} = tesla;


function App(){
    return(
        <table>
    <tbody>
        <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        </tr>
        <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
        </tr>
        <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
        </tr>
    </tbody>
  </table>
    )
};

export default App;