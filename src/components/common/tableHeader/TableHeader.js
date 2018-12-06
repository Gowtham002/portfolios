import React from "react";

const TableHeader = (props) => {
  let { headers } = props;
  return(
    <thead>
      <tr>
        {
          headers.map(header => {
            return <th key={header}>{header}</th>
          })
        }
      </tr>
    </thead>
  )
}

export default React.memo(TableHeader)