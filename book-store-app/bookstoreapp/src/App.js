import logo from './logo.svg';
import './App.css';
import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import axios from 'axios'; 
import { variables } from './variables';

function App() {
  const [Books,setBooks] = useState([]);
  const [SearchTerm, setSearchTerm] = useState([]);

  const SearchBook = async(title) => {
    axios.get(variables.API_URL+'Books')  
        .then(response => {
          setBooks(response.data);
          console.log(Books);
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
  }

  useEffect(()=>{
    SearchBook(SearchTerm);
  },[]);

  return (
    <div className="App">
      {Books.map((Book) => (
          <BookCard Book={Book} />
        ))}
    </div>
  );
}

export default App;
