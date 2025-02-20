import React from "react";

function Tables({ data }) {
  return (
    <>
      <table>
        <tr className="ml-8">
          <th className="ml-8"> movie name</th>
          <th> release date</th>
          <th>duration</th>
          <th>type</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.movi}</td>
            <td>{item.release}</td>
            <td>{item.duration}</td>
            <td>{item.type}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Tables;
