$('.menu_toggle').click(function(e){
  e.preventDefault();
  $('.mobile_menu_wrap').toggleClass('active');
});

$('.mobile_menu a, .menu a').click(function(e){
  //e.preventDefault();
  $('.mobile_menu a, .menu a').removeClass('active');
  $(this).addClass('active');
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  var offset = 100;
  if(window.innerWidth < 480) {
	offset = 50;
  }
  if (scroll >= offset) {
      $("header").addClass("sticky");
  }
  else{
      $("header").removeClass("sticky");
  }
}); 


jQuery('.accordion .title').click(function(e){
	e.preventDefault();
	var slide_divs = jQuery(this).siblings('.content');
	var slide_button = jQuery(this);

	jQuery('.accordion .content').not(slide_divs).slideUp();

	slide_divs.slideToggle('500');

	if(jQuery(slide_button).parent().hasClass('active')) {
		jQuery(slide_button).parent().removeClass('active');
		jQuery(slide_divs).parent().removeClass('active');
	} else {
		jQuery(slide_button).parent().addClass('active');
		jQuery(slide_divs).parent().addClass('active');
	}

	jQuery('.content').not(slide_divs).parent().removeClass('active');
	jQuery('.accordion .title').not(slide_button).removeClass('active');
});

var nav = $("nav ul li");
var contents = $(".box-layout > section");


var wrapper = $(".menu"),
links = wrapper.find("a"),
scrollItems = links.map(function() {
	var item = $($(this).attr("href"));
	if (item.length) { return item; }
});

$(window).scroll(function(){
	// var wScroll = $(this).scrollTop();
	
	// $(".scroll_top").text(wScroll);
	
	// if(wScroll >= contents.eq(0).offset().top - 200){
	// 	nav.removeClass("active");
	// 	nav.eq(0).addClass("active");
	// }
	// if(wScroll >= contents.eq(1).offset().top - 200){
	// 	nav.removeClass("active");
	// 	nav.eq(1).addClass("active");
	// }
	// if(wScroll >= contents.eq(2).offset().top - 200){
	// 	nav.removeClass("active");
	// 	nav.eq(2).addClass("active");
	// }
	// if(wScroll >= contents.eq(3).offset().top - 200){
	// 	nav.removeClass("active");
	// 	nav.eq(3).addClass("active");
	// }

    // Get container scroll position
	if (window.innerWidth > 1220) {
		var fromTop;
		fromTop = $(this).scrollTop() + 400;
	
		// Get id of current scroll item
		var cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop) {
				return this;
			}
		});
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		// Set/remove active class
		links.removeClass("active");
		// .end().filter("[href='#"+id+"']").addClass("active");
		wrapper.find('[href="#'+ id + '"]').addClass('active');
	}
});

function getNextWordLetter(word) {

	var speed = 150;
	let txt = getNextWord(word)
	return txt[0];
}

function getNextWord(word) {

	const texts = ["Buy", "Move", "Win","Burn"]
	
	var speed = 150;
	let txt = texts[0]
	if(word === texts[0]){
		txt = texts[1];
	}
	if(word === texts[1]){
		txt = texts[2];
	}
	if(word === texts[2]){
		txt = texts[3];
	}
	if(word === texts[3]){
		txt = texts[0];
	}
	return txt;
}
function typeWriter(word,i) {
	const texts = ["Buy", "Move", "Win","Burn"]
	var speed = 150;
	let txt = getNextWord(word)
	const current = document.getElementById("titleh1").innerHTML.split(' Tokens')[0]
	if (i < txt.length) {
	  document.getElementById("titleh1").innerHTML = current + 
	  												 txt.charAt(i) + " Tokens";
	  i++;
	  setTimeout(()=>{
		typeWriter(word,i)
		},speed)	
	}else{
		setTimeout(()=>{
			deleteWriter(txt)
		},2000)

	}



  }
function deleteWriter(word){
	const textWithTokens = document.getElementById("titleh1").innerHTML; 
	const text = textWithTokens.split(" Tokens")[0];
	var speed = 150;
	if(text.length >0){
		if(text.length === 1){
			document.getElementById("titleh1").innerHTML = getNextWordLetter(word) + " Tokens";
		}else{
			document.getElementById("titleh1").innerHTML=  text.substring(0,text.length-1) + " Tokens"

		}
		if(document.getElementById("titleh1").innerHTML !== getNextWordLetter(word) + " Tokens"){
			setTimeout(()=>{
				deleteWriter(word)
			},speed)
			
		}else{
			setTimeout(()=>{
				typeWriter(word,1)
			},speed)
		}
	}
}
// $(document).ready(function() {
// 	setTimeout(()=>{
// 		deleteWriter("Buy")
// 	},2000)
// });

