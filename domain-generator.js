let pronoun = ["the", "your", "our"];
let adj = ["best", "funnier", "great"];
let noun = ["site", "game", "script"];

for (let p of pronoun) 
{
  let domain = "";
    for (let a of adj) 
    {
        for (let n of noun) 
        {
        domain = p + a + n + ".com";
        console.log(domain);
        }
    }
}
