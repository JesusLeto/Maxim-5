import React, {useState, useContext} from 'react'
import ThemeContext from './context'



const ColumnTable= ({CellStr, CellCol, Cell}) => {

    const SetCellValue = (CellStr,CellCol, CellValue, TableArr, setTableArr) => {
        TableArr[CellStr][CellCol] = CellValue;
        localStorage.setItem("Table", JSON.stringify(TableArr))
        setTableArr(JSON.parse(localStorage.getItem("Table")));
        setEditCell(false)
    }
   
    const {TableArr, setTableArr} = useContext(ThemeContext)
    const [EditCell, setEditCell] = useState(false)
    const [CellValue, setCellValue] = useState(Cell)

    return(
        <td onClick = {() => setEditCell(true)}>
                            {EditCell ? <input className = "CellInput" value = {CellValue}
                            onChange = {e => setCellValue(e.target.value)}
                            onBlur = {() => SetCellValue(CellStr,CellCol, CellValue, TableArr, setTableArr)}
                            autoFocus = {true} />
                            : <div >{TableArr[CellStr][CellCol]}</div>}
                        </td>
    )
}

export default ColumnTable