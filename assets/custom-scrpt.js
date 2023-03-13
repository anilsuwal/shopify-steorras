jQuery(document).ready(function(){
  // if(jQuery(".multicolumn-card.content-container").hasClass("paragraph-content")){
  //   jQuery(".paragraph-content").closest(".three_layout_with_text").addClass("grid--3-col-desktop-large");
  // }
  // else {
  //   jQuery(".multicolumn-list__item").closest(".three_layout_with_text").addClass("grid--3-col-desktop");
  // }
  if(jQuery(".multicolumn-card.content-container").hasClass("paragraph-content")){
    jQuery("grid--3-col-desktop").addClass("large");
  }
  });