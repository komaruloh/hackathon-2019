import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const User = ({ id, value, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {value}
          </div>
        );
      }}
    </Draggable>
  );
};

const Column = () => {
  return (
    <Droppable droppableId="droppable-1" type="USER">
      {provided => {
        return (
          <Box
            ref={provided.innerRef}
            display="flex"
            {...provided.droppableProps}
            flexDirection="column"
          >
            <User id="draggable-1" value="User1" index={0} />
            <User id="draggable-2" value="User2" index={1} />
            {provided.placeholder}
          </Box>
        );
      }}
    </Droppable>
  );
};

const Test = () => {
  const onDragEnd = React.useCallback(result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // the only one that is required
    console.log("in here1");
  }, []);
  return (
    <Container maxWidth="lg">
      <DragDropContext onDragEnd={onDragEnd}>
        <Column />
      </DragDropContext>
    </Container>
  );
};

export default Test;
