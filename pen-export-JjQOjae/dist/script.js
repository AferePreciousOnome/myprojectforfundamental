var image;

// Describe this function...
function display() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_chinatown = document.getElementById('chinatown');
  element_chinatown.setAttribute("src", image[0]);
}


image = ['https://i0.wp.com/travelgangtok.com/blog/wp-content/uploads/2023/12/Bangkok-Thailand.jpg?resize=741%2C437&ssl=1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnb_WgYD1cbmCUN0LCZXyFVCacUt77_sonSg&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKMJle35LG9UwDLpRj3_plrra60MaAzr1_w&s', 'https://images.squarespace-cdn.com/content/v1/5856bc666a49634cd55b0ba9/1621445288808-RTKP0PXT6HXYNCIU8IG0/best-cities-in-thailand.jpeg'];
display();


document.getElementById('next').addEventListener('click', (event) => {
  image.push(image.shift());
  display();

});

document.getElementById('previous').addEventListener('click', (event) => {
  image.unshift(image.pop());
  display();

});

var navMeun, item;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


navMeun = [];


document.getElementById('hamburger').addEventListener('click', (event) => {
  if (!navMeun.length) {
    navMeun = ['Home', 'About', 'Contact'];
    let element_navMeun = document.getElementById('navMeun');
    let new_a = document.createElement('a');
    navMeun.forEach((item) => {
      let new_li = document.createElement('li');
      new_li.setAttribute("href", '#');
      new_li.innerText = item;

      new_a.appendChild(new_li);
    });

    element_navMeun.appendChild(new_a);
  } else {
    navMeun = [];
    let element_navMeun2 = document.getElementById('navMeun');
    element_navMeun2.replaceChildren();
  }

});

document.getElementById('submit').addEventListener('click', (event) => {
  let element_comment_input = document.getElementById('comment-input');
  let new_li2 = document.createElement('li');
  new_li2.innerText = document.getElementById('comment-input').value;

  element_comment_input.appendChild(new_li2);
  event.target.style.visibility = (false) ? 'visible' : 'hidden';

});