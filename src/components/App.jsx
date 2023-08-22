import ColorPicker from './ColorPicker/ColorPicker'
import ColorPickerOptions from './ColorPicker/ColorPickerData'
// import { Counter } from "./Counter/Counter"
// import { DropDown } from "./DropDown/DropDown";

export const App = () => {
  return (
    <>
      <ColorPicker options = {ColorPickerOptions}/>
      {/* <Counter initialValue = {0}/> */}
      {/* <DropDown/> */}
    </>
  );
};
