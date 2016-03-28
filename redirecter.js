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
  
  // login redirection
  // saves redirect location so you're taken to the correct page upon login
  if (/\/login\?redirect/.test(window.location.href)) {
    my_setcookie('fa_login_form_redirect', window.location.search.replace(/.*?redirect=(.*?)(?:&|$)/, '$1'));
  }
}());
