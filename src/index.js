import riot from 'riot';
import 'riot-hot-reload';
import './tags/app.pug';
import './tags/input-form.pug';
import './tags/item-list.pug';

let utils = {
    init: function(opts) {},
    getIndexFromEvent: function(e){
        let li = e.target.closest('li');
        let nodes = Array.from( li.closest('ul').children );
        return nodes.indexOf( li );
    },
      //Simulate click events to support jQuary sortable
    touchHandler: function (event)
    {
        var touches = event.changedTouches,
            first = touches[0],
            type = "";
        switch(event.type)
        {
            case "touchstart": type = "mousedown"; break;
            case "touchmove":  type = "mousemove"; break;        
            case "touchend":   type = "mouseup";   break;
            default:           return;
        }

        var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                                    first.screenX, first.screenY, 
                                    first.clientX, first.clientY, false, 
                                    false, false, false, 0/*left*/, null);

        first.target.dispatchEvent(simulatedEvent);
        //event.preventDefault();
      }
}

riot.mixin("utils", utils);



riot.mount('app');