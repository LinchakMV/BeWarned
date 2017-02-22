$.get({
            url: 'http://504080.com/api/v1/services/categories',
            headers: { 'Authorization': 'ddbe04649e9d07ce624365d19b0f77805b4f9754' },
            beforeSend: function() { $('.loader').show(); },
            error:function(xhr) {                     
                    if(xhr.status === 401){
                      $('#myModal').modal('show');
                      $('.error_one').removeClass('hide');
                    }
                    else if (xhr.status === 500){
                        $('#myModal').modal('show');
                        $('.error_two').removeClass('hide');
                    };
                    },
            complete: function() { $('.loader').hide(); },
            success: function(response) { $.each(response.data, function(index, value) {
                $(function (){
                    var a = value.title;
                    var b = value.icon;
                        $(".center-content").append('<div class="block"><a href="#"><div><img src="http:'+b+'"></div><p>'+a+'</p></a></div>');

                    });

                });
            } 
        });