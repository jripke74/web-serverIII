const greeter = (name) => {
  console.log('Hello ' + name)
}

greeter('Jeff')

// The parameter 'name' will be 'undefined' when not provided.
greeter()

const hello = (name = 'user', age) => {
  console.log('Hello ' + name + ' who you are ' + age + ' years old!')
}

hello() // outputs > 'Hello user who you are udefined years old!