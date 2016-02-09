
//This is an example of an annonomous function
app.controller('choresController', function($scope){
    $scope .test = "This is a test";
    
    $scope.Chores = [{
        task:'Walk dog', 
        dueDate: Date.now(),
        responsibleParty: 'Scott',
        estTime: 15
        
    },
    {
        task:'Run dog', 
        dueDate: Date.now(),
        responsibleParty: 'Dave',
        estTime: 45
        
    },
    {
        task:'Do Laundry', 
        dueDate: Date.now(),
        responsibleParty: 'Vina',
        estTime: 30
        
    },
    {
        task:'Vacuum', 
        dueDate: Date.now(),
        responsibleParty: 'Igor',
        estTime: 25
        
    },
    {
        task:'Wash Floor', 
        dueDate: Date.now(),
        responsibleParty: 'Alex',
        estTime: 60
        
    },
    {
        task:'Take out the Garbage', 
        dueDate: Date.now(),
        responsibleParty: 'Sarah',
        estTime: 10
        
    },]
    
    $scope.addNewChore = function int(){
        $scope.Chores.push($scope.newTask)
        $scope.newTask = "";
        
    }
    
    $scope.deleteChore = function(i){
        $scope.Chores.splice(i,1)
        
    }
    
})

//Constructors
var constr = function(prop1, prop2){
this.prop1 = prop1;
this.prop2 = prop2;
}