// import "./App.css";
import Card from "./components/Card";
import DerivedState from "./components/DerivedState";
import LiftStateup from "./components/LiftStateup";
import Registration from "./components/hooks/useState/Registration";
import ShortCircuit from "./components/ShortCircuit";
import Todo from "./projects/todo/Todo";
function App() {
  return (
    <section className="flex flex-col gap-3 items-center justify-center w-full text-white p-12 rounded ">
      {/* <Card /> */}
      {/* <DerivedState /> */}
      {/* <LiftStateup /> */}
      {/* <Todo /> */}
      {/* <ShortCircuit /> */}
      <Registration />
    </section>
  );
} //

export default App;
