$(()=>{

    // charge information into a table
    // is not posible to uso a flecha function with this kind of object
    // but, is not neccesary to use a promise with this query
    $("#product_list").DataTable({
        "ajax":{
            type: "GET",
            url: "http://5d1cd479f31e7f00147ebb74.mockapi.io/products",
            data: null,
            timeout:2000,
            dataSrc:""
        },
        "columns":[
            {data: "id"},
            {data: "name"},
            {data: "description"},
            {data: "price"},
            {data: "image",render:(data)=>{
                // no soporta plantillas `data`
                let img = '<img src="' + data + '" width="50px">';
                // let img = `<img src=" + ${data} + " width="50px">`;
                return img;
            }}
        ],
        // To traslate language
        "language":{
            "lengthMenu":"Mostrando _MENU_ items",
            "search": "Buscar: "
        }
    });


    // remembered how to use a promise
    var promise = ()=>{ 
    
    return new Promise((resolve, reject)=>{
        $.ajax({
            type: "GET",
            url: "http://5d1cd479f31e7f00147ebb74.mockapi.io/products",
            data: null,
            success: (response)=>{
                resolve(response);
            },
            error: (response)=>{
                reject(response);
            }
        });
    });
    
    }

    promise().then((event)=>{
        console.log(event);
    }).catch((event)=>{
        console.error(event);
    });    

});

// others forms to wait document

// $().ready(()=>{

// });

// $(document).ready = function(){

// }

// $(document).ready(()=>{

// });