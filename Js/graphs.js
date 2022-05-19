
// Graphs
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
    datasets: [{ 
        data: [4500,2700,1500,7980,2700,3808,7693,9000,8500,7000],
        label: "Market Demand",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [2820,3500,4011,5002,6035,7809,6947,7400,8700,9267],
        label: "Market Price",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [3000,3290,1050,8000,2900,4000,8000,10000,8000,6500],
        label: "Sale",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [4570,2790,1000,7076,2794,3809,7640,9070,8000,6500],
        label: "Profit Margin",
        borderColor: "#e8c3b9",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Market and Sale Data Analysis'
    }
  }
});

// Pie Chart


new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Central Nervous System (CNS) Depressants", "CNS Stimulants", "Hallucinogens", "issociative Anesthetics ", "Narcotic Analgesics","Inhalants","Cannabis","Steroids"],
      datasets: [{
        label: "Sale (By %)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd","#8e5ea2","#3cba9f","#e8c3b9"],
        data: [21,13,12,19,12,10,7,6]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Types of Medices Sold'
      }
    }
});

// Dough nut Chart
new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Regualar Physical Visitors", "Home Delivery", "Whole Sale Clients", "Random Visitors", "Online Clients"],
    datasets: [
      {
        label: "Customers Numbers (%)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [45,10,20,20,5]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});