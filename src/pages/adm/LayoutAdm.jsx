import { Outlet } from "react-router-dom";
import Logo from "../../assets/waiter.svg"
import {  NavLink } from "react-router-dom"
import NavMobileMenu from '@/componentes/NavMobileAdm';
import qrscan from "@/assets/icon-qrscan.svg"
import impressroa from "@/assets/icon-impressora.svg"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const LayoutAdm = () => {
  return (
    <>
    <SidebarProvider>
      <AppSidebar />
            <header className="bg-(--primario-700) h-24 rounded-bl-4xl w-full px-8 py-7 flex mb-3">
              <nav className= 'flex justify-between items-center-safe w-full xl:px-24'>
                <div className="flex gap items-center">
                  <div className="flex gap-1 items-center">    
                  <SidebarTrigger className="-ml-1 text-(--terciario-200)"/>
                  <Separator
                    orientation="vertical"
                    className="mr-3 data-[orientation=vertical]:h-8"
                  />
                  </div>
                  <NavLink to="/adm/pedidos">
                    <img className="w-36 h-auto" src={Logo} alt="logo waiter"/>
                  </NavLink>
                </div>

                <div className='flex 
                gap-7'>
                  <button className=" bg-(--terciario-300) py-2.5 px-2.5 rounded-full">
                    <img src={qrscan} alt="" />
                  </button>

                  <button className=" bg-(--terciario-300) py-2.5 px-2.5 rounded-full">
                    <img src={impressroa} alt="" />
                  </button>
                </div>
              </nav>
            </header>
    </SidebarProvider>

       <Outlet />
       <div className='w-[300px] md:hidden'>
          <NavMobileMenu/>
        </div>
    </>
  )
}

export default LayoutAdm