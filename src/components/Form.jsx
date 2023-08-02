import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";

function Form({ formSubc }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log(errors);

  const onSub = (data) => {
    data.id = Date.now();
    data.fav = false;
    formSubc(data);
    // console.log(data)
    reset();
  };

  return (
    <div className="form-control">
      <form onSubmit={handleSubmit(onSub)}>
        {/* onSub is a fn we're goin to pass */}
        <h1>Add Contact</h1>
        <input
          type="text"
          placeholder="Enter Name"
          id="name"
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[A-Za-z\s'-]{1,50}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.name && (
          <small className="alert-box">{errors.name.message}</small>
        )}
        <input
          type="text"
          name=""
          id="mail"
          placeholder="Enter your e-mail"
          {...register("mail", {
            required: "E-mail is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.mail && (
          <small className="alert-box">{errors.mail.message}</small>
        )}
        <input
          type="text"
          name=""
          id="phone"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Mobile Number is required",
            pattern: {
              value: /^(?:(?!0|91|\+91)[789]\d{9})$/i,
              message: "Invalid Phone Number",
            },
          })}
        />
        {errors.phone && (
          <small className="alert-box">{errors.phone.message}</small>
        )}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
