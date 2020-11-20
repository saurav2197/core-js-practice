let mytodos={
day:"monday"
meetings:5
meetdone:"0"

}
let addmeeting=function(todo,meet=0){
  todo.meetings=todo.meetings+meet
}
let meetdone=function(todo,meet=0){
  todo.meetdone=todo.meetdone-meet
}
let restday=function(todo){
  todo.meetings=0
  todo.meetdone=0
}
let getsummaryofday=function(todo){
  let meetleft= todo.meetings-todo.meetdone

return `you have ${meetleft}meetings  left for today`

}
addmeeting(mytodos,5)
meetdone(mytodos,5)
console.log(mytodos)
console.log(getsummaryofday(mytodos))