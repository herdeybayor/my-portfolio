import React from 'react'

interface Props {
  percent: number
  skill: string
}

const Skill = ({ percent, skill }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="skill relative h-32 w-32  transition-transform duration-300 hover:scale-110">
        <div className="skill__outer flex h-full w-full items-center justify-center rounded-full">
          <div className="skill__inner flex h-4/5 w-4/5 items-center justify-center rounded-full">
            <p className="text-2xl font-bold">{percent}%</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="136px"
          height="136px"
          className="arc absolute -top-1 -left-1"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            style={{ strokeDashoffset: `calc((${100 - percent}/100)*370)` }}
            cx="68"
            cy="68"
            r="58"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold">{skill}</h2>
    </div>
  )
}

export default Skill
