import React from 'react'
import { useForm } from "react-hook-form"

const CreateBook = () => {
  return (
    <div>
      <form className="form">
        <p> Create Book </p>
        <label> Title </label>
        <input name="Title" />
        <label> Tagline </label>
        <input name="Tagline" />
        <label> Author </label>
        <input name="Author" />
      </form>
    </div>  
  );
}

export default CreateBook;