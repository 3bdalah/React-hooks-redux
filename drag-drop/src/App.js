








import {DndProvider} from 'react-dnd';
import {HTMLBackend} from "react-dnd-html5-backend";
import DragDrop from './compos/DragDrop';
function App() {
  return (
    <DndProvider>
      <div className="App"></div>
    </DndProvider>
  );
}

export default App;
