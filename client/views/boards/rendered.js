Template.board.rendered = function() {
    var _this = this,
        board = _this.$('#board');

    // update height add, update, remove resize board height.
    Boards.find().observe({
        added: Utils.resizeHeight('.board-canvas', Utils.widgetsHeight),
        updated: Utils.resizeHeight('.board-canvas'),
        removed: Utils.resizeHeight('.board-canvas')
    });

    // resize not update observe changed.
    jQuery(window).resize(Utils.resizeHeight('.board-canvas', Utils.widgetsHeight));

    // if not is authenticated then show warning..
    if (!Utils.is_authenticated()) Utils.Warning.open('Want to subscribe to these cards?');

    // scroll Left getSession
    Utils.boardScrollLeft();
};
