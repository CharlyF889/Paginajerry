
    

    window.addEventListener('load', ()=>{

      // setTimeout(carga, 2000);
      carga();
      function carga(){
        document.getElementById('circulo').className = 'hide';
        document.getElementById('contenido').className = '';
      }
    })

    document.addEventListener('DOMContentLoaded', function() {

      const coll = document.querySelectorAll('.collapsible.expandable');
      const instcoll = M.Collapsible.init(coll, {
        accordion: false
        }); 
    });

    
    document.addEventListener('DOMContentLoaded', function() {

      
      fetch("./items.json").then(function(resp) {
          return resp.json();
      }).then(function(data) {
        const data1 = data;
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
      
        function crearnombres(names){
        var i;
        var obj = new Object();
          for (i= 0; i < names.length; i++) {
            obj[`${names[i]}`] = null;
          };
          return obj;
        }

        const nombres1 = crearnombres(names1);
        const nombres2 = crearnombres(names2);
        const nombres = {...nombres1, ...nombres2};
        const searchoptions = {
          data: nombres,
          onAutocomplete: function(texto){

            try{
              var index = productos.find(producto => producto.name === texto).id;
              var categoria = 0;
            } catch{
              var index = postres.find(postre => postre.name === texto).id;
              var categoria = 2;
            }
            var card = document.getElementById(index);
            var cardsection = card.parentElement.parentElement.parentElement.parentElement;
            var collap = cardsection.parentElement;

            if (cardsection.classList.contains("active") == false){
              // console.log('Estaba cerrado el indice: '+categoria);
              var instance = M.Collapsible.getInstance(collap);
              instance.open(categoria);
            }
            card.scrollIntoView(true);

          }};

        var options1 = searchoptions;
        var elems1 = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems1, options1);
        
      })});

      document.addEventListener('DOMContentLoaded', function() {
        var elems2 = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems2);
      });

      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {
          fullWidth: true,
          indicators: true
      });
    });      
    
    document.addEventListener('DOMContentLoaded', function() {

    var options = {edge:"right"};
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);

    });

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
      });


    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(elems, {swipeable: "true"});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
    
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems);
    });
  
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
      });
    });
