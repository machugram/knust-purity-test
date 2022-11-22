import { TodoItem } from "./TodoItem";
export function PerformMLMagic(TodoItemData: Map<string, TodoItem>){
    var MLData = new Array<string>();
    //MLMagic Happens here: Abracadabra!
    var totalScore = 0
    TodoItemData.forEach((dataItem) => {
      if (dataItem.checked === true){
        MLData.push(dataItem.text)
        totalScore+=dataItem.score
      }
    });
    let jsonMessage = {
      "message": displayMessage(MLData,totalScore),
      "score": totalScore
    }
    alert(`${jsonMessage.message} \n Score: ${jsonMessage.score}`)
  }


  export function SetBoxesAndCheckedFalse(TodoItemData: Map<string, TodoItem>){
    var items=document.getElementsByTagName('input');
				for(var i=0; i<items.length; i++){
					if(items[i].type==='checkbox')
						items[i].checked=false;
				}

        TodoItemData.forEach((itemData) => {
          itemData.checked = false
        })

  }

  function displayMessage(describeData: Array<string>, score:number){
    var tierOne = "Has relations with a TA"
    var tierTwo = ""
    if (score < 10){
      return "Get a life. Jeez"
    }
    if (describeData.includes(tierOne)){
      return "I hope you at least gained some marks you hoe"
    }
      return "Your parents are proud. "
  }