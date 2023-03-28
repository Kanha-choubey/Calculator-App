import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult(" ");
  };
  const backSpance = () => {
    setResult(result.slice(0, -1)); //result.length-1
  };
  const calCulate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <section>
      <div className="calculator">
        <form>
          <input type="text" placeholder="0" id="inputBox" value={result} />
        </form>
        <div>
          <button className="btn operator" id="clear" onClick={clear}>
            AC
          </button>
          <button className="btn operator" id="backspace" onClick={backSpance}>
            DEL
          </button>

          <button name="%" className="btn operator" onClick={handleClick}>
            %
          </button>
          <button name="/" className=" operator" onClick={handleClick}>
            /
          </button>
        </div>

        <div>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick} className="operator">
            *
          </button>
        </div>
        <div>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick} className="operator">
            -
          </button>
        </div>
        <div>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick} className="operator">
            +
          </button>
        </div>
        <div>
          <button name="00" onClick={handleClick}>
            00
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button onClick={calCulate} className="equalbtn">
            =
          </button>
        </div>

        <script src="script.js"></script>
      </div>
    </section>
  );
}

export default App;
