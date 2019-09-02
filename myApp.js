angular.module('myApp', [])
	.controller('madlibsController', function($scope) {

		//set ng-init to pass selected gender options and pronouns for mad lib story
	  $scope.init = function(gens) {
	  	$scope.gen_options = [
	  	{
	  		gen_descrip: 'Women', 
	  		icon_class: '',
	  		division_id: '5360', 
	  		tracking: 'W_0'
	  	}, 
	  	{
	  		gen_descrip: 'WomenPlus', 
	  		icon_class: '',
	  		division_id: '5155', 
	  		tracking: 'WP_0'
	  	},
	  	{
	  		gen_descrip: 'Maternity', 
	  		icon_class: '',
	  		division_id: '5155', 
	  		tracking: 'MAT_0'
	  	},
	  	{
	  		gen_descrip: 'Men', 
	  		icon_class: '',
	  		division_id: '5155', 
	  		tracking: 'M_0'
	  	},
	  	{
	  		gen_descrip: 'Girls', 
	  		icon_class: '',
	  		division_id: '5155', 
	  		tracking: 'G_0'
	  	},
	  	{
	  		gen_descrip: 'Boys', 
	  		icon_class: '',
	  		division_id: '5155', 
	  		tracking: 'B_0'
	  	},
	  	{
	  		gen_descrip: 'Toddler', 
	  		icon_class: '',
	  		division_id: '5155', 
	  		tracking: 'TG_0'
	  	},
	  	{
	  		gen_descrip: 'Baby', 
	  		icon_class: '',
	  		division_id: '5155', 
	  		tracking: 'BG_0'
	  	}];
	  	// set the chosen gender to either of the first values 
	  	$scope.selected_gen_option = $scope.gen_options[0];
	  };

	  // show form; set nghide to false
	  $scope.formInputs = false;
	  // hide generated mad lib story; set nghide to true 
	  $scope.showLibs = true;

	  $scope.submit = function() {
	  	var validForm 			= $scope.madlibForm.$valid;
	  	var validMcmNumber	    = $scope.madlibForm.mcm_number.$dirty;
	  	var validAltText1	    = $scope.madlibForm.alt_text1.$dirty;
	  	var validAltText2	    = $scope.madlibForm.alt_text2.$dirty;
	  	var validAltText3	    = $scope.madlibForm.alt_text3.$dirty;
	  	var validAltText4	    = $scope.madlibForm.alt_text4.$dirty;
	  	var validAsset1 	    = $scope.madlibForm.asset_name1.$dirty;
	  	var validAsset2 		= $scope.madlibForm.asset_name2.$dirty;
	  	var validAsset3 		= $scope.madlibForm.asset_name3.$dirty;
	  	var validAsset4 		= $scope.madlibForm.asset_name4.$dirty;
	  	var validSvgoverlay1 	= $scope.madlibForm.svgoverlay_name1.$dirty;
	  	var validSvgoverlay2    = $scope.madlibForm.svgoverlay_name2.$dirty;
	  	var validSvgoverlay3 	= $scope.madlibForm.svgoverlay_name3.$dirty;
	  	var validSvgoverlay4 	= $scope.madlibForm.svgoverlay_name4.$dirty;
	  	var validLink1 	        = $scope.madlibForm.link_url1.$dirty;
	  	var validLink2    		= $scope.madlibForm.link_url2.$dirty;
	  	var validLink3 			= $scope.madlibForm.link_url3.$dirty;
	  	var validLink4 			= $scope.madlibForm.link_url4.$dirty;

	  // if form fields are filled in and pass HTML5 validation, they are set to true
	  if(validForm || validMcmNumber || validAltText1 || validAltText2 || validAltText3 || validAltText4 || validAsset1 || validAsset2 || validAsset3 || validAsset4 || 
   		svgoverlay_name1 || svgoverlay_name2 || svgoverlay_name3 || svgoverlay_name4 ||  
   		validLink1 || validLink2 || validLink3 || validLink4 || validLink) {
	  		//hide form when fields are valid; set nghide to true
	  		$scope.formInputs = true;
	  		//show mad lib story; set nghide to false
	  		$scope.showLibs = false;
	  	}
	  };

		// on click hide mad lib story, show inputs with reset fields
		$scope.startOver = function() {
			// show form fields; set nghide to false
			$scope.formInputs = false;
			// hide mad lib story; set nghide to true
			$scope.showLibs = true;	
			// clear gender radio buttons
			$scope.selected_gen_option = false;
		};

	});

