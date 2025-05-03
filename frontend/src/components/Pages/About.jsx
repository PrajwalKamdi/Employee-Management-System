import React from 'react'

const About = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">About Our Company</h1>
      <p className="text-lg mb-6">
        Welcome to our company! We are dedicated to fostering a culture of excellence and innovation. Our mission is to empower individuals and teams to achieve their best.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-lg">Collaborative Environment</li>
        <li className="text-lg">Supportive Team Members</li>
        <li className="text-lg">Innovative Approach</li>
        <li className="text-lg">Continuous Learning Opportunities</li>
        <li className="text-lg">Commitment to Excellence</li>
      </ul>
    </div>
  )
}

export default About
