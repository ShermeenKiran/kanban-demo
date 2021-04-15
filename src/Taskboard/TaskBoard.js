import React, {  useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { DONE_STATUS, INPROGRESS_STATUS, TODO_STATUS } from "../constants/constants";
import { pascalCase } from "pascal-case";
import styles from './Taskboard.module.css'



const channels = [TODO_STATUS, INPROGRESS_STATUS, DONE_STATUS];
const labelsMap = {
  todo: pascalCase(TODO_STATUS),
  inprogress: pascalCase(INPROGRESS_STATUS),
  done: pascalCase(DONE_STATUS)
};

const Kanban = (props) => {
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <section className={styles.board}>
          {channels.map(channel => (
            <KanbanColumn
              key={channel}
              status={channel}
              changeTaskStatus={(id, status) => props.onMove(id, status)}
            >
              <div className={styles.column}>
                <div className={styles.columnHead}>{labelsMap[channel]}</div>
                <div>
                  {props.tasksList
                    .filter(item => item.status === channel)
                    .map(item => (
                      <KanbanItem key={item._id} id={item._id}>
                        <div className={styles.ite}>
                          <h4>{item.title}</h4>
                        
                          <Button 
                            variant="primary"
                            className={styles.mb}
                            onClick={() => props.onEdit(item)}
                          >
                            Update
                          </Button>
                        </div>
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
  console.log("status" , status)
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