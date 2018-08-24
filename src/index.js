import React from 'react'
import ReactDOM from 'react-dom'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initial-data'
import Column from './column'

class App extends React.Component {
  state = initialData

  // onDragStart = () => {
  //   document.body.style.color = 'orange'
  //   document.body.style.transition = 'background-color 0.2s ease'
  // }

  // onDragUpdate = update => {
  //   const { destination } = update
  //   const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0
  //   document.body.style.backgroundColor = `rgba(153, 141, 127, ${opacity})`
  // }

  onDragEnd = result => {
    // document.body.style.color = 'inherit'
    // document.body.style.backgroundColor = 'inherit'

    const { destination, source, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const column = this.state.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    // move the task id from its old index to its new index
    newTaskIds.splice(source.index, 1) // remove the id
    newTaskIds.splice(destination.index, 0, draggableId) // re-add it to new position

    const newColumn = { ...column, taskIds: newTaskIds }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    }

    this.setState(newState)
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columdId => {
          const column = this.state.columns[columdId]
          const tasks = column.taskIds.map(tasksId => this.state.tasks[tasksId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
