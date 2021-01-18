# Vue Travel App - Vue Router Course

Topics:
* Route Transitions;
* Dynamic routing;
* Lazy loading;
* Nested routes;
* Navigation guards;
* Global navigation guards;
----------------------------------------------------------------------------------------------
Feature:[Apply lazying loading/Code spliting is important to get a faster app router]
Description: This is a feature that loads only whats is needed acording to the routes.
How to: Inside the router file, we just need to create a function in the component structure. 
Ex: component: () => import("./views/Brazil"). 
Tip: We can use the webpackChunkName to rename the files seen into the network tab.
----------------------------------------------------------------------------------------------
Feature:[Setting the Destination page and the Navigation Menu]
Obs: into the Root file we have access to the #route (Obj);
Named routes are important to be used to avoid refactoring the path
Ex: If you have a path /details, you can change it to /destination-details, everything still works. To add a param into a route we can refer it into after the object.
----------------------------------------------------------------------------------------------
Setting new informations:
To avoid using data inside a component, we can use props to set the data statements;
Nested routes: using pages/components as children to avoid loading a new page;
----------------------------------------------------------------------------------------------
Feature:[Vue Transitions and Notfound/NavigationGuards]
Vue Transitions:
in Vue we can work with vue transitions, it may be used to create an css effect when changing the route of the applications, it has some created classes that must be used to create the transition effect.
----------------------------------------------------------------------------------------------
Feature:[Vue Transitions and Notfound/NavigationGuards]
Page NotFound:
To create a page not found, we must create a vue component and then set the route to "*". It means that try to access any unexisting route, it redirect to the not found page. Also we must use a navigation guards (Lifecycle hooks) to avoid problems with route nesting. This hook must be used inside the route with params.
----------------------------------------------------------------------------------------------
Feature:[Working with Scroll position]
To set a scroll position into a determined route, vue have a method called scrollBehavior, it must have 3 arguments (to, from, savedPosition), then we must work with to.hash and some conditionals to set the correct position we want to.
----------------------------------------------------------------------------------------------
Feature:[Working with Global Navigation guards to set a security route]
First we must create a beforeEach function inside the router file, then create the page that we use the security and set the route to it, this route will use a meta attribute to mark the route as protected. A meta property expects an object. Each route method inside the route authentication is call route record, they must be nested to keep the Authentication login working in other routes.
----------------------------------------------------------------------------------------------
Feature:[Working with query params to set the correct url after login]
First thing is to create a redirectPath const inside the login function, it will track the login feature and set the user to the correct page using a push method. Then we must set the query to redirect to fullPath inside the beforeEach function used to set the login.




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```
