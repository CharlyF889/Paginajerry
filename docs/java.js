
    
    window.addEventListener('load', ()=>{

      // setTimeout(carga, 2000);
      carga();
      function carga(){
        document.getElementById('circulo').className = 'hide';
        document.getElementById('contenido').className = '';
      }
    });
    
    document.addEventListener('DOMContentLoaded', function() {

      fetch("./items.json").then(function(resp) {
          return resp.json();
      }).then(function(data) {

        const info = data;
        const {productos, postres} = data;
        const names1 = productos.map(
          function({name}) {
            return name;
          }
        );
        const names2 = postres.map(
          function({name}) {
            return name;
          }
        );
        var i;
        var obj = new Object();
      
        function crearnombres(names){
          for (i= 0; i < names.length; i++) {
            obj[`${names[i]}`] = null;
          };
          return obj;
        }

        var nombres1 = crearnombres(names1);
            nombres1 = crearnombres(names2);

        console.log(nombres1);

        var options = {
          data: nombres1,
          onAutocomplete: function(){
            console.log('clickeaste')
          },};

        var elems = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems, options);

        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
        });
        
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems);


      })});
    
    document.addEventListener('DOMContentLoaded', function() {

    var options = {edge:"right"};
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);

    });

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
        var instance = M.Modal.getInstance(elems);
      });


    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(elems, {swipeable: "true"});
      var instance = M.Tabs.getInstance(elems);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
      var instance = M.Datepicker.getInstance(elems);
    });
    
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems);
      var instance = M.Tooltip.getInstance(elems);
    });
  
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems);
      var instance = M.ScrollSpy.getInstance(elems);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
      var instance = M.Dropdown.getInstance(elems);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {
        accordion: false
      });
    });
