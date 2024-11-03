

function showHeader(){
	banner.classList.add('visible');
}
document.addEventListener('mouseover',showHeader);
document.addEventListener('click', showHeader)
let timeout;
function hideHeader(){
	banner.classList.remove('visible');
}
document.addEventListener('mousemove',()=>{
	clearTimeout(timeout);
	timeout = setTimeout(hideHeader, 10000)
})


// window.onscroll = function(){
// 	const banner = document.getElementById('banner');
// 	const banEl = document.querySelectorAll('.banner')
// 	if (document.body.scrollTop> 200  || document.documentElement.scrollTop > 200) {
// 		banner.classList.add('scrolled');
		
		
// 	} else {
// 		banner.classList.remove('scrolled');
	
// 	}
// };

