AOS.init();

// ################### Start Java for Portfolio Section ##########################
var link_all = document.getElementById("link_all");
var link_app = document.getElementById("link_app");
var link_card = document.getElementById("link_card");
var link_web = document.getElementById("link_web");

var frame_app =document.getElementById("portfolio_show_app");
var frame_card =document.getElementById("portfolio_show_card");
var frame_web =document.getElementById("portfolio_show_web");

var frame =document.getElementById("portfolio_hide");


let backtotop = document.getElementById("up");


let right_counter = document.getElementById("right_counter");
// window.onscroll = function () {
//   let value = scrollY;
// if(value < 100){
//     backtotop.style.display = "none";
// }
// else{
//     backtotop.style.display = "inline-block";
// }
// }

window.onscroll = function () {
    let value = scrollY;
    if(scrollY > 150){
        backtotop.style.display = "inline-block";
    }
    else{
        backtotop.style.display = "none";
    }
}

up.addEventListener("click",function(){
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth',
    })
})


const counters = document.querySelectorAll('.number');
const speed = 50;

counters.forEach( number => {
	const updateCount = () => {
		const target = +number.getAttribute('final');
		const count = +number.innerText;

		const increment = target / speed;

        if (count < target) {

			number.innerText = count + increment;
			setTimeout(updateCount, 30);
		} else {
			number.innerText = target;
		}
	};

	updateCount();
});



link_app.addEventListener('click',function(){
    link_app.classList.add("active");
    link_all.classList.remove("active");
    link_card.classList.remove("active");
    link_web.classList.remove("active");

    frame.style.display = "none";
    frame_app.style.display = "flex";
    frame_web.style.display = "none";
    frame_card.style.display = "none";
})

link_card.addEventListener('click',function(){
    link_card.classList.add("active");
    link_all.classList.remove("active");
    link_app.classList.remove("active");
    link_web.classList.remove("active");

    frame.style.display = "none";
    frame_card.style.display = "flex";
    frame_web.style.display = "none";
    frame_app.style.display = "none";    
})

link_web.addEventListener('click',function(){
    link_web.classList.add("active");
    link_all.classList.remove("active");
    link_card.classList.remove("active");
    link_app.classList.remove("active");

    frame.style.display = "none";
    frame_web.style.display = "flex";
    frame_app.style.display = "none";
    frame_card.style.display = "none";
})

link_all.addEventListener('click',function(){
    link_all.classList.add("active");
    link_app.classList.remove("active");
    link_card.classList.remove("active");
    link_web.classList.remove("active");

    frame.style.display = "flex";
    frame_web.style.display = "none";
    frame_app.style.display = "none";
    frame_card.style.display = "none";
})


window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

// ################### End Java for Portfolio Section ##########################