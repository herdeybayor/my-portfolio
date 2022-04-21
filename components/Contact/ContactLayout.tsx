import React from 'react'

interface Props {
  title: string
  subtitle: string
}

const ContactLayout: React.FC<Props> = ({ children, title, subtitle }) => {
  return (
    <div className="flex items-center space-x-5 text-gray-400">
      <div className="text-6xl md:text-7xl lg:text-8xl">{children}</div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="break-all text-lg">{subtitle}</p>
      </div>
    </div>
  )
}

export default ContactLayout
