"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';

const container = {
  hidden: {opacity:0},
  show: {
    opacity: 1,
    transition:{
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const item= {
  hidden: {scale:0},
  show: {scale:1}
}



export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (templateParams) => {
    const toastId = toast.loading("Sending your message please wait....")
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
                toast.success("Message sent :D", {
                  id:toastId
                })
            },
            (error) => {
                toast.error("There was an error sending your message :(. Please try again later", 
                  {
                    id:toastId
                  })
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
    <>
    <Toaster richColors={true}/>

    <motion.form 
      variants={container}
      initial="hidden"
      animate="show"

      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >

      <div className='w-full'>
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          {...register("name", { required: true, minLength: 3, maxLength: 80 })}
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />

        {errors.name?.type === "required" && (
          <p className='text-red-400 text-sm mt-1'>Name is required</p>
        )}

        {errors.name?.type === "minLength" && (
          <p className='text-red-400 text-sm mt-1'>Name must be at least 3 characters</p>
        )}

        {errors.name?.type === "maxLength" && (
          <p className='text-red-400 text-sm mt-1'>Name must be under 80 characters</p>
        )}
      </div>


      <motion.input
        variants={item}
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />


      <div className='w-full'>
        <motion.textarea
          variants={item}
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


      <motion.input
        variants={item}
        value="Send your message"
        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 
        border-solid hover:shadowglass-sm backdrop-blur-sm text-foreground focus:outline-none 
        focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
        type="submit"
      />

    </motion.form>
    </>
  );
}