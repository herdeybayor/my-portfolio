import React from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

// interface Data {name:string, email:string,subject: string, message:string}

const MessageMe = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: any) => {
    const notification = toast.loading('Sending Message...', {
      style: {
        background: 'white',
        color: 'green',
        fontWeight: 'bolder',
        fontSize: '17px',
        padding: '20px',
      },
    })
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.status === 200) {
        toast.success('Message Sent!')
      }
    } catch (error) {
      console.log('Error Sending Message')
      toast.error('Whoops... Something Went Wrong!', {
        duration: 8000,
        style: {
          background: 'red',
          color: 'white',
          fontWeight: 'bolder',
          fontSize: '17px',
          padding: '20px',
        },
      })
    } finally {
      reset({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      toast.dismiss(notification)
    }
  }
  return (
    <div className="contact__container col-span-6 rounded-2xl bg-creamy px-5 py-10 sm:rounded-[3rem] sm:py-16 sm:px-10">
      <Toaster position="bottom-center" />
      <h1 className="mb-5 text-center text-xl font-semibold">Message Me</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5"
      >
        <div className="grid grid-rows-2 gap-5 md:grid-cols-2 md:grid-rows-none">
          <input
            className="contact__input rounded-full"
            type="text"
            placeholder="Enter your Name"
            required
            {...register('name')}
          />
          <input
            className="contact__input rounded-full"
            type="email"
            placeholder="Enter your Email"
            required
            {...register('email')}
          />
        </div>
        <input
          className="contact__input rounded-full"
          type="text"
          placeholder="Subject of Message"
          required
          {...register('subject')}
        />
        <textarea
          className="contact__input rounded-xl"
          rows={7}
          placeholder="Enter your message..."
          required
          {...register('message')}
        ></textarea>
        <button
          type="submit"
          className="contact__submit rounded-full bg-purple-500 py-5 font-medium text-white transition-all duration-300 hover:bg-purple-400"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default MessageMe
