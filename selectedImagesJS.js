$(document).ready(function(){
	var imgProp = {
	  'padding': '3px',
	  'backgroundColor': '#eded01',
	  'borderSize': '1ps',
	  'borderStyle': 'dashed',
	  'borderColor': '#0001fe'
	};

	function highlightImg(){
	//grabs the images from html
		var allImgs = $('.recipeSeven');

	//lengths over all the images
		var nrallImgs = allImgs.length;

	//looping over all of the images
		for (var i = 0; i < nrallImgs; i++){
			allImgs[i].onclick = function(){
				if(this.style.borderStyle == imgProp.borderStyle){
					this.style.padding = 'auto';
					this.style.background = 'none';
					this.style.border = 'none';
				} else {
					this.style.padding = imgProp.padding;
					this.style.backgroundColor = imgProp.backgroundColor;
					this.style.borderSize = imgProp.borderSize;
					this.style.borderStyle = imgProp.borderStyle;
					this.style.borderColor = imgProp.borderColor;
				}
			}
		}
	}
	highlightImg();
});








