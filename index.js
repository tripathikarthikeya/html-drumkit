for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var innerHtml = this.innerHTML;
    makeSound(innerHtml);
})  

}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
})
function makeSound(key) {
     switch (key) {
        case "w":
            var sa = new Audio("sounds/crash.mp3");
            sa.play();
            break;
            case "a":
                var re = new Audio("sounds/kick-bass.mp3");
                re.play();
                break;
                case "s":
                    var ga = new Audio("sounds/snare.mp3");
                    ga.play();
                    break;
                    case "d":
                         var ma = new Audio("sounds/tom-1.mp3");
                         ma.play();
                         break;
                         case "j":
                              var pa = new Audio("sounds/tom-2.mp3");
                              pa.play();
                              break;
                              case "k":
                                   var dha = new Audio("sounds/tom-3.mp3");
                                   dha.play();
                                   break;
                                   case "l":
                                        var ni = new Audio("sounds/tom-4.mp3");
                                        ni.play();
                                        break;
                                        default:console.log("something went wrong");
                                        break;
    } 

}

    