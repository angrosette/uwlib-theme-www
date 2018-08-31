$(document).ready(function() {
  //make all columns the same height
  var a = $('#portal-column-content').height();					   
  var b = $('#portal-column-one').height();
  
  if(a > b) {
	  $('#portal-column-one').css('min-height',(a + 30));
  }
  
  
  // toggle left-nav
  $('.btn-offcanvas').click(function() {
    $('.row-offcanvas-left').toggleClass('active');
    return false;
  });

  // close main-nav
  var $mm = $('#navbar-menu .nav-collapse');
  var mmheight = $mm.css('height');
  var closemm = function() {
	if(mmheight = "auto") {
		$mm.css('height','0px');
	};
	if($mm.hasClass('in')) {
		$mm.toggleClass('in');
	};
  };
  
  // toggle search
  $('#searchicon-wrapper').click(function() {
    $('#search').toggleClass('active');
	if($('#thin-strip').hasClass('active')) {
		$('#thin-strip').toggleClass('active');
	};
	closemm();
    return false;
  });
  
  // toggle uw-tile
  $('#listicon-wrapper').click(function() {
    $('#thin-strip').toggleClass('active');
	if($('#search').hasClass('active')) {
		$('#search').toggleClass('active');
	};
	closemm();
    return false;
  });
  
  //analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-54313424-1', 'auto');
  ga('send', 'pageview');
  ga('set', 'anonymizeIp', true);  
});
