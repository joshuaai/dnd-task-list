const dndResult = {
  draggableId: 'task-1',
  type: 'TYPE',
  reason: 'DROP',
  source: {
    droppableId: 'column-1',
    index: 0
  },
  destinantion: {
    droppableId: 'column-1',
    index: 1
  }
}

const draggableSnapshot = {
  isDragging: true,
  draggingOver: 'column-1'
}

const droppableSnapshot = {
  isDraggingOver: true,
  draggingOverWith: 'task-1'
}
