let kpi_measures = []

let calc_average = (array) => {
  let sum = array.reduce((a, b) => 
    a + b, 0
  )

  return sum/array.length
}

let calc_total = (arr) => {
  return arr.reduce((a, b) => a + b, 0)
}

let add_item_to_list = (dom_element_creator, dom_element_adder, employees) => {
   return (_event) => {
    let employee_name = document.querySelector(".employe-name-input").value
    let kpi_measure = document.querySelector(".kpi-measure-input").value
    let dom_element = dom_element_creator(employee_name, kpi_measure)
    dom_element_adder(dom_element)

    document.querySelector('.delete').addEventListener('click', delete_element_from_list)
    kpi_measure.push(parseInt(kpi_measure, 10))
    write(calc_total(kpi_measures), calc_average(kpi_measures))
   }
}

let delete_element_from_list = (total, average) => {
  document.getElementById("total").innerHTML = total
  document.getElementById("average").innerHTML = average
}

let string_dom_element_creator = (employee_name, measure) => {
  return `<li><span class="employe-name">${employee_name}</span><span class="kpi-measure">${measure}</span><button class="delete"> delete</button></li>`
}

let template_dom_element_creator = (employee_name, measure) => {
  let element_list_mock = document.querySelector("template#item-mock").content.children[0]
  let element_list_cloned = element_list_mock.cloneNode(true)
  element_list_cloned.querySelector(".employe-name").innerText = employee_name
  element_list_cloned.querySelector(".kpi-measure").innerText = measure
  return element_list_cloned
}


let string_dom_element_adder = (string_dom_element) => {
  // return document.querySelector("ul.item-list").innerHTML += string_dom_element
  document.querySelector("ul.item-list").insertAdjacentHTML('afterbegin', string_dom_element)
}

let template_dom_element_adder = (node_dom_element) => {
  let list = document.querySelector("ul.item-list")
  return list.insertAdjacentElement('afterbegin', node_dom_element)
}




export {
  add_item_to_list,
  string_dom_element_creator,
  template_dom_element_creator,
  string_dom_element_adder,
  template_dom_element_adder
}