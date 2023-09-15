// import React from 'react';

import Link from "next/link";
import getFormattedDate from "../../../lib/get-formatted-date";

type Props = {
  blog: BlogPost
};

export default function ListItem({blog}:Props) {
  const {id, title, date} = blog;
  const formattedDate = getFormattedDate(date);
  return (
    <li key={id}>
      <Link href={`/blog/${id}`}>{title}</Link>
      <p>Date: {formattedDate}</p>
    </li>
  );
};
