const packages = [
  {
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
  },
]
let packageElem = document.getElementById('packagesId')
let packageElem2 = document.getElementById('packagesTo')

function filterHeavy() {
  let heavy = packages.filter(p => 4 < p.weight)
  drawPackages(heavy)
}

function filterPriority() {
  let priority = packages.filter(p => 'express' == p.priorityLevel)
  drawPackages(priority)
}

function filterFragile() {
  let fragile = packages.filter(p => p.isFragile)
  drawPackages(fragile)
}

//NOTE - The draw packages function takes the arguments from the filterFragile(), filterPriority(), and the filterHeavy() function as its parameter and creates .innerHTML elements to be placed in the DOM.

function drawPackages(packages) {
  let template = ''
  let template2 = ''
  packages.forEach(package => {
    template += `
    <p>ID: ${package.trackingNumber}</p>
    `})

  packages.forEach(package => {
    template2 += `
      <p>TO: ${package.to}</p>
  `})

  packageElem.innerHTML = template
  packageElem2.innerHTML = template2
}






// let packageElem = document.getElementById('packages')

// function drawAll() {
//   console.log('drawing packages');
//   let template = ''
//   packages.forEach(package => { template += package.to })

//   packageElem.innerText = template
// }
// drawAll()

// function drawPackages(packages) {
//   let template = ''
//   packages.forEach(package => {
//     template += `
//     <p>${package.to}</p>
//     <p>${package.trackingNumber}</p>
//   `})

//   packageElem.innerHTML = template
// }
// drawAll()