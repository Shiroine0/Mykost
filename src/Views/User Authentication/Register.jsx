import { Link } from "react-router-dom"

function Register(){
  return(
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto size-24 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
        </div>
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div class="px-5 py-7">
            {/* Register */}
            <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
            <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <label class="font-semibold text-sm text-gray-600 pb-1 block">E-Mail</label>
            <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
            <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <label class="font-semibold text-sm text-gray-600 pb-1 block">Confirm Password</label>
            <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <button type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
              <span class="inline-block mr-2">Sign Up</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          <div class="py-5 text-center">
            <span class="font-semibold text-sm text-gray-400 pb-1 block">
              <span>Already have an account? </span>
              <Link to="/Login" class="text-blue-400 hover:text-blue-700 focus:text-blue-700">Login</Link>
            </span>
          </div>
        </div>  
        <div class="py-5">
          <div class="grid grid-cols-2 gap-1">
            <div class="text-center sm:text-left whitespace-nowrap">
                <Link to="/">
                  <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 inline-block align-text-top">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span class="inline-block ml-1">Back</span>
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>  
    );
}

export default Register;