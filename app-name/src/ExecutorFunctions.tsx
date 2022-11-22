import { TodoItem } from "./TodoItem";
export function PerformMLMagic(TodoItemData: Map<string, TodoItem>){
    var MLData = new Array<string>();
    //submit data to ML Model  
    TodoItemData.forEach((dataItem) => {
      if (dataItem.checked === true){
        MLData.push(dataItem.text)
      }
    });
    console.log(MLData)
    alert(MLData)
  }


  export function SetBoxesAndCheckedFalse(TodoItemData: Map<string, TodoItem>){
    var items=document.getElementsByTagName('input');
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox')
						items[i].checked=false;
				}

        TodoItemData.forEach((itemData) => {
          itemData.checked = false
        })

  }