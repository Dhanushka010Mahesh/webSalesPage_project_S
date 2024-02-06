let categary1=0 , categary2=0 , categary3=0 , categary4=0 , categary5=0 , categary6=0 ;
let n1,n2,n3,n4,n5,n6,nAll;
let n7,n8,n9,n10,n11,n12;
let n13,n14,n15,n16,n17,n18,nGra;
let n20,n21,n22,n23,n24,n25,nPart;
//............................................................................................
//............................................................................................
//............................................................................................

function Lap1CartAdd(x){

	if(x==1){
		if(categary1>=0 && categary1<3){
			categary1++;
			
			localStorage.setItem('priceAll1',4600.30*categary1);
			
		}
		myClolor(1);
		
	}else if(x==2){
		if(categary2>=0 && categary2<3){
			categary2++;
			
			localStorage.setItem('priceAll2',4600.30*categary2);
			
		}
		myClolor(2);
	}else if(x==3){
		if(categary3>=0 && categary3<3){
			categary3++;
			
			localStorage.setItem('priceAll3',4600.30*categary3);
			
		}
		myClolor(3);
	}else if(x==4){
		if(categary4>=0 && categary4<3){
			categary4++;
			
			localStorage.setItem('priceAll4',4600.30*categary4);
			
		}
		myClolor(4);
	}else if(x==5){
		if(categary5>=0 && categary5<3){
			categary5++;
			
			localStorage.setItem('priceAll5',4600.30*categary5);
			
		}
		myClolor(5);
	}else{
		if(categary6>=0 && categary6<3){
			categary6++;
			
			localStorage.setItem('priceAll6',4600.30*categary6);
			
		}
		myClolor(6);
	}


}
function Lap1CartRemove(x){
	if(x==1){
		if(categary1>0 && categary1<=4){
			categary1--;
			
			localStorage.setItem('priceAll1',4600.30*categary1);
			
		}
		myClolor(1);

	}else if(x==2){
		if(categary2>0 && categary2<=4){
			categary2--;
			
			localStorage.setItem('priceAll2',4600.30*categary2);
			
		}
		myClolor(2);
	

	}else if(x==3){
		if(categary3>0 && categary3<=4){
			categary3--;
			
			localStorage.setItem('priceAll3',4600.30*categary3);
			
		}
		myClolor(3);

	}else if(x==4){
		if(categary4>0 && categary4<=4){
			categary4--;
			
			localStorage.setItem('priceAll4',4600.30*categary4);
			
		}
		myClolor(4);

	}else if(x==5){
		if(categary5>0 && categary5<=4){
			categary5--;
			
			localStorage.setItem('priceAll5',4600.30*categary5);
			
		}
		myClolor(5);

	}else{
		if(categary6>0 && categary6<=4){
			categary6--;
			
			localStorage.setItem('priceAll6',4600.30*categary6);
			
		}
		myClolor(6);

	}
}

function MyFile1(){
			n1=localStorage.getItem('priceAll1');
			n2=localStorage.getItem('priceAll2');
			n3=localStorage.getItem('priceAll3');
			n4=localStorage.getItem('priceAll4');
			n5=localStorage.getItem('priceAll5');
			n6=localStorage.getItem('priceAll6');
			nAll=parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5)+parseInt(n6);

			let printOutput1=document.getElementById('displayPlace1');
			let printOutput2=document.getElementById('displayPlace2');
			let printOutput3=document.getElementById('displayPlace3');
			let printOutput4=document.getElementById('displayPlace4');
			let printOutput5=document.getElementById('displayPlace5');
			let printOutput6=document.getElementById('displayPlace6');
			let printOutput111=document.getElementById('pi');
			localStorage.setItem("PrintOutPrice1",nAll);

			printOutput1.innerText="Prise my (MacBook Air) : Rs: "+n1;
			printOutput2.innerText="Prise my (Acer Aspire 5) : Rs: "+n2;
			printOutput3.innerText="Prise my (MacBook M1 Pro Chip) : Rs: "+n3;
			printOutput4.innerText="Prise my (MacBook Air 11) : Rs: "+n4;
			printOutput5.innerText="Prise my (ASUS ZenBook 13) : Rs: "+n5;
			printOutput6.innerText="Prise my (Asus M515DA AMD Ryzen 3 Notebook) : Rs: "+n6;
			printOutput111.innerText=nAll;

}

