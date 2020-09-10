
var uniqueIDGiverD = 1;
var uniqueIDGiverDone = 1000;

function checkWrite(idofField){
    var getting = document.getElementById(idofField)
    var value = getting.value
    var conditionTeller = 2;
    if(value === ""){
        alert('write a value mate')
        conditionTeller--
    }
    else{
       getting.value = "";
       conditionTeller++
    }
var ParentDiv = document.createElement('div')
ParentDiv.setAttribute('class' , 'mainParent')

var UserTask = document.createElement('div')
UserTask.setAttribute('class' , 'stylingTasks');

var spanInUserTask = document.createElement('span')
var textNodeInSpan = document.createTextNode(value)

spanInUserTask.appendChild(textNodeInSpan);
UserTask.appendChild(spanInUserTask);

ParentDiv.appendChild(UserTask);

var divContainingIMG = document.createElement('div');
divContainingIMG.setAttribute('class' , 'imagesKeeper');
//*1
var IMG0 = document.createElement("img")
IMG0.setAttribute('src', 'doneIcon.png');
IMG0.setAttribute('class' , 'sizing');
IMG0.setAttribute('id' , uniqueIDGiverDone)
IMG0.setAttribute('onclick' , 'taskCompleted(id)')
//*2
var IMG1 = document.createElement("img")
IMG1.setAttribute('src', 'editIcon.png');
IMG1.setAttribute('class' , 'sizing');
//*3
var IMG2 = document.createElement("img")
IMG2.setAttribute('src', 'dustbin.webp');
IMG2.setAttribute('class' , 'sizing');
IMG2.setAttribute('id' , uniqueIDGiverD);
IMG2.setAttribute('onClick' , 'deleteThisTask(id)')

divContainingIMG.appendChild(IMG0);
divContainingIMG.appendChild(IMG1);
divContainingIMG.appendChild(IMG2);

//console.log(divContainingIMG);
ParentDiv.appendChild(divContainingIMG);
console.log(ParentDiv);
if (conditionTeller === 3){
    IMG1.setAttribute('id' , value);
    IMG1.setAttribute('onClick' , 'editTheTask(id)')
    var Body = document.getElementsByTagName("BODY")[0];
    Body.appendChild(ParentDiv)
    uniqueIDGiverD++;
    uniqueIDGiverDone--;

}
    
    
}

function deleteThisTask(idOfComponent){
    var get = document.getElementById(idOfComponent)
    var grabbingParent = get.parentNode.parentNode;
    var Body = document.getElementsByTagName("BODY")[0];
    Body.removeChild(grabbingParent);

}
function editTheTask(idAndText){
    var get = document.getElementById(idAndText)
    var grabbingParent = get.parentNode.parentNode
    var Body = document.getElementsByTagName("BODY")[0];
    var textToEdit = idAndText;
    var get2 = document.getElementById('textField')
    get2.value = textToEdit;
    Body.removeChild(grabbingParent);
                        
}
function taskCompleted(idToNavigate){
    var get = document.getElementById(idToNavigate)
    var grabbingParent = get.parentNode.parentNode;
    var Body = document.getElementsByTagName("BODY")[0];
    Body.removeChild(grabbingParent);

}

