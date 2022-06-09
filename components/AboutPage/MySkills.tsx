import React from 'react'
import Skill from './Skill'

const MySkills = () => {
  return (
    <div className="flex flex-col items-center bg-creamy px-10 py-20 lg:px-20">
      <h1 className="text-4xl font-semibold">
        My <span className="text-purple-500">Skills</span>
      </h1>
      <div className="mt-5 flex w-full overflow-x-scroll scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-900">
        <div className="flex space-x-10 py-10 px-5">
          <Skill percent={90} skill="HTML5" />
          <Skill percent={88} skill="CSS3" />
          <Skill percent={88} skill="JavaScript" />
          <Skill percent={92} skill="Node.js" />
          <Skill percent={90} skill="React.js/Next.js" />
          <Skill percent={70} skill="React Native" />
          <Skill percent={92} skill="MongoDB" />
          <Skill percent={80} skill="Postgres" />
          <Skill percent={75} skill="Graphql" />
          <Skill percent={80} skill="Git/GitHub" />
          <Skill percent={95} skill="Tailwind CSS" />
          <Skill percent={80} skill="TypeScript" />
          <Skill percent={92} skill="Figma" />
          <Skill percent={80} skill="Adobe XD" />
          <Skill percent={93} skill="Bootstrap 5" />
          <Skill percent={88} skill="PhotoShop" />
          <Skill percent={95} skill="MSOffice" />
          <Skill percent={96} skill="CorelDraw" />
        </div>
      </div>
    </div>
  )
}

export default MySkills
