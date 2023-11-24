<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $to = "lol@gmail.com"; // Replace with your desired email address
        $subject = "New Contact Form Submission";
        
        // Sanitize user input to prevent injection
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars($_POST["message"]);
    
        // Build the email content
        $email_content = "From: $email\n\nMessage:\n$message";
    
        // Additional headers
        $headers = "From: $email";
    
        // Send the email
        mail($to, $subject, $email_content, $headers);
    
        // Redirect back to the contact form with a success message
        header("Location: index.html?success=true");
    } else {
        // Redirect to the contact form if accessed directly
        header("Location: index.html");
    }
?>
