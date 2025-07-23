import "./App.css";
import Card from "./components/Card";
import DerivedState from "./components/DerivedState";
import LiftStateup from "./components/LiftStateup";
function App() {
  return (
    <section className="flex flex-col gap-3  text-white  p-12 rounded ">
      {/* <Card /> */}
      {/* <DerivedState /> */}
      <LiftStateup />
    </section>
  );
} //

export default App;
