let person = {
    fname : "Jhon",
    lname: "Dylon",
  get fullname(){
    return `${person.fname} ${person.lname}`
  }
,
set fullname(newname){
    let parts = newname.split(" ")
    person.fname = parts[0]
    person.lname = parts[1]

}
}
person.fullname = "Shivansh Rawat"
console.log(person.fullname)