

$(document).ready(function(){




	
	$('#btco').change(function(){
		$('#tbtc').css( "display", "block" );
		$('#credito').css( "display", "none" );
		$('#gramm').css( "display", "none" );
		$('#weste').css( "display", "none" );
		
		});
		
		$('#credit').change(function(){
		$('#credito').css( "display", "block" );
		$('#tbtc').css( "display", "none" );
		$('#gramm').css( "display", "none" );
		$('#weste').css( "display", "none" );
		
		});
		
		
		$('#gram').change(function(){
		$('#credito').css( "display", "none" );
		$('#tbtc').css( "display", "none" );
		$('#gramm').css( "display", "block" );
		$('#weste').css( "display", "none" );
		
		});
		
		$('#west').change(function(){
		$('#credito').css( "display", "none" );
		$('#tbtc').css( "display", "none" );
		$('#gramm').css( "display", "none" );
		$('#weste').css( "display", "block" );

	});



//WITHDRAWAL


	$('#btcmodal').change(function(){
	$('#btcmod').css( "display", "block" );
	$('#bankmod').css( "display", "none" );
	$('#skrillmod').css( "display", "none" );
	$('#paypalmod').css( "display", "none" );
	$("#messag").html('');
	


	
	});
	
	$('#bankmodal').change(function(){
	$('#bankmod').css( "display", "block" );
	$('#btcmod').css( "display", "none" );
	$('#skrillmod').css( "display", "none" );
	$('#paypalmod').css( "display", "none" );
	$("#messag").html('');

	});
	
	
	$('#skrillmodal').change(function(){
	$('#bankmod').css( "display", "none" );
	$('#btcmod').css( "display", "none" );
	$('#skrillmod').css( "display", "block" );
	$('#paypalmod').css( "display", "none" );
	$("#messag").html('');


	});
	
	$('#paypalmodal').change(function(){
	$('#bankmod').css( "display", "none" );
	$('#btcmod').css( "display", "none" );
	$('#skrillmod').css( "display", "none" );
	$('#paypalmod').css( "display", "block" );
	$("#messag").html('');


	});
	
	
	
	
	


	
	
	
	});
	
	function myFunction() {
		var copyText = document.getElementById("badd");
		copyText.select();
		document.execCommand("copy");
		alert("Copied address to clipboard: " + copyText.value);
	  }
	  function myFunction2() {
		var copyText = document.getElementById("ndadd");
		copyText.select();
		document.execCommand("copy");
		alert("Copied address to clipboard: " + copyText.value);
	  }
	  function myFunction3() {
		var copyText = document.getElementById("sdadd");
		copyText.select();
		document.execCommand("copy");
		alert("Copied address to clipboard: " + copyText.value);
	  }
	  
	  function myFunction4() {
		var copyText = document.getElementById("reflink");
		copyText.select();
		document.execCommand("copy");
		alert("Copied address to clipboard: " + copyText.value);
	  }
	
// dashboard




// variable declaration

var traderesult ;
var stake ;
 var  mybtc ;
 var testbal ;
 var bal1;
 var start;
 var target;
 var maintenance;
 var signals ;
var  myusd='';
var qrmoney;
var wamount=0 ;
var wbalance ;
var wmethod ;
var chance;
var newbalance;
var btc;
var email ;
var swith ;
var comm ;
var cpercent ;

$(document).ready(function(){

	







	// get btc price
	$.get('https://api.coindesk.com/v1/bpi/currentprice.json','', function (data) {
		var parsed = JSON.parse(data);
		 mybtc = parsed.bpi.USD.rate_float;
		});
		// end of get btc


	
		// blinking text
		function blink_text() {
			$('.blink').fadeOut(500);
			$('.blink').fadeIn(500);
		}
		setInterval(blink_text, 1000);

//countdown for trading


		stake = parseInt( $("#hstake").val() ) ;
		var email = $('#hemail').val();
		
		var timeLeft = $('#hlive').val();
		start =parseInt(  $('#hstart').val() );
		testbal =parseInt(  $('#hbalance').val() );
		target =parseInt(  $('#htarget').val() );
		chance =parseInt(  $('#hchance').val() );
		signals =parseInt(  $('#hsignals').val() );
		mainte =parseInt(  $('#hmainte').val() );
		swith =parseInt(  $('#hswith').val() );
		comm =parseFloat(  $('#hcomm').val() );
		cpercent =parseInt(  $('#hcommpercent').val() );


		if(signals < 35){

			$("#signals").css("background", 'red');
			$("#signalbit").css("background", 'red');
		};
		if(mainte < 35){

			$("#mainte").css("background", 'red');
			$("#mainbit").css("background", 'red');
		}
		





		 if (testbal == 0){
			start= 0 ;
		 }
		var elem = document.getElementById('some_div');
		


		var timerId = setInterval(countdown, 1000);
		
// COMMISION
function com(){
cbal = $('#balance').text();
comm=(cpercent/100) * cbal ;
function round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals); 
	}
comm=round(comm, 1);

}	
		
		function countdown() {
		  if (timeLeft == 0) {
			traderesult = Math.floor((Math.random() * 5) + 1);
			
			testbal = $('#balance').text();
			if (testbal < 1){

				testbal = $('#balance').text(0);

			}
			if (testbal >= target){

				start = 0 ;
				 swith= 1;
				$.ajax({
					url:"ajax.php",
					type:"post" ,
					datatype:"JSON",
					data:{stop: '2', email: email, start: start, swith: swith },
					success:function(data){

					 
					 //$('#withtable').append('<tr><td>'+data.amount+'</td>'+'<td>'+data.date+'</td>'+'<td>'+data.amount+'</td>'+'<td>'+data.status+'</td>'+'<td>'+data.type+'</td></tr>') 
					 
				 }
				 
					})

			}
			if (start == 1 && testbal > stake && testbal < target  ){
			something();
			balance() ;
			

			}
			timeLeft = $('#hlive').val();
		  } else {
			elem.innerHTML = timeLeft + ' Live';
			timeLeft--;
		  }
		}


		function something() {
			$('.xeffect').fadeOut(500);
			$('.xeffect').fadeIn(500);
		}




		
		
		function balance() {
				if (traderesult > chance)
					{
					$.playSound("assets/sound/success.mp3") ;	
					var bal1= parseInt( $('#balance').text() );
					var trade1= parseInt( $('#trade').text() );
					var won1= parseInt( $('#won').text() );


					bal1 =  bal1 + stake  ;

					btc = bal1/mybtc ;
						// rounding up to decimal places
						function round(value, decimals) {
						return Number(Math.round(value+'e'+decimals)+'e-'+decimals); 
						}
						btc=round(btc, 3); // end rounding up
						$('#btc').text(btc );
						$('#bt2').text(btc );
						$('#usdbal').html('<input name="customRadioAlt"  type="radio"><i></i>USD: ' + bal1 );
						$('#btcbal').html('<input name="customRadioAlt"  type="radio"><i ></i>BTC: ' + btc );
						$('#usdbal2').html('<input name="customRadioAlt"  type="radio"><i></i>USD: ' + bal1 );
						$('#btcbal2').html('<input name="customRadioAlt"  type="radio"><i ></i>BTC: ' + btc );
						$('#stake').text(stake);
						$('#profit').text(stake);
						$('#balance').text(bal1);
						$('#trade').text(trade1 + 1 );
						$('#won').text(won1 + 1 );
					//commision
						com();

						pstake = stake;
						pprofit = stake;
						ptrade = trade1 + 1 ;
						pwon = won1 + 1 ;
						pbtc = btc ;
						lastprofit = stake ;



					   $.ajax({
					   url:"ajax.php",
					   type:"post" ,
					   datatype:"JSON",
					   data:{ironwin: '2', email: email, stake: pstake, balance:bal1, btc:pbtc, trade:ptrade, won:pwon, lastprofit:lastprofit, comm:comm },
					   success:function(data){
					
			
					}
					   })


		
		
					} else {

					//lossing
					$.playSound("assets/sound/success2.mp3") ;
					var loss1= parseInt( $('#loss').text() );
					var bal1= parseInt( $('#balance').text() );
					var trade1= parseInt( $('#trade').text() );


					btc = bal1/mybtc ;
						// rounding up to decimal places
						function round(value, decimals) {
						return Number(Math.round(value+'e'+decimals)+'e-'+decimals); 
						}
						btc=round(btc, 3); // end rounding up
						$('#btc').text(btc );
						$('#bt2').text(btc );
						$('#usdbal').html('<input name="customRadioAlt"  type="radio"><i></i>USD: ' + bal1 );
						$('#btcbal').html('<input name="customRadioAlt"  type="radio"><i ></i>BTC: ' + btc );
						$('#usdbal2').html('<input name="customRadioAlt"  type="radio"><i></i>USD: ' + bal1 );
						$('#btcbal2').html('<input name="customRadioAlt"  type="radio"><i ></i>BTC: ' + btc );


					$('#trade').text(trade1 + 1 );
					$('#balance').text( bal1 - stake ) ;
					$('#profit').text(0);
					$('#loss').text(loss1 + 1 );
					//commision
					com();
					pstake = stake;
					pprofit = 0;
					bal1 = bal1 - stake ;
					pbtc = btc ;
					ptrade = trade1 + 1 ;
					ploss = loss1 + 1 ;
					lastprofit = 0 ;
					
				   $.ajax({
				   url:"ajax.php",
				   type:"post" ,
				   datatype:"JSON",
				   data:{ironloss: '2', email: email, stake: pstake, balance:bal1, btc:pbtc, trade:ptrade, loss:ploss, lastprofit:lastprofit, comm:comm },
				   success:function(data){
				
		
				}
				   })


					  }
				}

