import React from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";

import PageLayout from "layouts/PageLayout";

const AdminPanel = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  return (
    // <div>
    <PageLayout>
      {/* <div>
        <h1>Device Test!</h1>
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You have a huge screen</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
        {isRetina && <p>You are retina</p>}
      </div> */}
      <div>
        <h2>Device Test!</h2>
        <Desktop>Desktop or laptop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile>
        <Default>Not mobile (desktop or laptop or tablet)</Default>
      </div>
      {/* <h1>Device Test!</h1>
      <MediaQuery maxWidth={800}>
        <p>You are a mobile</p>
        <MediaQuery minWidth={1824}>
          <p>You also have a huge screen</p>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        {/* You can also use a function (render prop) as a child */}
      {/* {(matches) => */}
      {/* matches ? <p>You are retina</p> : <p>You are not retina</p> */}
      {/* } */}
      {/* </MediaQuery> */}
    </PageLayout>
    // </div>
  );
};

export default AdminPanel;
