let Profiles = document.getElementById('salesprofile');
let SalmonCookieBranches = document.getElementById("SalmonCookieBranches")
console.log(SalmonCookieBranches);
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let all = [];
let total = [];
function shop(Storename, mincust, maxcust, avgcust) {
  this.Storename = Storename;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgcust = avgcust;
  this.cookies = [];
  this.total = 0;
  this.hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  all.push(this);
}
shop.prototype.randomFun = function () {
  this.cookies.push.Math.floor(Math.random() * ((this.maxcust - this.mincust + 1) + this.mincust));
  this.cookies = Math.floor(this.cookies * this.avgcust);
  this.total = this.total + this.cookies;
  return this.cookies;
}
shop.prototype.run = function () {
  let trElement = document.createElement('tr');
  Profiles.appendChild(trElement);

  let thElement = document.createElement('th');
  thElement.textContent = this.Storename;
  trElement.appendChild(thElement);

  //let ulElement = document.createElement('ul');
  //h2Element.appendChild(ulElement);

  for (let i = 0; i < this.hour.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.randomFun();
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.total;
  trElement.appendChild(tdElement);
};

let Seattle = new shop('Seattle', 23, 65, 6.3)
let Tokyo = new shop('Tokyo', 3, 24, 1.2)
let Dubai = new shop('Dubai', 11, 38, 3.7)
let Paris = new shop('Paris', 20, 38, 2.3)
let Lima = new shop('Lima', 2, 16, 4.6)

console.log(all);
tableHeader();
Seattle.run();
Tokyo.run();
Dubai.run();
Paris.run();
Lima.run();
tablefooter();

function tableHeader() {
  let trElement = document.createElement('tr');
  Profiles.appendChild (trElement);
  hour.unshift('');
  hour.push('Daily total')
  for (let i = 0; i < hour.length; i++) {
    let thElement = document.createElement('th');
    thElement.textContent = hour[i];
    trElement.appendChild(thElement);
  }
  hour.shift();
  hour.pop();
};
function tablefooter() {
  let trElement = document.createElement('tr');
  Profiles.appendChild(trElement);

  for (let i = 0; i < hour.length; i++) {
    let dailytotal = 0;
    for (let j = 0; j < all.length; j++) {
      dailytotal += all[j].cookies[i]
    }
    let thElement = document.createElement('th');
    thElement.textContent = dailytotal;
    trElement.appendChild(thElement);
  }
  let TotalofTotal = 0;
  for (let j = 0; j < all.length; j++) {
    TotalofTotal += all[j].total[j]

    let thElement = document.createElement('th');
    thElement.textContent = TotalofTotal;
    trElement.appendChild(thElement)
  }
}
SalmonCookieBranches.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefult();
  let branchName= event.target.branchName.value.split(',');
  let minBranchCust = event.target.minBranchCust.value.split(',');
  let maxBranchCust= event.target.maxBranchCust.value.split(',');
  let AVG= event.target.AVG.value.split(',');
  let feedBack= event.target.feedBack.checked;

  let newBranch = new shop(branchName, minBranchCust, maxBranchCust, AVG, feedBack);
  newBranch.randomFun();
  newBranch.run();
  console.log(new shop);

}
