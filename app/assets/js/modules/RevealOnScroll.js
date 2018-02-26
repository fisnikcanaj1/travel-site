import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPersentage = offset;
        this.hideItitally();
        this.createWayPoints();
    }

    hideItitally() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWayPoints() {
        var that = this;
        this.itemsToReveal.each(function(){
            var currentItem =  this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible")
                },
                offset: that.offsetPersentage
            });
        });
    }

}

export default RevealOnScroll;