//............................................................................................
//............................................................................................
//............................................................................................

function myClolor(x){
	if(x==1){

		switch(categary1){
		case 1:
			document.getElementById("btn1").style.backgroundColor="#880e4f";
			break;
		case 2:
			document.getElementById("btn1").style.backgroundColor="#4a148c";
			break;
		case 3:
			document.getElementById("btn1").style.backgroundColor="#b71c1c";
			break;
		default:
			document.getElementById("btn1").style.backgroundColor="#1a237e";
		}

	}
	if(x==2){

		switch(categary2){
		case 1:
			document.getElementById("btn2").style.backgroundColor="#880e4f";
			break;
		case 2:
			document.getElementById("btn2").style.backgroundColor="#4a148c";
			break;
		case 3:
			document.getElementById("btn2").style.backgroundColor="#b71c1c";
			break;
		default:
			document.getElementById("btn2").style.backgroundColor="#1a237e";
		}

	}
	if(x==3){

		switch(categary3){
		case 1:
			document.getElementById("btn3").style.backgroundColor="#880e4f";
			break;
		case 2:
			document.getElementById("btn3").style.backgroundColor="#4a148c";
			break;
		case 3:
			document.getElementById("btn3").style.backgroundColor="#b71c1c";
			break;
		default:
			document.getElementById("btn3").style.backgroundColor="#1a237e";
		}

	}
	if(x==4){

		switch(categary4){
		case 1:
			document.getElementById("btn4").style.backgroundColor="#880e4f";
			break;
		case 2:
			document.getElementById("btn4").style.backgroundColor="#4a148c";
			break;
		case 3:
			document.getElementById("btn4").style.backgroundColor="#b71c1c";
			break;
		default:
			document.getElementById("btn4").style.backgroundColor="#1a237e";
		}

	}
	if(x==5){

		switch(categary5){
		case 1:
			document.getElementById("btn5").style.backgroundColor="#880e4f";
			break;
		case 2:
			document.getElementById("btn5").style.backgroundColor="#4a148c";
			break;
		case 3:
			document.getElementById("btn5").style.backgroundColor="#b71c1c";
			break;
		default:
			document.getElementById("btn5").style.backgroundColor="#1a237e";
		}

	}
	if(x==6){

		switch(categary6){
		case 1:
			document.getElementById("btn6").style.backgroundColor="#880e4f";
			break;
		case 2:
			document.getElementById("btn6").style.backgroundColor="#4a148c";
			break;
		case 3:
			document.getElementById("btn6").style.backgroundColor="#b71c1c";
			break;
		default:
			document.getElementById("btn6").style.backgroundColor="#1a237e";
		}

	}
	
}



//............................................................................................
//............................................................................................
//............................................................................................


