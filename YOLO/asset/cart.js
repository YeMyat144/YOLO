// var ProductImg = document.getElementById("ProductImg");
// var SmallImg = document.getElementsByClassName("small-img");
//     SmallImg[0].onclick = function(){
//         ProductImg.src = SmallImg[0].src;
//     }
//     SmallImg[1].onclick = function(){
//         ProductImg.src = SmallImg[1].src;
//     }
//     SmallImg[2].onclick = function(){
//         ProductImg.src = SmallImg[2].src;
//     }
//     SmallImg[3].onclick = function(){
//         ProductImg.src = SmallImg[3].src;
//     }


document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('add-to-cart');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close-btn');

    addToCartBtn.addEventListener('click', function () {
        cartModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});
