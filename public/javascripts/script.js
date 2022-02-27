$(document).ready( ()=>{
    alert('application started');  

    
    if(window.location.pathname == "/landing"){
        $ondelete = $("#deleteLanding .modal-footer button.delete ");
        $ondelete.click(function(){
            var id = $(this).attr("data-id")

            var request = {
                "url" : `http://localhost:3000/landing/delete/${id}`,
                "method" : "post"
            }

            if(confirm("Do you really want to delete this record?")){
                $.ajax(request).done(function(response){
                    alert("Data Deleted Successfully!");
                    location.reload();
                })
            }

        })
    }

    // getdata();  

    // $('.addLanding').click( () => {
    //     var d_name = $("#d_name").val();
    //     var p_ame  = $('#p_ame').val();
    //     var short_desc = $('#short_desc').val();
    //     // var img = $('#img');

    //     $.ajax({
    //         url: '/landing/create',
    //         method: 'post',
    //         dataType: 'json',
    //         data:{
    //             'd_name': d_name,
    //             'p_ame': p_ame,
    //             'short_desc': short_desc,
    //             'img': img
    //         },
    //         success: function (data) {
    //             var x = JSON.stringify(data);
    //             alert(x)
    //         },

    //         // Error handling 
    //         error: function (error) {
    //             console.log(`Error ${error}`);
    //         }
            
    //     })
    // })

    // function getdata(){  
    //     $.ajax({  
    //         url:'/landing',  
    //         method:'get',  
    //         dataType:'json',  
    //         success:function(response){  
    //                 if(response.msg=='success'){  
    //                     $('tr.taskrow').remove()  
    //                     if(response.data==undefined || response.data==null || response.data==''){  
    //                         $('.tblData').hide();  
    //                     }else{  
    //                         $('.tblData').show();  
    //                     $.each(response.data,function(index,data){  
    //                         var url = url+data._id;  
    //                         index+=1;  
    //             $('tbody').append("<tr class='taskrow'><td>"+ index +"</td><td>"+data.displayName+"</td><td>"+"<button class='del' value='"+data._id+"'>delete</button>"+"</td></tr>");   
    //                     });  
    //                 }  
    //             }  
    //         },  
    //         error:function(response){  
    //             alert('server error');  
    //         }  
    //     });  
    // }  

})