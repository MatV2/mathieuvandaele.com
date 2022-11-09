<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['text'];
$to = "mathieuvandaele41@icloud.com";
$subject = "Formulaire de contact";
$txt ="Name = ". $name . "\r\n Email = " . $email . "\r\n Message =" . $message;
$headers = "From: contact@mathieuvandaele.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>