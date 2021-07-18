import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

//promise 的包裝
async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const app = {
  color: "black",
  border: "1px solid black",
  padding: "20px",
};

const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return
    }
    fetchSetData(data)
    .then((data) => (submittingStatus.current = false));
  }, [data])

  //渲染時一定會執行第一次
  //每次渲染都會重來
  //是生命週期的概念，但盡量不要這樣想否責之後不好做事
  useEffect(() => {
    fetchData(setData);
    //綁定的事情
    // return () => {
    //     取消綁定的事情
    // }
  }, [])

  return (
    <div style={app}>
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
