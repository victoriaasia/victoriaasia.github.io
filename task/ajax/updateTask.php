<?php
require_once '../includes/constants.php';
if(isset($_GET['taskID'])){
$status = $_GET['status'];
$taskID = $_GET['taskID'];
$query="update tasks set status='$status' where id='$taskID'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

$json_response = json_encode($result);
}
?>
