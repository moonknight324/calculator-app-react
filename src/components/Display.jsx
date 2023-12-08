import { useState } from "react";
import "../App.css"

function Display() {
  const [expression, setExpression] = useState("");

  const handleClear = () =>{
    setExpression("")
  }

  const handleDelete = () =>{
    
    if (typeof expression != "string"){
        let exp1 = expression.toString()
        setExpression(exp1.slice(0,-1))
        
    }else{
        setExpression(expression.slice(0,-1))
    }
    
  }

  const handleClickBtn= (e) =>{
    setExpression(expression+e)
  }

  const handleEvaluate = () => {
    setExpression(eval(expression))
  }
  
  return (
    <div>
      <div>
        <div >
          <input className="input-box" type="text" defaultValue={expression} />
        </div>
        <div>
          <button onClick={handleClear} className="ac">AC</button>
          <button onClick={handleDelete} className="del">DEL</button>
          <button onClick={() => handleClickBtn("+")} style={{backgroundColor: "#f5a818"}} className="btn">+</button>
        </div>
        <div>
          <button onClick={() => handleClickBtn("1")} className="btn">1</button>
          <button onClick={() => handleClickBtn("2")} className="btn">2</button>
          <button onClick={() => handleClickBtn("3")} className="btn">3</button>
          <button onClick={() => handleClickBtn("-")}  style={{backgroundColor: "#f5a818"}} className="btn">-</button>
        </div>
        <div>
          <button onClick={() => handleClickBtn("4")} className="btn">4</button>
          <button onClick={() => handleClickBtn("5")} className="btn">5</button>
          <button onClick={() => handleClickBtn("6")} className="btn">6</button>
          <button onClick={() => handleClickBtn("*")}  style={{backgroundColor: "#f5a818"}} className="btn">*</button>
        </div>
        <div>
          <button onClick={() => handleClickBtn("7")} className="btn">7</button>
          <button onClick={() => handleClickBtn("8")} className="btn">8</button>
          <button onClick={() => handleClickBtn("9")} className="btn">9</button>
          <button onClick={() => handleClickBtn("/")}  style={{backgroundColor: "#f5a818"}} className="btn">/</button>
        </div>
        <div>
          <button onClick={() => handleClickBtn(".")} className="btn">.</button>
          <button onClick={() => handleClickBtn("0")} className="btn">0</button>
          <button  style={{backgroundColor: "#f5a818"}} onClick={handleEvaluate} className="equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default Display;
