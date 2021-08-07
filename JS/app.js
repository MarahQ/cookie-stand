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
  //this.cookies = Math.floor(Math.random() * ((this.maxcust - this.mincust + 1) + this.mincust));
  for (let i = 0; i < hour.length; i++) {
    this.cookies.push.this.cookies = Math.floor(Math.random(((this.maxcust - this.mincust + 1) + this.mincust)) * this.avgcust)
    this.total = this.total + this.cookies[i];
    //return this.cookies;
  }

  shop.prototype.run = function () {
    this.randomFun();
    let trElement = document.createElement('tr');
    Profiles.appendChild(trElement);

    let thElement = document.createElement('th');
    thElement.textContent = this.Storename;
    trElement.appendChild(thElement);

    for (let i = 0; i < hour.length; i++) {
      let tdElement = document.createElement('td');
      tdElement.textContent = this.cookies[i];
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
    Profiles.appendChild(trElement);
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
        console.log(dailytotal);
      }
      let thElement = document.createElement('th');
      thElement.textContent = 'total';
      trElement.appendChild(thElement);
    }
    let TotalofTotal = 0;
    for (let j = 0; j < all.length; j++) {
      TotalofTotal += all[j].total;
    }
    let totalElement = document.createElement('th');
    totalElement.textContent = TotalofTotal;
    trElement.appendChild(totalElement)
  }
  {SalmonCookieBranches.addEventListener('submit', submitHandler);
  function submitHandler(event) {
    event.preventDefault();
    let branchName = event.target.branchName.value;
    let minBranchCust = event.target.minBranchCust.value;
    let maxBranchCust = event.target.maxBranchCust.value;
    let AVG = event.target.AVG.value;
    let feedBack = event.target.feedBack.checked;

    Profiles.deletRow(-1);
    let newBranch = new shop(branchName, minBranchCust, maxBranchCust, AVG, feedBack);
    newBranch.run();
    tablefooter();}}