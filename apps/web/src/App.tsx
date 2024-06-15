import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container flex flex-col gap-2 items-start">
      <h1 className="group scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Vite + <span className="group-hover:text-blue-700">React</span>
      </h1>
      <p className="group leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      <div className="flex flex-row gap-2">
        <Button type="button" onClick={() => setCount((c) => c + 1)}>
          {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
