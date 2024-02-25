import axios from "axios";
import React, { useState,  useRef } from "react";
// import Card from './Card';


const API_URL='https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGES=20;

const HomePage = () => {

  const text = useRef(null);
  const [response, setResponse] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [page, setPage] = useState(1)


  const fetchRequest = async () => {
    try {
        const { data } = await axios.get(`${API_URL}?query=${text.current.value}&page=${1}&per_page=${IMAGES_PER_PAGES}&client_id=${import.meta.env.VITE_API_KEY}`)
        // console.log(data, "fetch result func");
        setResponse(data.results)
        setTotalPages(data.total_pages)

    } catch (error) {
        console.log(error)
    }
  };

  const downloadHandler = () =>{

  }

  const handelSubmit = (e) => {
    e.preventDefault();
    fetchRequest();
    // console.log(text.current.value)
  };

  // console.log(import.meta.env.VITE_API_KEY)
  return (
    <>
      <div className="mx-auto">
        <div className=" bg-slate-700 h-auto px-10 py-20 w-full">
          <form onSubmit={handelSubmit}>
            <div className="mx-auto max-w-3xl">
              {!text && (
                <div className="  flex space-x-1 items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-white text-lg font-semibold">
                    Please enter something
                  </p>
                </div>
              )}
              <div className="flex space-x-4">
                <div className="flex rounded-md overflow-hidden w-full">
                  <input
                    type="text"
                    placeholder="Enter your prompt..."
                    ref={text}
                    className=" px-5 w-full rounded-md rounded-r-none"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        </div>

{/* image Card section */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700 bg-slate-700 shadow-md bg-clip-border w-full">
  {response.map((val) => {
    return (
      <div key={val.id} className="md:col-span-1 relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ">
        <a href={val.urls.regular} title={val.description} >
          <img
            src={val.urls.regular}
            alt={val.alt_description}
            className="w-full h-auto"
            style={{ height: "200px" }} // Set a fixed height for image container
          />
        </a>
      </div>
    );
  })}
</div>

    </>

  );
};
export default HomePage;
