import { useState } from "react";

const DisplayEntries = ({ persons }) => {
    return (
        <div>
          {persons.map((entry) => (
            <div key={`${entry.name} ${entry.phoneNumber}`}>
              <p>{entry.name}</p>
              <p>{entry.phoneNumber}</p>
            </div>
          ))}
        </div>
    );
  }

  export default DisplayEntries;
