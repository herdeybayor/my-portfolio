import React from 'react'
import ContactLayout from './ContactLayout'
import { BiUserPin } from 'react-icons/bi'
import { RiUserLocationLine } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'

const ContactInfo = () => {
  return (
    <div className="contact__container col-span-4 rounded-2xl bg-creamy px-5 py-10 sm:rounded-[3rem] sm:py-16 sm:px-10">
      <h1 className="mb-5 text-center text-xl font-semibold">Contact Info</h1>
      <div className="flex flex-col space-y-5">
        <ContactLayout title="Name" subtitle="Adebayo Sherifdeen">
          <BiUserPin />
        </ContactLayout>
        <ContactLayout title="Location" subtitle="Lagos, Nigeria.">
          <RiUserLocationLine />
        </ContactLayout>
        <ContactLayout title="Email" subtitle="herdeybayor4real@gmail.com">
          <MdAlternateEmail />
        </ContactLayout>
      </div>
    </div>
  )
}

export default ContactInfo
