"use client"

import Image from 'next/image'
import { useState,FormEvent } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center h-screen ">
        <div className="text-center">
          <h1 className="mb-5 text-4xl">Welcome to Nibble</h1>
          <p className="mb-5">We know there isn't much here right now but we're coming soon!</p>
          <form className="mb-5 mx-auto" onSubmit={handleSubmit}>
            <label htmlFor="email" className="block mb-2">If you would like to be notified when we go live, please leave your email below:</label>
            <input type="email" id="email" name="email" className="block px-3 py-2 border rounded-md mx-auto text-center" required 
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="submit" value="Submit" className="mt-2 px-3 py-2 bg-blue-600 text-white rounded-md cursor-pointer block mx-auto" />
          </form>
          <p className="mb-5">Any ideas or suggestions, email <a href="mailto:admin@nibble.com" className="underline text-blue-600">admin@nibble.com</a> :)</p>
          <p>Thank you</p>
        </div>
      </div>
    </main>
  )
}
