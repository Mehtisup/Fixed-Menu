<script>
var menu = window.pageYOffset;

window.onscroll = function() {
    var myMenu = window.pageYOffset;
    if (menu > myMenu) {
        document.getElementById("myList").style.top = "-60px";
    } else {
        document.getElementById("myList").style.top = "0px";
    }
    menu = myMenu;
}
</script>
