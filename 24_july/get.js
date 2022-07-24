let person = {
    fname : "Jhon",
    lname: "Dylon",
  get fullname(){
    return (`${person.fname} ${person.lname}`).toUpperCase()
  }
,
set fullname(newname){
    let parts = newname.split(" ")
    person.fname = parts[0]
    person.lname = parts[1]

}
}
person.fullname = "Shivansh "
console.log(person.fullname)