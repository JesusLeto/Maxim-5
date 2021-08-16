import React, {useState, useContext} from "react";
import StringTable from "./StringTable";
import ThemeContext from "./context";


const App = () => {

  const {TableArr, setTableArr} = useContext(ThemeContext)
  const [CountString, setCountString] = useState(1);
  const [CountColumn, setCountColumn] = useState(1);
  console.log("Table", TableArr)

  const ConfirmRemoveString = newTableArr => {
    if(window.confirm("Are youre shure"))
       newTableArr.pop() 
  }

  const ConfirmRemoveColumn = newTableArr => {
    if(window.confirm("Are youre delete column"))
      newTableArr.forEach(elem => elem.pop())
  }

  
  const ChangeTable = e => {
    switch(e.target.className){

      case "columnAdd":
        TableArr.forEach(Element => {
          Element.push(null)
        })
        localStorage.setItem("Table", JSON.stringify(TableArr));
        setTableArr(JSON.parse(localStorage.getItem("Table")));
        setCountColumn(prev => prev+1);
        break;

      case "columnRemove":
        if(CountColumn === 1)
          break;
        else{
          +[...TableArr.filter(elem => elem[elem.length - 1] != null)].length ?
            ConfirmRemoveColumn(TableArr):
            TableArr.forEach(elem => elem.pop())

          localStorage.setItem("Table", JSON.stringify(TableArr))
          setTableArr(JSON.parse(localStorage.getItem("Table")));  
          setCountColumn(prev => prev-1)
          break;
        }  

      case "stringAdd":
        TableArr.push(new Array(CountColumn).fill(null));
        localStorage.setItem("Table", JSON.stringify(TableArr))
        setTableArr(JSON.parse(localStorage.getItem("Table")));
        setCountString(prev => prev+1);
        break;

      case "stringRemove":
        if(CountString === 1)
          break;
        else{
          +[...TableArr[TableArr.length - 1]].filter(elem => elem != null).length ? 
            ConfirmRemoveString(TableArr): TableArr.pop()

          localStorage.setItem("Table", JSON.stringify(TableArr))
          setTableArr(JSON.parse(localStorage.getItem("Table")));
          setCountString(prev => prev-1)
          break;
        } 
      default:
        break;      
    }
  }

  return(
    <div>
      {console.log(JSON.parse(localStorage.getItem("Table")))}
      <div className="tabble--block">
      <table className = "table">
        {
          TableArr.map((Element, i) => {
            return(
              <StringTable ThisString = {Element} indexStr = {i} key = {i}/>
            )
          })
        }
      </table> 



      <div className="button--column">
        <button className = "columnAdd" onClick = {e => ChangeTable(e)}>+</button>
        <button className = "columnRemove" onClick = {e => ChangeTable(e)}>-</button>
      </div>
      </div>
      <div className="button--string">
        <button className = "stringAdd" onClick = {e => ChangeTable(e)}>+</button>
        <button className = "stringRemove" onClick = {e => ChangeTable(e)}>-</button>
      </div>
    </div>
  )
}

export default App;