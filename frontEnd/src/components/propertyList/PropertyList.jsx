import { useEffect, useState } from "react";
// import { publicRequest } from "../../requestMethod";
import "./propertyList.css";
import { data } from "../../../datas/data";
// import CircularProgress from "@mui/material/CircularProgress";
// import useFetch from "../../hooks/useFetch";

// const url = "/hotels/countByType";

function PropertyList() {
  // const { data, loading, error } = useFetch(url);

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await publicRequest.get(url);
  //       setData(res.data);
  //     } catch (err) {
  //       setError(err);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="pList">
      {/* {loading ? (
        <div className="spinnerContainer">
          <CircularProgress className="spinner" />
        </div>
      ) : ( */}
      <>
        {data &&
          data.map((i) => (
            <div className="pListItem" key={i.id}>
              <div className="imgWrapper">
                <img src={i.img} alt="" className="pListImg" />
              </div>
              <div className="pListTitles">
                <h1>{i.username}</h1>
                <h2>{i.price}</h2>
              </div>
            </div>
          ))}
      </>
      {/* )} */}
    </div>
  );
}

export default PropertyList;
