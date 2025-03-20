import { createSignal, type Component, type JSX } from "solid-js";

type Props = {
  initValue: number;
  children?: JSX.Element;
};

// TODO: al desectructurar las props se pierde la reactividad (propio de solid.js)
export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
      {props.children}
      <h3 class="text-xl">Value: {counter()}</h3>

      <button
        class="bg-blue-500 rounded p-2 mr-2"
        onClick={() => setCounter((prev) => ++prev)}
      >
        +1
      </button>
      <button
        class="bg-blue-500 rounded p-2"
        onClick={() => setCounter((prev) => --prev)}
      >
        -1
      </button>
    </>
  );
};
