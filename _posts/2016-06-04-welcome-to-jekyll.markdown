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

Check out the [App live][app-live] .

[app-live]: http://favianioel.github.io/ngtodos
