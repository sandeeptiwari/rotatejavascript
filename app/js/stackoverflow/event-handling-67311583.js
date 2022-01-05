var beforeunload = function (e) {
    e.preventDefault();
    console.log('beforeunload EL');
}

window.addEventListener("beforeunload", beforeunload);

document.body.addEventListener('click',function(event){
    if (event.defaultPrevented) return;
    console.log('click EL');
    window.removeEventListener("beforeunload", beforeunload);
});
