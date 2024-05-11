import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import { variables } from "./variables";

const AddBook = () => {
    const [Book,setBooks] = useState({});

    const AddBook = async(obj) => {

        console.log(obj.Book);

        // axios.post(variables.API_URL+'Books/'+obj.Book.Id)  
        //     .then(response => {
        //       console.log(response);
        //     })  
        //     .catch(function (error) {  
        //       console.log(error);  
        //     })  
      }

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <input className="input" value={Book.Name} />
                        <div>{Book.Price}</div>
                        <div>{Book.Category}</div>
                        <div>{Book.Author}</div>
                        <p className="card-text"> Rack {Book.Rack}</p>
                        <a href="#" className="btn btn-danger" onClick={()=> AddBook({Book})}>Delete</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBook;