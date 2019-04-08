// Challenge 1
let s = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents(arr){
	for (i = 0; i < arr.length; i++){
		console.log("Name: "+ arr[i].name + ", Cohort: "+ arr[i].cohort);
	}
}

printStudents(s);

//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function process_users(users){
 	console.log(users);
 	let employees = [];
 	let managers = [];
 	let sum = 0;
 	employees = users.employees;

 	console.log("EMPLOYEES");
 	let lname = "";
 	let fname = "";
 	let index = 1;
 	for (i = 0; i < employees.length; i++){
 		lname = employees[i].last_name;
 		fname = employees[i].first_name;
 		sum += lname.length;
 		sum += fname.length;
 		index = i+ 1;
 		console.log(index+" - "+lname+ ", " +fname+ " - "+sum);
 		sum = 0;
 	}
 	managers = users.managers;
 	console.log("MANAGERS");
 	for (i = 0; i < managers.length; i++){
 		lname = managers[i].last_name;
 		fname = managers[i].first_name;
 		sum += lname.length;
 		sum += fname.length;
 		index = i+1;
 		console.log(index+" - "+lname+ ", " +fname+ " - "+sum);
 		sum = 0;
 	}
 }

 process_users(users);