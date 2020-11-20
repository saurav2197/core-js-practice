const todo = [];
todo.push(`go to school`);
todo.push(`come from school`);
todo.push(`again go to school`);

todo.forEach(function(todo, index) {
  console.log(`your todo no.${index + 1} is : ${todo}`);
});
