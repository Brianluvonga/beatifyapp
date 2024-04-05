<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Validate the email (you can use a more robust validation method)
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Save the email to a database or a file
        $file = "subscribed_emails.txt";
        file_put_contents($file, $email . "\n", FILE_APPEND);

        // Send the email to your own email address
        $to = "brnluvonga@gmail.com"; // Replace with your own email address
        $subject = "New Subscription: " . $email;
        $message = "A new email subscription has been received: " . $email;
        $headers = "From: noreply@beatify.app.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "invalid";
    }
}
?>