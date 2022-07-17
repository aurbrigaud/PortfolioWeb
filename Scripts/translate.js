function Translate() { 
	//initialization
	this.init =  function(attribute, lng){
		this.attribute = attribute;
		this.lng = lng;	
	}
	//translate 
	this.process = function(){
		_self = this;
		var xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "scripts/lng/"+this.lng+".json", false);
        print("hello1");
        print("lng/"+this.lng+".json");
        print(xrhFile);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
                print(xrhFile.status)

				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
                    print("hello3")

					var LngObject = JSON.parse(xrhFile.responseText);
					var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key != null) {
							elem.innerHTML = LngObject[key]  ;
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }
}