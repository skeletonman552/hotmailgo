
var host = 'http://localhost/register_data/';

/*資料設定*/
var LastName = '趙,錢,孫,李,周,吳,鄭,王,馮,陳,褚,衛,蔣,沈,韓,楊,朱,尤,許,何,呂,施,張,孔,曹,嚴,華,魏,陶,姜,戚,謝,鄒,喻';
LastName = LastName.split(',');

var FirstName = '元卉,白香,雁旋,安春,懷雙,碧春,凡雁,從卉,問萱,聽芹,芷文,向兒,香萱,水靈,寄雙,爾桃,念竹,念卉,代香,問晴,海嵐,問蘭,綺薇,盼菡,尋之,夏蕊,迎蕾,靜寒,癡蝶,易藍,爾天,靈香,靈菡,綺竹,宛槐,新松,新蕊,憶夏,凝春,天真,安容,迎蝶,從海,詩芙,寄霜,新珍,憶蓉,冰筠,盼南,從卉,凝冬,秋柏,小蘭,夏陽,水卉,迎琴,慕夏,友南,宛曼,丹芙,水之,白雪,冰夢,天菡,從雁,代寒,尋珊,冬藍,海寒,迎風,代楓,秋荷,幻真,巧綠,初云,春楓,曉荷,思晴,從芙,醉波,若波,癡蘭,含雙,憶冬,以筠,盼柳,冬寒,靖蓉,宛卉,代文,春芙,采雪,如青,凝夢,丹梅,盼風,尋霜,飛易,綺蓮,慕亦,采芹,迎蓮,沛曼,代琴,水海,思陽,夢煙,新柏,綠白,尋夏,凡柔,海香,秋珍,翠筠,水彤,念凡,迎夢,含青,爾菡,翠雙,友青,憐珍,凡香,惜蘭,幻筠,青芙,寄云,雪綠,紫波,夏山,含柳,芷玉,冰波,冬桃,秋安,夏柳,巧梅,翠天,聽秋,水蓮,白絲,冰云,涵夏,春波,爾真,千易,天松,丹云,憶容,思雙,碧柏,恨蕊,凝菡,向雙,寒波,丹凝,綠雪,平霜,香珍,宛柔,問松,思雪,笑曼,山風,聽風,半天,曉嵐,凌蕾,雁海,迎萍,問安,盼凝,書夢,千波,從文,妙文,映天,寒云,尋南,語冬,平寒,紫陽,雪松,碧雙,半雙,若蘭,凡柏,宛曼,靈玉,天瑤,巧亦,夏冬,南翠,懷南,芷絲,小柏,香蓮,亦萱,采旋,靜荷';
FirstName = FirstName.split(',');


//登出功能
var logout = jQuery('#c_signout').attr('href');

if (logout) {
	
	//window.location.assign(logout);
	//遠端取得內容
$.ajax({
  url: logout,  
}).done(function(msg) {
	
	var signupUrl = 'https://signup.live.com/?id=64855';
	window.location.assign(signupUrl);
	
});

} else{};

//確認頁面是否為錯誤頁面
var local_path = location.pathname;

if (local_path == '/error.aspx') {
	
	$.ajax({
  url: '//cat.geocube.biz/DemoCatTest/register_data/del.php',  
  //url: '//localhost/DemoCat/register_data/get.php',  
}).done(function(msg) {
alert('該換ip囉，誤存入的檔案已經清除');

});
	
} else{};

//產生範圍亂數
function usefloor(min,max) {

return Math.floor(Math.random()*(max-min+1)+min);

}



//產生隨機密碼

var Allkeylist="aABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz123456789"

function generatepass(plength,keylist){

temp=''
for (i=0;i<plength;i++)
temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
return temp
}

var LastName_text = LastName[Math.floor(Math.random()*LastName.length)];
var FirstName_text = FirstName[Math.floor(Math.random()*FirstName.length)];
var phone = usefloor(11111111,99999999);
phone = '09' + phone;
password = generatepass(9,Allkeylist);
var zip = usefloor(200,500);
var b_year = usefloor(1940,1990);
var b_month = usefloor(1,12);
var b_day = usefloor(1,20);
var sexList = 'mfu';
var sex = generatepass(1,sexList);


//遠端取得內容
$.ajax({
  //url: '//cat.geocube.biz/DemoCatTest/register_data/get.php',  
  url: '//localhost/DemoCat/register_data/get.php',  
}).done(function(msg) {
var eng_list="abcdefghijklmnopqrstuvwxyz";
var first_eng = generatepass(1,eng_list);


var acc = first_eng  + msg + usefloor(1940,1990);

$('#imembernamelive').val(acc); //輸入帳號

}

);


/*填寫內容*/

$( document ).ready(function() {
   
$('#iLastName').val(LastName_text);
$('#iFirstName').val(FirstName_text);
$('#iPwd').val(password);
$('#iRetypePwd').val(password);
$('#iZipCode').val(zip);
$('#iBirthYear').val(b_year);
$('#iBirthMonth').val(b_month);
$('#iBirthDay').val(b_day);
$('#iPhone').val(phone);
$('#iGender').val(sex);
account = $('#imembernamelive').val() + '@outlook.com';




function SaveData () {
  	
	var url = '//cat.geocube.biz/DemoCatTest/register_data/save.php';
	var data ={account:account,password:password};
		$.ajax({
  type: 'POST',
  url: url,
  data: data
});
	//alert('Yes Save');
	
	
}

$('#createbuttons').click(function() {
	
		
	
	
//$('#iOptinEmailContainer').click(function() {
	
	setTimeout(
		
		function () {
			
			
	
	var ErrorText = jQuery('.hipErrorText');
	
	
	
	
	for (var i=0; i < ErrorText.length; i++) {
	
	var style =	ErrorText.eq(i).attr('style');
	
	var check = style.match('display: none;');
	
	if (check == null) {
		
		var error_status = 1;
	};
	
	
	
	};
	
	if (error_status!=1) {
		
		SaveData ();
	};
		}
		,1200);
	
	
	

	
});
	
});




/*
$.ajax({
  url: 'http://localhost/register_data/name.txt',  
}).done(function(msg) {
 rs = msg;
 
});
*/