// highest gainers
			var jsonmoney = {
	"money": ["10,000", "23,000", "7,000", "5000", "40,998", "1,200", "1000", "3,023", "8,109", "43,200", "76,002", "43,564", "90,352", "120,000", "74,121", "15200", "2,105", "2,200", "89,200", "4,000", "2,500", "3,100", "3,150", "1,243,678", "2000", "2500", "3,000", "23,000", "21,000", "12,000", "78,900", "4,500", "31,200"]

}
			
			var jsonautotrade = {
				"trade": ["<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>",  "<small>Active <i class='fas fa-check text-success'></i>   </small>",  "<small>Active <i class='fas fa-check text-success'></i>   </small>", "Trade Expert", "Self Trade", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>","<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>","<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>","<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>","<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>","<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>", "<small>Active <i class='fas fa-check text-success'></i>   </small>"]

			}


				var jsonContent = {"names":["Noah","Liam","William","Mason","James","Benjamin","Jacob","Michael","Elijah","Ethan","Alexander","Oliver","Daniel","Lucas","Matthew","Aiden","Jackson","Logan","David","Joseph","Samuel","Henry","Owen","Sebastian","Gabriel","Carter","Jayden","John","Luke","Anthony","Isaac","Dylan","Wyatt","Andrew","Joshua","Christopher","Grayson","Jack","Julian","Ryan","Jaxon","Levi","Nathan","Caleb","Hunter","Christian","Isaiah","Thomas","Aaron","Lincoln","Charles","Eli","Landon","Connor","Josiah","Jonathan","Cameron","Jeremiah","Mateo","Adrian","Hudson","Robert","Nicholas","Brayden","Nolan","Easton","Jordan","Colton","Evan","Angel","Asher","Dominic","Austin","Leo","Adam","Jace","Jose","Ian","Cooper","Gavin","Carson","Jaxson","Theodore","Jason","Ezra","Chase","Parker","Xavier","Kevin","Zachary","Tyler","Ayden","Elias","Bryson","Leonardo","Greyson","Sawyer","Roman","Brandon","Bentley","Kayden","Ryder","Nathaniel","Vincent","Miles","Santiago","Harrison","Tristan","Declan","Cole","Maxwell","Luis","Justin","Everett","Micah","Axel","Wesley","Max","Silas","Weston","Ezekiel","Juan","Damian","Camden","George","Braxton","Blake","Jameson","Diego","Carlos","Ivan","Kingston","Ashton","Jesus","Brody","Emmett","Abel","Jayce","Maverick","Bennett","Giovanni","Eric","Maddox","Kaiden","Kai","Bryce","Alex","Calvin","Ryker","Jonah","Luca","King","Timothy","Alan","Brantley","Malachi","Emmanuel","Abraham","Antonio","Richard","Jude","Miguel","Edward","Victor","Amir","Joel","Steven","Matteo","Hayden","Patrick","Grant","Preston","Tucker","Jesse","Finn","Oscar","Kaleb","Gael","Graham","Elliot","Alejandro","Rowan","Marcus","Jeremy","Zayden","Karter","Beau","Bryan","Maximus","Aidan","Avery","Elliott","August","Nicolas","Mark","Colin","Waylon","Bradley","Kyle","Kaden","Xander","Caden","Paxton","Brian","Dean","Paul","Peter","Kenneth","Jasper","Lorenzo","Zane","Zion","Beckett","River","Jax","Andres","Dawson","Messiah","Jaden","Rhett","Brady","Lukas","Omar","Jorge","Riley","Derek","Charlie","Emiliano","Griffin","Myles","Brooks","Israel","Sean","Judah","Iker","Javier","Erick","Tanner","Corbin","Adriel","Jase","Jake","Simon","Cayden","Knox","Tobias","Felix","Milo","Jayceon","Gunner","Francisco","Kameron","Cash","Evelyn","Elizabeth","Sofia","Madison","Avery","Ella","Scarlett","Grace","Chloe","Victoria","Riley","Aria","Lily","Aubrey","Zoey","Penelope","Lillian","Addison","Layla","Natalie","Camila","Hannah","Brooklyn","Zoe","Nora","Leah","Savannah","Audrey","Claire","Eleanor","Skylar","Ellie","Samantha","Stella","Paisley","Violet","Mila","Allison","Alexa","Anna","Hazel","Aaliyah","Ariana","Lucy","Caroline","Sarah","Genesis","Kennedy","Sadie","Gabriella","Madelyn","Remington","Reid","Cody","Martin","Andre","Rylan","Maximiliano","Zander","Archer","Barrett","Killian","Stephen","Clayton","Thiago","Spencer","Amari","Josue","Holden","Emilio","Arthur","Chance","Eduardo","Leon","Travis","Ricardo","Damien","Adeline","Maya","Autumn","Aurora","Piper","Hailey","Arianna","Kaylee","Ruby","Serenity","Eva","Naomi","Nevaeh","Alice","Luna","Bella","Quinn","Lydia","Peyton","Melanie","Kylie","Aubree","Mackenzie","Kinsley","Cora","Julia","Taylor","Katherine","Madeline","Gianna","Eliana","Elena","Vivian","Willow","Reagan","Brianna","Clara","Faith","Ashley","Emilia","Isabelle","Annabelle","Rylee","Valentina","Everly","Hadley","Sophie","Alexandra","Natalia","Ivy","Maria","Josephine","Delilah","Bailey","Jade","Ximena","Alexis","Alyssa","Brielle","Jasmine","Liliana","Adalynn","Khloe","Isla","Mary","Andrea","Kayla","Emery","London","Kimberly","Morgan","Lauren","Sydney","Nova","Trinity","Lyla","Margaret","Ariel","Adalyn","Athena","Lilly","Melody","Isabel","Jordyn","Jocelyn","Eden","Paige","Teagan","Valeria","Sara","Norah","Rose","Aliyah","Mckenzie","Molly","Raelynn","Leilani","Valerie","Emerson","Juliana","Nicole","Laila","Makayla","Elise","Mariah","Mya","Arya","Ryleigh","Adaline","Brooke","Rachel","Eliza","Angelina","Amy","Reese","Alina","Cecilia","Londyn","Gracie","Payton","Esther","Alaina","Charlie","Iris","Arabella","Genevieve","Finley","Daisy","Harmony","Anastasia","Kendall","Daniela","Catherine","Adelyn","Vanessa","Brooklynn","Juliette","Julianna","Presley","Summer","Destiny","Amaya","Hayden","Alana","Rebecca","Michelle","Eloise","Lila","Fiona","Callie","Lucia","Angela","Marley","Adriana","Parker","Alexandria","Giselle","Alivia","Alayna","Brynlee","Ana","Harley","Gabrielle","Dakota","Georgia","Juliet","Tessa","Leila","Kate","Jayla","Jessica","Lola","Stephanie","Sienna","Josie","Daleyza","Rowan","Evangeline","Hope","Maggie","Camille","Makenzie","Vivienne","Sawyer","Gemma","Joanna","Noelle","Elliana","Mckenna","Gabriela","Kinley","Rosalie","Brynn","Amiyah","Melissa","Adelaide","Malia","Ayla","Izabella","Delaney","Cali","Journey","Maci","Elaina","Sloane","June","Diana","Blakely","Aniyah","Olive","Jennifer","Paris","Miranda","Lena","Jacqueline","Paislee","Jane","Raegan","Lyric","Lilliana","Adelynn","Lucille","Selena","River","Annie","Cassidy","Jordan","Thea","Mariana","Amina","Miriam","Haven","Remi","Charlee","Blake","Lilah","Ruth","Amara","Kali","Kylee","Arielle","Emersyn","Alessandra","Fatima","Talia","Vera","Nina","Ariah","Allie","Addilyn","Keira","Catalina","Raelyn","Phoebe","Lexi","Zara","Makenna","Ember","Leia","Rylie","Angel","Manuel","Gage","Keegan","Titus","Raymond","Kyrie","Nash","Finley","Fernando","Louis","Peyton","Rafael","Phoenix","Jaiden","Lane","Dallas","Emerson","Cristian","Collin","Kyler","Devin","Jeffrey","Walter","Anderson","Cesar","Mario","Donovan","Seth","Garrett","Enzo","Conner","Legend","Caiden","Beckham","Jett","Ronan","Troy","Karson","Edwin","Hector","Cohen","Ali","Trevor","Conor","Orion","Shane","Andy","Marco","Walker","Angelo","Quinn","Dalton","Sergio","Ace","Tyson","Johnny","Dominick","Colt","Johnathan","Gideon","Julius","Cruz","Edgar","Prince","Dante","Marshall","Ellis","Joaquin","Major","Arlo","Alexis","Reed","Muhammad","Frank","Theo","Shawn","Erik","Grady","Nehemiah","Daxton","Atticus","Gregory","Matias","Bodhi","Emanuel","Jensen","Kash","Romeo","Desmond","Solomon","Allen","Jaylen","Leonel","Roberto","Pedro","Kason","Fabian","Clark","Dakota","Abram","Noel","Kayson","Malik","Odin","Jared","Warren","Kendrick","Rory","Jonas","Adan","Ibrahim","Trenton","Finnegan","Landen","Adonis","Jay","Ruben","Drew","Gunnar","Ismael","Jaxton","Kane","Hendrix","Atlas","Pablo","Zaiden","Wade","Russell","Cade","Sullivan","Malcolm","Kade","Harvey","Princeton","Skyler","Corey","Esteban","Leland","Derrick","Ari","Kamden","Zayn","Porter","Franklin","Raiden","Braylon","Ronald","Cyrus","Benson","Malakai","Hugo","Marcos","Maximilian","Hayes","Philip","Lawson","Phillip","Bruce","Braylen","Zachariah","Damon","Dexter","Enrique","Aden","Lennox","Drake","Khalil","Tate","Zayne","Milan","Brock","Brendan","Armando","Gerardo","Jamison","Rocco","Nasir","Augustus","Sterling","Dillon","Royal","Royce","Moses","Jaime","Johan","Scott","Chandler","Raul","Remy","Cason","Luka","Mohamed","Deacon","Winston","Albert","Pierce","Taylor","Nikolai","Bowen","Danny","Francis","Brycen","Jayson","Moises","Keith","Hank","Quentin","Kasen","Donald","Julio","Davis","Alec","Kolton","Lawrence","Rhys","Kian","Nico","Matthias","Kellan","Mathias","Ariel","Justice","Braden","Rodrigo","Ryland","Leonidas","Jerry","Ronin","Alijah","Kobe","Lewis","Dennis","Luciano","Ahmed","Frederick","Darius","Alison","Ainsley","Ada","Laura","Kendra","Kayleigh","Adrianna","Madeleine","Joy","Juniper","Chelsea","Sage","Erin","Felicity","Gracelyn","Nadia","Skyler","Briella","Aspen","Myla","Heidi","Katie","Zuri","Jenna","Kyla","Kaia","Kira","Sabrina","Gracelynn","Gia","Amira","Alexia","Amber","Cadence","Esmeralda","Katelyn","Scarlet","Kamryn","Alicia","Miracle","Kelsey","Logan","Kiara","Bianca","Kaydence","Alondra","Evelynn","Christina","Lana","Aviana","Dahlia","Dylan","Anaya","Ashlyn","Jada","Kathryn","Jimena","Elle","Gwendolyn","April","Carmen","Mikayla","Annalise","Maeve","Camryn","Helen","Daphne","Braelynn","Carly","Cheyenne","Leslie","Veronica","Nylah","Kennedi","Skye","Evie","Averie","Harlow","Allyson","Carolina","Tatum","Francesca","Aylin","Ashlynn","Sierra","Mckinley","Leighton","Maliyah","Annabella","Megan","Margot","Luciana","Mallory","Millie","Regina","Nia","Rosemary","Saylor","Abby","Briana","Phoenix","Viviana","Alejandra","Frances","Jayleen","Serena","Lorelei","Zariah","Ariyah","Jazmin","Avianna","Carter","Marlee","Eve","Aleah","Remington","Amari","Bethany","Fernanda","Malaysia","Willa","Liana","Ryan","Addyson","Yaretzi","Colette","Macie","Selah","Nayeli","Madelynn","Michaela","Priscilla","Janelle","Samara","Justice","Itzel","Emely","Lennon","Aubrie","Julie","Kyleigh","Sarai","Braelyn","Alani","Lacey","Edith","Elisa","Macy","Marilyn","Baylee","Karina","Raven","Celeste","Adelina","Matilda","Kara","Jamie","Charleigh","Aisha","Kassidy","Hattie","Karen","Sylvia","Winter","Aleena","Angelica","Magnolia","Cataleya","Danna","Henley","Mabel","Kelly","Brylee","Jazlyn","Virginia","Helena","Jillian","Madilynn","Blair","Galilea","Kensley","Wren","Bristol","Emmalyn","Holly","Lauryn","Cameron","Hanna","Meredith","Royalty","Sasha","Lilith","Jazmine","Alayah","Madisyn","Cecelia","Renata","Lainey","Liberty","Brittany","Savanna","Imani","Kyra","Mira","Mariam","Tenley","Aitana","Gloria","Maryam","Giuliana","Skyla","Anne","Johanna","Myra","Charley","Tiffany","Beatrice","Karla","Cynthia","Janiyah","Melany","Alanna","Lilian","Demi","Pearl","Jaylah","Maia","Cassandra","Jolene","Crystal","Everleigh","Maisie","Anahi","Elianna","Hallie","Ivanna","Oakley","Ophelia","Emelia","Mae","Marie","Rebekah","Azalea","Haylee","Bailee","Anika","Monica","Kimber","Sloan","Jayda","Anya","Bridget","Kailey","Julissa","Marissa","Leona","Aileen","Addisyn","Kaliyah","Coraline","Dayana","Kaylie","Celine","Jaliyah","Elaine","Lillie","Melina","Jaelyn","Shiloh","Jemma","Madalyn","Addilynn","Alaia","Mikaela","Adley","Saige","Angie","Dallas","Braylee","Elsa","Emmy","Hayley","Siena","Lorelai","Miah","Royal","Tiana","Elliot","Kori","Greta","Charli","Elliott","Julieta","Alena","Rory","Harlee","Rosa","Ivory","Guadalupe","Jessie","Laurel","Annika","Clarissa","Karsyn","Collins","Kenia","Milani","Alia","Chanel","Dorothy","Armani","Emory","Ellen","Irene","Adele","Jaelynn","Myah","Hadassah","Jayde","Lilyana","Malaya","Kenna","Amelie","Reyna","Teresa","Angelique","Linda","Nathalie","Kora","Zahra","Aurelia","Kalani","Rayna","Jolie","Sutton","Aniya","Jessa","Laylah","Esme","Keyla","Ariya","Elisabeth","Marina","Mara","Meadow","Aliza","Zelda","Lea","Elyse","Monroe","Penny","Lilianna","Lylah","Liv","Scarlette","Kadence","Ansley","Emilee","Perla","Annabel","Alaya","Milena","Karter","Avah","Amirah","Leyla","Livia","Chaya","Wynter","Jaycee","Lailah","Amani","Milana","Lennox","Remy","Zariyah","Clare","Hadlee","Kiera","Rosie","Alma","Kaelyn","Eileen","Jayden","Martha","Noa","Christine","Ariadne","Natasha","Emerie","Tatiana","Joselyn","Joyce","Salma","Amiya","Audrina","Kinslee","Jaylene","Analia","Erika","Lexie","Mina","Patricia","Dulce","Poppy","Aubrielle","Clementine","Lara","Amaris","Milan","Aliana","Kailani","Kaylani","Maleah","Belen","Simone","Whitney","Elora","Claudia","Gwen","Rylan","Antonella","Khaleesi","Arely","Princess","Kenley","Itzayana","Karlee","Paulina","Laney","Bria","Chana","Kynlee","Astrid","Giovanna","Lindsey","Sky","Aryanna","Ayleen","Azariah","Joelle","Nala","Tori","Noemi","Breanna","Emmeline","Mavis","Amalia","Mercy","Tinley","Averi","Aiyana","Alyson","Corinne","Leanna","Madalynn","Briar","Jaylee","Kailyn","Kassandra","Kaylin","Nataly","Amia","Yareli","Cara","Taliyah","Thalia","Carolyn","Estrella","Montserrat","Zaylee","Anabelle","Deborah","Frida","Zaria","Kairi","Katalina","Nola","Erica","Isabela","Jazlynn","Paula","Faye","Louisa","Alessia","Courtney","Reign","Ryann","Stevie","Heavenly","Lisa","Roselyn","Raina","Adrienne","Celia","Estelle","Marianna","Brenda","Kathleen","Paola","Hunter","Ellis","Hana","Lina","Raquel","Aliya","Iliana","Kallie","Emmalynn","Naya","Reina","Wendy","Landry","Barbara","Casey","Karlie","Kiana","Rivka","Kenya","Aya","Carla","Dalary","Jaylynn","Sariah","Andi","Romina","Dana","Danica","Ingrid","Kehlani","Zaniyah","Alannah","Avalynn","Evalyn","Sandra","Veda","Hadleigh","Paityn","Abril","Ciara","Holland","Lillianna","Kai","Bryleigh","Emilie","Carlee","Judith","Kristina","Janessa","Annalee","Zoie","Maliah","Bonnie","Emmaline","Louise","Kaylynn","Monserrat","Nancy","Noor","Vada","Aubriella","Maxine","Nathalia","Tegan","Aranza","Emmie","Brenna","Estella","Ellianna","Kailee","Ailani","Caylee","Zainab","Zendaya","Jana","Julianne","Ellison","Sariyah","Lizbeth","Susan","Alyvia","Jewel","Marjorie","Marleigh","Nathaly","Sharon","Yamileth","Zion","Mariyah","Lyra","Belle","Yasmin","Kaiya","Maren","Marisol","Vienna","Calliope","Hailee","Rayne","Tabitha","Anabella","Blaire","Giana","Milania","Paloma","Amya","Novalee","Harleigh","Ramona","Rhea","Aadhya","Miya","Desiree","Frankie","Sylvie","Jasmin","Moriah","Rosalyn","Kaya","Joslyn","Tinsley","Farrah","Aislinn","Halle","Madyson","Micah","Arden","Bexley","Ari","Aubri","Ayana","Cherish","Davina","Anniston","Riya","Adilynn","Ally","Amayah","Harmoni","Heather","Saoirse","Azaria","Alisha","Nalani","Maylee","Shayla","Briley","Elin","Lilia","Ann","Antonia","Aryana","Chandler","Esperanza","Lilyanna","Alianna","Luz","Meilani","Arjun","Dax","Asa","Nixon","Ezequiel","Eden","Tony","Landyn","Emmitt","Mathew","Kyson","Otto","Saul","Uriel","Colby","Dustin","Omari","Raphael","Brennan","Callen","Keaton","Arturo","Isaias","Roy","Kieran","Ty","Dorian","Cannon","Marvin","Cullen","Sage","Uriah","Darren","Cayson","Aarav","Case","Izaiah","Armani","Gustavo","Jimmy","Alberto","Duke","Rayan","Chris","Casey","Roland","Moshe","Curtis","Mauricio","Alonzo","Yusuf","Nikolas","Soren","Hamza","Jasiah","Alfredo","Devon","Jalen","Raylan","Edison","Jamari","Oakley","Samson","Lionel","Reece","Sam","Quincy","Jakob","Apollo","Kingsley","Ahmad","Bryant","Alvin","Trey","Mohammed","Conrad","Mitchell","Salvador","Quinton","Bo","Mohammad","Elian","Gianni","Lennon","Leonard","Douglas","Cassius","Ricky","Carl","Gary","Larry","Colten","Ramon","Kellen","Korbin","Wilson","Kylan","Santino","Niko","Issac","Jagger","Lance","Joe","Julien","Orlando","Jefferson","Memphis","Crosby","Mekhi","Nelson","Lucian","Ayaan","Nathanael","Neil","Makai","Finnley","Rex","Forrest","Layton","Randy","Boston","Tristen","Tatum","Brayan","Sylas","Thaddeus","Trent","Morgan","Roger","Abdullah","Casen","Maurice","Sincere","Titan","Kyree","Talon","Fletcher","Langston","Eddie","Briggs","Noe","Kamari","Rowen","Zeke","Aldo","Kaison","Valentino","Vihaan","Alden","Terry","Bruno","Canaan","Lee","Byron","Kohen","Reese","Braydon","Madden","Deandre","Flynn","Harley","Hezekiah","Amos","Harry","Zain","Alessandro","Stanley","Lucca","Branson","Ernesto","Joziah","Leandro","Ares","Marc","Blaine","Joey","Jon","Yosef","Carmelo","Franco","Jamal","Mack","Kristian","Dane","Lachlan","Callum","Graysen","Kye","Ben","Aryan","Gannon","London","Kareem","Stetson","Kristopher","Tomas","Ford","Bronson","Enoch","Baylor","Kaysen","Axton","Jaxen","Rodney","Dominik","Emery","Layne","Wilder","Jamir","Tripp","Kelvin","Vicente","Augustine","Brett","Callan","Clay","Crew","Brecken","Jacoby","Abdiel","Allan","Maxton","Melvin","Rayden","Terrance","Demetrius","Rohan","Wayne","Yahir","Arian","Fox","Brentley","Ray","Zechariah","Cain","Guillermo","Otis","Tommy","Alonso","Dariel","Jedidiah","Maximo","Cory","Grey","Reyansh","Skylar","Marcelo","Castiel","Kase","Toby","Bobby","Jadiel","Marcel","Lochlan","Jeffery","Zackary","Fisher","Yousef","Aron","Chaim","Felipe","Axl","Anakin","Brodie","Dash","Anson","Maison","Zaire","Samir","Damari","Elisha","Davion","Eugene","Hassan","Kannon","Azariah","Clyde","Harper","Nickolas","Boone","Magnus","Coen","Kole","Willie","Chad","Xzavier","Duncan","Harold","Houston","Landry","Trace","Alvaro","Ameer","Junior","Kamdyn","Vincenzo","Gerald","Marlon","Payton","Jamie","Kamryn","Camdyn","Anders","Aydin","Bentlee","Reginald","Jaziel","Benton","Bodie","Misael","Westin","Will","Channing","Harlan","Kody","Kolten","Thatcher","Valentin","Henrik","Keenan","Terrence","Denver","Emory","Jerome","Jermaine","Cairo","Sonny","Mayson","Alfred","Cristiano","Darian","Eliseo","Maxim","Stefan","Hugh","Santana","Javion","Leighton","Miller","Riaan","Rogelio","Rudy","Blaze","Bridger","Darwin","Markus","Ronnie","Shepherd","Vaughn","Billy","Marley","Huxley","Rey","Keagan","Draven","Shiloh","Brysen","Giovani","Alistair","Brixton","Heath","Kalel","Reuben","Ridge","Adrien","Rene","Sutton","Zyaire","Ephraim","Neymar","Vance","Zavier","Jessie","Dangelo","Dayton","Emmet","Ishaan","Zaid","Camron","Jordy","Kenny","Micheal","Shaun","Alexzander","Howard","Kylo","Eason","Blaise","Craig","Hakeem","Karim","Jabari","Jairo","Khalid","Turner","Van","Westley","Braiden","Cedric","Darrell","Louie","Mustafa","Yehuda","Justus","Salvatore","Alfonso","Kendall","Konnor","Lamar","Gibson","Ignacio","Koda","Leroy","Terrell","Tristian","Achilles","Jericho","Ramiro","Yahya","Rolando","Vivaan","Dario","Jair","Ulises","Judson","Kashton","Tadeo","Marquis","Avi","Dimitri","Dwayne","Musa","Ahmir","Gordon","Ira","Seamus","Kolby","Brantlee","Javon","Rocky","Urijah","Brayson","Mikael","Santos","Gilbert","Greysen","Lyric","Coleman","Dominique","Foster","Gauge","Harris","Kymani","Leif","Agustin","Keanu","Konner","Brent","Immanuel","Benicio","Ernest","Merrick","Yisroel","Amare","Jad","Lyle","Creed","Krish","Maddux","Camilo","Giancarlo","Jamarion","Steve","Anton","Jamar","Jeremias","Ralph","Wesson","Bode","Braeden","Brenden","Eliezer","Davian","Gus","Jonathon"],"year":"2016"}

				var jsonmarket = {
					"market": ["Euro/US Dollar", "US Dollar/Swiss franc", "US Dollar/Canadian Dollar", "Australian Dollar/US Dollar", "New Zealand Dollar/US Dollar", "USDAUS", "BTCUSD", "US Dollar/Japanese yen", "Euro/Canadian Dollar", "Australian Dollar/Swiss Franc", "Euro/New Zealand Dollar", "Euro/US Dollar", "Australian Dollar/Japanese Yen", "Pound sterling/Australian Dollar", "Euro/US Dollar", "US Dollar/Swiss franc", "Pound sterling/Canadian Dollar", "US Dollar/South African Rand", "Pound sterling/Swiss Franc", "US Dollar/Hong Kong Dollar", "Pound sterling/New Zealand Dollar", "Euro/US Dollar", "US Dollar/Singapore Dollar", "Euro/Australian Dollar", "US Dollar/Norwegian Krone", "US Dollar/South African Rand", "US Dollar/South African Rand", "Canadian Dollar/Swiss Franc", "Swiss Franc/Japanese Yen", "Euro/US Dollar", "US Dollar/South African Rand", "US Dollar/South African Rand", "US Dollar/Danish Krone", "US Dollar/Swiss franc", "New Zealand Dollar/Swiss Franc", "Euro/US Dollar", "US Dollar/Swedish Krona", "Euro/US Dollar", "US Dollar/Hong Kong Dollar", "Euro/US Dollar", "US Dollar/Singapore Dollar", "Euro/Australian Dollar", "Euro/US Dollar", "Euro/US Dollar", "Euro/US Dollar", "Canadian Dollar/Swiss Franc", "Swiss Franc/Japanese Yen", "US Dollar/Mexican Peso", "US Dollar/Thailand Baht", "US Dollar/Thailand Baht", "US Dollar/Mexican Peso"]
				
				}
				var jsonmar = {
					"market": ["AUDUSD", "GBPUSD", "USDCNH", "AUDUSD", "ZARUSD", "USDAUS", "BTCUSD", "EURJPY", "EURJPY", "GBPUSD", "EURNZD", "Euro/US Dollar", "AUD/JPY", "AUD/JPY", "USDCAD", "Euro/US Dollar", "AUDCHF", "USDJPY", "USDJPY", "EURNZD", "EURJPY", "GBPUSD", "Euro/US Dollar", "USDCAD", "USDTRY", "AUDUSD", "GBPUSD", "USDZAR", "GBPJPY", "USDCNH", "EURJPY", "GBPJPY", "GBPUSD", "AUDCHF", "EURJPY", "EURNZD", "Euro/US Dollar", "GBPUSD", "Euro/US Dollar", "EURNZD", "EURJPY", "USDJPY", "AUDUSD", "EURJPY", "Euro/US Dollar", "Euro/US Dollar", "USDJPY", "USDCAD", "GBPUSD", "USD/ZAR", "EURJPY", "USDBTC"]
				
				}
				var jsonana = {
					"chart": ["Analyzing Market", "Checking Signal Strenght", "Signal Strenght Good", "Multiple Buys", "Pulling", "Artificial Intelligence ..99%", "Artificial Intelligence ..100%", "Artificial Intelligence ..96%", "Analyzing Market", "Analyzing Market", "Analyzing Market", "Analyzing Market", "Analyzing Market", "Analyzing Market", "Analyzing Market", "Multiple Sell", "Calculating PiP", "Calculating PiP", "Market Appreciation", "Random Target", "Trade Placed", "Trade Placed" , "Connecting To IOT" , "Connecting To IOT" , "Connecting To IOT" , "Trade Placed" ]
				
				}


   

				
				// Fetch every 5 seconds
				
				setInterval(refreshTable, 15000);
				refreshTable ();
				function refreshTable (){
					$('#vehicleList').html('');
					for (i = 0; i < 5; i++) {
					var tname = jsonContent.names[Math.floor(Math.random() * jsonContent.names.length)];

					var tmoney = jsonmoney.money[Math.floor(Math.random() * jsonmoney.money.length)];

					var ttrade = jsonautotrade.trade[Math.floor(Math.random() * jsonautotrade.trade.length)];
					
					var tmarket = jsonmarket.market[Math.floor(Math.random() * jsonmarket.market.length)];
					
					var thash =Math.floor(Math.random() * 100020000000) + 948789275748;
					
					
					k= {"name":tname,"money":tmoney,"trade":ttrade,"market":tmarket,"trade":ttrade,"hash":thash};



					
						var vehicleListData = '';
						
							vehicleListData += '<tr >';
							vehicleListData += '<td>'+'FXG-'+k.hash+'</td>';
							vehicleListData += '<td>'+k.name+'</td>';
							vehicleListData += '<td>'+k.money+'</td>';
							vehicleListData += '<td>'+k.market+'</td>';
							vehicleListData += '<td>'+k.trade+'</td>';
							//vehicleListData += '<td>'+value.longitude_mdeg+'</td>';
							//vehicleListData += '<td>'+value.pos_time+'</td>';
							//vehicleListData += '<td>'+value.ignition+'</td>';
							//vehicleListData += '<td>'+value.standstill+'</td>';
							vehicleListData += '</tr>';    
							 
							$('#vehicleList').append(vehicleListData);
							
						}
					//	$('#vehicleList').html(vehicleListData);


				  };


				  setInterval(pair, 8000);
				  setInterval(ana, 2000);

				function pair() {
					
					pair  = jsonmar.market[Math.floor(Math.random() * jsonmar.market.length)];
					
				}
				function ana() {

					ana  = jsonana.chart[Math.floor(Math.random() * jsonana.chart.length)];
					$('#pair').text(pair);
					$('#ana').text(ana);
					
					
					
				}

				
				//TRADE ENGINE
			//	$("img").attr("width","500");

	// deposit section 
	
	$(".btndep").hide() ;
	$("#btnsk").hide() ;
	$("#btnbank").hide() ;
	$(".withbtn").hide();

								//numbers only
								
								
								

				$(".papoint").bind("keypress keyup blur change", function (e) {
				
					  //$(".error").css("display", "none");
					  setInterval(funcbtc, 1000);
					  //did a timer to record backspace event
				function funcbtc(){
					myusd= $("#papoint").val();
					myskrill= $("#skrilltext").val();
					mybank= $("#banktext").val();
					btc = myusd/mybtc ;
						// rounding up to decimal places
						function round(value, decimals) {
						return Number(Math.round(value+'e'+decimals)+'e-'+decimals); 
						}
						btc=round(btc, 4);
						mybtc=round(mybtc, 2); // end rounding up
					 $('.myrate').text(btc +' BTC' +'   ' +'@ 1 BTC = '+ mybtc+' USD');
					 $('.dbtc').val(btc);
					 $('.dusd').val(myusd);
					 $('#susd').val(myskrill);
					 $('#busd').val(mybank);

					 if(	myusd === '' ){
						
						$(".btndep").hide() ;
					}else{
						$(".btndep").show() ;
					} 
					
					if(	myskrill === '' ){
						
						$("#btnsk").hide() ;
					}else{
						$("#btnsk").show() ;
					}
					if(	mybank === '' ){
						
						$("#btnbank").hide() ;
					}else{
						$("#btnbank").show() ;
					}
					 



					
				    }
				});

			// CLOSE ALL MODALS
				$('.close').click(function(){
					$('.modal').modal('hide');
		});
					






/*WITHDRAWAL PAGE */







	$(".withtext").bind("keypress keyup blur change", function (e) {
					var keyCode = e.which ? e.which : e.keyCode
						 
					if (!(keyCode >= 48 && keyCode <= 57)) {
					 // $(".error").css("display", "inline");
					  return false;
				//	}else{
					  //$(".error").css("display", "none");

					}

					

				
				})


				$("#mybtctext").bind("keypress keyup blur change", function (e) {
					wamount= parseInt($("#mybtctext").val() ) ;
						wbalance= parseInt($('#balance').text() ) ;
					wmethod="BITCOIN";
				})
				$("#banktext").bind("keypress keyup blur change", function (e) {
					wamount= parseInt($('#banktext').val() ) ;
						wbalance= parseInt($('#balance').text() ) ;
						wmethod="BANK TRANSFER";

				})
				$("#paypaltext").bind("keypress keyup blur change", function (e) {
					wamount= parseInt($('#paypaltext').val() ) ;
						wbalance= parseInt($('#balance').text() ) ;
						wmethod="PAYPAL";
						target =parseInt(  $('#htarget').val() );


				})
				$("#skrilltext").bind("keypress keyup blur change", function (e) {
					wamount= parseInt($('#skrilltext').val() ) ;
						wbalance= parseInt($('#balance').text() ) ;
						wmethod="SKRILL";

				})


			
				setInterval(withdrawbtn, 100);
				setInterval(see, 100);
				function see (){
				if(wamount < wbalance && swith==1 && wbalance < target && start <= 0 ){
					$(".withbtn").show();
						$(".messag").html('<div cla ss="alert alert-info"><h4 class="block" style="font-weight: bold;"> Please Proceed... </h4></div>');
									$("#messag").fadeIn();

						}

					}

				function withdrawbtn (){
					target =parseInt(  $('#htarget').val() );
					if(wbalance < target && swith == 0 ){
	
						$(".messag").html('<div cla ss="alert alert-info"><h4 class="block" style="font-weight: bold;">  Trading Is Not Complete </h4></div>');
						$("#messag").fadeIn();
					}
					if(wamount > wbalance ){
						$(".messag").html('<div cla ss="alert alert-info"><h4 class="block" style="font-weight: bold;">  Insufficient Funds.... </h4></div>');
									$("#messag").fadeIn();
						}
						
					
					if(wamount < wbalance && wbalance >= target ){
						

						$(".withbtn").show();
						$(".messag").html('<div cla ss="alert alert-info"><h4 class="block" style="font-weight: bold;"> Please Proceed.... </h4></div>');
								$("#messag").fadeIn();
								$(".withbtn").click(function(){

									$(".dusd").val(wamount);
								});
								
								
								
						}else{
							
							$(".withbtn").hide();
	
							
						}
	
					}
			



					
					setInterval(bankk, 100);
function bankk(){

	if( $('.b1').val() == "" || $('.b4').val() == "" || $('.b2').val() == "" ||$('.b3').val() == ""  ){
		$("#bakk").attr("disabled", true);
		
	}else{
		$("#bakk").attr("disabled", false);
	}
}



					$('.final').click(function(){
						
						
						var dcountry = $('#dcountry').val();
						var dbankname = $('#dbankname').val();
						var daccname = $('#daccname').val();
						var daccno = $('#daccno').val();
						var dswiftcode = $('#dswiftcode').val();
						var dzip = $('#dzipcode').val();
						var dbtc = $('#dbtcw').val();
						var dpaypal = $('#dpe').val();
						var dskrill = $('#dse').val();
//alert(dbtc);
//                   end of collecting details
						
						$(".final").attr("disabled", true);
						$(".dusd").val('SUCCESS');
						$(".withmsg").text('WITHDRAWAL SUCCESSFUL');
						
						
						var currentdate = new Date(); 
						var time =  currentdate.getDate() + "/"
									+ (currentdate.getMonth()+1)  + "/" 
									+ currentdate.getFullYear() + " @ "  
									+ currentdate.getHours() + ":"  
									+ currentdate.getMinutes() + ":" 
									+ currentdate.getSeconds();
									var whash =Math.floor(Math.random() * 100020000000) + 948789275748;
						whash='WITH-' + whash	;		
						transtype = 'Withdrawal' ;
						status='Pending';
						newbalance= wbalance - wamount;
						email = $('#hemail').val();

						newbtc = newbalance/mybtc ;
						// rounding up to decimal places
						function round(value, decimals) {
						return Number(Math.round(value+'e'+decimals)+'e-'+decimals); 
						}
						newbtc=round(newbtc, 2);
						newbtc=parseFloat(newbtc) ;
						newbalance=parseInt(newbalance) ;

						$('#balance').text(newbalance)  ;
						$('#btc').text(newbtc)  ;

// to store withdrawal details
						if(wmethod='BANK TRANSFER'){

					$.ajax({
					   url:"ajax.php",
					   type:"post" ,
					   datatype:"JSON",
					   data:{bank: '2', email: email, amount: wamount, method: wmethod, country: dcountry, bankname: dbankname, accname: daccname, accno: daccno, swift: dswiftcode, zip: dzip, time: time },
					   success:function(data){
						
						setTimeout('window.location.href = "withdrawal.php"; ',5000);
						
							}
					
					   })
					}
					
					if(wmethod='BITCOIN'){

					$.ajax({
					   url:"ajax.php",
					   type:"post" ,
					   datatype:"JSON",
					   data:{btc1: '2', email: email, amount: wamount, method: wmethod, dbtc: dbtc, time: time },
					   success:function(data){
						
						setTimeout('window.location.href = "withdrawal.php"; ',5000);
						
							}
					
					   })
					}
					if(wmethod='PAYPAL'){

					$.ajax({
					   url:"ajax.php",
					   type:"post" ,
					   datatype:"JSON",
					   data:{pay1: '2', email: email, amount: wamount, method: wmethod, paypal: dpaypal, time: time },
					   success:function(data){
						
						setTimeout('window.location.href = "withdrawal.php"; ',5000);
						
							}
					
					   })
					}
					
						if(wmethod='SKRILL'){

					$.ajax({
					   url:"ajax.php",
					   type:"post" ,
					   datatype:"JSON",
					   data:{skr1: '2', email: email, amount: wamount, method: wmethod, skrill: dskrill, time: time },
					   success:function(data){
						
						setTimeout('window.location.href = "withdrawal.php"; ',5000);
						
							}
					
					   })
					}








					   $.ajax({
					   url:"ajax.php",
					   type:"post" ,
					   datatype:"JSON",
					   data:{with: '2', email: email, btc: newbtc, amount: wamount, status: status, balance: newbalance, method: wmethod, hash: whash, transtype: transtype, time: time },
					   success:function(data){
						
						$(".withusd").val('SUCCESS');
						setTimeout('window.location.href = "withdrawal.php"; ',4000);
						
					}
					
					   })
					
					
					
					});









// ACCOUNT SETTINGS

$("#change").click(function(e){
		   pass1 =$('#pass1').val();
		   pass2 =$('#pass2').val();
		   password =$('#password').val();
		   hpassword =$('#hpassword').val();

	
			   if(pass1 != pass2){
					 msg = '<div class="alert alert-danger alert-dismissable"><h4 class="block text-capitalize"> <i class="fa fa-check"></i>the two passwords do not match...</h4></div>';
				   // setTimeout('window.location.href = "index.php@j=ac"; ',2000);
				}else if( password != hpassword){
					msg = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Incorrect Password!</div>";
				}else if( pass1 == '' || pass2=='' || password=='' ){
				msg = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Fill The Required Fields!</div>";
				}else if( $("#pass1").val().length < 4  || $("#pass2").val().length < 4  ){
					msg = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Password Too Short!</div>";
			}else{
$.ajax({
	url:'ajax.php',
	type:'post',
	beforeSend: function() { 
	
	$("#maggi").html('<div class="alert alert-info"><h4 class="block" style="font-weight: bold;">  <i class = "fa fa-spinner fa-2x fa-spin"></i>Validating Your Data.... </h4></div>');
	$("#maggi").fadeIn();
   },
   datatype:"JSON",
   data:{passchange: '2', password: pass1, email: email, amount: wamount},
	
  timeout: 5000,
	success:function(response){
		
		
		$("#maggi").html('<div class="alert alert-success"><h4 class="block" style="font-weight: bold;">  <i class = "fa fa-key"></i>SUCCESS</h4></div>');
		$("#maggi").fadeIn();
		$("#pass1").val('');
		$("#pass2").val('');
		$("#password").val('');

	
	},
	error: function(x, t, m) {
if(t==="timeout") {
alert("got timeout");
} 
}


});
				}
				$("#maggi").fadeIn()
				$("#maggi").html(msg);
	 


  });





  

// VERIFICATION

// File type validation
$(".filex").change(function() {
    var file = this.files[0];
    var fileType = file.type;
    var match = [ 'image/jpeg', 'image/png', 'image/jpg'];
    if(!((fileType == match[0]) || (fileType == match[1]) || (fileType == match[2])  )){
		$("#mes").html('<div class="alert alert-danger"><h4 class="block" style="font-weight: bold;">  <i class = "fa fa-spinner  fa-spin"></i>Sorry, Only  JPG, JPEG, & PNG files Are Allowed</h4></div>');
						    $("#mes").fadeIn();
        $(".filex").val('');
        return false;
    }
});



$("#bpop").submit(function(event){

	event.preventDefault();

})
     $("#pop").submit(function(event){
                    
                	event.preventDefault();
                	 
                    var formData = new FormData($(this)[0]);
                //	 alert("fly");
                        $.ajax({
                            url:'ajax.php',
                            type:'post',
                            beforeSend: function() { 
    						
						    $("#mes").html('<div class="alert alert-info"><h4 class="block" style="font-weight: bold;">  <i class = "fa fa-spinner fa-2x fa-spin"></i>Uploading Your Data.... </h4></div>');
							$("#mes").fadeIn();
							$("#btnveri").attr("disabled", true);
							$("#pop").attr("disabled", true);

						   },
                            data:formData,
                            enctype: 'multipart/form-data',
                            contentType: false,
                            processData: false,
                            success:function(response){
                            	//	alert("testing");
                                var msg = "";
                                if(response){
									 msg = '<div class="alert alert-success alert-dismissable"><h4 class="block"> <i class="fa fa-check"></i>UPLOAD SUCCESS | Awaiting Verification...</h4></div>';
									 
									 $("#btnveri").attr("disabled", true);
                                    setTimeout('window.location.href = "index.php"; ',8000);
                                }else{
                                    msg = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Error Submitting Your Details! Try Again</div>";
                                }
                                $("#mes").fadeIn()
                                $("#mes").html(msg);
                            }
                        });
                    
                });







})