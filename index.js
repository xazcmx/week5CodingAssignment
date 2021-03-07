class Grocery {//items to add to grocery list. perhaps i should have named this items for more clarity/flexibility
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }


    describe() {
        return `${this.name} costs ${this.cost}.`;
    }
}



class List {//a place to hold the items added to the grocery list
    constructor(name) {
        this.name = name;
        this.groceryList =[];
    }
    addGrocery(grocery) {
        this.groceryList.push(grocery);
    }

    describe() {
        return `${this.name} has ${this.groceryList.length} things on it.`;
    }
   }




class Menu {//based off of the menu in the video
    constructor() {
        this.lists = [];
        this.selectedList = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection !=0) {
            switch(selection) {
                case '1':
                     this.createList();
                    break;
                case '2':
                    this.viewList();
                    break;   
                case '3':
                    this.deleteList();
                    break;
                case '4':
                    this.displayLists();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert(`Good luck out there.`);
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new list
        2) view list
        3) delete list
        4) display all lists
        `);
    }

    showListMenuOptions(listInfo) {
        return prompt(`
        0) back
        1) add item
        2) remove item
        3) total list cost
        -----
        ${listInfo}
        `);
    }

    displayLists() {
        let listString = "";
        for (let i = 0;i < this.lists.length; i++) {
            listString += i + ') ' + this.lists[i].name + "\n";
        }
        alert(listString);
    }
    createList() {
        let name = prompt(`Enter name for new list:`);
        this.lists.push(new List(name));
    }
    viewList() {
        let index = prompt(`Enter index of the list you wish to view:`);
        if (index > -1 && index < this.lists.length) {
            this.selectedList = this.lists[index];
            let description = `List Name : ${this.selectedList.name} \n`;

            for (let i = 0; i < this.selectedList.groceryList.length; i++) {
                description += i + ") " + this.selectedList.groceryList[i].name
                 + " - " + this.selectedList.groceryList[i].cost + "\n";                 
            }

            let selection = this.showListMenuOptions(description);
            switch (selection) {
                case "1":
                    this.createGrocery();
                    break;
                case "2":
                    this.deleteGrocery();
                    break
                case "3":
                    this.totalGrocery();
             }
        }
    }

    deleteList() {
        let index = prompt(`Enter the index of the list that you want to remove:`);
        if (index > -1 && index < this.lists.length) {
            this.lists.splice(index, 1);
        }
    }

    createGrocery() {
        let name = prompt(`Enter name for new item needed`);
        let cost = prompt(`Enter cost for that item`);
        this.selectedList.groceryList.push(new Grocery(name, cost));
    }

    deleteGrocery() {
        let index = prompt(`Enter the index of the item you want to remove:`);
        if (index > -1 && index < this.selectedList.groceryList.length) {
            this.selectedList.groceryList.splice(index, 1);
        }
    }


}

let menu = new Menu();
menu.start();