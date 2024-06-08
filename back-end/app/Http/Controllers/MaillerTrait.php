<?php
namespace App\Http\Controllers;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

trait MailerTrait
{
    public function sendEmail($email, $name, $subject, $body)
    {
        $mailer = new PHPMailer(true);
        try {
            // SMTP configuration for Gmail
            $mailer->SMTPDebug = 0;
            $mailer->isSMTP();
            $mailer->Host = env("MAIL_HOST");
            $mailer->SMTPAuth = true;
            $mailer->Username = env("MAIL_USERNAME"); // Your Gmail address
            $mailer->Password = env("MAIL_PASSWORD"); // Your Gmail password or app-specific password
            $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use STARTTLS encryption
            $mailer->Port = env("MAIL_PORT");

            // Sender and reply-to information
            $mailer->setFrom($email, $name);
            $mailer->addAddress(env("MAIL_USERNAME"), $name);

            // Email content
            $mailer->isHTML(true); // Set email format to HTML
            $mailer->Subject = $subject;
            $mailer->Body = $body;

            // Send email
            if (!$mailer->send()) {
                return back()->with("error", "Email not sent.")->withErrors($mailer->ErrorInfo);
            } else {
                return back()->with('success', "Email has been sent.");
            }
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mailer->ErrorInfo}";
        }
    }
}