function SoftLapCartAdd(x){

	if(x==100){
		if(categary1>=0 && categary1<3){
			categary1++;
			
			localStorage.setItem('softPrices1',5800.50*categary1);
			
		}
		myClolor(1);
		
	}else if(x==200){
		if(categary2>=0 && categary2<3){
			categary2++;
			
			localStorage.setItem('softPrices2',5800.50*categary2);
			
		}
		myClolor(2);
	}else if(x==300){
		if(categary3>=0 && categary3<3){
			categary3++;
			
			localStorage.setItem('softPrices3',5800.50*categary3);
			
		}
		myClolor(3);
	}else if(x==400){
		if(categary4>=0 && categary4<3){
			categary4++;
			
			localStorage.setItem('softPrices4',5800.50*categary4);
			
		}
		myClolor(4);
	}else if(x==500){
		if(categary5>=0 && categary5<3){
			categary5++;
			
			localStorage.setItem('softPrices5',5800.50*categary5);
			
		}
		myClolor(5);
	}else{
		if(categary6>=0 && categary6<3){
			categary6++;
			
			localStorage.setItem('softPrices6',5800.50*categary6);
			
		}
		myClolor(6);
	}


}
function SoftLapCartRemove(x){
	if(x==100){
		if(categary1>0 && categary1<=4){
			categary1--;
			
			localStorage.setItem('softPrices1',5800.50*categary1);
			
		}
		myClolor(1);

	}else if(x==200){
		if(categary2>0 && categary2<=4){
			categary2--;
			
			localStorage.setItem('softPrices2',5800.50*categary2);
			
		}
		myClolor(2);
	

	}else if(x==300){
		if(categary3>0 && categary3<=4){
			categary3--;
			
			localStorage.setItem('softPrices3',5800.50*categary3);
			
		}
		myClolor(3);

	}else if(x==400){
		if(categary4>0 && categary4<=4){
			categary4--;
			
			localStorage.setItem('softPrices4',5800.50*categary4);
			
		}
		myClolor(4);

	}else if(x==500){
		if(categary5>0 && categary5<=4){
			categary5--;
			
			localStorage.setItem('softPrices5',5800.50*categary5);
			
		}
		myClolor(5);

	}else{
		if(categary6>0 && categary6<=4){
			categary6--;
			
			localStorage.setItem('softPrices6',5800.50*categary6);
			
		}
		myClolor(6);

	}
}

function MyFile2(){

			n7=localStorage.getItem('softPrices1');
			n8=localStorage.getItem('softPrices2');
			n9=localStorage.getItem('softPrices3');
			n10=localStorage.getItem('softPrices4');
			n11=localStorage.getItem('softPrices5');
			n12=localStorage.getItem('softPrices6');
			softAll=parseFloat(n7)+parseFloat(n8)+parseFloat(n9)+parseFloat(n10)+parseFloat(n11)+parseFloat(n12);

			let getValue1=document.getElementById('softLapBuy1');
			let getValue2=document.getElementById('softLapBuy2');
			let getValue3=document.getElementById('softLapBuy3');
			let getValue4=document.getElementById('softLapBuy4');
			let getValue5=document.getElementById('softLapBuy5');
			let getValue6=document.getElementById('softLapBuy6');
			let getValue222=document.getElementById('pii');
			localStorage.setItem("PrintOutPrice2",softAll);

			getValue1.innerText="Prise my (Dell XPS 15) : Rs: "+n7;
			getValue2.innerText="Prise my (MacBook Air (M1)) : Rs: "+n8;
			getValue3.innerText="Prise my (ROG Zephyrus G15) : Rs: "+n9;
			getValue4.innerText="Prise my (MacBook Pro 16) : Rs: "+n10;
			getValue5.innerText="Prise my (Lenovo ThinkPad X1 Nano) : Rs: "+n11;
			getValue6.innerText="Prise my (LG Gram 17) : Rs: "+n12;
			getValue222.innerText=softAll;

}

//............................................................................................
//............................................................................................
//............................................................................................



