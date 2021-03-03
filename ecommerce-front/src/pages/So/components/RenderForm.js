import React, { useState, useCallback } from "react";
import { Column, Table } from "react-virtualized";
import { data } from "./assets/data";
import { WorkZone } from "../style";
import { useDispatch } from "react-redux";
import { Form } from "../meta/constants";
import ShowImage from "OLD/core/ShowImage";

const RenderForm = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  // const openForm = useCallback(() => dispatch({ type: "open-form" }), []);
  const openForm = () => dispatch({ type: Form.SHOW_FORM, payload: showForm });

  return (
    <>
      <Table
        disableHeader={false}
        width={1000}
        height={1000}
        headerHeight={20}
        rowHeight={30}
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
        onColumnClick={({ columnData }) => {
          // console.log(columnData);
          if (columnData.dataKey === "title") {
            // console.log(columnData.event);
            setShowForm(!showForm);
            openForm();
          }
        }}
        // headerStyle={{ borderLeft: "1px solid black" }}
      >
        {/* <Column width={10} dataKey="id" /> */}
        <Column width={10} label="Id" dataKey="id" />
        <Column width={780} label="name" dataKey="name" />
        <Column width={150} label="statusName" dataKey="statusName" />
        <Column width={100} label="initiatorName" dataKey="initiatorName" />
      </Table>
    </>
  );
};

export default RenderForm;
