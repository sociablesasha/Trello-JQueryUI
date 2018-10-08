function init() {
    $('.lists').sortable({
        revert: true
    });
    $('.list').draggable({
        connectToSortable: '.lists',
        revert: 'invalid',
        scroll: false
    });

    $('.cards').sortable({
        revert: true,
    });
    $('.card').draggable({
        connectToSortable: '.cards',
        revert: 'invalid'
    });

    $('.add-list').click(function (event) {
        var list = $('.list-clone').clone();
        list.switchClass('list-clone', 'list');
        list.removeClass('clone');
        list.find('.header').text(inputting($(event.currentTarget.parentElement).find('input')));

        var lists = $('.lists');
        lists.append(list);

        var form = $(event.currentTarget.parentElement.parentElement);
        form.switchClass('list-add-enable', 'list-add-disable');

        $(".add-list").unbind("click");

        init();
    });

    $('.add-card').click(function (event) {
        var card = $('.card-clone').clone();
        card.switchClass('card-clone', 'card');
        card.removeClass('clone');
        card.text(inputting($(event.currentTarget.parentElement).find('input')));

        var cards = $(event.currentTarget.parentElement.parentElement.parentElement).find(".cards");
        cards.append(card);

        var form = $(event.currentTarget.parentElement.parentElement);
        form.switchClass('card-add-enable', 'card-add-disable');

        $(".add-card").unbind("click");

        init();
    });

    $('.list-add').disableSelection();

    $('.form-open').click(function (event) {
        var form = $(event.currentTarget.parentElement);

        if (form.hasClass("footer")) {
            form.switchClass('card-add-disable', 'card-add-enable');
        } else {
            form.switchClass('list-add-disable', 'list-add-enable');
        }
    });

    $('.form-close').click(function (event) {
        var form = $(event.currentTarget.parentElement.parentElement);

        if (form.hasClass("footer")) {
            form.switchClass('card-add-enable', 'card-add-disable');
        } else {
            form.switchClass('list-add-enable', 'list-add-disable');
        }
    });
}

function inputting(dom) {
    var value = $(dom).val();
    $(dom).val('');

    return value;
}

$(document).ready(function () {
    init();
})