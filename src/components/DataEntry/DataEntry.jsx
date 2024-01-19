import React, { useState } from 'react'
import * as XLSX from "xlsx"



const DataEntry = () => {

    const [data, setData] = useState([])

    const handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, {type: "binary"});
            const sheetName = workbook.SheetName[0];
            const sheet = workbook.Sheets[sheetName];
            const parseData = XLSX.utils.sheet_to_json(sheet);
            setData(parseData);
            console.log(data);
        }
    }


  return (
    <div>
        <input type='file' accept=".xslx .xls" onChange={handleFileUpload} />
    </div>
  )
}

export default DataEntry