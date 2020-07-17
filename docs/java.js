
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    })

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
        var instance = M.Modal.getInstance(elem);
      });

    document.addEventListener('DOMContentLoaded',function() {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems);
      var instance = M.Materialbox.getInstance(elem);

    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.slider');
      var instances = M.Slider.init(elems);
      var instance = M.Slider.getInstance(elem);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);
      var instance = M.Parallax.getInstance(elem);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(elems);
      var instance = M.Tabs.getInstance(elem);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
      var instance = M.Datepicker.getInstance(elems);
    });
    
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems);
      var instance = M.Tooltip.getInstance(elem);
    });
  
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems);
      var instance = M.ScrollSpy.getInstance(elem);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
      var instance = M.Dropdown.getInstance(elem);
    });