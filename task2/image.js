function setNewImage()
{
    document.getElementById ("img1").src ="dog.jpg";
    document.getElementById ("img2").src ="img4.webp";
    
    
 
}
function outrow()
{
    document.getElementById ("img1").src ="img3.jpg";
    document.getElementById("img2").src="img6.png";
    
}
const img= document.createElement("img")
 const imgg= document.createElement("img")

 function clickrow()
 { 
     
 img.src="img4.webp"
 imgg.src="dog.jpg"
 img.style.width="300px" 
 imgg.style.width="300px"
 
const id1 = document.getElementById("id2")
id1.appendChild(img)
id1.appendChild(imgg)
document.body .appendChild(1)
    // document.getElementById ("img1").src ="img4.webp";
    
 }
 