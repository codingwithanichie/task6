function validateCreditCardNumber(cardNumber) {
    // Remove spaces and dashes from the card number
    cardNumber = cardNumber.replace(/[-\s]/g, '');

    // Check if the card number is numeric and has a valid length
    if (!/^\d{13,16}$/.test(cardNumber)) {
        return false;
    }

    // Check if the card number passes the Luhn algorithm (mod 10)
    let sum = 0;
    let doubleUp = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);
        if (doubleUp) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        doubleUp = !doubleUp;
    }
    if (sum % 10 !== 0) {
        return false;
    }

    // Check the card type based on the first digit(s)
    if (/^4/.test(cardNumber)) {
        return 'Visa';
    } else if (/^5[1-5]/.test(cardNumber)) {
        return 'Mastercard';
    } else if (/^3[47]/.test(cardNumber)) {
        return 'American Express';
    } else if (/^6(?:011|5[0-9]{2})/.test(cardNumber)) {
        return 'Discover';
    } else {
        return 'Unknown';
    }
}

// Test the function
const cardNumber = '4111-1111-1111-1111';
const cardType = validateCreditCardNumber(cardNumber);
if (cardType) {
    console.log(`Card type: ${cardType}`);
    console.log('Valid credit card number');
} else {
    console.log('Invalid credit card number');
}
