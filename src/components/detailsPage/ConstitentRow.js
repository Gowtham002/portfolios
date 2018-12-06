import React from "react";
import { MdDelete, MdAddCircleOutline, MdRemoveCircleOutline, MdLock, MdLockOpen } from "react-icons/md";

const ConstitentRow = (props) => {
  let rows = [];
  let { keyVal, value, adjustConstituentWeight, deleteConstituent, toggleLockConstituent } = props;
  rows.push(
    <tr key={keyVal} className="stock-type">
      <td>{keyVal} 
        <i className="lock-icon" onClick={() => toggleLockConstituent(keyVal)}>{value.isLocked ? <MdLock/> : <MdLockOpen/>}</i>
      </td>
      <td>{value.total.toFixed(2)}%</td>
      <td>{value.total.toFixed(2)}%</td>
    </tr>
  )
  value.weights.forEach((element, index) => {
    rows.push(
      <tr key={element.instrument.id}>
        <td>
          <i className="delete-icon" onClick={() => deleteConstituent(keyVal, index)}><MdDelete/></i>
          {element.instrument.name}
        </td>
        <td>{element.model_weight.toFixed(2)}%</td>
        <td>
          <i className="adjust-icon" onClick={() => adjustConstituentWeight(keyVal, index, 'DECREMENT')}><MdRemoveCircleOutline/></i>
          {element.weight.toFixed(2)}
          <i className="adjust-icon" onClick={() => adjustConstituentWeight(keyVal, index, 'INCREMENT')}><MdAddCircleOutline/></i>
        </td>
      </tr>
    )
  });
  return rows
}

export default ConstitentRow;