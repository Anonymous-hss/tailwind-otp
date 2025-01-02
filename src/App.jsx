import { Button } from "./components/Buttons";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="h-screen bg-blue-700">
      <Input type={Text} placeholder={"Enter Something Please"}></Input>
      <Button disabled={true} onClick={1}>
        Sign In
      </Button>
    </div>
  );
}

export default App;
