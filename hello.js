/*function hello() {
    let a = document.querySelector("h1");
    if (a.innerHTML === "Hello!") {
      a.innerHTML = "Goodbye!";
    } else {
      a.innerHTML = "Hello!";
    }
  }
  let counter = 0;
  function count() {
    counter++;
    document.querySelector("h1").innerHTML = counter;

    if (counter % 10 === 0) 
    {
        alert(`Counter is now ${counter}`);
    }
  }
  document.addEventListener('DOMContentLoaded', function()
  {
    document.querySelector('button').onclick = count;
  });

  document.addEventListener('DOMContentLoaded', function()
  {
      document.querySelector('form').onsubmit = function()
      {
         const name = document.querySelector('#nume').value;
         alert(`Hello, ${name}`);
      };
  });
*/
  document.addEventListener('DOMContentLoaded', function()
        {
            //change color to red
            document.querySelectorAll('button').forEach(function(button)
            {
                button.onclick = function()
                {
                    document.querySelector('#hello').style.color = button.dataset.color;
                }
            })
        });