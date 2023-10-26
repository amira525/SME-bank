  //slick slider
  $('.circulated-slider').slick({
    rtl: document.dir === "rtl" ? true : false,
    slidesToShow: 1,
    dots: false,
    prevArrow: '<span><i class="fas fa-caret-left"></i></span>',
    nextArrow: '<span><i class="fas fa-caret-right"></i></span>'
});
  //slick slider
  $('.slider-event').slick({
    rtl: document.dir === "rtl" ? true : false,
    slidesToShow: 1,
    prevArrow: '<span><i class="fas fa-caret-left"></i></span>',
    nextArrow: '<span><i class="fas fa-caret-right"></i></span>'
  });


//////////////////////////
var $ = function(id) {
    return document.getElementById(id);
  };
  /*****calendar********/
  var calendar = function(_id) {
    this._id = _id;
    this.wd = [
      'الأحد',
      'الأثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعه',
      'السبت'
    ];
    this.mon = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يونيه', 'أغسطس', 'سيتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر' ];
  
    var d = new Date();
    this.currMon = d.getMonth();
    this.currYr = d.getFullYear();
    this.currDay = d.getDate();
  
  };
  
  calendar.prototype.nxtmon = function() {
    if ( this.currMon == 11 ) {
      this.currMon = 0;
      this.currYr = this.currYr + 1;
    }
    else {
      this.currMon = this.currMon + 1;
    }
    this.showcurr();
  };
  
  calendar.prototype.prevmon = function() {
    if ( this.currMon == 0 ) {
      this.currMon = 11;
      this.currYr = this.currYr - 1;
    }
    else {
      this.currMon = this.currMon - 1;
    }
    this.showcurr();
  };
  
  calendar.prototype.showcurr = function() {
    this.displaymon(this.currYr, this.currMon);
  };
  calendar.prototype.displaymon = function(y, m) {
  
    var d = new Date()
    , firstdom = new Date(y, m, 1).getDay()
    , lastdom =  new Date(y, m+1, 0).getDate()
    , prevlastdom = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
    var html = '<table>';
    html += '<thead><tr>';
    html += '<td colspan="7">' + this.mon[m] + ' ' + y + '</td>';
    html += '</tr></thead>';
    html += '<tr class="days">';
    for(var i=0; i < this.wd.length;i++) {
      html += '<td>' + this.wd[i] + '</td>';
    }
    html += '</tr>';
    var i=1;
    do {
      var wd = new Date(y, m, i).getDay();
      if ( wd == 0 ) {
        html += '<tr>';
      }
      else if ( i == 1 ) {
        html += '<tr>';
        var k = prevlastdom - firstdom+1;
        for(var j=0; j < firstdom; j++) {
          html += '<td class="not-today">' + k + '</td>';
          k++;
        }
      }
      var chk = new Date();
      var chkY = chk.getFullYear();
      var chkM = chk.getMonth();
      if (chkY == this.currYr && chkM == this.currMon && i == this.currDay) {
        html += '<td class="today">' + i + '</td>';
      } else {
        html += '<td class="normal">' + i + '</td>';
      }
      if ( wd == 6 ) {
        html += '</tr>';
      }
      else if ( i == lastdom ) {
        var k=1;
        for(wd; wd < 6; wd++) {
          html += '<td class="not-today">' + k + '</td>';
          k++;
        }
      }
  
    i++;
    }while(i <= lastdom);
    html += '</table>';
    $(this._id).innerHTML = html;
  };
  
    var cal = new calendar("calendar");			
    cal.showcurr();
    $('btnNext').onclick = function() {
      cal.nxtmon();
    };
    $('btnPrev').onclick = function() {
      cal.prevmon();
    };
  /****calculator*******/
  var keys = document.querySelectorAll('#calc span');
  var ops = ['+', '-', 'x', '÷'];
  var dec = false;
  for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
      var input = document.querySelector('.result');
      var inputVal = input.innerHTML;
      var keyVal = this.innerHTML;
      if(keyVal == 'c') {
        input.innerHTML = '';
        dec = false;
      }
      else if(keyVal == '=') {
        var equation = inputVal;
        var lastChar = equation[equation.length - 1];
        equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
        if(ops.indexOf(lastChar) > -1 || lastChar == '.')
          equation = equation.replace(/.$/, '');
        
        if(equation)
          input.innerHTML = eval(equation);
          
        dec = false;
      }
      else if(ops.indexOf(keyVal) > -1) {
        var lastChar = inputVal[inputVal.length - 1];
        if(inputVal != '' && ops.indexOf(lastChar) == -1) 
          input.innerHTML += keyVal;
        else if(inputVal == '' && keyVal == '-') 
          input.innerHTML += keyVal;
        if(ops.indexOf(lastChar) > -1 && inputVal.length > 1) {
          input.innerHTML = inputVal.replace(/.$/, keyVal);
        }
        
        dec =false;
      }
      else if(keyVal == '.') {
        if(!decimalAdded) {
          input.innerHTML += keyVal;
          dec = true;
        }
      }
      else {
        input.innerHTML += keyVal;
      }
      e.preventDefault();
    } 
  }


