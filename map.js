L.mapbox.accessToken = 'pk.eyJ1IjoiaGllcm9waGFudCIsImEiOiJOZFFjY3VZIn0.TQe-r6X27L-ZpL3aO8SmHw';

 	/* הגדרת גבולות למפה במידת הצורך */
 	var southWest = L.latLng(-300, -300), 			// southWest bound
    northEast = L.latLng(300, 300),					// northEast bound
    bounds = L.latLngBounds(southWest, northEast);	// maxBounds: bounds
 
var map = L.mapbox.map('map', 'hierophant.mfj75eac', { maxBounds: bounds, maxZoom: 6, minZoom: 2} );
    map.setView([9, 69], 2);	
	map.bounceAtZoomLimits = false;		
var myLayer = L.mapbox.featureLayer().addTo(map);

/* creating every marker object */
var geoJson = [

	{//	marker for mongolia //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [103.8347844,46.8651082]},
	"id": "1",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/fire.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "1",
         }
      }
	},
	{//	marker for aborigin //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [148.88671875,-33.28461996888768 ]},
	"id": "2",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20,60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "0",
        }
     }
	},
	{//	marker for ainu //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [150.027149,45.918962]},
	"id": "3",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "2",
        }
     }
	},	
	{//	marker for apache //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-106.618065,36.870836]},
	"id": "4",
	"g":"1",
    "properties": {    
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "1",
        }
     }
	},
	{//	marker for cherokee //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-84.916614,32.370160]},
	"id": "5",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "7",
        }
     }
	},
	{//	marker for chinese //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [97.422186,34.810247]},
	"id": "6",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "3",
        }
     }
	},
	{//	marker for digueno //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-115.917894,31.081831]},
	"id": "7",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "3",
        }
     }
	},
	{//	marker for egypt //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [31.132056,29.980071]},
	"id": "8",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "5",
        }
     }
	},
	{//	marker for greece //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [24.916122,37.815887]},
	"id": "9",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "5",
        }
     }
	},
	{//	marker for hawaii //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-155.826000,20.038533]},
	"id": "10",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "9",
        }
     }
	},
	{//	marker for heba //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [44.926853,33.891770]},
	"id": "11",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "6",
        }
     }
	},
	{//	marker for hebb //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [34.920057,31.876719]},
	"id": "12",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "6",
        }
     }
	},
	{//	marker for hopi //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-110.941650,34.254482]},
	"id": "13",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/fire.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "11",
        }
     }
	},
	{//	marker for hungary //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [29.685831,46.732909]},
	"id": "14",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "7",
        }
     }
	},
	{//	marker for igorot //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [121.155082,17.251306]},
	"id": "15",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "6",
        }
     }
	},
	{//	marker for inca //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-76.847972,-12.193166]},
	"id": "16",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "7",
        }
     }
	},
	{//	marker for india //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [75.648361,30.869234]},
	"id": "17",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/fire.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "8",
        }
     }
	},
	{//	marker for japan //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [140.608168,40.996479]},
	"id": "18",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "1",
        }
     }
	},
	{//	marker for kono //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-11.003666,8.676395]},
	"id": "19",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "5",
        }
     }
	},
	{//	marker for maori //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [176.104232,-38.681799]},
	"id": "20",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "7",
        }
     }
	},
	{//	marker for menominee //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-87.685248,45.134306]},
	"id": "21",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "4",
        }
     }
	},
	{//	marker for miqmak //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-60.668799,54.409514]},
	"id": "22",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "4",
        }
     }
	},
	{//	marker for mossi //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-1.610612,12.553055]},
	"id": "23",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/Fire.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "11",
        }
     }
	},
	{//	marker for navajo //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-110.003359,37.001711]},
	"id": "24",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "7",
        }
     }
	},
	{//	marker for norse //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [15.522288,58.332133]},
	"id": "25",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "1",
        }
     }
	},
	{//	marker for patawatomi //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-90.766063,46.372568]},
	"id": "26",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/Fire.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "3",
        }
     }
	},
	{//	marker for seneca //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-79.024420,41.293024]},
	"id": "27",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "7",
        }
     }
	},
	{//	marker for serer //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [13.5024,-14.8263]},
	"id": "28",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "11",
        }
     }
	},
	{//	marker for sikh //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [80.654328,18.872922]},
	"id": "29",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "5",
        }
     }
	},
	{//	marker for slavic //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [30.5326905,50.4020355]},
	"id": "30",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "7",
        }
     }
	},
	{//	marker for summerian //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [45.033108,31.911950]},
	"id": "31",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "5",
        }
     }
	},
	{//	marker for thiti //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-149.484150,-17.633291]},
	"id": "32",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "10",
        }
     }
	},
	{//	marker for viracocha //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-69.3162,-15.9022]},
	"id": "33",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "5",
        }
     }
	},
	{//	marker for wicitha //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-102.781751,38.480523]},
	"id": "34",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "1",
        }
     }
	},
	{//	marker for yokut //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-117.167135,33.525765]},
	"id": "35",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/water.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "4",
        }
     }
	},
	{//	marker for yourba //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [4.566667,7.466667]},
	"id": "36",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "9",
        }
     }
	},
	{//	marker for zimbabwe //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [30.815661,-17.917752]},
	"id": "37",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/air.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "11",
        }
     }
	},
	{//	marker for zulu //
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [31.108829,-28.356183]},
	"id": "38",
	"g":"1",
    "properties": {
		"icon": {
            "iconUrl": "img/earth.png",
            "iconSize": [40, 70], // size of the icon
            "iconAnchor": [20, 60], // point of the icon which will correspond to marker's location
            "popupAnchor": [0,0], // point from which the popup should open relative to the iconAnchor
            "className": "11",
        }
     }
	}
];


/* creating the side story window */
myLayer.on('click', function(e) {
  var marker = e.layer, feature = marker.feature;
	var the_id = feature.id;
	var xmlhttp = new XMLHttpRequest();
	var url = "events.json";
	xmlhttp.onreadystatechange=function() {
    	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    		var arr = JSON.parse(xmlhttp.responseText);
   			var i;
    		var out = "";
    		for(i = 0; i < arr.length; i++) {
    			
    			if(arr[i].id == the_id){
    				 document.getElementById("storybox").style.zIndex = "3";
    				 document.getElementById("times").style.left = "500px";
    				 document.getElementById("storybox").innerHTML = "<img src="+ arr[i].img+ ">"
    				  +"<h2>"+ arr[i].name + "</h2><br>"
					  +"<h3>"+ arr[i].koteret3 + "</h3>"
    				  +"<p class=\"paraText\">" + arr[i].description + "</p><br>"		  
    				  +"<img src="+ arr[i].imgChar+ ">"
    				  +"<h4>"+ arr[i].charName + "</h4><br>"
    				  +"<p class=\"charText\">" + arr[i].chara + "</p><br>"
    				  +"<button onclick=\"close_button()\">"  + "</button>";	  
				}
    		}	
    	}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
});

/* closing the story window */
function close_button(){
    	document.getElementById("storybox").style.zIndex = "0";
    	document.getElementById("times").style.left = "700px";
}

/* setting the markers on the screen */
myLayer.on('layeradd', function(e) {
    var marker = e.layer, feature = marker.feature;
	var the_id = feature.id;
	if(feature.properties.icon.className == getParameterByName("group")){
		marker.setIcon(L.icon(feature.properties.icon));
	}
	
});

function changeColor(value) {
	window.location = value
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Add features to the map
myLayer.setGeoJSON(geoJson);
