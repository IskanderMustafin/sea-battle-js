/**
 * @author imustafin
 */

(function($) {


    var Game = {} // namespace

    /**
     * Позиция на поле
     * @param posX позиция по оси Х
     * @param posY позиция по оси Y
     * @constructor
     */
    SeaBattle.Position = function(posX, posY) {
        this.posX = posX;
        this.posY = posY;

    }

    /**
     * Ячейка в поле
     * @param pos позиция ячейки
     * @constructor
     */
    SeaBattle.Cell = function(pos) {
        this.pos = pos;

        /**
         * Был ли произведен выстрел по ячейке
         * @type {boolean}
         */
        this.isFired = false;
    }

    /**
     * Тип корабля
     */
    SeaBattle.ShipType = {

        /**
         * Четырехпалубник
         */
        FOUR_DECKER : "battleship",

        /**
         * Трехпалубник
         */
        THREE_DECKER : "cruiser",

        /**
         * Двухпалубник
         */
        TWO_DECKER : "destroyer",

        /**
         * Однопалубник
         */
        SINGLE_DECKER : "submarine"
    }


    SeaBattle.Ship = function(shipType) {

    }

    /**
     * Поле игры
     */
    SeaBattle.Field = function() {


    }


    /**
     * Объект игры
     * @constructor
     */
    SeaBattle.BattleShip = function(playerContainer, botContainer, gameWonCallback, gameLostCallback) {
        this.gameWonCallback = gameWonCallback;
        this.gameLostCallback = gameLostCallback;
    }



})(jQuery);


