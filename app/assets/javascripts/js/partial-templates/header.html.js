document.open();

if( docCookies.getItem('view-mode') == 'mobile') {
  document.write( PT_HEADER_MOBILE );
} else {
  document.write( PT_HEADER_DESKTOP );
}

document.close();