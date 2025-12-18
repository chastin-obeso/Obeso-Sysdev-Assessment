
    
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");
    const color3 = document.getElementById("color3");
    const color4 = document.getElementById("color4");
    const color5 = document.getElementById("color5");
    const img1_1 = document.getElementById("img1-1");
    const img2_1 = document.getElementById("img2-1");
    const img3_1 = document.getElementById("img3-1");
    const img4_1 = document.getElementById("img4-1");
    const img5_1 = document.getElementById("img5-1");
    const img1_2 = document.getElementById("img1-2");
    const img2_2 = document.getElementById("img2-2");
    const img3_2 = document.getElementById("img3-2");
    const img1_3 = document.getElementById("img1-3");
    const img2_3 = document.getElementById("img2-3");
    const img3_3 = document.getElementById("img3-3");
    const img4_3 = document.getElementById("img4-3");
    const img5_3 = document.getElementById("img5-3");
    const img1_4 = document.getElementById("img1_4");
    const img2_4 = document.getElementById("img2_4");
    const img3_4 = document.getElementById("img3_4");
    const img4_4 = document.getElementById("img4_4");
    const img5_4 = document.getElementById("img5_4");
    const img1_5 = document.getElementById("img1_5");
    const img2_5 = document.getElementById("img2_5");
    const img3_5 = document.getElementById("img3_5");
    const img4_5 = document.getElementById("img4_5");
    const img5_5 = document.getElementById("img5_5");
    const mainPic = document.getElementById("main-pic");
    const sizeSelect = document.getElementById("size-select");
    const productName = document.getElementById("product-name");

    if(sizeSelect){
        sizeSelect.addEventListener("change", function() {
            text = productName.innerHTML;
            if(sizeSelect.value === "iPhone 17") {
                if(productName.innerHTML.includes("iPhone 17 Pro Max")){
                    productName.innerHTML = text.replace("iPhone 17 Pro Max", "iPhone 17");
                }
                else{
                    productName.innerHTML = text.replace("iPhone 17 Pro", "iPhone 17");
                }
            }
            else if (sizeSelect.value === "iPhone 17 Pro") {
                if(productName.innerHTML.includes("iPhone 17 Pro Max")){
                    productName.innerHTML = text.replace("iPhone 17 Pro Max", "iPhone 17 Pro");
                }
                else{
                    productName.innerHTML = text.replace("iPhone 17", "iPhone 17 Pro");
                }
            } else {
                if(productName.innerHTML.includes("iPhone 17 Pro")){
                    productName.innerHTML = text.replace("iPhone 17 Pro", "iPhone 17 Pro Max");
                }
                else{
                    productName.innerHTML = text.replace("iPhone 17", "iPhone 17 Pro Max");
                }
            }
        });
    }
    if(color1){
        color1.addEventListener("click", function() {
        color1.style.outline = "3px solid #2563eb";
        color1.style.outlineOffset = "5px";
        color2.style.outline = "none";
        if(color3){
            color3.style.outline = "none";
        }
        if(color4){
            color4.style.outline = "none";
        }
        if(color5){
            color5.style.outline = "none";
        }
    });
    }
    

    if(color2){
        color2.addEventListener("click", function() {
        color1.style.outline = "none";
        color2.style.outline = "3px solid #2563eb";
        color2.style.outlineOffset = "5px";
        if(color3){
            color3.style.outline = "none";
        }
        if(color4){
            color4.style.outline = "none";
        }
        if(color5){
            color5.style.outline = "none";
        }
    });
    }

    if(color3){
        color3.addEventListener("click", function() {
        color1.style.outline = "none";
        color2.style.outline = "none";
        color3.style.outline = "3px solid #2563eb";
        color3.style.outlineOffset = "5px";
        color4.style.outline = "none";
        color5.style.outline = "none";
    });
    }

    if(color4){
        color4.addEventListener("click", function() {
        color1.style.outline = "none";
        color2.style.outline = "none";
        color3.style.outline = "none";
        color4.style.outline = "3px solid #2563eb";
        color4.style.outlineOffset = "5px";
        color5.style.outline = "none";
        
    });
    }

    if(color5){
        color5.addEventListener("click", function() {
        color1.style.outline = "none";
        color2.style.outline = "none";
        color3.style.outline = "none";
        color4.style.outline = "none";
        color5.style.outline = "3px solid #2563eb";
        color5.style.outlineOffset = "5px";
    });
    }

    if(img1_1){
    img1_1.addEventListener("click", function() {
        mainPic.src = "/item1/1.png";
        img1_1.style.borderBottom = "2px solid #1C6EA4";
        img2_1.style.border = "none";
        img3_1.style.border = "none";
        img4_1.style.border = "none";
        img5_1.style.border = "none";
    });
    }

    if(img2_1){
    img2_1.addEventListener("click", function() {
        mainPic.src = "/item1/2.png";
        img1_1.style.border = "none";
        img2_1.style.borderBottom = "2px solid #1C6EA4";
        img3_1.style.border = "none";
        img4_1.style.border = "none";
        img5_1.style.border = "none";
    });
    }

    if(img3_1){
    img3_1.addEventListener("click", function() {
        mainPic.src = "/item1/3.png";
        img1_1.style.border = "none";
        img2_1.style.border = "none";
        img3_1.style.borderBottom = "2px solid #1C6EA4";
        img4_1.style.border = "none";
        img5_1.style.border = "none";
    });
    }

    if(img4_1){
    img4_1.addEventListener("click", function() {
        mainPic.src = "/item1/4.png";
        img1_1.style.border = "none";
        img2_1.style.border = "none";
        img3_1.style.border = "none";
        img4_1.style.borderBottom = "2px solid #1C6EA4";
        img5_1.style.border = "none";
    });
    }

    if(img5_1){
    img5_1.addEventListener("click", function() {
        mainPic.src = "/item1/5.png";
        img1_1.style.border = "none";
        img2_1.style.border = "none";
        img3_1.style.border = "none";
        img4_1.style.border = "none";
        img5_1.style.borderBottom = "2px solid #1C6EA4";
    });
    }

    if(img1_2){
    img1_2.addEventListener("click", function() {
        mainPic.src = "/item2/1.png";
        img1_2.style.borderBottom = "2px solid #1C6EA4";
        img2_2.style.border = "none";
        img3_2.style.border = "none";
    });
    }

    if(img2_2){
    img2_2.addEventListener("click", function() {
        mainPic.src = "/item2/2.png";
        img1_2.style.border = "none";
        img2_2.style.borderBottom = "2px solid #1C6EA4";
        img3_2.style.border = "none";
    }); 
    }

    if(img3_2){
    img3_2.addEventListener("click", function() {
        mainPic.src = "/item2/3.png";
        img1_2.style.border = "none";
        img2_2.style.border = "none";
        img3_2.style.borderBottom = "2px solid #1C6EA4";
    });
    }

    if(img1_3){
    img1_3.addEventListener("click", function() {
        mainPic.src = "/item3/1.png";
        img1_3.style.borderBottom = "2px solid #1C6EA4";
        img2_3.style.border = "none";
        img3_3.style.border = "none";
        img4_3.style.border = "none";
        img5_3.style.border = "none";
    });
    }

    if(img2_3){
    img2_3.addEventListener("click", function() {
        mainPic.src = "/item3/2.png";
        img1_3.style.border = "none";
        img2_3.style.borderBottom = "2px solid #1C6EA4";
        img3_3.style.border = "none";
        img4_3.style.border = "none";
        img5_3.style.border = "none";
    });
    }

    if(img3_3){
    img3_3.addEventListener("click", function() {
        mainPic.src = "/item3/3.png";
        img1_3.style.border = "none";
        img2_3.style.border = "none";
        img3_3.style.borderBottom = "2px solid #1C6EA4";
        img4_3.style.border = "none";
        img5_3.style.border = "none";
    });
    }   

    if(img4_3){
    img4_3.addEventListener("click", function() {
        mainPic.src = "/item3/4.png";
        img1_3.style.border = "none";
        img2_3.style.border = "none";
        img3_3.style.border = "none";
        img4_3.style.borderBottom = "2px solid #1C6EA4";
        img5_3.style.border = "none";
    });
    }

    if(img5_3){
    img5_3.addEventListener("click", function() {
        mainPic.src = "/item3/5.png";
        img1_3.style.border = "none";
        img2_3.style.border = "none";
        img3_3.style.border = "none";
        img4_3.style.border = "none";
        img5_3.style.borderBottom = "2px solid #1C6EA4";
    });
    }

    if(img1_4){
    img1_4.addEventListener("click", function() {
        mainPic.src = "/item4/1.png";
        img1_4.style.borderBottom = "2px solid #1C6EA4";
        img2_4.style.border = "none";
        img3_4.style.border = "none";
        img4_4.style.border = "none";
        img5_4.style.border = "none";
    });
    }

    if(img2_4){
    img2_4.addEventListener("click", function() {
        mainPic.src = "/item4/2.png";
        img1_4.style.border = "none";
        img2_4.style.borderBottom = "2px solid #1C6EA4";
        img3_4.style.border = "none";
        img4_4.style.border = "none";
        img5_4.style.border = "none";
    });
    }

    if(img3_4){
    img3_4.addEventListener("click", function() {
        mainPic.src = "/item4/3.png";
        img1_4.style.border = "none";
        img2_4.style.border = "none";
        img3_4.style.borderBottom = "2px solid #1C6EA4";
        img4_4.style.border = "none";
        img5_4.style.border = "none";
    });
    }

    if(img4_4){
    img4_4.addEventListener("click", function() {
        mainPic.src = "/item4/4.png";
        img1_4.style.border = "none";
        img2_4.style.border = "none";
        img3_4.style.border = "none";
        img4_4.style.borderBottom = "2px solid #1C6EA4";
        img5_4.style.border = "none";
    });
    }

    if(img5_4){
    img5_4.addEventListener("click", function() {
        mainPic.src = "/item4/5.png";
        img1_4.style.border = "none";
        img2_4.style.border = "none";
        img3_4.style.border = "none";
        img4_4.style.border = "none";
        img5_4.style.borderBottom = "2px solid #1C6EA4";
    });
    }

    if(img1_5){
    img1_5.addEventListener("click", function() {
        mainPic.src = "/item5/1.png";
        img1_5.style.borderBottom = "2px solid #1C6EA4";
        img2_5.style.border = "none";
        img3_5.style.border = "none";
        img4_5.style.border = "none";
        img5_5.style.border = "none";
    });
    }

    if(img2_5){
    img2_5.addEventListener("click", function() {
        mainPic.src = "/item5/2.png";
        img1_5.style.border = "none";
        img2_5.style.borderBottom = "2px solid #1C6EA4";
        img3_5.style.border = "none";
        img4_5.style.border = "none";
        img5_5.style.border = "none";
    });
    }

    if(img3_5){
    img3_5.addEventListener("click", function() {
        mainPic.src = "/item5/3.png";
        img1_5.style.border = "none";
        img2_5.style.border = "none";
        img3_5.style.borderBottom = "2px solid #1C6EA4";
        img4_5.style.border = "none";
        img5_5.style.border = "none";
    });
    }

    if(img4_5){
    img4_5.addEventListener("click", function() {
        mainPic.src = "/item5/4.png";
        img1_5.style.border = "none";
        img2_5.style.border = "none";
        img3_5.style.border = "none";
        img4_5.style.borderBottom = "2px solid #1C6EA4";
        img5_5.style.border = "none";
    });
    }

    if(img5_5){
    img5_5.addEventListener("click", function() {
        mainPic.src = "/item5/5.png";
        img1_5.style.border = "none";
        img2_5.style.border = "none";
        img3_5.style.border = "none";
        img4_5.style.border = "none";
        img5_5.style.borderBottom = "2px solid #1C6EA4";
    });
    }