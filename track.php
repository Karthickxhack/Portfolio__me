<?php
$conn = new mysqli("localhost", "root", "", "portfolio_tracker");
if ($conn->connect_error) die("DB Error");

$ip = $_SERVER['REMOTE_ADDR'];

/* GET LOCATION USING FREE IP API */
$details = json_decode(file_get_contents("http://ip-api.com/json/$ip"), true);

$country  = $details['country'] ?? 'Unknown';
$state    = $details['regionName'] ?? 'Unknown';
$district = $details['city'] ?? 'Unknown';
$city     = $details['city'] ?? 'Unknown';
$isp      = $details['isp'] ?? 'Unknown';

/* STORE IN DATABASE */
$sql = "INSERT INTO visitors 
(ip_address, country, state, district, city, isp)
VALUES
('$ip','$country','$state','$district','$city','$isp')";
$conn->query($sql);

/* ================= EMAIL ALERT ================= */
$to = "20succ381.karthick.edu.in@gmail.com";
$subject = "🚨 Portfolio Visitor Alert";
$message = "
New Visitor Detected:

IP: $ip
Country: $country
State: $state
District: $district
ISP: $isp
Time: " . date("Y-m-d H:i:s");

$headers = "From: portfolio@yourdomain.com";
@mail($to, $subject, $message, $headers);

/* ================= SMS ALERT (API SAMPLE) ================= */

/*Use services like:
- Twilio
- Fast2SMS
- Textlocal

Example (pseudo):
file_get_contents("https://sms-api-url?number=XXXXXXXXXX&message=New visitor from $country");

$admin_mobile = "7598070326";
$sms_message ="Portfolio alert: visitor from $country,$state ($ip)";*/

$conn->close();
?>