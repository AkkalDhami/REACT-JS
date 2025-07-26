// import "./App.css";
import Card from "./components/Card";
import DerivedState from "./components/DerivedState";
import LiftStateup from "./components/LiftStateup";
import Registration from "./components/hooks/useState/Registration";
import ShortCircuit from "./components/ShortCircuit";
import Todo from "./projects/todo/Todo";
import Login from "./components/hooks/useState/Login";
import ReactUseEffect from "./components/hooks/useEffect/ReactUseEffect";
import UseEffectChallange from "./components/hooks/useEffect/UseEffectChallange";
import Cleanup from "./components/hooks/useEffect/Cleanup";

function App() {
  return (
    <section className="flex flex-col gap-3 justify-center w-full text-white p-12 rounded ">
      {/* <Card /> */}
      {/* <DerivedState /> */}
      {/* <LiftStateup /> */}
      {/* <Todo /> */}
      {/* <ShortCircuit /> */}
      {/* <div className="grid grid-cols-2 gap-3">
        <Registration />
        <Login />
      </div> */}
      {/* <ReactUseEffect /> */}
      {/* <UseEffectChallange /> */}
      <Cleanup />
    </section>
  );
} //

export default App;
