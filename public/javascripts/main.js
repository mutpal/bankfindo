(function () {
	
    let getIfsc = document.querySelector(".searchTerm");
  	
    getIfsc.addEventListener("focus",function () {
    		console.log("clicked");
    		getIfsc.placeholder=" ";
    }); 
    getIfsc.addEventListener("blur",function () {
    		console.log("clicked");
    		getIfsc.placeholder="Search Ifsc example ICIC000XXX";
    });

    getIfsc.addEventListener('keypress', function (e) {
    let searchedIfscUrl = `/${document.querySelector(".searchTerm").value}`;
    let key = e.which || e.keyCode;
    if (key === 13) { 
    	console.log(searchedIfscUrl);
    	window.location=searchedIfscUrl;
      
    }
});

})();