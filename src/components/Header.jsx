import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { UserRoundSearch } from 'lucide-react';
import { SearchSlash } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { NotebookPen } from 'lucide-react';




export default function Header() {
  const links = ['Info', 'About Us', 'Contact', 'Book a Consultation'];
  const routes = ['/info', '/about', '/contact', '/booking'];
  const icons = [
    <BookOpen className="w-5 h-5 mr-2"/>, 
    <SearchSlash className="w-5 h-5 mr-2"/>, 
    <UserRoundSearch className="w-5 h-5 mr-2"/>, 
    <NotebookPen className="w-5 h-5 mr-2"/>
  ]

  return (
    <nav class="block w-full max-w-screen-xl px-0 py-0 mx-auto text-white bg-white lg:px-0  mt-0 pt-0">
      <div class="container flex flex-wrap items-center justify-between mx-auto text-black">
        <span
          class="mr-4 block cursor-pointer py-1.5 text-sm text-left font-semibold">
          <Link to='/'>Wicked Interactive <br></br>Storytelling</Link>
        </span>
        <div class="hidden lg:block">
          <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              {links.map((link, index) => {
                return (
                  <Link to={`${routes[index]}`}>
                    <Button variant='ghost'className="hover:text-violet-600">
                      {icons[index]}
                      {link}
                    </Button>
                  </Link>
                );
            })}
            </li>
            {/* <li
              class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
    
    
              <a href="#" class="flex items-center">
                Account
              </a>
            </li>
            <li
              class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
    
    
              <a href="#" class="flex items-center">
                Blocks
              </a>
            </li>
            <li
              class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
    
    
              <a href="#" class="flex items-center">
                Docs
              </a>
            </li> */}
          </ul>
        </div>
        <button
          class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button">
          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>

    

  );
}


