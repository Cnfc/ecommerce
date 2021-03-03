import React, { useEffect, useState } from "react";
import axios from "axios";

import PageLayout from "./components/PageLayout";
import LeftMenu from "layouts/LeftMenu";

import RenderForm from "./components/RenderForm2";
import {
  Link,
  LinksStyle,
  Content,
  RightPart,
  MainWorkSpace,
  ButtonWrapper,
  Button,
} from "./style";
import Spinner from "components/Spinner";

const Links = [
  { id: 1, name: "DB" },
  { id: 2, name: "Order" },
  { id: 3, name: "Empl" },
  { id: 4, name: "Klient" },
  { id: 5, name: "Settings" },
];

const ShowLinks = () => {
  return Links.map((item) => (
    <Link key={item.id}>
      {item.id}: {item.name}
    </Link>
  ));
};

const So = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   const res = await axios.get("http://localhost:8100/odata/tasks");
  //   setData(res.data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Content>
      <LeftMenu>
        <h1>So page</h1>
        <LinksStyle>{ShowLinks()}</LinksStyle>
      </LeftMenu>
      <RightPart>
        <PageLayout></PageLayout>
        <MainWorkSpace>
          <ButtonWrapper>
            <Button>Big Button</Button>
          </ButtonWrapper>

          {/* {loading ? <Spinner /> : <RenderForm data={data} />} */}
          <RenderForm />
        </MainWorkSpace>
        {/* {showWorkZone && <WorkZone></WorkZone>} */}
      </RightPart>
    </Content>
  );
};

export default So;
