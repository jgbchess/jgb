           function changeImage() {
           var image = document.getElementById('myImage');
           if (image.src.match("bulbon")) {
           image.src = "bulboff.jpg";
           } else {
           image.src = "bulbon.jpg";
           }
           }