import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStoreState } from "easy-peasy";

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

const Column = ({ id }) => {
  return (
    <Droppable droppableId={id} type="USER">
      {provided => {
        return (
          <Box
            ref={provided.innerRef}
            display="flex"
            {...provided.droppableProps}
            flexDirection="column"
            border={1}
            p={1}
            m={1}
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
  const dndState = useStoreState(state => state.dnd.data);
  const columnIds = useStoreState(state => state.dnd.columnIds);
  const onDragEnd = React.useCallback(result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
  }, []);
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="center">
        <DragDropContext onDragEnd={onDragEnd}>
          {columnIds.map(id => (
            <Column key={id} id={id} />
          ))}
        </DragDropContext>
      </Box>
    </Container>
  );
};

export default Test;
