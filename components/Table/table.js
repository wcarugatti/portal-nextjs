import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Table } from "react-bootstrap";
// import ReactTooltip from 'react-tooltip';


export const FilteringTable = ({ data, filter }) => {
  // console.log("data",data)
  const [loading, setLoading] = useState(false);

  const filterShow = filter == "home" ? "" : " - "+ filter.charAt(0).toUpperCase() + filter.slice(1)

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <ClipLoader size={150} color={"#fff"} loading={loading} />
        </div>
      ) : (
        <>
          <label className="label-search">VAGAS DISPONÍVEIS{filterShow}</label>
          <div className="div-table">
            <Table className="table-fixed">
              <thead>
                <tr>
                  <th>
                    Vaga
                    <br />
                  </th>
                  <th>
                    Empresa
                    <br />
                  </th>
                  <th>
                    Local
                    <br />
                  </th>
                  <th>
                    Data
                    <br />
                  </th>
                  <th>
                    Link
                    <br />
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    <td className="label-info">{row.job}</td>

                    <td className="label-info">{row.employer}</td>

                    <td className="label-info">{row.local}</td>

                    <td className="label-info">{row.date}</td>

                    <td>
                      <a
                        href={row.link}
                        title={row.description}
                        target="_blank"
                      >
                        {/* <a href={row.link} data-tip={row.description} data-html={true} data-for={"tip-"+i} target="_blank"> */}
                        <button className="td-button">VISUALIZAR VAGA</button>
                      </a>
                      {/* <ReactTooltip id={"tip-"+i} effect='solid' place="bottom" type="light"/> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
};
