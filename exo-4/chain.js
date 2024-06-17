const max = 10;
const getRandomInt = () => Math.floor(Math.random() * max);
function generateComments() {
  const comments = [];
  for (let i = 0; i < 10; i ++) {
    comments.push({
      title: `Comment ${i + 1}`,
      user: i % 3 !== 0
        ? { name: "John Doe", age: i % 2 === 0 ? (i % 10) * 10 : null }
        : null
    })
  }
  return comments;
}

for (let i = 0; i < 5; i++) {
    const comment = generateComments()[getRandomInt()];
    /* Au boulot */text = "${Comment} - "
    text = text + 
  }



