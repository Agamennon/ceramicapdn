
function menuCtrl($route ,$routeParams, $location) {

     $route.when('',
        {controller: bemVindoCtrl,
            template: 'page/bemVindo.html'});

         $route.when('/contato',
        {controller: contatoCtrl,
            template: 'page/contato.html'});

        $route.when('/sobre',
        {controller: sobreCtrl,
            template: 'page/sobre.html'});

      $route.when('/produtos',
        {controller: produtosCtrl,
            template: 'page/produtos.html'});


   $route.parent(this);
     this.params = $routeParams;

   $route.parent(this);
     this.params = $routeParams;


}

menuCtrl.$inject = ['$route','$routeParams','$location'];
