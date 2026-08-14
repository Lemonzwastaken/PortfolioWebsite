"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"


export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (templateParams) => {
    emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          templateParams,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            limitRate: {
              throttle: 5000, // cannot send more than one email in 5 seconds
            },
          }
        )
        .then(
            () => {
                console.log("Successful")
            },
            (error) => {
                console.log('Failed....', error.text)
            }
        );
  };

  const onSubmit = (data) => {

    const templateParams = {
        to_name: "Aaradhy",
        name: data.name,
        email: data.email,
        message: data.message,
    }

    sendEmail(templateParams)
  }
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true, maxLength: 80 })}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <div className='w-full'>
        <textarea
          placeholder="Message"
          {...register("message", { required: true, maxLength: 256, minLength: 50 })}
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />
        {errors.message && (
          <p className='text-red-400 text-sm mt-1'>
            Message must be greater than 50 characters
          </p>
        )}
      </div>
      <input
      value="Send your message"
      className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 
      border-solid hover:shadowglass-sm backdrop-blur-sm text-foreground focus:outline-none 
      focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
    </form>
  );
}