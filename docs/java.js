
    

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
console.log(names1.append(names2));
        const nombres1 = crearnombres(names1);
        const nombres2 = crearnombres(names2);
        const nombres = {...nombres1, ...nombres2};
        const searchoptions = {
          data: nombres,
          onAutocomplete: function(texto){

            try{
              var index = productos.find(producto => producto.name === texto).id;
            } catch{
              var index = postres.find(postre => postre.name === texto).id;
            }
            var card = document.getElementById(index);
            var cardsection = card.parentElement.parentElement.parentElement.parentElement;
            console.log(card.parentElement.parentElement.parentElement)

            if (cardsection.classList.contains("active") == false){
              // cardsection.classList.add("active");
            }

            console.log(card, cardsection);

            card.scrollIntoView(false);

            // var index = productos.find(producto => producto.name === texto).id;
            // console.log(index);
            // if (index === -1){
            //   var index = postres.find(postre => postre.name === texto).id;
            // }
            //   console.log(index);
          }


          };

        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {
        accordion: false
        });


        var options1 = searchoptions;
        var elems1 = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems1, options1);

      })});

      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {
          accordion: false
        });
        
      });

      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems);
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
