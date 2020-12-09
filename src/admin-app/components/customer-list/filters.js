const filters = [
  { name: "userId", title: "User ID", checked: true, columns: [{ title: "User ID", id: "id" }] },
  { name: "name", title: "Name", checked: true, columns: [{ title: "Name", id: "name" }] },
  { name: "password", title: "Password", checked: true, columns: [{ title: "Password", id: "password" }] },
  { name: "status", title: "Status", checked: true, columns: [{ title: "StatusOp/Clo", id: "status" }] },
  { name: "settleFigure", title: "Settle figure", checked: true, columns: [{ title: "Settle", id: "settleFigure" }] },
  { name: "settleAccess", title: "Settle access", checked: true, columns: [{ title: "SportCC", id: "sportCC" }, { title: "Int", id: "sportCCInt" }, { title: "Live", id: 'sportCCLive' }] },
  { name: "horseAccess", title: "Horse access", checked: true, columns: [{ title: "HorsesCC", id: "horsesCC" }, { title: "Int", id: "horsesCCInt" }] },
  { name: "casinoAccess", title: "Casino access", checked: true, columns: [{ title: "CasinoReg", id: "casinoCC" }, { title: "Live", id: "casinoCCLive" }] },
  { name: "temporaryCredit", title: "Temporary credit", checked: true, columns: [{ title: "TempCredit", id: "tempCredit" }] },
  { name: "callCenterLimit", title: "Call center limit", checked: false, columns: [{ title: "CCLimit", id: "CClimit" }] },
  { name: "freePlayBalance", title: "Free play balance", checked: false, columns: [{ title: "FPBalance", id: "FPbalance" }] },
  { name: "internetLimit", title: "Internet limit", checked: false, columns: [{ title: "IntLimit", id: "intLimit" }] },
  { name: "pending", title: "pending", checked: false, columns: [{ title: "Pending", id: "pending" }] },
  { name: "lastWager", title: "last wager", checked: false, columns: [{ title: "Last Wager", id: "lastWager" }] },
  { name: "rating", title: "Rating", checked: false, columns: [{ title: "Rating", id: "rating" }] },
  { name: "creditLimit", title: "Credit Limit", checked: false, columns: [{ title: "Credit", id: "credit" }] },
  { name: "mobilePhone", title: "Mobile phone", checked: false, columns: [{ title: "Mobile", id: "mobile" }] },
  { name: "balance", title: "Balance", checked: false, columns: [{ title: "Balance", id: "balance" }] },
];

export default filters;
