import React from "react";
import { Pagination } from "react-bootstrap";
import Link from "next/link";
// import { Container } from './styles';

function JobsPagination({ page, totalpages, filter }) {
  const pageNumbers = [];
  var start = page < 3 ? 1 : page - 2;
  var end = start + 4 < totalpages ? start + 4 : totalpages;
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }
  const semiPath = `/${filter}/`;
  return (
    <Pagination>
      {page >= 4 && (
        <>
          <Link passHref={true} href={`${semiPath}1`}>
            <Pagination.Item>1</Pagination.Item>
          </Link>
          <Pagination.Item>-</Pagination.Item>
        </>
      )}
      {pageNumbers.map((n) => (
        <Link passHref={true} href={semiPath + n}>
          <Pagination.Item key={n} active={n == page}>
            {n}
          </Pagination.Item>
        </Link>
      ))}
      {page <= totalpages - 3 && totalpages > 5 && (
        <>
          <Pagination.Item>-</Pagination.Item>
          <Link passHref={true} href={semiPath + totalpages}>
            <Pagination.Item>{totalpages}</Pagination.Item>
          </Link>
        </>
      )}
    </Pagination>
  );
}

export default JobsPagination;
