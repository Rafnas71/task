import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Popup = ({ isOpen, setIsOpen }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const fetchData = async () => {
    const res = await fetch(`/api/date/${month}/${day}`);
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      fetchData();
    } else {
      setData(null);
    }
  }, [isOpen]);

  if (loading) {
    return (
      <div class=" fixed inset-0 bg-black bg-opacity-60 flex gap-4 p-4 flex-wrap justify-center items-center">
        <img
          class="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/70469/loading.svg"
          alt="Loading icon"
        />
      </div>
    );
  }

  console.log(data.events);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg max-h-96 max-w-96 overflow-y-scroll scrollbar-hide text-black">
        <IoMdClose
          size={30}
          className="ms-auto"
          onClick={() => setIsOpen(!isOpen)}
          color="black"
        />
        <h2 className="text-2xl mb-4">{`Historical events on ${data?.date}`}</h2>
        <table className="table-auto ">
          <thead>
            <tr>
              <th className="p-3">Year</th>
              <th className="p-3">Event</th>
            </tr>
          </thead>
          <tbody>
            {data.events.map((item) => (
              <tr key={item.id}>
                <td className="p-3">{item.year}</td>
                <td className="p-3">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="m-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-red-500 text-white rounded font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
