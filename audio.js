
for(let i=0 ; i<3 ; i++)
{
    document.querySelectorAll(".cls1")[i].addEventListener("click", function()
    {
          let text = this.innerHTML;
          console.log(text);  

          if(text === "click button1")
          {
               let audio = new Audio('audio/video.mp4');
               audio.play();
          }
          else if(text === "click button2")
          {
               let audio = new Audio('audio/video.mp4');
               audio.play();
          }
          else if(text === "click button3")
          {
               let audio = new Audio('audio/video.mp4');
               audio.play();
          }
    })
}

