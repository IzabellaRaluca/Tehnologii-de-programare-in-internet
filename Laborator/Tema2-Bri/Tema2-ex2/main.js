const intersectie = document.querySelector('#intersectie');

intersectie.addEventListener('click', () => {
    intersect();
});

function intersect() {
    let multime1 = document.getElementById("m1").value.split(",");
    let multime2 = document.getElementById("m2").value.split(",");
 
    const intersection = multime1.filter(element => multime2.includes(element));
  
    if (intersection.length > 0) {
      document.getElementById("result").innerHTML = "Intersecția este: " + intersection.join(", ");
    } else {
      document.getElementById("result").innerHTML = "Nu exista nici un element comun";
    }
  }
  