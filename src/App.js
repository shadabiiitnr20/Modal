import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-center font-bold underline text-3xl m-2">Modal</h2>
        <button
          className="w-36 text-white text-center bg-blue-500 hover:bg-blue-800 m-2 p-2 rounded-lg"
          onClick={() => setIsVisible(true)}
        >
          Open Modal
        </button>
      </div>
      <Modal isVisible={isVisible} onClose={onClose} />
    </>
  );
}

export default App;
