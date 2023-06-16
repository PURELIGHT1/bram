import React from 'react'
import TextField from '../../components/TextField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Swal from 'sweetalert2'
import useModalStore from '../../utils/helpers/useModalStore'
import { usePostFeedback } from '../../utils/hooks/queries'
import { Navigate } from 'react-router-dom'

let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
});

const Contact = () => {
    const { mutate } = usePostFeedback();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: () => {
                location.reload();
            },
            onError: () => {
                Swal.fire("Fail!", "Failed to add Feedback!", "error");
            }
        });
    };
  return (
   <>
      <div className='p-5 bg-white/60 ring-1 ring-blue-200 shadow-md shadow-blue-300 rounded-lg max-w-2xl w-full ml-auto mr-auto mt-0 xl:w-[95vw] relative top-12'>
        <div className='flex items-center justify-center lg:flex-col lg:gap-7'>
            <div className='grid items-center sm:text-center'>
                <h1 className='text-4xl md:text-3xl sm:text-2xl filter drop-shadow-lg font-bold text-slate-900'>
                    Let's Get In Touch
                </h1>
                <p className='text-base sm:text-sm xsm:text-xs font-medium'>Questions and Feedback? Love to hear from you</p>
            </div>
        </div>
         <div className="relative py-4 flex-auto">
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-0">
                    <div className="grid grid-cols-6 items-center mt-4">
                        <div className="col-span-5 row-span-5 flex mb-3">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium uppercase">
                                Name
                            </label>
                        </div>
                    </div>
                    <TextField
                        {...register('name')}
                        id="name"
                        placeholder="Your Name"
                        addstyle="col-span-3"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">
                            {errors.name.message}
                        </p>
                    )}
                   <div className="grid grid-cols-6 items-center mt-4">
                        <div className="col-span-5 row-span-5 flex mb-3">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium uppercase">
                                Email
                            </label>
                        </div>
                    </div>
                    <TextField
                        {...register('email')}
                        id="email"
                        placeholder="your@email.com"
                        addstyle="col-span-3"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">
                            {errors.email.message}
                        </p>
                    )}
                    <div className="grid grid-cols-6 items-center mt-4">
                        <div className="col-span-5 row-span-5 flex mb-3">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium uppercase">
                                Message
                            </label>
                        </div>
                    </div>
                    <TextField
                        {...register('message')}
                        typeCustom="true"
                        id="message"
                        placeholder="Your Message here..."
                    />
                     {errors.message && (
                        <p className="text-red-500 text-sm">
                            {errors.message.message}
                        </p>
                    )}
                    <div className="flex items-center justify-center gap-x-4 mt-8">
                    <button
                        type="submit"
                        className='py-2 px-6 mr-2 text-lg  font-medium text-white bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full transition-all duration-200 active:scale-90 right-0 shadow-lg shadow-emerald-400'
                    >
                        Submit
                    </button>
                    </div>
                    
                </div>
            </form>
        </div>
      </div>
   </>
  )
}

export default Contact