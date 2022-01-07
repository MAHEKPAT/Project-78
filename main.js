var images = ["https://tse2.mm.bing.net/th?id=OIP.P46VxBC3-3Ha8ctxWhSKZgHaQg&pid=Api&P=0&w=300&h=300", "http://www.clipartbest.com/cliparts/niE/EzM/niEEzM5KT.png", "https://tse4.mm.bing.net/th?id=OIP.oMvz7HJ4Z4C3N1JpfM31YQHaIz&pid=Api&P=0&w=300&h=300", "https://tse1.mm.bing.net/th?id=OIP.03n2eOKABiHErh6Q0A9vNwHaFj&pid=Api&P=0&w=202&h=152", "https://tse4.mm.bing.net/th?id=OIP.FpZkXe2gqE7YabTVxjyG8wHaHw&pid=Api&P=0&w=300&h=300"];
var names = ["Dad", "Mom", "Me", "Brother", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}