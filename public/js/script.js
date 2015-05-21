/**
 * Created by jenia0jenia on 21.05.2015.
 */

(function() {
    var length = document.getElementsByClassName('drag-n-drop').length,
        elem = [],
        id;
    for (var i = 0; i < length; i += 1) {
        id = 'div' + (i + 1);
        elem[id] = document.getElementById(id);
        // 1. отследить нажатие
        $(elem[id]).mouseenter(function() {
            setTimeout(function(){
                $('.box').fadeIn("fast");
        }, 200)});
        $(elem[id]).mouseleave(function() {
            setTimeout(function(){
                $('.box').fadeOut("fast");
        }, 200)});
        elem[id].onmousedown = function(e) {
            var self = this;
            var noneSelect = document.getElementsByClassName("container")[0];
            noneSelect.setAttribute("class", "container not-select");
            // подготовить к перемещению
            // 2. разместить на том же месте, но в абсолютных координатах
            this.style.position = 'fixed';
            moveAt(e);
            // передвинуть под координаты курсора
            // и сдвинуть на половину ширины/высоты для центрирования
            function moveAt(e) {
                self.style.left = e.pageX - self.offsetWidth / 2 + 'px';
                self.style.top = e.pageY - self.offsetHeight / 2 + 'px';
            }
            // 3, перемещать по экрану
            document.onmousemove = function(e) {
                moveAt(e);
            };
            // 4. отследить окончание переноса
            this.onmouseup = function() {
                noneSelect.setAttribute("class", "container");
                document.onmousemove = null;
                self.onmouseup = null;
            }
        }
    };
})();