// JavaScript Document
// Renee morales  reneemorales.com

$(document).ready(function(e) {
    
	
	
	/* open close  help form*/
	$('.help-open').click(function(e) {
        e.preventDefault();
		$('.help-form').show();
    });
	$('.help-close').click(function(e) {
        e.preventDefault();
		$('.help-form').hide();
    });
	
	/*table*/
	
		$('#table tr').addClass('hide');
		$('#table tr').eq(0).removeClass('hide');
		$('#table tr').eq(1).removeClass('hide');
		show_rows('#table-data')
	
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
	
	$('.more-rows').click(function(e) {
		e.preventDefault();
        show_rows('#table-data');
    });
	
	$('.info').click(function(e) {
		e.preventDefault();
        
		$('body').append('<div class="overlay"></div>');
		
		
    });
	
	
	
	
	
});
function show_rows(id)
{
	var num=parseInt($(id).attr('data-num'));
for(i=0; i<num;i++){
	$(id+' .hide').eq(0).removeClass('hide').addClass('show');
}
	
}
