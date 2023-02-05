
let data = {}

 $.ajax({

    url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    type: 'GET',
    data: data,
    success: function(data){
        console.log(data);
        $(".js-explanation").text(data.explanation);
        $(".js-date").text(data.date);
        $(".js-title").text(data.title);
        
    },
    error: function(){
        console.log("Error");
    }
});


