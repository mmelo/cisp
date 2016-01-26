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
  


  return "<p>Your content here.</p>\n\n";
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