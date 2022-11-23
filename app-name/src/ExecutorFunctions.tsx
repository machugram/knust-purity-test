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
      totalScore = totalScore <=100 ? totalScore : 100
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
    let randomResponses = ["You are a discovery","Someone actually thinks you are learning hard","Your parents are proud. ",
    "And daswhy you are the GOAT. \n Sike!"
  ]

  let tierOneResponses = ["Get a life. Jeez", "This should be a bucket list for you.","Please ask your friends, I am just a mirror."]
    var tierOne = "Has relations with a TA"
    var tierTwo = "Has never submitted an original assignment "
    var tierThree = "Blocked your class rep"
    if (score < 10){
      return tierOneResponses[Math.floor(Math.random() * tierOneResponses.length)]
    }

    if (describeData.includes(tierOne)){
      randomResponses.push("I hope you at least gained some marks you erohw")
      return randomResponses[Math.floor(Math.random() * randomResponses.length)]
    }
    if (describeData.includes(tierTwo)){
      randomResponses.push("Oh? Oh? How? Why? Not one original assignment?")
      return randomResponses[Math.floor(Math.random() * randomResponses.length)]

    } 
    if (describeData.includes(tierThree)){
      randomResponses.push("Do you attempt on going to class?")
      return randomResponses[Math.floor(Math.random() * randomResponses.length)]

    } 
    else if(score>85){
      return "Legend. And that's on period. Purrrr💅🏾"
    }

    return randomResponses[Math.floor(Math.random() * randomResponses.length)]
  }