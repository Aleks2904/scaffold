$( document ).ready(function() {
  $.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.onscroll = function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }
  }

  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };

  moveItItem.prototype.update = function(scrollTop){
    var pos = scrollTop / this.speed/2;

    this.el.css('transform', 'translate(' + -pos + 'px,' + -pos + 'px)');
  };

  $(function(){
    $('[data-scroll-speed]').moveIt();
  });
});