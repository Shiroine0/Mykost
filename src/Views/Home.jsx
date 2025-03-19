import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function Home() {
  return (
    <main class="w-full flex flex-row ">
      <div class="basis-2/3">
        <div class="flex p-4 ">
        <button type="button" class="border flex p-2 pl-3 pr-4 mr-2 text-xl min-w-40 bg-white w-auto rounded-full hover:bg-gray-300 ">
          <img class="h-8 " src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img>
          <span class="self-center align-middle whitespace-nowrap">Semua Tipe Kos</span>
        </button>
        <button type="button" class="mx-2 border text-xl align-middle px-7 min-w-24 bg-white rounded-full hover:bg-gray-300 ">Bulanan</button>
        <button type="button" class="mx-2 border text-xl align-middle px-7 min-w-24 bg-white rounded-full hover:bg-gray-300 ">Harga</button>
        <button type="button" class="mx-2 border text-xl align-middle px-7 min-w-24 bg-white rounded-full hover:bg-gray-300 ">Fasilitas</button>
        <button type="button" class="mx-2 border text-xl align-middle px-7 min-w-30 bg-white rounded-full hover:bg-gray-300 ">Aturan Kos</button>
        </div>
        <hr class="content-center mx-12 "></hr>
        
        <div class="flex p-4 ">
          <button type="button" class="align-middle border flex px-6 p-2 mr-2 min-w-24 bg-white w-auto rounded-full hover:bg-gray-300 ">
            <img class="h-7 mr-1" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img>
            <span class="self-center align-middle whitespace-nowrap">Promo Ngebut</span>
          </button>
          <button type="button" class=" align-middle border flex px-6 p-2 mx-2 min-w-24 bg-white w-auto rounded-full hover:bg-gray-300 ">
            <img class="h-7 mr-1" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img>
            <span class="self-center align-middle whitespace-nowrap">Dikelola KosKos</span>
          </button>
          <button type="button" class=" mx-2 border px-5 min-w-26 bg-white rounded-full hover:bg-gray-300 ">Kos Andalan</button>

        <Menu as="div" className="relative ">
          <div>
            <MenuButton className="mx-2 z-0 align-middle border pl-3 flex px-6 p-3 min-w-30 bg-white w-auto rounded-full hover:bg-gray-300">
              Paling Direkomendasikan
              <ChevronDownIcon aria-hidden="true" className="-mr-3 size-6 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Account settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Support
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  License
                </a>
              </MenuItem>
              <form action="#" method="POST">
                <MenuItem>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </Menu>
        </div>
        {/* untuk pilihan kosannya */}
        <div class="basis 1/2 grid grid-rows-1 md:grid-rows-3 gap-4 p-4">
            <a href="">
              <div class="flex flex-row  outline-2 outline-offset-2 outline-slate-200 bg-white rounded-lg shadow-lg">
                <div class="p-2"> 
                  <img class=" h-55 items-center rounded-lg" src="/bedroom-1.jpg" alt="Your Company"></img>
                </div>
                <div class="p-4 content-center items-center align-middle">
                  <h3 class="text-3xl font-semibold">Kosan Mewah</h3>
                  <p class="text-lg text-gray-500">Jl. Raya Kebayoran Lama No. 12, Jakarta Selatan</p>
                  <span class="text-2xl font-semibold">Rp. 1.000.000</span>
                </div>
              </div>
            </a>
            <a href="">
              <div class="flex flex-row  outline-2 outline-offset-2 outline-slate-200 bg-white rounded-lg shadow-lg">
                <div class="p-2"> 
                  <img class=" h-55 items-center rounded-lg" src="/bedroom-1.jpg" alt="Your Company"></img>
                </div>
                <div class="p-4 content-center items-center align-middle">
                  <h3 class="text-3xl font-semibold">Kosan Mewah</h3>
                  <p class="text-lg text-gray-500">Jl. Raya Kebayoran Lama No. 12, Jakarta Selatan</p>
                  <span class="text-2xl font-semibold">Rp. 1.000.000</span>
                </div>
              </div>
            </a>
        </div>
      </div>
      <div class="sticky top-0 basis-1/3 bg-black h-dvh">
          
      </div>  
    </main>
  );
}

export default Home;