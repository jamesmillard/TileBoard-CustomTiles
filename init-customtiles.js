<!-- At a minimum a type needs to be defined for our tile -->
TYPES.EXAMPLE='example';

<!-- If we want to be able to click on our tile -we need to define a function for it -->
entityClickAddFunction(TYPES.EXAMPLE, function(item,entity) {alert("You have clicked on the Example tile.")});

TYPES.PHONE='phone';
entityClickAddFunction(TYPES.PHONE, function(item,entity) {alert(item)});
