import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

export default function DraggableColorList({ colorBoxes, removeColorBoxes }) {
  return (
    <div>
      {colorBoxes.map(c => (
        <DraggableColorBox
          key={c.name}
          color={c.color}
          name={c.name}
          handleClick={() => removeColorBoxes(c.name)}
        />
      ))}
    </div>
  );
}
