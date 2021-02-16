import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLayout from "layouts/PageLayout";

const Apollo = () => {
  const { data, isLoading, networkStatus, stale, isError } = useSelector(
    (state) => state.uri
  );

  const dispatch = useDispatch();

  const fetchGraphql = async () => {
    // dispatch()
  };

  useEffect(() => {
    fetchGraphql();
  }, []);

  console.log(data, isLoading, networkStatus, stale, isError);
  return (
    <PageLayout>
      <div>Appolo Test</div>
      {isLoading ? <div>LOADING</div> : null}
    </PageLayout>
  );
};

export default Apollo;
