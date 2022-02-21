const bookingFormData = document.getElementById('booking-form__data');

flatpickr(".booking-form__data", {
	dateFormat: "d.m.",
	"locale": "ru",
	onClose: function(){
		bookingFormData.classList.add('visibil')
	 }
	}
);



