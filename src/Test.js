import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStoreState, useStoreActions } from "easy-peasy";

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
  const users = useStoreState(state => state.dnd.data.users);
  const columns = useStoreState(state => state.dnd.data.columns);
  const usersByColumn = columns[id].userIds;
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
            width={100}
          >
            {usersByColumn.map((id, index) => (
              <User key={id} id={id} value={users[id].username} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        );
      }}
    </Droppable>
  );
};

const Test = () => {
  const columnIds = useStoreState(state => state.dnd.columnIds);
  const { saveDnd, removeUser } = useStoreActions(actions => actions.dnd);
  const onDragEnd = React.useCallback(result => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const isSameColumn = source.droppableId === destination.droppableId;
    if (isSameColumn) {
      saveDnd({
        originalIndex: source.index,
        newIndex: destination.index
      });
      return;
    }

    removeUser({
      originalIndex: source.index
    });
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
