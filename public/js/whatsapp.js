$(function () {
  $("#WAButton").floatingWhatsApp({
    phone: "+917219676919", //WhatsApp Business phone number
    headerTitle: "Chat with us on WhatsApp!", //Popup Title
    popupMessage: "Hello, how can we help you?", //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="js/floatingWA/whatsapp.svg" />', //Button Image
    //headerColor: 'crimson', //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right", //Position: left | right
  });
});
