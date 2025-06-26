<footer class="bg-white py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0">Copyright &copy; Your Website 2025</div></div>
                    <div class="col-auto">
                        <a class="small" href="tel:6376082287">Contact</a>
                    </div>
                </div>
            </div>

</footer>


<!--JQuery-->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<!--Floating WhatsApp css-->
<link rel="stylesheet" href="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/floating-wpp.min.css">
<!--Floating WhatsApp javascript-->
<script type="text/javascript" src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/floating-wpp.min.js"></script>


<div id="WAButton"></div>
<script>
	$(function() {
	  $('#WAButton').floatingWhatsApp({
	    phone: '6376082287', //WhatsApp Business phone number International format-
	    //Get it with Toky at https://toky.co/en/features/whatsapp.
	    headerTitle: 'Chat with us on WhatsApp!', //Popup Title
	    popupMessage: 'Hello, how can we help you?', //Popup Message
	    showPopup: true, //Enables popup display
	    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
	    //headerColor: 'crimson', //Custom header color
	    //backgroundColor: 'crimson', //Custom background button color
	    position: "right"    
	  });
});
</script>