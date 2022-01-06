import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Notes from "./components/Notes";
import "./App.css";
import { Switch, Route, useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import api from "./api/contacts";
import Edit from "./components/Edit";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editValue, setEditValue] = useState({});
  const history = useHistory();

  // reterieveContacts

  const retrieveContacts = async () => {
    const response = await api.get("/notes");
    if (response.data) setNotes(response.data);
  };

  useEffect(() => {
    retrieveContacts();
  }, []);

  const addNote = async (note) => {
    const request = {
      id: uuidv4(),
      ...note,
    };

    await api.post("/notes", request);
    retrieveContacts();
  };

  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    retrieveContacts();
  };

  const editNote = (fullNote) => {
    setEditValue(fullNote);
    history.push("/edit");
  };

  const addEditNote = async (updatedValue) => {
    await api.put(`/notes/${updatedValue.id}`, updatedValue);
    retrieveContacts();
  };

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main notes={notes} deleted={deleteNote} edited={editNote} />
          )}
        />
        <Route exact path="/add" render={() => <Notes addNote={addNote} />} />
        <Route
          exact
          path="/edit"
          render={() => (
            <Edit addEditNote={addEditNote} editValue={editValue} />
          )}
        />
      </Switch>
    </>
  );
};

export default App;
