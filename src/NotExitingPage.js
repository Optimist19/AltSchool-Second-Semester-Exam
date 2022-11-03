import React from "react";
import { Helmet } from 'react-helmet-async';

export default function NotExitingPage(){
  return(
    <div>
      <Helmet>
        <title>Something went wrong</title>
        <meta name="description" content="Something went wrong" />
        <link rel="canonical" href="/Error" />
      </Helmet>
      <h1>404 PAGE</h1>
    </div>
  )
}