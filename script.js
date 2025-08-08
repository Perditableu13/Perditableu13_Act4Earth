/* .js files add interaction to your website */

var factList = [
  "Climate change is causing rising sea levels. [11 Fascinating Facts About Environmental Issues]", /*0*/
  "Air pollution contributes to around 7 million premature deaths annually. [Statistics from the World Health Organization (WHO) & 11 Fascinating Facts About Environmental Issues]", /*1*/
  "A third of the food intended for human consumption – around 1.3 billion tons – is wasted or lost. [15 Biggest Environmental Problems of 2025 | Earth.Org]", /*2*/
  "As much as 20 percent of all global greenhouse gas emissions caused by humans are due to deforestation — exceeding the emissions from all of the passenger vehicles on the planet. [Climate Change - 10 Facts You Need To Know]", /*3*/
  "Conserving ecosystems is often more cost-effective than human-made interventions. Mangrove trees, which thrive in salty, coastal areas around the world, provide flood protection benefits exceeding US$ 65 billion per year. [Climate Change - 10 Facts You Need To Know]", /*4*/
  "One hundred ninety-five countries have ratified the 2015 Paris AgreementJump to references14, agreeing to limit global warming and adapt to climate change, partly by protecting nature. [Climate Change - 10 Facts You Need To Know]", /*5*/
];

var fact = document.getElementById("fact");
var button = document.getElementById("button");
var count = 0;

button.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}





