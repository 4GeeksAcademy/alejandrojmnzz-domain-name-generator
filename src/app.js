let pronounArr = ["the", "your", "our"];
let adjArr = ["best", "funnier", "great"];
let nounArr = ["site", "game", "script"];

for (let pronoun of pronounArr) {
    for (let adj of adjArr) {
        for (let noun of nounArr) {
          console.log(pronoun + adj + noun + ".com");
        }
    }
}