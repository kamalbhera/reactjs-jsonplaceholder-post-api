import React,{useState, useEffect} from 'react'

import axios from 'axios'
import Posts from './Posts';
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
<div>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
              <NavLink to='/posts' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Posts</NavLink>

            </div>
          </div>
        </div>
      </div>
    </div>
 </nav>
  <main>
    <h1 className="text-2xl text-center text-green-700">Fetch The post & comments from jsonplaceholder api</h1>
  </main>
</div>

    )
}

export default Navbar
