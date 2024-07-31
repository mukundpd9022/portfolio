
// FOR NUMBER COUNTER 
 
  function animateCountUp(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function countStart() {
    const $counters = document.querySelectorAll(".js-count-up");
    $counters.forEach((item) => {
      const value = parseInt(item.dataset.value, 10);
      animateCountUp(item, 0, value, 2000);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countStart();
          observer.unobserve(entry.target); // To stop observing once the animation starts
        }
      });
    }, observerOptions);

    const target = document.querySelector('.level');
    if (target) {
      observer.observe(target);
    }
  });
// END OF NUMBER COUNTER 

// ==============PORTFOLIO=============== 

function showAll() {
  updateActiveButton('allbtn');
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        item.style.display = 'block';
    });
}

function showApp() {
  updateActiveButton('appbtn')
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        if (item.classList.contains('filter-app')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function showProduct() {
  updateActiveButton('productbtn')
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        if (item.classList.contains('filter-product')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
function showBranding() {
  updateActiveButton('brandingbtn')
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        if (item.classList.contains('filter-branding')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
function showBooks() {
  updateActiveButton('booksbtn')
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        if (item.classList.contains('filter-books')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function updateActiveButton(activeBtnId) {
  var buttons = document.querySelectorAll('#portfolio-filter button');
  buttons.forEach(function(button) {
      button.classList.remove('active');
  });
  document.getElementById(activeBtnId).classList.add('active');
}

// ==========owlcaruseol =============
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dotsEach: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});


// form validation

const displayMsg=(msg,idname,colorname)=>{
  document.getElementById(idname).innerHTML=msg
  document.getElementById(idname).style.color = colorname
}

const namevalidate=()=>{
  let name = document.getElementById('name').value 
  if(name == ''){
      displayMsg('name is mandatory','namemsg','red')
      return false
  }
  else if(!name.match(/^[a-z A-z]+$/)){
      displayMsg('name must be alphabets','namemsg','red')
      return false
  }
  else if(name.length<3){
      displayMsg('name must be at least 3 character','namemsg','red')
      return false
  }
  else{
      displayMsg('valid name','namemsg','green')
      return true
  }
}

const emailvalidate=()=>{
  let email = document.getElementById('email').value 
  if (email == ''){
      displayMsg('email is mandatory ', 'emailmsg','red')
      return false
  }
  else if(!email.match(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/)){
      displayMsg('follow the sampel: <li> someone@gmail.com </li>','emailmsg','red')
      return false 
  } 
  else{
      displayMsg('valid email','emailmsg','green')
      return true
  }
}

const subjectvalidate =()=>{
  let subject = document.getElementById('subject').value 
  if(subject == ''){
      displayMsg('subject is mandatory','subjectmsg','red')
      return false
  }
  else if(!subject.match(/^[a-z A-z]+$/)){
      displayMsg('subject must be alphabets','subjectmsg','red')
      return false
  }
  else if(subject.length<10){
      displayMsg('subject must be at least 10 character','subjectmsg','red')
      return false
  }
  else{
      displayMsg('valid subject','subjectmsg','green')
      return true
  }
}



const submitform=()=>{
  if(namevalidate()&&emailvalidate()&&subjectvalidate()){
    return true
  }
  else{
    return false
  }
}