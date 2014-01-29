/* START TABS */
$(document).ready(function(){
  $('#tabs-horizontal').hermes_tabs();
});
			

(function($){
    $.fn.extend({
        hermes_tabs: function(options) {
 
            var defaults = {
                active: 1 //which tab should be openned by default. 0 for all closed.
            };

            var options = $.extend(defaults, options);
         
            return this.each(function() {
			  var o = options;
			  var obj = $(this); 
			  var obj_id = "#" + obj.attr("id");

				//Default Action
				$(this).next(".tab_container").find(".tab_content").hide(); //Hide all content
				if (o.active > 0) {
					$(this).find("li:nth-child(" + o.active + ")").addClass("active").show(); //Activate tab and content from declaration
					$(this).next(".tab_container").find(".tab_content:nth-child(" + o.active + ")").show(); 
				}
				
				//On Click Event
				$(this).find("li").click(function() {
					$(obj_id + " li").removeClass("active"); //Remove any "active" class
					$(this).addClass("active"); //Add "active" class to selected tab
					$(obj_id).next(".tab_container").find(".tab_content").hide(); //Hide all tab content
					var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
					$(activeTab).fadeIn(); //Fade in the active content
					return false;
				});

 
            }); // return this.each
        }
    });
})(jQuery);
/* END TABS */

/* */
$('.account.dropdown').hover(function() {
  $(this).addClass('active');
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(500, "easeInOutQuart");
}, function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500, "easeInOutQuart");
  $(this).removeClass('active open').delay(150);
});
/* */

/* START CUSTOM DROP DOWN */
			function DropDown(el) {
				this.dd = el;
				this.placeholder = this.dd.children('span');
				this.opts = this.dd.find('ul.dropdown > li');
				this.val = '';
				this.index = -1;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
                        
						return false;
					});

					obj.opts.on('click',function(){
						var opt = $(this);
						obj.val = opt.text();
						obj.index = opt.index();
						obj.placeholder.text(obj.val);
					});
				},
				getValue : function() {
					return this.val;
				},
				getIndex : function() {
					return this.index;
				}
			}

			$(function() {

				var dd = new DropDown( $('#dd') );
				var lf = new DropDown( $('#sort-by') );
				var lf = new DropDown( $('#sort-method') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown-3').removeClass('active');
				});

			});
/* END DROP DOWN */





