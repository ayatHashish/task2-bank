const deal = require("../controller/deal")
const dbFile = "app/db/customer.json"

const showAll = (req,res)=>{
    const allCustomers = deal.readFromJson(dbFile)
    res.render("home", {
        pageTitle:"Bank",
        allCustomers
    })
}
const add = (req,res)=>{
    res.render("add", {
        pageTitle:"Add Custmer",
       
    })
}
const addMethod =  (req, res)=>{
    const cust = {id:Date.now(), ...req.query}
    const allCustomers = deal.readFromJson(dbFile)
    allCustomers.push(cust)
    deal.writeToJson(allCustomers, dbFile)
    res.redirect("/")
}

const edit = (req,res)=>{
    let isFound =true
    const custId = req.params.id
    const allCustomers=deal.readFromJson(dbFile)
    const custData = allCustomers.find(u=> u.id == custId)
    if(!custData) isFound=false
    res.render("edit", {
        pageTitle:"Edit cust",
        custData,
        isFound
    })
}
const single =(req,res)=>{
    let isFound =true
    const custId = req.params.id
    const allCustomers=deal.readFromJson(dbFile)
    const custData = allCustomers.find(u=> u.id == custId)
    if(!custData) isFound=false
    res.render("single", {
        pageTitle:"Single cust",
        custData,
        isFound
    })
}

const editLogic= (req,res)=>{
  
    const custId = req.params.id
    const allCustomers =deal.readFromJson(dbFile)
    const custData = allCustomers.findIndex(u=> u.id == custId)
    if(custData==-1) isFound=false
    else allCustomers[custData] = {id:custId, ...req.body}    
    deal.writeToJson(allCustomers, dbFile)
    res.redirect("/")
}
module.exports = { 
    showAll,add, addMethod, editLogic ,edit, single 
}