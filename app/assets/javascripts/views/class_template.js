/**
 * Created by user on 7/22/14.
 */

function AppViewModel() {

    self.items = ko.observableArray();

    self.newItemValue=ko.observable("");

    self.addItem = function(){
        self.items.push(new toDoItem(self.newItemValue()));
        self.newItemValue("");
    }

    self.removeItem = function(item){
        self.items.remove(item);
    }
}

function toDoItem(todoText) {
    var self = this;
    self.name = todoText;
}
$(document).ready(function(){
    ko.applyBindings(new AppViewModel());
});
