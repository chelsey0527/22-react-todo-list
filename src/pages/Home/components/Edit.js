import { useState } from "react";
import { v4 } from 'uuid';

const inputStyle = {
  width: "100%",
};

const buttonStyle = {
  width: "100%",
  height: "30px",
  background: "black",
  color: "white",
  border: "none",
  marginTop: "20px",
  marginBottom: "20px",
};

const Edit = ({ add, submittingStatus }) => {
  
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value)
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value)
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value)
  }

  function addItem() {
    submittingStatus.current = true ;
    add(function (prevData) {
      return [
        ...prevData,
      {
        id : v4(),
        note,
        date,
        time
      }
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事 :</p>
      <input type="text" style={inputStyle} value={note} onChange={noteChange}/>
      <p>日期 :</p>
      <input type="date" style={inputStyle} value={date} onChange={dateChange}/>
      <p>時間 :</p>
      <input type="time" style={inputStyle} value={time} onChange={timeChange}/>
      <button style={buttonStyle} onClick={addItem}>
        add
      </button>
    </div>
  );
};

export default Edit;
