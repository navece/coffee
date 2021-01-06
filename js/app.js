
eventListners();
function eventListners(){
    const ui = new UI()
    window.addEventListener('load', function(){
        ui.hidePreloader();
})

document.querySelector('.navbtn').addEventListener('click', function(){
    ui.showNav();
})
document.querySelector('.video__switch').addEventListener('click', function(){
    ui.videoControls();
})
document.querySelector('.drink-form').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;
    let value = ui.checkEmpty(name, lastName, email)

    if(value){
        ui.showFeedback('custumer added to the list', 'success');
    }
    else{
        ui.showFeedback('some form values are empty', 'error');
    }

})
}


function UI() {

}

UI.prototype.hidePreloader = function() {
    document.querySelector('.preloader').style.display = "none";
}
UI.prototype.showNav = function() {
    document.querySelector('.nav').classList.toggle('nav-show');
}
UI.prototype.videoControls = function() {
    let btn = document.querySelector('.video__switch-btn');
    if(!btn.classList.contains('btnSlide')){
        btn.classList.add('btnSlide');
        document.querySelector('.video__item').pause();
    }
    else{
        btn.classList.remove('btnSlide');
        document.querySelector('.video__item').play();
    }
}
UI.prototype.checkEmpty = function(name, lastname, email){
    let result;
    if(name === '' || lastname === '' || email === ''){
        result = false;
    }
    else{
        result = true;
    }
    return result;
}

UI.prototype.showFeedback = function(text,type){
    if(type === 'success'){
        let feedback = document.querySelector('.drink-form__feedback');
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');
    }
    else if(type === 'error'){
        let feedback = document.querySelector('.drink-form__feedback');
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
}

UI.prototype.removeAlert = function(type){
    setTimeout(function(){
        document.querySelector('.drink-form__feedback').classList.remove(type);
    }, 3000)
}