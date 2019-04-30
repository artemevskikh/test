function Country(name, traveled) {  
    this.name = name ? name : 'United Kingdom';
    this.traveled = Boolean(traveled); // transform to a boolean
 }
 Country.prototype.travel = function() {  
   this.traveled = true;
 };
 // Constructor invocation
 var france = new Country('France', false);  
 // Constructor invocation
 var unitedKingdom = new Country;
 
 console.log(france.travel()); // Travel to France