import { useState } from "react";
import "./App.css";
import Input from "@/components/Input";
import Button from "@/components/Button";

function App() {
  const [state] = useState();

  console.log(state);
  return (
    <>
      <main className="bg-slate-300 h-screen flex flex-col items-center justify-center">
        <section className="flex flex-col justify-center items-center bg-slate-800 w-3/5 h-60 py-36 rounded-lg ">
          <Input label="Your name" id="name" />
          <Input label="Your age" id="age" type="number" />
          <Button
            el="button"
            className="py-2 mt-2 px-5 font-bold uppercase rounded-md text-white bg-green-600 hover:bg-green-400 hover:text-slate-900"
          >
            Submit
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
