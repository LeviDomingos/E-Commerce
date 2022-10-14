"use strict";
let itemsQuantity = 0; // store the amount of items the user put in the basket
let showPicture = 1; // control pictures display on the main img and lightbox 

window.onload = function() {
  

    document.getElementById("idToggleMenu").addEventListener("click", createMobileMenu);
    document.getElementById("closeMenu").addEventListener("click", closeMobileMenu);
    document.getElementById("idIconDelete").addEventListener("click", deleteGoodsInTheBasket);

    document.querySelectorAll(".showQuantity").forEach(cell => cell.addEventListener("click", showNumberOfItemsIntheBasket));

    document.getElementById("idAddToBasket").addEventListener("click", addToCart);

    document.getElementById("idShoppingBasket").addEventListener("click", showShoppingBasket);

    document.getElementById("idMainImg").addEventListener("click",lightBoxPicture);

    document.getElementById("idCloseLightBox").addEventListener("click", closeLightBox);

    document.querySelectorAll(".classLightBox").forEach(cell => cell.addEventListener("click", displayLightBoxPicture));
    
    document.querySelectorAll(".fourLightBoxImgs").forEach(cell => cell.addEventListener("click", switchPicturesOnMain));
    document.querySelectorAll(".fourPics").forEach(cell => cell.addEventListener("click", selectingPicture));


    // create the mobile menu 
    function createMobileMenu() {
        document.getElementById("mobileNav").classList.remove("hideAnyElement");
        const listMenu = ["Collection", "Men", "Women", "About", "Contact"]
        listMenu.map((menu) => {
            const element = document.createElement("li");
            element.innerText = menu;
            element.style.fontWeight ="bold";
            element.style.display ="block";
            element.style.marginTop ="55px";
            element.style.marginLeft ="25px";
            element.style.cursor ="pointer";
            document.getElementById("mobileNav").appendChild(element);
            document.getElementById("mobileNav").classList.add("mobileMenu");
        });
     }

     // the x that clase the mobile
    function closeMobileMenu() {
        const element = document.getElementById("mobileNav");
        while (element.lastChild.id !== 'closeMenu') {
            element.removeChild(element.lastChild);
        }
        document.getElementById("mobileNav").classList.add("hideAnyElement");
        document.getElementById("mobileNav").classList.remove("mobileMenu");
    }

    /** this code adds and take away the amount of items in the basket */
    function showNumberOfItemsIntheBasket(event) {
        const cellValue =  event.target;
        const cellIndex =  parseInt(cellValue.getAttribute("data-cell-index"));

        if(cellIndex === 1 && itemsQuantity > 0) {
            document.getElementById("idQuantity").innerText = --itemsQuantity; 
        }
        else {
            if(cellIndex === 2) {
                document.getElementById("idQuantity").innerText = ++itemsQuantity;
            }
        }
    }

    /** after addidng and taking away i show it on the cart the quantity */
    function addToCart() {
        const element = document.getElementById("idItems");
        if(itemsQuantity > 0) {
            element.classList.remove("hideAnyElement");
            element.classList.add("showQuantityInTheCart");
            element.innerText = itemsQuantity;
        }
        else {
            element.innerText = "";
            element.classList.remove("showQuantityInTheCart");
            element.classList.add("hideAnyElment");
        }
    }

    /** the there is nothing in the basket then i just show an empty basket this function
     * create the elements that make up empty basket only. after creating the elment here 
     * i call it on showShoppingBasket function
     */

    function showShoppingBasket() {

        const info = document.getElementById("idDescription");
        const img = document.getElementById("idImg");
        document.getElementById("idShowingBasket").classList.remove("hideAnyElement");
        
        if(itemsQuantity === 0) {
            // when the basket is emtpy 
            info.classList.remove("display" ,"hideAnyElement");
            info.innerText = "your basket is empty";
            info.style.color ="gray";
    
            document.getElementById("idIconDelete").classList.add("display");
            document.getElementById("idButtonDelete").classList.add("display");
            img.classList.add("display");
            info.classList.remove("display");

        }
        else {

            //when there is good in the basket or cart

            const img = document.getElementById("idImg");
            document.getElementById("idIconDelete").classList.remove("display");
            document.getElementById("idButtonDelete").classList.remove("display");

            img.src = document.getElementById("idMainImg").src;
            img.classList.remove("display");

            const info = document.getElementById("idDescription");
            info.classList.remove("display");

            if(showPicture == 1 || showPicture === 3) {
                info.innerText ="Fall Limited Edition Sneackers " + "\n";
                info.style.fontSize ="14px";
                let price = 125.00;
                let totalPrice =  price * itemsQuantity;
                info.innerText += "$" + price + ".00" + " x " + itemsQuantity + " $" + totalPrice + ".00";
                info.style.color ="gray";
            }
            else {

                info.innerText ="Autumn Limited Edition..." + "\n";
                info.style.fontSize ="14px";
                let price = 125.00;
                let totalPrice =  price * itemsQuantity;
                info.innerText += "$" + price + ".00" + " x " + itemsQuantity + " $" + totalPrice + ".00";
                info.style.color ="gray";
            }
        }
    }


    // delete all goods in the cart or basket
    function deleteGoodsInTheBasket() {

        itemsQuantity = 0 ;

        showShoppingBasket();
        document.getElementById("idQuantity").innerText = itemsQuantity; 
        addToCart();
    }

    //this function shows the pictuires in the main image and lightbox too
    function displayLightBoxPicture(event) {
        const cellValue = event.target;
        const cellIndex = parseInt(cellValue.getAttribute("data-cell-index"));

        if(cellIndex === 1 && showPicture > 1) {
            --showPicture;
            document.getElementById("idSquareLightBoxMainImg").src = "static/images/image-product-" + showPicture + ".jpg";
        }
        if(cellIndex === 2 && showPicture <= 3) {
            ++showPicture;
            document.getElementById("idSquareLightBoxMainImg").src = "static/images/image-product-" + showPicture + ".jpg";
        }
        if(cellIndex === 3 && showPicture > 1 ) {
            --showPicture;
            document.getElementById("idMainImg").src = "static/images/image-product-" + showPicture + ".jpg";
        }
        if(cellIndex === 4 && showPicture <= 3) {
            ++showPicture;
            document.getElementById("idMainImg").src = "static/images/image-product-" + showPicture + ".jpg";
        }
    }

    //when the user click on lightbox then 
    //the picture that the user selected is displayed on the lightboxmain img

    function switchPicturesOnMain(event) {
        const cellValue = event.target;
        const cellIndex = parseInt(cellValue.getAttribute('data-cell-index'));
        document.getElementById("idSquareLightBoxMainImg").src = "static/images/image-product-" + cellIndex + ".jpg";
    }

    // tthis function deals with  thumbnail. when the user click on any picture or
    function selectingPicture(event) {
        const cellValue = event.target;
        const cellIndex = parseInt(cellValue.getAttribute("data-cell-index"));
        document.getElementById("idMainImg").src = "static/images/image-product-" + cellIndex + ".jpg";
        showPicture = cellIndex;

    }

    //allow the lightbox only to be displayed over 950px screen
    function lightBoxPicture() {
        if(!mediaQ.matches) {
            const element = document.getElementById("idActivateStatesLightBox");
            element.classList.remove("hideAnyElement");
            element.classList.add("lightBoxPicture");        
            document.getElementById("idCloseLightBox").classList.add("closeLightBox");
        }
    }

    function closeLightBox() {
        const element = document.getElementById("idActivateStatesLightBox");
        const removeClassLightElement = document.getElementById("idActivateStatesLightBox");
        removeClassLightElement.classList.remove("lightBoxPicture")
        removeClassLightElement.classList.add("hideAnyElement");
        
        const removeClassCloseElement = document.getElementById("idCloseLightBox");
        removeClassCloseElement.classList.remove("closeLightBox");
    }

    let mediaQ = window.matchMedia("(max-width: 950px)");
}
