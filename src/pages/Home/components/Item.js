const itemStyle = {
  color: "black",
  borderBottom: "1px black solid",
};

const removeButton = {
  background: "red",
  margin: "10px 0",
  border: "none",
};

const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {

  function deleteItem() {
    submittingStatus.current = true
    deleteData(function(prev){
        return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div style={itemStyle}>
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button style={removeButton} onClick={deleteItem}>remove</button>
    </div>
  );
};

export default Item;
