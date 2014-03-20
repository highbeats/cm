'use strict';

describe('cmApp', function () {
  browser().navigateTo('/contacts');

  it('should show popup for newly added contact', function () {
    element('#add_new_contact').click();
    expect(element('.modal').attr('style')).toEqual('display: block;')
  });

  it('should show popup to edit existing contact', function () {
    element('.show-edit-contact').click();
    expect(element('.modal').attr('style')).toEqual('display: block;')
  });


  it('should switch langs', function () {
    element('li')
  })

});