function graLapCartAdd(x){

	if(x==13){
		if(categary1>=0 && categary1<3){
			categary1++;
			
			localStorage.setItem('priceGra1',9700.25*categary1);
			
		}
		myClolor(1);
		
	}else if(x==14){
		if(categary2>=0 && categary2<3){
			categary2++;
			
			localStorage.setItem('priceGra2',9700.25*categary2);
			
		}
		myClolor(2);
	}else if(x==15){
		if(categary3>=0 && categary3<3){
			categary3++;
			
			localStorage.setItem('priceGra3',9700.25*categary3);
			
		}
		myClolor(3);
	}else if(x==16){
		if(categary4>=0 && categary4<3){
			categary4++;
			
			localStorage.setItem('priceGra4',9700.25*categary4);
			
		}
		myClolor(4);
	}else if(x==17){
		if(categary5>=0 && categary5<3){
			categary5++;
			
			localStorage.setItem('priceGra5',9700.25*categary5);
			
		}
		myClolor(5);
	}else{
		if(categary6>=0 && categary6<3){
			categary6++;
			
			localStorage.setItem('priceGra6',9700.25*categary6);
			
		}
		myClolor(6);
	}


}
function graLapCartRemove(x){
	if(x==13){
		if(categary1>0 && categary1<=4){
			categary1--;
			
			localStorage.setItem('priceGra1',9700.25*categary1);
			
		}
		myClolor(1);

	}else if(x==14){
		if(categary2>0 && categary2<=4){
			categary2--;
			
			localStorage.setItem('priceGra2',9700.25*categary2);
			
		}
		myClolor(2);
	

	}else if(x==15){
		if(categary3>0 && categary3<=4){
			categary3--;
			
			localStorage.setItem('priceGra3',9700.25*categary3);
			
		}
		myClolor(3);

	}else if(x==16){
		if(categary4>0 && categary4<=4){
			categary4--;
			
			localStorage.setItem('priceGra4',9700.25*categary4);
			
		}
		myClolor(4);

	}else if(x==17){
		if(categary5>0 && categary5<=4){
			categary5--;
			
			localStorage.setItem('priceGra5',9700.25*categary5);
			
		}
		myClolor(5);

	}else{
		if(categary6>0 && categary6<=4){
			categary6--;
			
			localStorage.setItem('priceGra6',9700.25*categary6);
			
		}
		myClolor(6);

	}
}

function MyFile3(){
			n13=localStorage.getItem('priceGra1');
			n14=localStorage.getItem('priceGra2');
			n15=localStorage.getItem('priceGra3');
			n16=localStorage.getItem('priceGra4');
			n17=localStorage.getItem('priceGra5');
			n18=localStorage.getItem('priceGra6');
			nGra=parseFloat(n13)+parseFloat(n14)+parseFloat(n15)+parseFloat(n16)+parseFloat(n17)+parseFloat(n18);

			let printOutputGra1=document.getElementById('graLapBuy1');
			let printOutputGra2=document.getElementById('graLapBuy2');
			let printOutputGra3=document.getElementById('graLapBuy3');
			let printOutputGra4=document.getElementById('graLapBuy4');
			let printOutputGra5=document.getElementById('graLapBuy5');
			let printOutputGra6=document.getElementById('graLapBuy6');
			let printOutputGra=document.getElementById('pii3');
			localStorage.setItem("PrintOutPrice3",nGra);

			printOutputGra1.innerText="Prise my (ASUS ROG Zephyrus G14) : Rs: "+n13;
			printOutputGra2.innerText="Prise my (Acer Aspire 5 A515) : Rs: "+n14;
			printOutputGra3.innerText="Prise my (Huawei MateBook X Pro) : Rs: "+n15;
			printOutputGra4.innerText="Prise my (Acer ConceptD 7) : Rs: "+n16;
			printOutputGra5.innerText="Prise my (Razer Blade 14) : Rs: "+n17;
			printOutputGra6.innerText="Prise my (Microsoft Surface Studio 2) : Rs: "+n18;
			printOutputGra.innerText=nGra;

}

//............................................................................................
//............................................................................................
//............................................................................................


