import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import { variables } from "./variables";

const BookCard = ({ Book }) => {
    const DeleteBook = async(obj) => {
        axios.delete(variables.API_URL+'Books/'+obj.Book.Id)  
            .then(response => {
              console.log(response);
            })  
            .catch(function (error) {  
              console.log(error);  
            })  
      }

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{Book.Name}</h4>
                        <div>{Book.Price}</div>
                        <div>{Book.Category}</div>
                        <div>{Book.Author}</div>
                        <p className="card-text"> Rack {Book.Rack}</p>
                        <a href="#" className="btn btn-danger" onClick={()=> DeleteBook({Book})}>Delete</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCard;