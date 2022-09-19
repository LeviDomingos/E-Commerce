let itemsQuantity = 0;
let showPicture = 1;
window.onload = function() {


    document.getElementById("id-toggle-menu").addEventListener("click", createMobileMenu);
    document.getElementById("close-menu").addEventListener("click", closeMobileMenu);

    document.getElementById("minus").addEventListener("click", addItmesToBasket);
    document.getElementById("plus").addEventListener("click",  addItmesToBasket);

    document.getElementById("id-add-to-basket").addEventListener("click", addToCart);

    document.getElementById("id-shopping-basket").addEventListener("click", showShoppingBasket);

    document.getElementById("id-main-img").addEventListener("dblclick",lightBoxPicture);

    document.getElementById("id-close-lightbox").addEventListener("click", closeLightBox);

    document.getElementById("id-previews").addEventListener("click", previewsPicture);
    document.getElementById("id-next").addEventListener("click", nextPicture);

    document.getElementById("id-lightbox-previews-img").addEventListener("click", lightBoxPreviewsPicture);
    document.getElementById("id-lightbox-next-img").addEventListener("click", lightBoxNextPicture);

    document.querySelector(".img-1").addEventListener("click", switchPicturesOnMain);
    document.querySelector(".img-2").addEventListener("click", switchPicturesOnMain);
    document.querySelector(".img-3").addEventListener("click", switchPicturesOnMain);
    document.querySelector(".img-4").addEventListener("click", switchPicturesOnMain);

    const shoppingCart = document.getElementById("sshopping-cart");


    function createMobileMenu() {
        document.getElementById("mobile-nav").classList.remove("hide-any-element");
        const listMenu = ["Collection", "Men", "Women", "About", "Contact"];
        for(let x = 0; x < listMenu.length; x++) {
            const element = document.createElement("li");
            element.innerText = listMenu[x];
            element.style.fontWeight ="bold";
            element.style.display ="block";
            element.style.marginTop ="55px";
            element.style.marginLeft ="25px";
            element.style.cursor ="pointer";
            document.getElementById("mobile-nav").appendChild(element);
            document.getElementById("mobile-nav").classList.add("mobile-menu");
        }
     }


    function closeMobileMenu() {
        const element = document.getElementById("mobile-nav");
        while (element.lastChild.id !== 'close-menu') {
            element.removeChild(element.lastChild);
        }
        document.getElementById("mobile-nav").classList.add("hide-any-element");
        document.getElementById("mobile-nav").classList.remove("mobile-menu");
    }


    function addItmesToBasket() {

        if(this.innerText ==="-" && itemsQuantity > 0) {
            document.getElementById("zero").innerText = --itemsQuantity; 
        }
        else {
            if(this.innerText ==="+") {
                document.getElementById("zero").innerText = ++itemsQuantity;
            }
        }
    }

    function addToCart() {
        const element = document.getElementById("id-items");
        if(itemsQuantity > 0) {
            element.classList.remove("hide-any-element");
            element.classList.add("show-quantity-in-the-cart");
            element.innerText = itemsQuantity;
        }
        else {
            element.innerText = "";
            element.classList.remove("show-quantity-in-the-cart");
            element.classList.add("hide-any-element");
        }
    }

    function emptyCartOrBasket(element) {
        element.classList.add("show-shopping-basket");
        const newElementP = document.createElement("p");
        newElementP.innerText = "cart";
        newElementP.style.fontWeight ="bolder";
        newElementP.style.marginTop ="10px";
        newElementP.style.marginLeft ="10px";
        element.appendChild(newElementP);

        const newElementHr = document.createElement("hr");
        newElementHr.style.marginTop ="30px";
        element.appendChild(newElementHr);

        const newElementInfo = document.createElement("p");
        newElementInfo.innerText = "your cart is empty";
        newElementInfo.style.opacity ="0.2";
        newElementInfo.style.marginTop ="50px";
        newElementInfo.style.textAlign ="center";
        element.appendChild(newElementInfo);

    }

    function cartWithGoods(element) {
    }
    

    function showShoppingBasket() {
        const element = document.getElementById("id-showing-basket");
        const elementtwo = document.getElementById("id-goods");
        if(itemsQuantity === 0 && element.className ==="") {
            emptyCartOrBasket(element);
        }

        else {
            
            if(itemsQuantity > 0 && element.className === "") {
                cartWithGoods(element);
            }
        }
    }

    function previewsPicture() {
        if(showPicture === 1) {
            document.getElementById("id-main-img").src = "static/images/image-product-4.jpg";
            ++showPicture;
        }
        else {
            if(showPicture === 2) {
                document.getElementById("id-main-img").src = "static/images/image-product-3.jpg";
                ++showPicture;
            }
            else {
                if(showPicture === 3) {
                    document.getElementById("id-main-img").src = "static/images/image-product-2.jpg";
                    ++showPicture;
                }
                else {
                    showPicture = 1;
                    document.getElementById("id-main-img").src = "static/images/image-product-1.jpg";
                }
            }
        }

    }

    function nextPicture() {
        if(showPicture === 1) {
            document.getElementById("id-main-img").src = "static/images/image-product-2.jpg";
            ++showPicture;
        }
        else {
            if(showPicture === 2) {
                document.getElementById("id-main-img").src = "static/images/image-product-3.jpg";
                ++showPicture;
            }
            else {
                if(showPicture === 3) {
                    document.getElementById("id-main-img").src = "static/images/image-product-4.jpg";
                    ++showPicture;
                }
                else {
                    if(showPicture === 4)
                    {
                        showPicture = 1;
                        document.getElementById("id-main-img").src = "static/images/image-product-1.jpg";
                    }
                }
            }
        }
    }

    function switchPicturesOnMain() {
        if(this.className ==="img-1") {
            document.getElementById("id-main-img").src = "static/images/image-product-1.jpg";
        }
        else {
            if(this.className ==="img-2") {
                document.getElementById("id-main-img").src = "static/images/image-product-2.jpg";
            }
            else {
                if(this.className ==="img-3") {
                    document.getElementById("id-main-img").src = "static/images/image-product-3.jpg";
                }
                else {
                    if(this.className ==="img-4") {
                        document.getElementById("id-main-img").src = "static/images/image-product-4.jpg";
                    }
                }
            }
        }
    }

    function lightBoxPicture() {

        const element = document.getElementById("id-activate-states-lightbox");
        element.classList.remove("hide-any-element");
        element.classList.add("light-box-picture");
        
        document.getElementById("id-close-lightbox").classList.add("close-lightbox");
    }

    function closeLightBox() {
        const element = document.getElementById("id-activate-states-lightbox");
        const removeClassLightElement = document.getElementById("id-activate-states-lightbox");
        removeClassLightElement.classList.remove("light-box-picture")
        removeClassLightElement.classList.add("hide-any-element");
        
        const removeClassCloseElement = document.getElementById("id-close-lightbox");
        removeClassCloseElement.classList.remove("close-lightbox");
    }

    function lightBoxPreviewsPicture() {
        if(showPicture === 1) {
            document.getElementById("id-square-lightbox-main-img").src = "static/images/image-product-4.jpg";
            document.getElementById("box-4").style.border = "2px solid orange";
            document.getElementById("box-1").style.border = "0";
            ++showPicture;
        }
        else {
            if(showPicture === 2) {
                document.getElementById("id-square-lightbox-main-img").src = "static/images/image-product-3.jpg";
                document.getElementById("box-3").style.border = "2px solid orange";
                document.getElementById("box-4").style.border = "0";
                ++showPicture;
            }
            else {
                if(showPicture === 3) {
                    document.getElementById("id-square-lightbox-main-img").src = "static/images/image-product-2.jpg";
                    document.getElementById("box-2").style.border = "2px solid orange";
                    document.getElementById("box-3").style.border = "0";
                    ++showPicture;
                }
                else {
                    showPicture = 1;
                    document.getElementById("id-square-lightbox-main-img").src = "static/images/image-product-1.jpg";
                    document.getElementById("box-1").style.border = "2px solid orange";
                    document.getElementById("box-2").style.border = "0";
                }
            }
        }
    }
    function lightBoxNextPicture() {
        if(showPicture === 1) {
            document.getElementById("id-square-lightbox-main-img").src = "static/images/image-product-2.jpg";
            document.getElementById("box-2").style.border = "2px solid orange";
            document.getElementById("box-1").style.border = "0";
            ++showPicture;
        }
        else {
            if(showPicture === 2) {
                document.getElementById("id-square-lightbox-main-img").src = "static/images/image-product-3.jpg";
                document.getElementById("box-3").style.border = "2px solid orange";
                document.getElementById("box-2").style.border = "0";
                ++showPicture;
            }
            else {
                if(showPicture === 3) {
                    document.getElementById("id-square-lightbox-main-img").src = "static/images/image-product-4.jpg";
                    document.getElementById("box-4").style.border = "2px solid orange";
                    document.getElementById("box-3").style.border = "0";
                    ++showPicture;
                }
                else {
                    if(showPicture === 4)
                    {
                        showPicture = 1;
                        document.getElementById("id-square-lightbox-main-img").src = "static/images/image-product-1.jpg";
                        document.getElementById("box-1").style.border = "2px solid orange";
                        document.getElementById("box-4").style.border = "0";
                    }
                }
            }
        }
    }
}