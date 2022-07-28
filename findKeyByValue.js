const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  const findKeyByValue = function (object,selectedValue) {
        for (const [key,value] of Object.entries(object)) {
            if (selectedValue === value) {
                return key
    
            }
        }
      
  }
console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"))