function outPartCartAdd(x){

	if(x==20){
		if(categary1>=0 && categary1<3){
			categary1++;
			
			localStorage.setItem('outPrices1',900.50*categary1);
			
		}
		myClolor(1);
		
	}else if(x==21){
		if(categary2>=0 && categary2<3){
			categary2++;
			
			localStorage.setItem('outPrices2',900.50*categary2);
			
		}
		myClolor(2);
	}else if(x==22){
		if(categary3>=0 && categary3<3){
			categary3++;
			
			localStorage.setItem('outPrices3',900.50*categary3);
			
		}
		myClolor(3);
	}else if(x==23){
		if(categary4>=0 && categary4<3){
			categary4++;
			
			localStorage.setItem('outPrices4',900.50*categary4);
			
		}
		myClolor(4);
	}else if(x==24){
		if(categary5>=0 && categary5<3){
			categary5++;
			
			localStorage.setItem('outPrices5',900.50*categary5);
			
		}
		myClolor(5);
	}else{
		if(categary6>=0 && categary6<3){
			categary6++;
			
			localStorage.setItem('outPrices6',900.50*categary6);
			
		}
		myClolor(6);
	}


}
function outPartCartRemove(x){
	if(x==20){
		if(categary1>0 && categary1<=4){
			categary1--;
			
			localStorage.setItem('outPrices1',900.50*categary1);
			
		}
		myClolor(1);

	}else if(x==21){
		if(categary2>0 && categary2<=4){
			categary2--;
			
			localStorage.setItem('outPrices2',900.50*categary2);
			
		}
		myClolor(2);
	

	}else if(x==22){
		if(categary3>0 && categary3<=4){
			categary3--;
			
			localStorage.setItem('outPrices3',900.50*categary3);
			
		}
		myClolor(3);

	}else if(x==23){
		if(categary4>0 && categary4<=4){
			categary4--;
			
			localStorage.setItem('outPrices4',900.50*categary4);
			
		}
		myClolor(4);

	}else if(x==24){
		if(categary5>0 && categary5<=4){
			categary5--;
			
			localStorage.setItem('outPrices5',900.50*categary5);
			
		}
		myClolor(5);

	}else{
		if(categary6>0 && categary6<=4){
			categary6--;
			
			localStorage.setItem('outPrices6',900.50*categary6);
			
		}
		myClolor(6);

	}
}

function MyFile4(){

			n20=localStorage.getItem('outPrices1');
			n21=localStorage.getItem('outPrices2');
			n22=localStorage.getItem('outPrices3');
			n23=localStorage.getItem('outPrices4');
			n24=localStorage.getItem('outPrices5');
			n25=localStorage.getItem('outPrices6');
			nPart=parseFloat(n20)+parseFloat(n21)+parseFloat(n22)+parseFloat(n23)+parseFloat(n24)+parseFloat(n25);

			let getValueOut1=document.getElementById('PartOutBuy1');
			let getValueOut2=document.getElementById('PartOutBuy2');
			let getValueOut3=document.getElementById('PartOutBuy3');
			let getValueOut4=document.getElementById('PartOutBuy4');
			let getValueOut5=document.getElementById('PartOutBuy5');
			let getValueOut6=document.getElementById('PartOutBuy6');
			let getValueOut=document.getElementById('pii4');
			localStorage.setItem("PrintOutPrice4",nPart);

			getValueOut1.innerText="Prise my (Headphones-Sony) : Rs: "+n20;
			getValueOut2.innerText="Prise my (Monitor-Dell) : Rs: "+n21;
			getValueOut3.innerText="Prise my (Video card) : Rs: "+n22;
			getValueOut4.innerText="Prise my (Printer- HP) : Rs: "+n23;
			getValueOut5.innerText="Prise my (Laser Projector) : Rs: "+n24;
			getValueOut6.innerText="Prise my (Sound Card) : Rs: "+n25;
			getValueOut.innerText=nPart;

}

//............................................................................................
//............................................................................................
//............................................................................................

