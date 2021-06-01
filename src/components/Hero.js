import React from 'react'
import SignupForm from './SignupForm'
import { Tick } from '../icons'

const outcomes = [
  "how to build 1",
  "how to build 2",
  "how to build 3",
]

const ComingSoonBadge = () => (
  <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md mb-4 inline-block">
    Coming Soon!
  </span>
);

function Hero() {
  return (
    <div className="border border-gray-200 md:flex-row md:flex">
      <div className="bg-gray-100 text-center md:w-1/3">
        <img className="object-contain mx-auto" alt="nextjs" src="/assets/img_nextjs-101-cover.png" />
      </div>
      <div className="py-8 px-4 md:px-8 self-center md:w-2/3">
        <h2 className="font-bold text-2xl mb-3">What you'll learn</h2>
        {outcomes && (
          <ul className="mb-6">
            {outcomes.map(index => {
              return (
                <li className="text-gray-700 mb-2 flex" key={index}>
                  <span className="self-center mr-2"><Tick className="h-4" /></span>
                  <span className="opacity-75">{index}</span>
                </li>
              );
            })}
          </ul>
        )}
        <ComingSoonBadge />
        <SignupForm />
      </div>
    </div>
  )
}

export default Hero
