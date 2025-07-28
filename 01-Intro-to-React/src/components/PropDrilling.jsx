const PropDrilling = () => {
  return (
    <div className="bg-zinc-900 p-10 min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl">Prop Drilling</h1>
      <ChildComponent data="Prop Drilling" />
    </div>
  );
};

const ChildComponent = ({ data }) => {
  return (
    <div className="">
      <h1 className="text-4xl">Child Component</h1>
      <GrandChildComponent data={data} />
    </div>
  );
};

const GrandChildComponent = ({ data }) => {
  return (
    <div className="">
      <h1 className="text-4xl">Grand Child Component</h1>
      <p>{data}</p>
    </div>
  );
};

export default PropDrilling;
