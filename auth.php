<?php
include('basic.php');
session_start();

if(isset($_SESSION['uid']))
{
    $uid =$_SESSION['uid'];
    $role=$_SESSION['role'];
    $gender=$_SESSION['gender'];
    $email=$_SESSION['email'];
    $username=$_SESSION['username'];
}
else
{
  switchto('index.php');
}
?>