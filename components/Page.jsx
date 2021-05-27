import React, { useState } from "react";
import JobsPagination from "./JobsPagination";
import { FilteringTable } from "./FilteringTable/FilteringTable";
import VerticalNavBar from "./VerticalNavBar/VerticalNavBar";

function Page({ data, page, totalpages, filter, summary }) {
  const [loading, setLoading] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  // console.log(props.data)
  return (
    <>
      <VerticalNavBar sidebar={sidebar} toggleSidebar={toggleSidebar} summary={summary} filter={filter}/>
      <div
        // className={"page-content p-5" + (sidebar ? "active" : "")}
        className="page-content px-5 pb-4 pt-2"
        id="content"
      >
        <div className="row">
          <div className="col-12">
            <FilteringTable data={data} filter={filter} summary={summary} />
            <JobsPagination page={page} totalpages={totalpages} filter={filter}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