function IntPartCartAdd(x){

	if(x==20){
		if(categary1>=0 && categary1<3){
			categary1++;
			
			localStorage.setItem('intPrices1',650.50*categary1);
			
		}
		myClolor(1);
		
	}else if(x==21){
		if(categary2>=0 && categary2<3){
			categary2++;
			
			localStorage.setItem('intPrices2',650.50*categary2);
			
		}
		myClolor(2);
	}else if(x==22){
		if(categary3>=0 && categary3<3){
			categary3++;
			
			localStorage.setItem('intPrices3',650.50*categary3);
			
		}
		myClolor(3);
	}else if(x==23){
		if(categary4>=0 && categary4<3){
			categary4++;
			
			localStorage.setItem('intPrices4',650.50*categary4);
			
		}
		myClolor(4);
	}else if(x==24){
		if(categary5>=0 && categary5<3){
			categary5++;
			
			localStorage.setItem('intPrices5',650.50*categary5);
			
		}
		myClolor(5);
	}else{
		if(categary6>=0 && categary6<3){
			categary6++;
			
			localStorage.setItem('intPrices6',650.50*categary6);
			
		}
		myClolor(6);
	}


}
function IntPartCartRemove(x){
	if(x==20){
		if(categary1>0 && categary1<=4){
			categary1--;
			
			localStorage.setItem('intPrices1',650.50*categary1);
			
		}
		myClolor(1);

	}else if(x==21){
		if(categary2>0 && categary2<=4){
			categary2--;
			
			localStorage.setItem('intPrices2',650.50*categary2);
			
		}
		myClolor(2);
	

	}else if(x==22){
		if(categary3>0 && categary3<=4){
			categary3--;
			
			localStorage.setItem('intPrices3',650.50*categary3);
			
		}
		myClolor(3);

	}else if(x==23){
		if(categary4>0 && categary4<=4){
			categary4--;
			
			localStorage.setItem('intPrices4',650.50*categary4);
			
		}
		myClolor(4);

	}else if(x==24){
		if(categary5>0 && categary5<=4){
			categary5--;
			
			localStorage.setItem('intPrices5',650.50*categary5);
			
		}
		myClolor(5);

	}else{
		if(categary6>0 && categary6<=4){
			categary6--;
			
			localStorage.setItem('intPrices6',650.50*categary6);
			
		}
		myClolor(6);

	}
}

function MyFile5(){

			n20=localStorage.getItem('intPrices1');
			n21=localStorage.getItem('intPrices2');
			n22=localStorage.getItem('intPrices3');
			n23=localStorage.getItem('intPrices4');
			n24=localStorage.getItem('intPrices5');
			n25=localStorage.getItem('intPrices6');
			nPart=parseFloat(n20)+parseFloat(n21)+parseFloat(n22)+parseFloat(n23)+parseFloat(n24)+parseFloat(n25);

			let getValueInt1=document.getElementById('PartIntBuy1');
			let getValueInt2=document.getElementById('PartIntBuy2');
			let getValueInt3=document.getElementById('PartIntBuy3');
			let getValueInt4=document.getElementById('PartIntBuy4');
			let getValueInt5=document.getElementById('PartIntBuy5');
			let getValueInt6=document.getElementById('PartIntBuy6');
			let getValueInt=document.getElementById('pii5');
			localStorage.setItem("PrintOutPrice5",nPart);

			getValueInt1.innerText="Prise my (Cavn Pen Light) : Rs: "+n20;
			getValueInt2.innerText="Prise my (Microphone) : Rs: "+n21;
			getValueInt3.innerText="Prise my (Eyoyo-Barcode Scanner) : Rs: "+n22;
			getValueInt4.innerText="Prise my (Razer Pro Type Ultra-keyborad) : Rs: "+n23;
			getValueInt5.innerText="Prise my (Scanner-Fujitsu ScanSnap iX1600 ) : Rs: "+n24;
			getValueInt6.innerText="Prise my (Razer Viper V2 Pro-mouse) : Rs: "+n25;
			getValueInt.innerText=softAll;

}

//............................................................................................
//............................................................................................
//............................................................................................

