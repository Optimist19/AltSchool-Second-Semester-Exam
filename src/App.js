import React from "react";
// import State from "./State";
import Custom from "./Custom";
import Reduce from "./Reduce";
import CustomReducer from "./CustomReducer";
import WelcomeCounterApp from "./Welcome";
import ErrorBoundary from "./ErrorBoundary";
import Error from "./Error";
import NotExitingPage from "./NotExitingPage";
import {Routes, Route} from "react-router-dom";
// import {Helmet} from "react-helmet-async";

function App(){

  return(
    <div>
      {/* <Helmet>
        <title>My Counter App</title>
        <meta name="description" content="A Counter-App"/>
        <link rel="canonical" href="A Counter-App" />
      </Helmet> */}
      <ErrorBoundary>
        <Routes>
          {/* <Route path="/useState-counter" element={<State />} /> */}
          <Route path="/" element={<WelcomeCounterApp />} />
          <Route path="/CustomReducer-counter" element={<CustomReducer />} />
          <Route path="/custom-counter" element={<Custom />} />
          <Route path="/useReducer-counter" element={<Reduce/>} />
          <Route path="/Error" element={<Error  pic="Good" title="Better" />} />
          <Route path="/*" element={<NotExitingPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )

}

export default App;

