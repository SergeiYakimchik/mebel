define(['appModule'], function(RMT)
{
	RMT.lazy.service('AlertService', 
	[
	 	function(){
	 	
	 		var show = function(msg) {
				$('#alertMessage').html(msg);
				$('#alertMessage').css('display','inline-block');
				$('#alertMessage').show();
				setTimeout(function() { 
					hide(); }, 1500);
			};
			
			var hide = function() {
				$('#alertMessage').hide();
				$('#alertMessage').css('display','none');
			};
	 		
	 		
	 		return {
	 			show : function(msg) {
	 				return show(msg);
	 			}
	 		};		
	 	}
	]);
});