function ModPartCartAdd(x){

	if(x==20){
		if(categary1>=0 && categary1<3){
			categary1++;
			
			localStorage.setItem('modPrices1',530.10*categary1);
			
		}
		myClolor(1);
		
	}else if(x==21){
		if(categary2>=0 && categary2<3){
			categary2++;
			
			localStorage.setItem('modPrices2',530.10*categary2);
			
		}
		myClolor(2);
	}else if(x==22){
		if(categary3>=0 && categary3<3){
			categary3++;
			
			localStorage.setItem('modPrices3',530.10*categary3);
			
		}
		myClolor(3);
	}else if(x==23){
		if(categary4>=0 && categary4<3){
			categary4++;
			
			localStorage.setItem('modPrices4',530.10*categary4);
			
		}
		myClolor(4);
	}else if(x==24){
		if(categary5>=0 && categary5<3){
			categary5++;
			
			localStorage.setItem('modPrices5',530.10*categary5);
			
		}
		myClolor(5);
	}else{
		if(categary6>=0 && categary6<3){
			categary6++;
			
			localStorage.setItem('modPrices6',530.10*categary6);
			
		}
		myClolor(6);
	}


}
function ModPartCartRemove(x){
	if(x==20){
		if(categary1>0 && categary1<=4){
			categary1--;
			
			localStorage.setItem('modPrices1',530.10*categary1);
			
		}
		myClolor(1);

	}else if(x==21){
		if(categary2>0 && categary2<=4){
			categary2--;
			
			localStorage.setItem('modPrices2',530.10*categary2);
			
		}
		myClolor(2);
	

	}else if(x==22){
		if(categary3>0 && categary3<=4){
			categary3--;
			
			localStorage.setItem('modPrices3',530.10*categary3);
			
		}
		myClolor(3);

	}else if(x==23){
		if(categary4>0 && categary4<=4){
			categary4--;
			
			localStorage.setItem('modPrices4',530.10*categary4);
			
		}
		myClolor(4);

	}else if(x==24){
		if(categary5>0 && categary5<=4){
			categary5--;
			
			localStorage.setItem('modPrices5',530.10*categary5);
			
		}
		myClolor(5);

	}else{
		if(categary6>0 && categary6<=4){
			categary6--;
			
			localStorage.setItem('modPrices6',530.10*categary6);
			
		}
		myClolor(6);

	}
}

function MyFile6(){

			n20=localStorage.getItem('modPrices1');
			n21=localStorage.getItem('modPrices2');
			n22=localStorage.getItem('modPrices3');
			n23=localStorage.getItem('modPrices4');
			n24=localStorage.getItem('modPrices5');
			n25=localStorage.getItem('modPrices6');
			nPart=parseFloat(n20)+parseFloat(n21)+parseFloat(n22)+parseFloat(n23)+parseFloat(n24)+parseFloat(n25);
			localStorage.setItem("PrintOutPrice6",nPart);


			let getValueMod1=document.getElementById('PartModBuy1');
			let getValueMod2=document.getElementById('PartModBuy2');
			let getValueMod3=document.getElementById('PartModBuy3');
			let getValueMod4=document.getElementById('PartModBuy4');
			let getValueMod5=document.getElementById('PartModBuy5');
			let getValueMod6=document.getElementById('PartModBuy6');
			let getValueMod=document.getElementById('pii6');

			getValueMod1.innerText="Prise my (PHANTEKS NEON DIGITAL-RGB) : Rs: "+n20;
			getValueMod2.innerText="Prise my (rgb fans) : Rs: "+n21;
			getValueMod3.innerText="Prise my (Microsoft 365) : Rs: "+n22;
			getValueMod4.innerText="Prise my (BLUETOOTH AUDIO SYSTEM) : Rs: "+n23;
			getValueMod5.innerText="Prise my (Adobe products) : Rs: "+n24;
			getValueMod6.innerText="Prise my (laptop stand-Best Overall) : Rs: "+n25;
			getValueMod.innerText=nPart;

}



//............................................................................................
//............................................................................................
//............................................................................................




function calPrice(){
	let inAll1=localStorage.getItem('PrintOutPrice1');
	let inAll2=localStorage.getItem('PrintOutPrice2');
	let inAll3=localStorage.getItem('PrintOutPrice3');
	let inAll4=localStorage.getItem('PrintOutPrice4');
	let inAll5=localStorage.getItem('PrintOutPrice5');
	let inAll6=localStorage.getItem('PrintOutPrice6');

	let PrintOutPrice=parseFloat(inAll6)+parseFloat(inAll1)+parseFloat(inAll2)+parseFloat(inAll3)+parseFloat(inAll4)+parseFloat(inAll5);
	
	document.getElementById('CalPrint').innerText="you a online shopping Total Price is : RS."+PrintOutPrice;



}