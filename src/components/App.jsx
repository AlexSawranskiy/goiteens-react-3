import toDoList from './ToDolist';
import { ToDoList } from './ToDoList/ToDoList';
// import ColorPicker from './ColorPicker/ColorPicker'
// import ColorPickerOptions from './ColorPicker/ColorPickerData'
// import { Counter } from "./Counter/Counter"
// import { DropDown } from "./DropDown/DropDown";

export const App = () => {
  return (
    <>
      <ToDoList array = {toDoList}/>
      {/* <ColorPicker options = {ColorPickerOptions}/> */}
      {/* <Counter initialValue = {0}/> */}
      {/* <DropDown/> */}
    </>
  );
};
