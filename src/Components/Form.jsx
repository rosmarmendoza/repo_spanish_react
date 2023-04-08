import React, { useState, useRef } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const validateForm = () => {
    if (name.length < 6) {
      setErrorMsg("Please verify your information again");
      return false;
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i)) {
      setErrorMsg("Please verify your information again");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert(`Thanks ${name}, we will contact you as soon as possible by email`);
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col max-w-xs m-auto">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <label htmlFor="name" className="dark:text-gray-100">Full Name</label>
        <input className="border
        border-gray-400 dark:border-red-300 p-2 rounded-md"
          type="text"
          placeholder="luis cardenas"
          value={name}
          id="name"
          onChange={(event) => setName(event.target.value)} />
        <label htmlFor="email" className="dark:text-gray-100">Email</label>
        <input className="border
        border-gray-400 dark:border-red-300 p-2 rounded-md"
          type="text"
          placeholder="hola@gmail.com"
          value={email}
          id="email"
          onChange={(event) => setEmail(event.target.value)} />
        <input className="bg-red-300
        py-2 rounded-lg mt-4 dark:bg-white
        dark:text-red-700 font-semibold border-2 dark:border-red-700"
          type="submit"
          value="Send" />
      </form>
      {errorMsg && (
        <p className="text-red-700 mt-2 text-sm">{errorMsg}</p>
      )}
    </div>
  );
};

export default Form;