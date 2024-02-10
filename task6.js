function validateCreditCard(cardNumber) {
    // Remove non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

    // Visa: starts with 4, length 13 or 16
    if (/^4\d{12}(?:\d{3})?$/.test(cardNumber)) {
        return "Visa";
    }

    // Mastercard: starts with 5, length 16
    if (/^5[1-5]\d{14}$/.test(cardNumber)) {
        return "Mastercard";
    }

    // Verve: starts with 506, length 16
    if (/^506\d{13}$/.test(cardNumber)) {
        return "Verve";
    }

    // Invalid card type
    return "Invalid";
}

// Example usage:
let cardNumber = "4111-1111-1111-1111"; // Visa
console.log(validateCreditCard(cardNumber)); 
