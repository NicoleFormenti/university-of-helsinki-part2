import { useState } from "react";

const EntryForm = ({ addEntryToPhoneBook }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      addEntryToPhoneBook({ name, phoneNumber });
    };
    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Add Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Add to Phone Book
        </button>
      </form>
    );
  }

  export default EntryForm;
