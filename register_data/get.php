<?php
   
   
  $head = file_get_contents('Head.txt');
  
 $head_arr =  split(',', $head);
  # print_r($head_arr);
  $head_key = array_rand($head_arr);
  
  $root = file_get_contents('Root.txt');
  
  $root_arr =  split(',', $root);
  $root_key = array_rand($root_arr);
  
  #echo $root_arr[$root_key];
  
  $account = $head_arr[$head_key] . $root_arr[$root_key];
  
  #echo $account;
  
  $start = rand(0, strlen($account)/2);
  #echo $start;
  
  $rs = substr($account, $start,strlen($account));
  echo $rs;
  
   #print_r($root_arr);
   
   