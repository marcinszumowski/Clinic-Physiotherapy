function rokPrzestepny(rok)
{
  return ((rok % 4 == 0) && ((rok % 100 != 0) || (rok % 400 == 0)));
}
function printCalendar()
{
  data = new Date();

  var rok = data.getYear();
  if (rok < 1000) rok = 2000 + rok - 100;

  var miesiac = data.getMonth() + 1;
  var dzienTygodnia = data.getDay();
  var dzienMiesiaca = data.getDate();

  var tempDate = new Date(rok, miesiac - 1, 1);
  var pierwszyDzienMiesiaca = tempDate.getDay();

  if(dzienTygodnia == 0) dzienTygodnia = 7;
  if(pierwszyDzienMiesiaca == 0) pierwszyDzienMiesiaca = 7;

  switch(miesiac){
    case 1 : nazwaMiesiaca = "Styczeń";
             dniWMiesiacu = 31;
             break;
    case 2 : nazwaMiesiaca = "Luty";
             dniWMiesiacu = rokPrzestepny(rok)?29:28;
             break;
    case 3 : nazwaMiesiaca = "Marzec";
             dniWMiesiacu = 31;
             break;
    case 4 : nazwaMiesiaca = "Kwiecień";
             dniWMiesiacu = 30;
             break;
    case 5 : nazwaMiesiaca = "Maj";
             dniWMiesiacu = 31;
             break;
    case 6 : nazwaMiesiaca = "Czerwiec";
             dniWMiesiacu = 30;
             break;
    case 7 : nazwaMiesiaca = "Lipiec";
             dniWMiesiacu = 31;
             break;
    case 8 : nazwaMiesiaca = "Sierpień";
             dniWMiesiacu = 31;
             break;
    case 9 : nazwaMiesiaca = "Wrzesień";
             dniWMiesiacu = 30;
             break;
    case 10 : nazwaMiesiaca = "Październik";
             dniWMiesiacu = 31;
             break;
    case 11 : nazwaMiesiaca = "Listopad";
             dniWMiesiacu = 30;
             break;
    case 12 : nazwaMiesiaca = "Grudzień";
             dniWMiesiacu = 31;
             break;
  }

  document.write("<TABLE border = 1><TR>");
  document.write("<TD bgcolor='#a5c422' align='center' colspan='7'>");
  document.write(nazwaMiesiaca + " " + rok);
  document.write("</TD></TR><TR>");

  document.write("<TR>");
  document.write("<TD align='center' bgcolor='pink'>Pn</TD>");
  document.write("<TD align='center' bgcolor='pink'>Wt</TD>");
  document.write("<TD align='center' bgcolor='pink'>Sr</TD>");
  document.write("<TD align='center' bgcolor='pink'>Cz</TD>");
  document.write("<TD align='center' bgcolor='pink'>Pt</TD>");
  document.write("<TD align='center' bgcolor='pink'>So</TD>");
  document.write("<TD align='center' bgcolor='pink'>Nd</TD>");
  document.write("</TR>");

  var j = dniWMiesiacu + pierwszyDzienMiesiaca - 1;

  for(var i = 0; i < j; i++){
    if(i < pierwszyDzienMiesiaca - 1){
      document.write("<TD bgcolor='white'></TD>");
      continue;
    }
    if((i % 7) == 0){
      document.write("</TR><TR>");
    }
    if((i - pierwszyDzienMiesiaca + 2) == dzienMiesiaca){
      color = "#a5c422";
    }
    else{
      color = "#f9f9f9";
    }
    document.write("<TD bgcolor='" + color + "' align='center'>");
    document.write(i - pierwszyDzienMiesiaca + 2);
    document.write("</TD>");
  }
  document.write("</TR></TABLE>");
}