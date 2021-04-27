import React, { useState, useEffect } from "react";
import Header from "../components/Header/header";
import { FilteringTable } from "../components/Table/table";
import { useHistory } from "react-router-dom";
import MOCK_DATA from "../components/Table/jobs.json";
import { connectToDatabase } from "../util/mongodb";
import ClipLoader from "react-spinners/ClipLoader";
import VerticalNavBar from "../components/VerticalNavBar/VerticalNavBar";

export default function Index(props) {
  const [loading, setLoading] = useState(false);
  const [sidebar, setSidebar] = useState(true);

  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  // useEffect(() => {
  // 	setTimeout(() => {
  // 		setLoading(false);
  // 	}, 1000);
  // }, []);

  // const history = useHistory();

  function goBack() {
    history.push("./home");
  }

  return (
    <>
      {/* <Header /> */}
      {/* <button className='back-button' onClick={goBack}>
      <FaAngleDoubleLeft size={25} />
    </button> */}

      <VerticalNavBar sidebar={sidebar} toggleSidebar={toggleSidebar} />

      <div
        // className={"page-content p-5" + (sidebar ? "active" : "")}
        className="page-content px-5 py-4"
        id="content"
      >
        <div className="row">
          <div className="col-12">
            <FilteringTable data={props.data} />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {loading ? (
        <div className="loading-screen">
          <ClipLoader size={150} color={"#fff"} loading={loading} />
        </div>
      ) : (
        <>
          {/* <Header /> */}
          {/* <button className='back-button' onClick={goBack}>
						<FaAngleDoubleLeft size={25} />
					</button> */}

          <VerticalNavBar sidebar={sidebar} toggleSidebar={toggleSidebar} />

          <div
            className={"page-content p-5" + (sidebar ? "active" : "")}
            id="content"
          >
            <div className="row">
              <div className="col-12">
                <MemoizedTable data={props.data} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  // const data = MOCK_DATA;
  const { db } = await connectToDatabase();

  const data = await db.collection("jobs_tb").find({}).toArray();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 30, // In seconds
  };
}
