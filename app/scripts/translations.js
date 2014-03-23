angular.module("gettext").run(['gettextCatalog', function (gettextCatalog) {
    gettextCatalog.setStrings('ru', {"Address":"Адрес","Address Book":"Адресная Книга","Email":"Эл. почта","Name":"Имя","Phone":"Телефон","Your contacts:":"Твои контакты:"});

}]);
