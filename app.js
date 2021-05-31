"use strict"


let staticHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function randomCusthour(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




let Seattle = {
    name: "Seattle",
    minCustomer: 23,
    maxCustomer: 65,
    avgCookiespercust: 6.3,

    allCookiesper: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.avgCookiespercust * randomCusthour(this.maxCust, this.minCustomer))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales : ${totalSales} cookies`;
    },

    render: function() {
        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)
        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }

}
Seattle.allCookiesper()
Seattle.render()




let Dubai = {
    name: "Dubai",
    minCustomer: 11,
    macCustomer: 38,
    avgCookiespercust: 6.3,


    allCookiesper: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.avgCookiespercust * randomCusthour(this.macCustomer
        , this.minCustomer))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales : ${totalSales} cookies`;
    },

    render: function() {

        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)

        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }

}
Dubai.allCookiesper()
Dubai.render()




let Paris = {
    name: "Paris",
    minCustomer: 20,
    minCustomer: 38,
    avgCookiespercust: 6.3,

    allCookiesper: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.avgCookiespercust * randomCusthour(this.minCustomer, this.minCustomer))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales : ${totalSales} cookies`;
    },

    render: function() {
        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)
        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }
}
Paris.allCookiesper()
Paris.render()




let Lima = {
    name: "Lima",
    minCustomer: 2,
    maxCustomer: 16,
    avgCookiespercust: 6.3,

    allCookiesper: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.avgCookiespercust * randomCusthour(this.maxCustomer, this.minCustomer))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales :${totalSales} cookies`;
    },

    render: function() {
        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)
        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }
}
Lima.allCookiesper()
Lima.render()