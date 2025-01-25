let words=prompt("pls insert ur sentence");
let vowels="aAEeIiOoUu"
count=0;
for (let j=0;j<words.length;j++){
    if (vowels.includes(words[j])){
        count++;        
    }
}
console.log(count);