import { useState } from "react";
import DisplayEntries from "./components/DisplayEntries";
import EntryForm from "./components/EntryForm";

const App = () => {
  const [persons, setPersons] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setPersons(
      [...persons, entry].sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      )
    );
  };

  return (
    <div>
    <h2>My Phone Book</h2>
    <SearchBar />
    <h3>Add a person</h3>
    <div style={{display: "flex", flexDirection: "column", width: '300px'}}>
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <h3>Persons added:</h3>
      <DisplayEntries persons={persons} />
    </div>
    </div>
  );
}

export default App;
