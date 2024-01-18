
import './App.css';
import { Header } from './Components/Header';
import { Search } from './Components/Search';
// import { Note } from './Components/Note';
import { NoteList } from './Components/NoteList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      
      id: nanoid(),
      text: "Hello Someday We'll Test this",
      date: "6/2/2024"
    },
  

  ]);

  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes) {
      setNotes(savedNotes);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  },[notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes); 
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter( (notes) => notes.id !== id);
    setNotes(newNotes);
  }



  return (
    <div className="mode">
      <div className="container">
        <Header/>
        <Search handleSearchNote={setSearchText} />
        <NoteList notes={notes.filter((note) =>
       note.text.toLowerCase().includes(searchText))}

        handleAddNote={addNote}
         handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
