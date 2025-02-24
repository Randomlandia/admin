"use client";
import { Provider } from "@/components/dashboard/Context";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { logOut } from "./actions";

import Link from "next/link";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("default-sidebar");
      if (isSidebarOpen && sidebar && !sidebar.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleLogOut = async () => {
    const result = await logOut();
    if (result) router.push("/login");
  };

  return (
    <Provider>
      <section className="fix-h-screen max-w-screen bg-oldwhite">
        <button
          onClick={toggleSidebar}
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex  items-center p-2 mt-2 ms-3 text-sm text-blue-text rounded-lg sm:hidden  focus:outline-none focus:ring-2 hover:bg-blue hover:text-white focus:ring-blue"
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-orange">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/inicio/"
                  className={`${
                    pathname === "/inicio/" ? "font-bold underline" : ""
                  } flex items-center p-2 rounded-lg text-white hover:bg-yellow-800/30 group`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Inicio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/sandias"
                  className={`${
                    pathname === "/dashboard/sandias/"
                      ? "font-bold underline"
                      : ""
                  } flex items-center p-2 rounded-lg text-white hover:bg-yellow-800/30 group`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sandías</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/keys/"
                  className={`${
                    pathname === "/dashboard/keys/" ? "font-bold underline" : ""
                  } flex items-center p-2 rounded-lg text-white hover:bg-yellow-800/30 group`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Keys</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/biometric"
                  className={`${
                    pathname === "/dashboard/biometric"
                      ? "font-bold underline"
                      : ""
                  } flex items-center p-2 rounded-lg text-white hover:bg-yellow-800/30 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-200"
                    viewBox="0 -960 960 960"
                    fill="#e8eaed"
                  >
                    <path d="M280-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 120q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 46T506-560h335l79 79-140 160-100-79-80 80-80-80h-14q-25 72-87 116t-139 44Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Password
                  </span>
                </Link>
              </li>
              <hr className="h-px my-8 border-0 bg-gray-100/85 " />
              <li>
                <button
                  className="flex items-center p-2 rounded-lg text-white hover:bg-yellow-800/30 group"
                  onClick={handleLogOut}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Cerrar Sesión
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30"
            onClick={toggleSidebar}
          ></div>
        )}

        <main className="p-8 overflow-hidden sm:ml-64 text-blue-text h-full">
          {children}
        </main>
      </section>{" "}
    </Provider>
  );
}
