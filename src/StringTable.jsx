import React, {useState} from "react";
import ColumnTable from "./ColumnTable";

const StringTable = ({ThisString, indexStr}) => {
    return(
        <tr >
            {
                ThisString.map((Element, i) => {
                    return(
                        <ColumnTable CellStr = {indexStr} CellCol = {i} key = {i} Cell = {Element}/>
                    )
                })
            }
        </tr>
    )
}

export default StringTable;