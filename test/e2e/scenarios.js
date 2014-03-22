'use strict';

describe('cmApp', function () {
  browser().navigateTo('/contacts');

  it('should show popup for newly added contact', function () {
    expect(element('.modal').hasClass('in')).toBeTruthy();
    element('#add_new_contact').click();
  });

  it('should show popup to edit existing contact', function () {
    element('.btn-default').click();
  });

});
