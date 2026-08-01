// ===========================
// FOTO GALLERY
// ===========================

const gallery=document.getElementById("photoGallery");

const totalPhotos=30;

for(let i=1;i<=totalPhotos;i++){

    const card=document.createElement("div");

    card.className="photo-card";

    card.innerHTML=`

        <img src="img/photo${i}.jpg">

        <p>Our Memory ${i} 💕</p>

    `;

    gallery.appendChild(card);

}

// ===========================
// LIGHTBOX
// ===========================

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

document.addEventListener("click",(e)=>{

    if(e.target.tagName==="IMG"){

        lightbox.style.display="flex";

        lightboxImg.src=e.target.src;

    }

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

// ===========================
// GIFT POPUP
// ===========================

const popup=document.getElementById("popup");

const title=document.getElementById("popupTitle");

const text=document.getElementById("popupText");

const gifts=document.querySelectorAll(".gift-card");

const messages={

1:{
title:"🌹 Bucket",
text:"bucket"
},

2:{
title:"💌 Barang",
text:"Barang yang diinginkan"
},

3:{
title:"🧸 Baju couple",
text:"hehe"
}

};

gifts.forEach(card=>{

card.addEventListener("click",()=>{

const id=card.dataset.gift;

title.innerHTML=messages[id].title;

text.innerHTML=messages[id].text;

popup.style.display="flex";

});

});

document.getElementById("closePopup")
.addEventListener("click",()=>{

popup.style.display="none";

});