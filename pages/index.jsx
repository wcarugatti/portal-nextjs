import React, { useState, useEffect } from "react";
import Header from "../components/Header/header";
import { useHistory } from "react-router-dom";
import { connectToDatabase } from "../util/mongodb";
import ClipLoader from "react-spinners/ClipLoader";
import VerticalNavBar from "../components/VerticalNavBar/VerticalNavBar";
import Page from "../components/Page";

export default function Index(props) {
  return <Page {...props} />;
}

export async function getStaticProps(context) {
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  // const data = MOCK_DATA;
  const { db } = await connectToDatabase();

  const perPage = 20;

  const data = await db.collection("jobs_tb").find({}).limit(perPage).toArray();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const summary_res = await db
    .collection("summary_tb")
    .find({})
    .sort({ _id: -1 })
    .limit(1)
    .toArray();

  let summary;

  try {
    summary = summary_res[0].data;
  } catch (error) {
    console.log(error);
    summary = [];
  }

  let totalpages = 0;
  for (const lang in summary) {
    totalpages += summary[lang];
  }
  
  totalpages = Math.ceil(totalpages / perPage);

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      page: 1,
      totalpages,
      filter: "home",
      summary
    },
    revalidate: 60 * 5, // In seconds
  };
}
