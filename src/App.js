
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
      text: "Why did the Leafeon get so good at math?,It practiced every day until it was perfect from root to stem!",
      date: "6/7/2023"
    },
    {
      id: nanoid(),
      text: "How do you know when an Eevee is telling a lie? Its tail starts to wag like a Leafeon in a hurricane!",
      date: "6/7/2023"
    },
    {
      id: nanoid(),
      text: "Why did the Jolteon always get grounded? Because it couldn't resist zapping the family appliances!",
      date: "6/7/2023"
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
      date: date.toLocaleDateString(),
      // class: "notesApp",
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
