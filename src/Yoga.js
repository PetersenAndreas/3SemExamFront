import React, { useState, useEffect } from "react";
import settingUrl from "./settings";

var i = 0; 
export function Yoga() {
    const[yogaClassCourse, setYogaClassCourse] = useState([]);
    
    const URL = settingUrl.yogaApi();


    function fetchYogaCours() {
        let options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
        fetch(URL + "/allyogaclass", options)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setYogaClassCourse(data);
          });
      }

      useEffect(() => {
        fetchYogaCours();
      }, []);
      
      function randomFunktion() {
        i++;
      }

      return (<div>
        <h1>External API</h1>
        <button onClick={fetchYogaCours}>Press to fetch from API's!</button>
        <br/>
        <br/>
        <table border="1" width="50%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Description</th>
            <th>Max Participants</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {yogaClassCourse.map((ycc, x) => {
              console.log(x);
            return (
              <tr key={x}>
                <td>{ycc.id}</td>  
                <td>{ycc.courseName}</td>
                <td>{ycc.description}</td>
                
                <td>{ycc.yogaClasss[x].maxParticipants}</td>
                <td>{ycc.yogaClasss[x].price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      </div>);      

}