// JavaScript Document
// Renee morales  reneemorales.com

$(document).ready(function(e) {
    
	
	
	$('.tabs-links').click(function(e) {
        e.preventDefault();
		$('.tabs-links').removeClass('active');
		$(this).addClass('active');
		var id=$(this).attr('href');
		$('.tab-content-data').hide();
		
		$(id).show();
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
		$('.tab-content-data table tbody tr').eq(0).removeClass('hide');
		$('.tab-content-data table tbody tr').eq(1).removeClass('hide');
		$('.tab-content-data table tbody tr').eq(2).removeClass('hide');
		$('.tab-content-data table tbody tr').eq(3).removeClass('hide');
		$('.tab-content-data table tbody tr').eq(4).removeClass('hide');
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
