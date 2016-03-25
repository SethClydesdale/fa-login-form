// redirect the user to their custom log in form
(function() {
  var html_page = '{HTML_PAGE_LINK}',
      link_change = true,
      redirect = true;
  
  // redirect
  if (redirect && /\/login/.test(window.location.href) && !/login_classic/.test(window.location.hash)) window.location.href = html_page;
  
  // link change
  link_change && !new RegExp(html_page).test(window.location.href) && $(function() {
    $('a[href^="/login"], a[href^="http://' + window.location.host + '/login"]').attr('href', html_page);
  });
}());
