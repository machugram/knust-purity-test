import { TodoItem } from './TodoItem';
import './App.css';
import { Button } from './Button';
import { PerformMLMagic, SetBoxesAndCheckedFalse} from './ExecutorFunctions';
import Footer from './Footer';
let data = require('./purity.json');
var cloneData = new Map<string, TodoItem>()
const checkItems = data.list.map((item: string) => {
   data.list.map((item:string) => {
   cloneData.set(item,new TodoItem(item,false))
})
  return (
  <div className='checkList'>
    <li><input type="checkbox" onClick={(event: React.MouseEvent<HTMLElement>) => {
      var selectedItem = cloneData.get(item)
      selectedItem!.checked = selectedItem!.checked !== true
      console.log(selectedItem);
      }}/>{item}</li>
  </div>
  )
})



function App() {
  return (
    <>
    <p id ="header-text"></p>
    <i> 
      <b>Have you Ever?</b>
      The Purity Test has historically served as a segue <br />
      from O-week to true college life at <br />
      <u> <b>College Of Engineering - KNUST.</b></u>
      <br />
        It's a voluntary opportunity for O-week groups to bond,  <br />
        and for students to track the maturation <br/>
        of their experiences throughout college.
</i>
<br />

 <b> Caution: This is not a bucket list. <br />
 Completion of all items on this test will likely result in death.
 </b>
    <b>Click on every item you have done</b>
      <ol>{checkItems}</ol>
     <div className='button-stack'>
     <Button text="Submit" executor={ () => PerformMLMagic(cloneData)}/>
     <Button text="Clear CheckBoxes" executor={() => SetBoxesAndCheckedFalse(cloneData)}/>
     </div>

     <Footer/>
    </>
  );
}

export default App;
