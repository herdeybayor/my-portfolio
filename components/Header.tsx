import Image from 'next/image'

const Header = () => {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between py-5 px-10">
      <Image
        src="/assets/images/my-logo.png"
        width={60}
        height={60}
        alt="logo"
      />
      <div className="bugger group flex cursor-pointer flex-col items-end space-y-2 transition">
        <div className="h-1 w-12 bg-black"></div>
        <div
          style={{ transition: '300ms linear' }}
          className="h-1 w-9 bg-black group-hover:w-full"
        ></div>
        <div
          style={{ transition: '300ms linear' }}
          className="h-1 w-6 bg-black group-hover:w-full"
        ></div>
      </div>
    </div>
  )
}

export default Header
