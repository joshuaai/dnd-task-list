const dndResult = {
  draggableId: 'task-1',
  type: 'TYPE',
  source: {
    droppableId: 'column-1',
    index: 0
  },
  destinantion: {
    droppableId: 'column-1',
    index: 1
  },
  reason: 'DROP'
}

const draggableSnapshot = {
  isDragging: true,
  draggingOver: 'column-1'
}

const droppableSnapshot = {
  isDraggingOver: true,
  draggingOverWith: 'task-1'
}

// Hooks
// On Drag Start
const start = {
  draggableId: 'task-1',
  type: 'TYPE',
  source: {
    droppableId: 'column-1',
    index: 0
  }
}

// On Drag Update
const update = {
  ...start,
  destinantion: {
    droppableId: 'column-1',
    index: 1
  }
}

// On Drag End
const end = {
  ...update,
  reason: 'DROP'
}
