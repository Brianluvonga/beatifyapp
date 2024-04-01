<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and sanitize input
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $rating = $_POST["rating"];
    $ratingReason = $_POST["rating-reason"];
    $feature1 = $_POST["feature1"];
    $feature2 = $_POST["feature2"];
    $feature3 = $_POST["feature3"];
    $featureImprovement = $_POST["feature-improvement"];
    $bugDetails = $_POST["bug-details"];
    $newFeatureIdeas = $_POST["new-feature-ideas"];

    // Set up the email
    $to = "brnluvonga@gmail.com";
    $subject = "Feedback Submission";
    $message = "Email: $email\n\n";
    $message .= "Rating: $rating\n";
    $message .= "Rating Reason: $ratingReason\n";
    $message .= "Feature 1: $feature1\n";
    $message .= "Feature 2: $feature2\n";
    $message .= "Feature 3: $feature3\n";
    $message .= "Feature Improvement: $featureImprovement\n";
    $message .= "Bug Details: $bugDetails\n";
    $message .= "New Feature Ideas: $newFeatureIdeas\n";

    // Send the email
    $success = mail($to, $subject, $message);

    if ($success) {
        echo "Thank you for your feedback!";
    } else {
        echo "Sorry, there was a problem submitting your feedback. Please try again later.";
    }
}
