<?php
	$localdir = 'C:\xampp\htdocs\DemoCat';
$MacDir = '/Applications/MAMP/htdocs/DemoCat';
$TestDir = 'G:\xampp\htdocs\DemoCatTest';

if (is_dir($localdir)) { define('ROOT' , $localdir); }else{
	if (is_dir($MacDir)) { define('ROOT' , $MacDir); }else{
		if (is_dir($TestDir)) { define('ROOT' , $TestDir); };
	};
};

require_once ROOT.'/function/DB.php'; 
	
   $Account = $_POST['account'];
   $Password = $_POST['password'];
  
   
   
   $SQL = "INSERT INTO `democat`.`register_account` (`id`, `account`, `password`, `date`) VALUES (NULL, '$Account', '$Password', '$time')";
 
 GetSQLquery($SQL);
