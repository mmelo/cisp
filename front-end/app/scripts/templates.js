define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/components/spinner.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"spinner\"><div class=\"signal\"></div></div>\n";
  });

this["JST"]["app/scripts/templates/footer/footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"footer__partners\">\n	";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_logo-v01", options) : helperMissing.call(depth0, "view", "icons/ic_logo-v01", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div class=\"footer__partners__ensp\"></div>\n	<div class=\"footer__partners__unl\"></div>\n	<div class=\"footer__partners__fct\"></div>\n</div>\n<p class=\"footer__copy-right\">COPYRIGHT ® 2015 Centro de Investigação de Saúde Pública. All rights reserved</p>";
  return buffer;
  });

this["JST"]["app/scripts/templates/icons/ic_logo-v01.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"116px\" height=\"27px\" viewBox=\"0 0 116 27\">\n	<path fill=\"#414141\" d=\"M7.1,13.4c0-0.9,0.2-1.9,0.5-2.8C8,9.7,8.6,8.9,9.3,8.2c0.7-0.7,1.5-1.3,2.6-1.7c1-0.4,2.1-0.7,3.4-0.7\n		c1.5,0,2.8,0.3,3.9,0.9c1.1,0.6,1.9,1.4,2.5,2.4l-2.5,1.6c-0.2-0.4-0.5-0.8-0.8-1.1c-0.3-0.3-0.6-0.5-1-0.7\n		c-0.4-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.8-0.1-1.1-0.1c-0.8,0-1.5,0.2-2.1,0.5C12.5,9.1,12,9.5,11.6,10c-0.4,0.5-0.7,1-0.9,1.6\n		c-0.2,0.6-0.3,1.2-0.3,1.8c0,0.7,0.1,1.3,0.3,2c0.2,0.6,0.6,1.2,1,1.7c0.4,0.5,0.9,0.9,1.5,1.1c0.6,0.3,1.2,0.4,2,0.4\n		c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.8-0.2,1.1-0.4c0.4-0.2,0.7-0.4,1-0.7c0.3-0.3,0.6-0.6,0.7-1.1l2.6,1.4c-0.3,0.6-0.6,1.1-1.1,1.5\n		c-0.5,0.4-1,0.8-1.6,1.1c-0.6,0.3-1.3,0.5-2,0.7c-0.7,0.2-1.4,0.2-2,0.2c-1.2,0-2.3-0.2-3.2-0.7c-1-0.5-1.8-1.1-2.5-1.8\n		c-0.7-0.7-1.3-1.6-1.6-2.5C7.3,15.3,7.1,14.4,7.1,13.4\"/>\n	<rect x=\"41.9\" y=\"5.9\" fill=\"#414141\" width=\"3.2\" height=\"15.3\"/>\n	<path fill=\"#414141\" d=\"M77,9.9c-0.1-0.1-0.3-0.2-0.6-0.4c-0.3-0.2-0.6-0.3-1-0.5C75,8.8,74.5,8.6,74,8.5c-0.5-0.1-1-0.2-1.5-0.2\n		c-0.9,0-1.5,0.2-2,0.5C70.2,9.1,70,9.5,70,10.1c0,0.3,0.1,0.6,0.2,0.8c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.7,0.3,1.2,0.4\n		c0.5,0.1,1,0.3,1.6,0.4c0.8,0.2,1.5,0.4,2.2,0.6c0.7,0.2,1.2,0.5,1.7,0.9c0.5,0.3,0.8,0.8,1.1,1.2c0.2,0.5,0.4,1.1,0.4,1.8\n		c0,0.8-0.2,1.5-0.5,2.1c-0.3,0.6-0.8,1.1-1.3,1.4c-0.6,0.4-1.2,0.6-1.9,0.8c-0.7,0.2-1.5,0.2-2.3,0.2c-1.2,0-2.5-0.2-3.7-0.5\n		C68,20.5,67,20,66,19.4l1.4-2.6c0.1,0.1,0.4,0.3,0.8,0.5c0.4,0.2,0.8,0.4,1.3,0.6c0.5,0.2,1,0.4,1.6,0.5c0.6,0.1,1.2,0.2,1.9,0.2\n		c1.8,0,2.6-0.5,2.6-1.6c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.4-0.9-0.6c-0.4-0.2-0.8-0.3-1.3-0.5c-0.5-0.1-1.1-0.3-1.8-0.5\n		c-0.8-0.2-1.5-0.4-2.1-0.7c-0.6-0.2-1.1-0.5-1.4-0.8c-0.4-0.3-0.7-0.7-0.9-1.1c-0.2-0.4-0.3-0.9-0.3-1.5c0-0.8,0.2-1.5,0.5-2.1\n		c0.3-0.6,0.7-1.1,1.3-1.5c0.6-0.4,1.2-0.7,1.9-0.9c0.7-0.2,1.5-0.3,2.3-0.3c1.2,0,2.2,0.2,3.2,0.5c1,0.3,1.8,0.7,2.6,1.2L77,9.9z\"\n		/>\n	<path fill=\"#414141\" d=\"M95.4,21.2V5.9h7c0.8,0,1.5,0.1,2.1,0.4c0.6,0.3,1.2,0.7,1.7,1.2c0.5,0.5,0.8,1,1.1,1.6\n		c0.3,0.6,0.4,1.2,0.4,1.8c0,0.6-0.1,1.3-0.4,1.9c-0.2,0.6-0.6,1.2-1,1.6c-0.4,0.5-1,0.9-1.6,1.1c-0.6,0.3-1.3,0.4-2.1,0.4h-3.9v5.1\n		H95.4z M98.6,13.5h3.7c0.6,0,1.1-0.2,1.5-0.7c0.4-0.4,0.6-1,0.6-1.8c0-0.4-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.5-0.8\n		c-0.2-0.2-0.4-0.4-0.7-0.5c-0.3-0.1-0.5-0.2-0.8-0.2h-3.6V13.5z\"/>\n	<path fill=\"#414141\" d=\"M113.6,24.8H2.4V2.3h111.2V24.8z M116,0H0v27h116V0z\"/>\n</svg>";
  });

this["JST"]["app/scripts/templates/posts/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"detail__thumbnail\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1.full)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\">\n	<div class=\"detail__thumbnail__wrapper\">\n		<h1 class=\"detail__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n	</div>\n</div>\n\n<div class=\"detail__category-wrapper\">\n	<div class=\"post__category\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</div>\n\n<div class=\"post__content__details\">\n	<a href=\"#\" class=\"post__content__details__author\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.nickname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n\n	<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__details__date\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</time>\n\n	<a href=\"#\" class=\"post__content__details__social\">56 shares</a>\n</div>\n\n<div id=\"excerpt\" class=\"detail__excerpt\">\n	<div class=\"detail__excerpt__wrapper\">\n		";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/posts/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["app/scripts/templates/posts/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\"";
  return buffer;
  }

  buffer += "<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__thumbnail\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.inCache), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a>\n\n<section class=\"post__content\">\n	<section class=\"post__content__details\">\n		<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__details__date\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</time>\n	</section>\n\n	<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n	<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__excerpt\">";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n	<section class=\"post__content__details bottom\">\n		<a href=\"#\" class=\"post__content__details__author\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.nickname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n	</section>\n</section>\n\n<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"post__category\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n";
  return buffer;
  });

return this["JST"];

});