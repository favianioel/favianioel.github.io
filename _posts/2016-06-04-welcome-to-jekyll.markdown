---
layout: post
title:  "Hello AngularJs!"
date:   2016-06-04 14:06:53 -0400
categories: jekyll update
---
AngularJs
=========

Angular is a powerfull framework that makes things easy , a great framework for one page web apps and it's made BY GOOGLE .

Angular controller snipet:
--------------------------

{% highlight javascript %}
angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){

    $scope.addTodo = function(){
        var todo = { name : "This is a new todo !"};
        $scope.todos.unshift(todo);
    };

    dataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data;
    });
    $scope.deleteTodo = function(todo, $index){
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };
    $scope.saveTodo = function(todo){
        dataService.saveTodo(todo);
    }
});
{% endhighlight %}

Angular Service snipet:
--------------------------

{% highlight javascript %}
angular.module('todoListApp')

    .service('dataService', function($http){

        this.getTodos = function(callback){
            $http.get('mock/todos.json')
                .then(callback)
        };
        this.deleteTodo = function(todo){
            console.log("The todo " + todo.name + " has been deleted !");
//                other logic
        };
        this.saveTodo = function(todo){
            console.log("The todo " + todo.name + " has been saved !");
//                other logic
        };
    });
{% endhighlight %}

Angular Html view snipet:
--------------------------

{% highlight html %}
<!doctype html>
<html lang="en">
<head>
  <title></title>
    <meta charset="utf-8"/>
  <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
  <link href='styles/main.css' rel='stylesheet' type="text/css">
</head>
<body ng-app="todoListApp">

<h1>My TODOs</h1>

<div ng-controller="mainCtrl" class="list">

    <div class="add">
        <a href="" ng-click="addTodo()">+ Add a new task</a>
    </div>

    <div class="item" ng-class="{'editing': editing, 'edited': todo.edited, 'completed' : todo.completed}"
         ng-repeat="todo in todos | orderBy: 'completed'" ng-init="todo.completed = false">

            <input ng-model="todo.completed" type="checkbox"/>

            <label  ng-hide="editing" >{{ todo.name }}</label>

            <input ng-change="todo.edited = true" ng-blur="editing = false" ng-show="editing" ng-model="todo.name"
                   class="editing-label" type="text"/>


        <div class="actions">
            <a href="" ng-click=" editing = !editing">edit</a>
            <a href="" ng-click="saveTodo(todo)">save</a>
            <a href="" ng-click="deleteTodo(todo , $index)" class="delete">delete</a>
        </div>

    </div>

</div>

  <script src="vendor/angular.js" type="text/javascript"></script>
  <script src="scripts/app.js" type="text/javascript"></script>
  <script src="scripts/controllers/main.js" type="text/javascript"></script>
  <script src="scripts/services/data.js" type="text/javascript"></script>
</body>
</html>
{% endhighlight %}


Check out the [App live][app-live] .

[app-live]: http://favianioel.github.io/ngtodos
