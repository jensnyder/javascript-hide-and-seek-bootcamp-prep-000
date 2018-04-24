function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i<rankedLists.length; i++) {
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML) + n);
  }
}

function deepestChild() {
  firstLevel=document.querySelector('div#grand-node');
  secondLevel=firstLevel.querySelector('div');
  return secondLevel;
}