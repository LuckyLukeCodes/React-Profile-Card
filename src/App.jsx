import Card from "./components/Card";
import yoda from "./assets/images/yoda.jpg";
import darth from "./assets/images/darth.jpg";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 lg:flex-row">
      <Card
        color="to-green-800/20"
        name="Master Yoda"
        img={yoda}
        textColor="text-green-600"
        btnColor="bg-green-600"
        status="The Wise One"
        followers="2.5M"
      />
      <Card
        color="to-red-800/20"
        name="Darth Vadar"
        img={darth}
        textColor="text-red-600"
        btnColor="bg-red-600"
        status="Dark Side"
        followers="1.2M"
      />
    </div>
  );
}

export default App;
