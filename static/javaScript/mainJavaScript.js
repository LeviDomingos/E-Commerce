let itemsQuantity = 0;
let showPicture = 1;
window.onload = function() {

    let mediaQ = window.matchMedia("(max-width: 700px)");

    document.getElementById("id-toggle-menu").addEventListener("click", createMobileMenu);
    document.getElementById("close-menu").addEventListener("click", closeMobileMenu);

    document.querySelectorAll(".showQuantity").forEach(cell => cell.addEventListener("click", showNumberOfItemsIntheBasket));

    document.getElementById("id-add-to-basket").addEventListener("click", addToCart);

    document.getElementById("id-shopping-basket").addEventListener("click", showShoppingBasket);

    document.getElementById("idMainImg").addEventListener("click",lightBoxPicture);

    document.getElementById("id-close-lightbox").addEventListener("click", closeLightBox);

    document.querySelectorAll(".classLightBox").forEach(cell => cell.addEventListener("click", displayLightBoxPicture));
    
    document.querySelectorAll(".fourLightboxImgs").forEach(cell => cell.addEventListener("click", switchPicturesOnMain));
    document.querySelectorAll(".fourPics").forEach(cell => cell.addEventListener("click", selectingPicture));


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

    /** the there is nothing in the basket then i just show an empty basket this function
     * create the elements that make up empty basket only. after creating the elment here 
     * i call it on showShoppingBasket function
     */

    function showShoppingBasket() {

    }

    /** this function shows the pictuires in the main image
     * i use this function to display on both cases on lightbox too
     */
    function displayLightBoxPicture(event) {
        const cellValue = event.target;
        const cellIndex = parseInt(cellValue.getAttribute("data-cell-index"));

        if(cellIndex === 1 && showPicture > 1) {
            --showPicture;
            document.getElementById("idSquareLightboxMainImg").src = "static/images/image-product-" + showPicture + ".jpg";
        }
        if(cellIndex === 2 && showPicture <= 3) {
            ++showPicture;
            document.getElementById("idSquareLightboxMainImg").src = "static/images/image-product-" + showPicture + ".jpg";
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

    /** tthis function deals with  thumbnail. when the user click on any of them 
     * the picture that the user selected is displayed on the main img
     * here only deals with lightbox scenary.
    */

    function switchPicturesOnMain(event) {
        const cellValue = event.target;
        const cellIndex = parseInt(cellValue.getAttribute('data-cell-index'));
        document.getElementById("idSquareLightboxMainImg").src = "static/images/image-product-" + cellIndex + ".jpg";
    }

    /** tthis function deals with  thumbnail. when the user click on any picture or
     * image the picture displayes on the main img.
    */
    function selectingPicture(event) {
        const cellValue = event.target;
        const cellIndex = parseInt(cellValue.getAttribute("data-cell-index"));
        document.getElementById("idMainImg").src = "static/images/image-product-" + cellIndex + ".jpg";
    }

    /* allow the lightbox only to be displayed over 700px screen */
    function lightBoxPicture() {
        if(!mediaQ.matches) {
            const element = document.getElementById("id-activate-states-lightbox");
            element.classList.remove("hide-any-element");
            element.classList.add("light-box-picture");        
            document.getElementById("id-close-lightbox").classList.add("close-lightbox");
        }
    }

    function closeLightBox() {
        const element = document.getElementById("id-activate-states-lightbox");
        const removeClassLightElement = document.getElementById("id-activate-states-lightbox");
        removeClassLightElement.classList.remove("light-box-picture")
        removeClassLightElement.classList.add("hide-any-element");
        
        const removeClassCloseElement = document.getElementById("id-close-lightbox");
        removeClassCloseElement.classList.remove("close-lightbox");
    }
}