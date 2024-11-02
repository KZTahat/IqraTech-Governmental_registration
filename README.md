# Iqra-Tech Task 1

## Governmental entity registration

## Phone and email confirmations

In this task I will style the design provided and I will work in two functionalities:

1- Phone number verification.

2- Email verification.

By sending an OTP and confirm it using the api routes provided.

Developer Name: Khaled Zayed Tahat

## Back-end Notes:

- Add a valid key-value to the response of Phone number verifier function in addition to the message "Phone number verified successfully". EX: {valid: true}.
    Solved ✔️ : A new key-value (success) was added

- In case of an incorrect OTP provided from the user (for phone number verification), the response will be "Request failed with status code 400", please add a valid response with a key-value indicating that the OTP provided is incorrect.
    Solved ✔️ : I only used the value from a 200 status response, if an error occur, the validity stays false.

- The email otp sender is not working, I'm not receiving any OTPs on my email.
    Solved ✔️ : the OTP emails were sent on a different server, not to the email I use in the form, I got the Laravel Telescope mailbox link.