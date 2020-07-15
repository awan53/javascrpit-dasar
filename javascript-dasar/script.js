//console.log("Test Gunawan")
/*variabel*/
//document.getElementById('heading').innerHTML = "Hello WOrd"


//var nama_depan= "Muhammad";
//var nama_belakang = "Gunawan";
//var umur = 26;
//var nama_panjang = nama_depan + ' ' + nama_belakang;

//var job = "masih mencari"
//var fullname = true;

//var bio = "Nama Saya "+ nama_depan +" "+ nama_belakang + " " + " Umur Saya " + " " + umur + " " + " Apa Kah Kamu Sudah Bekerja " + job;

//console.log(bio);

//console.log(nama_depan);
//console.log(nama_belakang);
//console.log(umur);
//console.log(nama_panjang);

/*operator*/

/* var x = 5;
var z = 7;
var t = x+z;
console.log(t); */

/* var x = 10;
x += 5;
console.log(x); */

/* text1 = "Muhammad";
text2 = "Gunawan";
text3 = text1 + " " +text2;
console.log(text3); */

/* x = 5 + 5;
y = "5" + 5;
z = "Hello" + 5;
console.log(x);
console.log(y);
console.log(z); */ 

/*
var name = "Muhammd Gunawan";
var age = 25;
var adult = "yes";

if (adult == 'no') {
	console.log(name + " you very Adult");
} else {
	console.log("I hope he mature soon");
}
*/

/*
var job = "writer content";

job = prompt("apa Pekerjaan mu gunawan");

switch(job){
	case 'writer content':
		console.log("Gunawan sebagai writer content");
		break;
	case 'polisi':
		console.log("Gunawan tidak menjadi polisi");
		break;
	case 'marketing':
		console.log("Gunawan tidak jago dengan promosi");
		break;
	case 'driver':
		console.log("Gunawan pernah menjadi ojol beberapa tahun lalu");
		break;
	default:
		console.log("Gunawan pengangguran tidak berguna");

}

*/
/*
var name =  "Awan"
function test(){
	console.log(name)
}

test(name);
*/


/*
function test(name, age){
	console.log(name + '' + age)
}

test("Gunawan ", 26);
test("Etsa ", 26);
test("Dewi ", 6);
*/

/*
function tambah(satu, dua){
	return satu + dua;
}

console.log(tambah(5, 10));
*/

/*
function yo(name, age){
	if (age > 35) {
		return name + ', you very old';
	} else if (age > 25) {
		return name + ', you are an adult';
	} else {
		return name + ', you are an young';
	}
}
var nama = yo('Gunawan', 40);
console.log(nama);
*/

/*
function coba(a, b){
	return a + b;
}

var cobi = coba("Gunawan", " Is Kulemek");
console.log(cobi);

document.getElementById("Element").innerHTML = cobi;
alert(cobi);
*/

/*----------------------------------
statement dan expression di dalam JS
----------------------------------*/

/*
//statement
function myFunc(){

}

//statement

if (x==5 ) {

} 
//expression

3 + 4;
var x = 3 ;

*/


/*----------------------------------
JS Arrays
----------------------------------*/

//var name = "Joni";
//var LastName = "Gidel";

//var name2 = ["Joni", "Gidel", 1940, "Kepala Cabang"];

/* cara panggil Array */

//console.log(name2);
//console.log(name2[0]);
//console.log(name2[3]);

/* mutation mengganti data yang sudah ada dan di rubah*/
//name2[1] = 'oke';
//name2[2] = 1978
//console.log(name2);

/* push menambahkan data ke belakang*/
//name2.push('Hijau');
//console.log(name2);
 
//unshift menambahkan data di depan 
//name2.unshift('Bapake');
//console.log(name2);

//pop untuk mengapus data di belakang
//name2.pop();
//console.log(name2);

//shift untuk mengapus data yang di depan
//name2.shift();
//console.log(name2);

/*----------------------------------
JS Object
----------------------------------*/

/*
var car = {
	color: 'red',
	year: 2013,
	drive: function(){return 'drive'}
};
*/

//array
/* var shopList = [
	'Apple',
	'Orange',
	'Pear'
] */

/*----------------------------------
JS Object menyisipi objek dan array
----------------------------------*/

/*
var mio_m3 = {
	merek: "Yamaha",
	speed: 180,
	engine: {
		mesin: 150,
		model: "150 CC",
		tahun: [
		'2015',
		{make: 'Jepan'},
		{make: 'China'}
		],
	},

	drive: function() {return 'drive'}
}; 


var array = [
'string',
1000,
[true, 100],
{name : 'john'},
function() {return 'drive';}
];
*/


/*----------------------------------
mengakses object dan array
----------------------------------*/

var mio_m3 = {
	merek: "Yamaha",
	speed: 180,
	engine: {
		mesin: 150,
		model: "150 CC",
		tahun: [
		'2015',
		{make: 'Jepan'},
		{make: 'China'}
		],
	},

	drive: function() {return 'drive'}
}; 


var array = [
'string',
1000,
[true, 100],
{name : 'john'},
function() {return 'drive';}
];


console.log(mio_m3.merek);
console.log(mio_m3.speed);
console.log(mio_m3.engine);

