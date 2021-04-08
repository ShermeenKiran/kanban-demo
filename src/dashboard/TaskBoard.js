import React, { useState, useCallback, useRef, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";
import { connect } from "react-redux";



const channels = ["todo", "wip", "done"];
const labelsMap = {
  todo: "To Do",
  wip: "In Progress",
  done: "Done"
};

const classes = {
  board: {
    display: "flex",
    margin: "0 auto",
    width: "90vw",
    fontFamily: 'Arial, "Helvetica Neue", sans-serif'
  },
  column: {
    minWidth: 200,
    width: "18vw",
    height: "80vh",
    margin: "0 auto",
    backgroundColor: "#FCC8B2"
  },
  columnHead: {
    textAlign: "center",
    padding: 10,
    fontSize: "1.2em",
    backgroundColor: "#C6D8AF"
  },
  item: {
    padding: 10,
    margin: 10,
    fontSize: "0.8em",
    cursor: "pointer",
    backgroundColor: "white"
  }
};

const Kanban = (props) => {
  const [tasks, setTaskStatus] = useState(props.tasksList);
  useEffect(()=>{
    console.log("tasks" , props)
  },[])
  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find(task => task._id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };
      let newTasks = update(tasks, {
        [taskIndex]: { $set: task }
      });
      setTaskStatus(newTasks);
    },
    [tasks]
  );

  return (
    <main>
      <header> Kanban Board </header>
      <DndProvider backend={HTML5Backend}>
        <section style={classes.board}>
          {channels.map(channel => (
            <KanbanColumn
              key={channel}
              status={channel}
              changeTaskStatus={changeTaskStatus}
            >
              <div style={classes.column}>
                <div style={classes.columnHead}>{labelsMap[channel]}</div>
                <div>
                  {tasks
                    .filter(item => item.status === channel)
                    .map(item => (
                      <KanbanItem key={item._id} id={item._id}>
                        <div style={classes.item}>{item.title}</div>
                      </KanbanItem>
                    ))}
                </div>
              </div>
            </KanbanColumn>
          ))}
        </section>
      </DndProvider>
    </main>
  );
};
const mapStateToProps = state =>({
  tasksList:state.taskList
});

export default connect(mapStateToProps ,{})(Kanban);

const KanbanColumn = ({ status, changeTaskStatus, children }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, status);
    }
  });
  drop(ref);
  return <div ref={ref}> {children}</div>;
};

const KanbanItem = ({ id, children }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  return (
    <div ref={ref} style={{ opacity }}>
      {children}
    </div>
  );
};