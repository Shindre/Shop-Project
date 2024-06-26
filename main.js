var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;


//Đóng mở menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height='auto';
    } else {
        header.style.height=null;
    }
}

//Tự động đóng menu khi click vào 
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for( var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick =function(){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if (isParentMenu){
            event.preventDefault();
        } else{
        header.style.height=null;
        }
    }
}