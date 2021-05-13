import React, { useState } from "react";
import axios from "axios";
import { connectToDatabase } from "../../util/mongodb";
import Page from "../../components/Page";

export default function Index(props) {
  return <Page {...props} />;
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();

  const summary_res = await db
    .collection("summary_tb")
    .find({})
    .sort({ _id: -1 })
    .limit(1)
    .toArray();

  let summary;

  try {
    summary = summary_res[0].data;
    let totalpages = 0;
    for (const lang in summary) {
      totalpages += summary[lang];
    }
    summary["home"] = totalpages;
  } catch (error) {
    console.log(error);
    summary = [];
  }

  // console.log(summary)

  const perPage = 20;
  var pathsObject = [];
  for (const lang in summary) {
    const pages = Math.ceil(summary[lang] / perPage);
    for (let i = 1; i <= pages; i++) {
      pathsObject.push({ params: { filter: lang, page: "" + i } });
    }
  }

  return {
    paths: pathsObject,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase();

  const perPage = 20;
  const skip = perPage * (context.params.page - 1);

  const findParam =
    context.params.filter == "home"
      ? {}
      : { filter: { $in: [context.params.filter] } };

  const data = await db
    .collection("jobs_tb")
    .find(findParam)
    .skip(skip)
    .limit(perPage)
    .toArray();

  // console.log(data);
  // console.log(context);

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

  if (!data) {
    return {
      notFound: true,
    };
  }

  let totalpages;

  if (context.params.filter == "home") {
    totalpages = 0;
    for (const lang in summary) {
      totalpages += summary[lang];
    }
  } else {
    totalpages = summary[context.params.filter] || 0;
  }
  totalpages = Math.ceil(totalpages / perPage);

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      page: context.params.page,
      totalpages,
      filter: context.params.filter,
    },

    revalidate: 30,
  };
}
