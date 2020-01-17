import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

function DraggableColorList({ colorBoxes, removeColorBoxes }) {
  return (
    <div style={{ height: "100%" }}>
      {colorBoxes.map((c, i) => (
        <DraggableColorBox
          index={i}
          key={i}
          color={c.color}
          name={c.name}
          handleClick={() => removeColorBoxes(c.name)}
        />
      ))}
    </div>
  );
}

export default SortableContainer(DraggableColorList);
