$(document).ready(function() {
    var table = $('#kindom-data').DataTable( {
        "ajax": "data/test.json",
        "columns": [
          { "data": "country" },
          { "data": "job" },
          { "data": "class" },
          { "data": "name" },
          { "data": null, render : function(data, type, row) {  // 공격력
            if(data.job == "맹장") return data.str;
            else if(data.job == "용장") return data.dex;
            else if(data.job == "명궁") return data.dex;
            else if(data.job == "군주") return data.int;
            else if(data.job == "책사") return data.int;
            else return 0;
          } },
          { "data": null, render : function(data, type, row) { // 방어력
            if(data.job == "맹장") return data.dex;
            else if(data.job == "용장") return Math.floor(data.dex*0.5);
            else if(data.job == "명궁") return Math.floor(data.dex*0.5);
            else if(data.job == "군주") return Math.floor(data.dex*0.5);
            else if(data.job == "책사") return Math.floor(data.dex*0.25);
            else return 0;
          } },
          { "data": null, render : function(data, type, row) { // 체력
            if(data.job == "맹장") return data.str*10;
            else if(data.job == "용장") return data.str*9;
            else if(data.job == "명궁") return data.str*8;
            else if(data.job == "군주") return data.str*7;
            else if(data.job == "책사") return data.str*6;
            else return 0;
          } },
          { "data": null, render : function(data, type, row) { // 체력회복
            if(data.job == "맹장") return data.str;
            else if(data.job == "용장") return Math.floor(data.str*0.9);
            else if(data.job == "명궁") return Math.floor(data.str*0.8);
            else if(data.job == "군주") return Math.floor(data.str*0.7);
            else if(data.job == "책사") return Math.floor(data.str*0.6);
            else return 0;
          } },
          { "data": "skill1","sClass":"text-left" },
          { "data": "skill2","sClass":"text-left" },
          { "data": "etc","sClass":"text-left" }
        ]
    } );
    
    table.on( 'draw', function () {
        var body = $( table.table().body() );
        console.log(body);
        body.unhighlight();
        body.highlight( table.search() );  
    } );
    
    // filter option
    $('#dropdown1').on('change', function () { // 나라
      table.columns(0).search( this.value ).draw();
    } );
    $('#dropdown2').on('change', function () { // 직업
      table.columns(1).search( this.value ).draw();
    } );
    $('i.xi-info-o').hover(function() {
      var offset = $(this).offset();
      $('.skill-layer').toggleClass('on');
      $('.skill-layer').offset({top:offset.top,left:offset.left+30})
    });
    $('.btn_comment').click(function() {
      $('.comment-box').toggleClass('on');
      $(this).toggleClass('on');
    });
} );
