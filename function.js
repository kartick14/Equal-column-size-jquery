/*

<li class="post-1134 product type-product status-publish has-post-thumbnail product_cat-engagement-rings first instock taxable shipping-taxable purchasable product-type-simple" style="height: 452px;">
    <div class="top-product-section">
        <a itemprop="url" href="" class="product-category">
            <span class="image-wrapper" style="height: 202px;">
                <img width="300" height="300" src="" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="">            </span>
        </a>
        <span class="add-to-cart-button-outer"><span class="add-to-cart-button-inner"><a rel="nofollow" href="" data-quantity="1" data-product_id="" data-product_sku="" class="qbutton add-to-cart-button button product_type_simple add_to_cart_button ajax_add_to_cart qbutton add-to-cart-button">Add to cart</a></span></span>
    </div>
    <a itemprop="url" href="" class="product-category product-info">
        <h6 itemprop="name"></h6>
        <p class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>17,500.00</span>
        </p>
    </a>
</li>

*/



function autoUpdateSize(){ 
 jQuery(".common-box > .vc_column-inner").css("height", "auto"); 
 var max = -1;
 jQuery(".common-box > .vc_column-inner").each(function() {
     var h = jQuery(this).height(); 
     max = h > max ? h : max;
 });
 jQuery('.common-box > .vc_column-inner').css('height',max);
}

jQuery(document).ready(function(){
    autoUpdateSize();
    productUpdateSize();
    imageUpdateSize();
});
jQuery(window).resize(function(){
    autoUpdateSize();
    productUpdateSize();
    imageUpdateSize();
});
jQuery(window).load(function(){
    autoUpdateSize();
    productUpdateSize();
    imageUpdateSize();
});


function productUpdateSize(){ 
 jQuery("li.product.type-product.status-publish").css("height", "auto"); 
 var max = -1;
 jQuery("li.product.type-product.status-publish").each(function() {
     var h = jQuery(this).height(); 
     max = h > max ? h : max;
 });
 jQuery('li.product.type-product.status-publish').css('height',max);
}

function imageUpdateSize(){ 
 jQuery("li.product.type-product.status-publish .image-wrapper").css("height", "auto"); 
 var max = -1;
 jQuery("li.product.type-product.status-publish .image-wrapper").each(function() {
     var h = jQuery(this).height(); 
     max = h > max ? h : max;
 });
 jQuery('li.product.type-product.status-publish .image-wrapper').css('height',max);
}
