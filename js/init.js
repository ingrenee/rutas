// JavaScript Document
// Renee morales  reneemorales.com

$(document).ready(function(e) {
    
	
	/*tabs de home*/
	$('.tabs-links').click(function(e) {
        e.preventDefault();
		$('.tabs-links').removeClass('active');
		$(this).addClass('active');
		var id=$(this).attr('href');
		$('.tab-content-data').hide();
		
		$(id).show();
    });
	
	
	
	/* tabs info*/
		$('.tabs-info a').click(function(e) {
        e.preventDefault();
		$('.tabs-info a').removeClass('active');
		$(this).addClass('active');
		var id=$(this).attr('href');
		$('.tab-info').hide();
		$(id).show();
    });
	
		$('.control.next').click(function(e) {
        e.preventDefault();
		
		pos=$(".tabs-info a:last-child").attr('data-pos');
		pos2=$(".tabs-info a.active").attr('data-pos');
		if(parseInt(pos)!= parseInt(pos2)){
		
		var tmp=$('.tabs-info a.active').next().addClass('temp');
		$('.tabs-info a').removeClass('active');
		$('.tabs-info a.temp').addClass('active').removeClass('temp');
		var id=$('.tabs-info a.active').attr('href');
		$('.tab-info').hide();
		$(id).show();
		}
    });
	
	
	$('.control.prev').click(function(e) {
        e.preventDefault();
		
		pos=$(".tabs-info a.active").attr('data-pos');
		if(parseInt(pos)>1){
		var tmp=$('.tabs-info a.active').prev().addClass('temp');
		$('.tabs-info a').removeClass('active');
		$('.tabs-info a.temp').addClass('active').removeClass('temp');
		var id=$('.tabs-info a.active').attr('href');
		if(typeof id !== "undefined"){
		$('.tab-info').hide();
		$(id).show();
		}
		}
		
    });
	
	
	
	
	/* open close  help form*/
	$('.help-open').click(function(e) {
        e.preventDefault();
		$('.help-form').show();
    });
	
	$('.help-close').click(function(e) {
        e.preventDefault();
		$('.help-form').hide();
    });
	
	$('.feedback').click(function(e) {
     	//  var val=$("input[type='radio'][name='feedback']:checked").val();
		// alert(val);
		$('.feedback_content').hide();
		var id=$(this).attr('data-target');
		$('#'+id).show();
		
		
    });
	
	
	/*table*/
	
		$('.tab-content-data table tbody tr').addClass('hide');


		show_rows('.table-data');
	
	/* select all*/
	
	$('.select-all').change(function(e) {
        if($(this).is(':checked'))
		{
			console.log('checked');
			$('#'+$(this).attr('data-target')+' input[type="checkbox"]').each(function(index, element) {
                
				$(element).data("checked",2)
				$(element).prop("indeterminate", false);
				$(element).prop('checked',true);
            });
			
			}
			else
			{
							console.log('des-checked');
				$('#'+$(this).attr('data-target')+' input[type="checkbox"]').each(function(index, element) {

$(element).data("checked",0);
							//	$(element).prop("indeterminate", true)
                $(element).prop('checked',false);

            });
				}
    });
	
	/*$('.more-rows').click(function(e) {
		e.preventDefault();
        //show_rows('#table-data');
    });
	*/
	/*$('.info').click(function(e) {
		e.preventDefault();
        
		$('body').append('<div class="overlay"></div>');
		
		
    });
	*/
	
	
	
	
});
function show_rows(id)
{
$(id).each(function(index, element) {
    
		var num=parseInt($(this).attr('data-num'));
	
for(i=0; i<num;i++){
	$(this).find('.hide').eq(0).removeClass('hide').addClass('show');
}
});

	
}
