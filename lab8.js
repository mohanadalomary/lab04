var username = getuserinput('please enter your name');
 
 console.log (username);

 var time = prompt('please enter the time in your country');
 
 var Message;

 if(time > 9 && time <= 20)
{
      var color = FlowerColor('enter the flower color that you want to order');
}

  else if( time > 20)
  
 {  Message = 'sorry our store is closed'; alert (Message); }

 else if (time < 9)

 {Message = 'sorry our store is closed'; }

  else 

  { Message = 'you have entered wrong time'; }
  
  document.write (' <p id="p1"> hello ' + username + ' welcome to our store </p>');
     alert (Message);
 
   document.write ('<p> <img src="https://th.bing.com/th/id/OIP.wHCqowAVUX8GoxvLMcDVQQHaHa?pid=Api&rs=1" alt="this is the logo" width="100" height="100" > </p> ');

 var Photo = prompt('How many flower do you want?');

  for(var i =1 ; i <= Photo ; i++)
   {

       document.write( '<p>' +  i + '</p>');
       document.write('<p> <img src = "https://www.giftalove.com/blog/wp-content/uploads/2016/05/Colorful-Flowers-Arrangement.jpg" width="400" height="300" > </p>');
  
   }
  /* var Rate = prompt('What star rating would you give, 1-5?');
  Message = 'thank you for rating';*/

  function getuserinput (Message)
  {
      return prompt(Message);

  }
  
  function validation (username, Message)
  {
      while(username === '' || username === null )
      {
          username = getuserinput(Message);
      }
  }

  function FlowerColor (Color,Message)
  {
    var flower = prompt('enter the flower color that you want to order');

    if (flower == 'red')
    { 
     Message = 'we have 3 types of red flower.';
    }
    
    else if (flower == 'black')
     {
     Message = 'we have 1 type of black flower.';
     }
    
     else if (flower == 'white')
     {
     Message = 'we have 10 type of white flower.';
     }
    
     else if (flower == '')
    
     {Message = "error"; }
    
     else 
    {
     Message = 'out of stock.';
    }
    return color = alert(Message);
  }