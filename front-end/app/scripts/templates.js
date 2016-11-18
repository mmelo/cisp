define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/about/contacts.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"posts-about__contacts\" id=\"contacts\">\n	<div class=\"posts-about__contacts__header\">\n		<h4 class=\"posts-about__contacts__header__title\">contactos</h4>\n\n		\n	</div>\n\n	<div class=\"posts-about__contacts__container\">\n		<div class=\"posts-about__contacts__container__block\">\n			";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_phone", options) : helperMissing.call(depth0, "view", "icons/ic_phone", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<p>+351 217 512 100</p>\n		</div>\n		<div class=\"posts-about__contacts__container__block\">\n			";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_email", options) : helperMissing.call(depth0, "view", "icons/ic_email", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<p>cisp@ensp.unl.pt</p>\n		</div>\n		<div class=\"posts-about__contacts__container__block\">\n			";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_pin", options) : helperMissing.call(depth0, "view", "icons/ic_pin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<p>Escola Nacional de Saúde Pública</p>\n		</div>\n	</div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"posts-about__header\">\n	<ul class=\"posts-about__header__menu\">\n		\n		<li id=\"navigate-mission\">Missão</li>\n		<li id=\"navigate-thematic\">Linhas Temáticas</li>\n		\n		\n		<li id=\"navigate-contacts\">Contactos</li>\n	</ul>\n</div>\n<div id=\"about-container\" class=\"posts-about__container\">\n	<div id=\"about-mission\"></div>\n	\n	<div id=\"about-thematic\"></div>\n	\n	<div id=\"about-contacts\"></div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/mission", options) : helperMissing.call(depth0, "view", "about/mission", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/thematicLines", options) : helperMissing.call(depth0, "view", "about/thematicLines", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/scientificBoard", options) : helperMissing.call(depth0, "view", "about/scientificBoard", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/management", options) : helperMissing.call(depth0, "view", "about/management", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/contacts", options) : helperMissing.call(depth0, "view", "about/contacts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

  buffer += "\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "mission", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "mission", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "thematic-lines", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "thematic-lines", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "scientific-advisory-board", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "scientific-advisory-board", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "management", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "management", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "contacts", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "contacts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["app/scripts/templates/about/management.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"posts-about__management\" id=\"management\">\n	<div class=\"posts-about__management__header\">\n		<h4 class=\"posts-about__management__header__title\">gestão</h4>\n\n		\n	</div>\n	\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column sci-board__row__column--align-right\">\n			<div class=\"sci-board__row__thumbnail posts-about__management--thumbnail\" style=\"background-image: url('images/about/scientific_board/paula_lobato_faria.jpg')\"></div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--second\">\n			<div class=\"sci-board__row__info posts-about__management--info posts-about__management--info--align-left\">\n				<div class=\"sci-board__row__info__position\">Cargo</div>\n				<div class=\"sci-board__row__info__name\">Paula Lobato Faria</div>\n				<div class=\"sci-board__row__info__description posts-about__management--description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				<a href=\"\" class=\"sci-board__row__info__see-more posts-about__management--see-more\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ver mais</a>\n\n			</div>\n		</div>\n\n	</div>\n\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column\">\n			<div class=\"sci-board__row__info sci-board__row__info--align-right posts-about__management--info\">\n				<div class=\"sci-board__row__info__position\">Cargo</div>\n				<div class=\"sci-board__row__info__name\">Carlos Dias</div>\n				<div class=\"sci-board__row__info__description posts-about__management--description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				<a href=\"\" class=\"sci-board__row__info__see-more sci-board__row__info__see-more--align-right posts-about__management--see-more\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ver mais</a>\n\n			</div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--align-left\">\n			<div class=\"sci-board__row__thumbnail posts-about__management--thumbnail\" style=\"background-image: url('images/about/scientific_board/carlos_dias.jpg')\"></div>\n		</div>\n\n	</div>\n\n	<div class=\"sci-board__organogram\">\n		<img src=\"images/about/scientific_comission/organogram.jpg\" class=\"sci-board__organogram\" alt=\"CISP - scientific comission organogram\">\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/mission.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<div class=\"posts-about__mission\" id=\"mission\">\n	<div class=\"posts-about__mission__text\">\n		";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	\n	\n	\n	\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/scientificBoard.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"sci-board\" id=\"scientific-board\">\n	\n	<div class=\"sci-board__row\">\n\n		<h4 class=\"sci-board__row__title\">quadro de <br> aconselhamento <br> científico</h4>\n\n		\n	</div>\n	\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column sci-board__row__column--align-right\">\n			<div class=\"sci-board__row__thumbnail\" style=\"background-image: url('images/about/scientific_board/paula_lobato_faria.jpg')\"></div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--second\">\n			<div class=\"sci-board__row__info\">\n				\n				<div class=\"sci-board__row__info__name\">Paula Lobato Faria</div>\n				<div class=\"sci-board__row__info__description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				\n\n			</div>\n		</div>\n\n	</div>\n\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column\">\n			<div class=\"sci-board__row__info sci-board__row__info--align-right\">\n				\n				<div class=\"sci-board__row__info__name\">Carlos Dias</div>\n				<div class=\"sci-board__row__info__description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				\n\n			</div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--align-left\">\n			<div class=\"sci-board__row__thumbnail\" style=\"background-image: url('images/about/scientific_board/carlos_dias.jpg')\"></div>\n		</div>\n\n	</div>\n\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column sci-board__row__column--align-right\">\n			<div class=\"sci-board__row__thumbnail\" style=\"background-image: url('images/about/scientific_board/luis_saboga.jpg')\"></div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--second\">\n			<div class=\"sci-board__row__info\">\n				\n				<div class=\"sci-board__row__info__name\">Paula Lobato Faria</div>\n				<div class=\"sci-board__row__info__description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				\n\n			</div>\n		</div>\n\n	</div>\n\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/scientificComission.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"posts-about__sci-comission\" id=\"scientific-comission\">\n	\n	<div class=\"posts-about__sci-comission__header\">\n		<h4 class=\"posts-about__sci-comission__header__title\">Comissão Científica</h4>\n	</div>\n\n	<div class=\"posts-about__sci-comission__description\">\n		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At porro quaerat vero, cum a aliquid impedit. Eius nemo quaerat magni accusantium soluta atque praesentium, eum reprehenderit. Adipisci inventore, dolore voluptas.</p>\n		<p>Possimus iste tempore labore, a omnis at aliquid, eius explicabo neque, dolores, nisi ducimus delectus velit cum! Delectus natus omnis, nulla ex, illo possimus, voluptates, placeat maxime voluptatum doloremque quam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n		<p>Non nobis omnis esse minima possimus rem, magnam est, corrupti minus nihil, tempore eum! Omnis quaerat, perferendis. Vero debitis nemo distinctio quis dolorem assumenda, harum praesentium fugit nisi tempore libero.</p>\n		<p>Qui similique rerum commodi explicabo aperiam officiis dolor, porro pariatur libero minima aliquam placeat veniam, dolorum harum enim perspiciatis laudantium, esse sapiente. Minima, explicabo ducimus cumque laboriosam odit nulla perspiciatis.</p>\n		<p>Ex doloribus impedit, ipsam voluptatem? Repudiandae nulla dolorem nemo excepturi blanditiis, aliquam qui, natus repellat laudantium autem laboriosam cupiditate reiciendis molestiae iste dignissimos maiores tempore eaque officiis a, voluptatibus atque?</p>\n		<p>Quis culpa nesciunt molestias ipsa, cum cupiditate dolore similique ducimus in, ratione reiciendis doloremque. Fugiat aut delectus illum, dolore! Recusandae, unde. Enim, quod vel natus necessitatibus aperiam accusantium, quaerat aspernatur.</p>\n		<p>Similique voluptates quis laborum quo, voluptatem, dicta illo aperiam ipsa beatae, excepturi quae. Vel sit praesentium provident cum iusto iste sapiente explicabo adipisci nisi animi, doloribus porro officia, ipsa ipsum.</p>\n		<p>Nulla, debitis, vero? Doloribus excepturi suscipit, recusandae similique, voluptatum autem commodi soluta odio laboriosam, laudantium eveniet itaque deleniti nemo magni iure maiores ea. Commodi aut officia obcaecati ipsa, eveniet repudiandae.</p>\n	</div>\n	\n	<img src=\"images/about/scientific_comission/organogram.jpg\" class=\"posts-about__sci-comission__organogram\" alt=\"CISP - scientific comission organogram\">\n\n</div>";
  });

this["JST"]["app/scripts/templates/about/thematicLines.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"posts-about__thematic\" id=\"thematic-lines\">\n	<div class=\"posts-about__thematic__header\">\n		<h4 class=\"posts-about__thematic__header__title\">linhas temáticas</h4>\n	</div>\n\n	<div class=\"posts-about__thematic__container\">\n\n		<img src=\"images/about/thematic_lines/organogram.jpg\" class=\"posts-about__thematic__container__organogram\" alt=\"CISP - scientific comission organogram\">\n	</div>\n</div>";
  });

this["JST"]["app/scripts/templates/components/spinner.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"spinner\"><div class=\"signal\"></div></div>";
  });

this["JST"]["app/scripts/templates/events/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#eventos\" class=\"close\">+</a>\n<div class=\"event__detail__wrapper\">\n	<section class=\"event__detail__column\">\n		<div class=\"post__thumbnail\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			<!-- <time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__date\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time> -->\n		</div>\n\n		<h2 class=\"event__detail__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		<p class=\"event__detail__when\">\n			<span>Quando:</span> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</p>\n		<p class=\"event__detail__where\">\n			<span>Onde:</span> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.where)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</p>\n	</section>\n	<section class=\"event__detail__column\">\n\n		<div class=\"content\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</section>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/events/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n<div class=\"post-list__header__no-content\">\n	<p>Pedimos desculpa, não foram encontrados resultados.</p>\n</div>\n";
  }

function program3(depth0,data) {
  
  
  return "\n<div id=\"load-more-posts\" class=\"load-more\">MAIS</div>\n";
  }

  buffer += "<div class=\"post-list__header\">\n	<div class=\"post-list__header__title\"></div>\n\n	<div class=\"post-list__header__search\">\n		<input id=\"post-list-search\" type=\"text\" placeholder=\"Pesquisar\">\n		<button id=\"events-search-button\" class=\"hidden\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_search", options) : helperMissing.call(depth0, "view", "icons/ic_search", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	</div>\n</div>\n\n<div class=\"post-list__section__title\">\n	<h2>Public Health Research Seminars</h2>\n</div>\n\n<div id=\"post-list-container\" class=\"post-list__container\">\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "===", 0, options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "===", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/events/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"post-list__new__content__when\"><span>Quando: </span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"post-list__new__content__where\"><span>Onde: </span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.where)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n	";
  return buffer;
  }

  buffer += "<div class=\"post-list__new__thumbnail\"\nstyle=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\n\n	<!-- <time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post-list__new__thumbnail__date\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time> -->\n</div>\n\n<section class=\"post-list__new__content\">\n\n	<h2 class=\"post-list__new__content__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<div class=\"post-list__new__content__text\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.excerpt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n	<a href=\"#eventos/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post-list__new__content__button\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Saber mais</a>\n</section>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/footer/footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"footer__logo\">\n	";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_logo-v01", options) : helperMissing.call(depth0, "view", "icons/ic_logo-v01", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<p class=\"footer__copy-right\">COPYRIGHT ® 2015 Centro de Investigação em Saúde Pública. Todos os direitos reservados</p>\n<div class=\"footer__partners\">\n	<a href=\"https://www.ensp.unl.pt\" target=\"_blank\" class=\"footer__partners__ensp\"></a>\n	<div class=\"footer__partners__fct\"></div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/header/heroSection.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n	<h2 class=\"hero-section__claim\">From research<br>to action <span class=\"hero-section__claim__underline\"></span> </h2>\n\n	<div class=\"hero-section__block\">\n		<!--<div class=\"hero-section__block__title\">Centro de Investigação Saúde Pública</div>-->\n		<div class=\"hero-section__block__text\">Primeiro centro de investigação exclusivamente dedicado à Saúde Pública.</div>\n	</div>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"hero-section__page-identifier\">\n		<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n	</div>\n\n";
  return buffer;
  }

  buffer += "<div class=\"hero-section__container\">\n\n	<div id=\"logo\" class=\"hero-section__logo\">\n		";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_logo-v01", options) : helperMissing.call(depth0, "view", "icons/ic_logo-v01", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<p>Centro de Investigação em Saúde Publica</p>\n		<p>Public Health Research Center</p>\n\n		<div class=\"hero-section__logo--ensp\" id=\"logoHome\">\n        </div>\n	</div>\n\n\n\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg), "===", "home", options) : helperMissing.call(depth0, "ifCond", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg), "===", "home", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/header/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "active";
  }

  buffer += "<div class=\"banner\"></div>\n<div id=\"hero-section\" class=\"hero-section ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg), "===", (depth0 && depth0.home), options) : helperMissing.call(depth0, "ifCond", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg), "===", (depth0 && depth0.home), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></div>\n\n<div id=\"menu\" class=\"menu\"></div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/header/menu.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"menu__container\">\n	<div id=\"menu-button\" class=\"menu__button\">MENU</div>\n\n	<div id=\"menu-wrapper\" class=\"menu__wrapper\">\n		<ul>\n			<li><a href=\"#sobre\">Sobre Nós</a></li>\n			<li><a href=\"#membros\">Membros</a></li>\n			<li><a href=\"#projetos\">Projetos</a></li>\n			<li><a href=\"#eventos\">Eventos</a></li>\n			<li><a href=\"#publicacoes\">Publicações</a></li>\n			<li><a href=\"#noticias\">Notícias</a></li>\n		</ul>\n	</div>\n</div>\n";
  });

this["JST"]["app/scripts/templates/home/eventsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"home__section__new__content__when\"><span>Quando: </span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"home__section__new__content__where\"><span>Onde: </span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.where)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n	";
  return buffer;
  }

  buffer += "<div class=\"home__section__new__content\">\n	<h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n	<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.excerpt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<a href=\"#eventos/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Saber mais</a>\n</div>\n\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/eventsList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"home__section__title\"><a href=\"#eventos\">Eventos</a></div>\n";
  });

this["JST"]["app/scripts/templates/home/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<section class=\"home__section\" id=\"home-news\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</section>\n\n<section class=\"home__section\" id=\"home-events\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</section>\n\n<section class=\"home__section\" id=\"home-publications\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</section>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/newsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"home__section__new__image\" style=\"background-image: url(";
  if (helper = helpers.thumbnail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumbnail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\"> </div>\n";
  return buffer;
  }

  buffer += "<div class=\"home__section__new__content\">\n	<h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n	<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.excerpt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n	<a href=\"#noticias/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Saber mais</a>\n</div>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.thumbnail), "&&", (depth0 && depth0.isLarge), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.thumbnail), "&&", (depth0 && depth0.isLarge), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/newsList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"home__section__title\"><a href=\"#noticias\">Notícias</a></div>";
  });

this["JST"]["app/scripts/templates/home/publicationsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"home__section__publication__content\">\n	<h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n	<p>";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n	\n	<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/publicationsList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"home__section__title\"><a href=\"#publicacoes\">Publicações</a></div>";
  });

this["JST"]["app/scripts/templates/icons/ic_arrow-right.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M17,12L12,7V10H8V14H12V17L17,12Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_close.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_email.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_logo-v01.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"116px\" height=\"27px\" viewBox=\"0 0 116 27\">\n	<path fill=\"#414141\" d=\"M7.1,13.4c0-0.9,0.2-1.9,0.5-2.8C8,9.7,8.6,8.9,9.3,8.2c0.7-0.7,1.5-1.3,2.6-1.7c1-0.4,2.1-0.7,3.4-0.7\n		c1.5,0,2.8,0.3,3.9,0.9c1.1,0.6,1.9,1.4,2.5,2.4l-2.5,1.6c-0.2-0.4-0.5-0.8-0.8-1.1c-0.3-0.3-0.6-0.5-1-0.7\n		c-0.4-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.8-0.1-1.1-0.1c-0.8,0-1.5,0.2-2.1,0.5C12.5,9.1,12,9.5,11.6,10c-0.4,0.5-0.7,1-0.9,1.6\n		c-0.2,0.6-0.3,1.2-0.3,1.8c0,0.7,0.1,1.3,0.3,2c0.2,0.6,0.6,1.2,1,1.7c0.4,0.5,0.9,0.9,1.5,1.1c0.6,0.3,1.2,0.4,2,0.4\n		c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.8-0.2,1.1-0.4c0.4-0.2,0.7-0.4,1-0.7c0.3-0.3,0.6-0.6,0.7-1.1l2.6,1.4c-0.3,0.6-0.6,1.1-1.1,1.5\n		c-0.5,0.4-1,0.8-1.6,1.1c-0.6,0.3-1.3,0.5-2,0.7c-0.7,0.2-1.4,0.2-2,0.2c-1.2,0-2.3-0.2-3.2-0.7c-1-0.5-1.8-1.1-2.5-1.8\n		c-0.7-0.7-1.3-1.6-1.6-2.5C7.3,15.3,7.1,14.4,7.1,13.4\"/>\n	<rect x=\"41.9\" y=\"5.9\" fill=\"#414141\" width=\"3.2\" height=\"15.3\"/>\n	<path fill=\"#414141\" d=\"M77,9.9c-0.1-0.1-0.3-0.2-0.6-0.4c-0.3-0.2-0.6-0.3-1-0.5C75,8.8,74.5,8.6,74,8.5c-0.5-0.1-1-0.2-1.5-0.2\n		c-0.9,0-1.5,0.2-2,0.5C70.2,9.1,70,9.5,70,10.1c0,0.3,0.1,0.6,0.2,0.8c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.7,0.3,1.2,0.4\n		c0.5,0.1,1,0.3,1.6,0.4c0.8,0.2,1.5,0.4,2.2,0.6c0.7,0.2,1.2,0.5,1.7,0.9c0.5,0.3,0.8,0.8,1.1,1.2c0.2,0.5,0.4,1.1,0.4,1.8\n		c0,0.8-0.2,1.5-0.5,2.1c-0.3,0.6-0.8,1.1-1.3,1.4c-0.6,0.4-1.2,0.6-1.9,0.8c-0.7,0.2-1.5,0.2-2.3,0.2c-1.2,0-2.5-0.2-3.7-0.5\n		C68,20.5,67,20,66,19.4l1.4-2.6c0.1,0.1,0.4,0.3,0.8,0.5c0.4,0.2,0.8,0.4,1.3,0.6c0.5,0.2,1,0.4,1.6,0.5c0.6,0.1,1.2,0.2,1.9,0.2\n		c1.8,0,2.6-0.5,2.6-1.6c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.4-0.9-0.6c-0.4-0.2-0.8-0.3-1.3-0.5c-0.5-0.1-1.1-0.3-1.8-0.5\n		c-0.8-0.2-1.5-0.4-2.1-0.7c-0.6-0.2-1.1-0.5-1.4-0.8c-0.4-0.3-0.7-0.7-0.9-1.1c-0.2-0.4-0.3-0.9-0.3-1.5c0-0.8,0.2-1.5,0.5-2.1\n		c0.3-0.6,0.7-1.1,1.3-1.5c0.6-0.4,1.2-0.7,1.9-0.9c0.7-0.2,1.5-0.3,2.3-0.3c1.2,0,2.2,0.2,3.2,0.5c1,0.3,1.8,0.7,2.6,1.2L77,9.9z\"\n		/>\n	<path fill=\"#414141\" d=\"M95.4,21.2V5.9h7c0.8,0,1.5,0.1,2.1,0.4c0.6,0.3,1.2,0.7,1.7,1.2c0.5,0.5,0.8,1,1.1,1.6\n		c0.3,0.6,0.4,1.2,0.4,1.8c0,0.6-0.1,1.3-0.4,1.9c-0.2,0.6-0.6,1.2-1,1.6c-0.4,0.5-1,0.9-1.6,1.1c-0.6,0.3-1.3,0.4-2.1,0.4h-3.9v5.1\n		H95.4z M98.6,13.5h3.7c0.6,0,1.1-0.2,1.5-0.7c0.4-0.4,0.6-1,0.6-1.8c0-0.4-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.5-0.8\n		c-0.2-0.2-0.4-0.4-0.7-0.5c-0.3-0.1-0.5-0.2-0.8-0.2h-3.6V13.5z\"/>\n	<path fill=\"#414141\" d=\"M113.6,24.8H2.4V2.3h111.2V24.8z M116,0H0v27h116V0z\"/>\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_notFound.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg viewBox=\"0 0 24 24\" with=\"24px\" height=\"24px\" fill=\"none\" stroke=\"#CCCCCC\">\n	<polygon  stroke-linejoin=\"round\" stroke-miterlimit=\"10\" points=\"12,0.6 1.5,23.4 22.5,23.4 	\"/>\n	<text transform=\"matrix(1 0 0 1 9.4685 21.1878)\" fill=\"#CCCCCC\" font-family=\"'MyanmarMN'\" font-size=\"17.3977\">!</text>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_organogram_thematic.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800px\" height=\"400px\" viewBox=\"0 0 137 100\">\n<text transform=\"matrix(1 0 0 1 10.4878 64.6427)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">Ch</tspan><tspan x=\"3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"3.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onic diseases</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_1_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_2_\">\n		<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"58.9\" clip-path=\"url(#SVGID_2_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 3.6304 46.9376)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">F</tspan><tspan x=\"1.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">om </tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ev</tspan><tspan x=\"8.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">alu</tspan><tspan x=\"12.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"13.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion </tspan><tspan x=\"18.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"19.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o action: epidermiologica</tspan><tspan x=\"47.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"48.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> studies, design and </tspan><tspan x=\"70.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ev</tspan><tspan x=\"73.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">alu</tspan><tspan x=\"76.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"78.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion </tspan><tspan x=\"83.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o</tspan><tspan x=\"84.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"85.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> i</tspan><tspan x=\"86.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"88.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"88.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">er</tspan><tspan x=\"91.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">v</tspan><tspan x=\"92.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"93.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"95.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tions and p</tspan><tspan x=\"107.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"108.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">og</tspan><tspan x=\"111.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"112.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ams, </tspan></text>\n<text transform=\"matrix(1 0 0 1 45.9458 50.1505)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">kn</tspan><tspan x=\"2.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o</tspan><tspan x=\"4.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">wledge t</tspan><tspan x=\"13.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"14.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ans</tspan><tspan x=\"18.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"19.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"20.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"21.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> and </tspan><tspan x=\"26.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"28.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">oope</tspan><tspan x=\"33.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"34.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"36\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_3_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_4_\">\n		<use xlink:href=\"#SVGID_3_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"43.2\" clip-path=\"url(#SVGID_4_)\" fill=\"none\" stroke=\"#414141\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"134.3\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 56.8828 62.2559)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">V</tspan><tspan x=\"1.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ulne</tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">able g</tspan><tspan x=\"14\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"14.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">oups</tspan></text>\n<text transform=\"matrix(1 0 0 1 51.6646 65.4698)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">(</tspan><tspan x=\"0.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">child</tspan><tspan x=\"6.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">en, elder</tspan><tspan x=\"16.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"17.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"18.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">, mig</tspan><tspan x=\"23.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"24.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"26\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"27.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ts)</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_5_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_6_\">\n		<use xlink:href=\"#SVGID_5_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"48.8\" y=\"58.9\" clip-path=\"url(#SVGID_6_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n	<rect x=\"48.8\" y=\"79\" clip-path=\"url(#SVGID_6_)\" fill=\"#446CB3\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 52.0874 83.0177)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">A</tspan><tspan x=\"1.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> </tspan><tspan x=\"2.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">f</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ocus on speciﬁc g</tspan><tspan x=\"22.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"23.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">oups </tspan></text>\n<text transform=\"matrix(1 0 0 1 59.229 86.2325)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">and </tspan><tspan x=\"4.9\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">onditions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_7_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_8_\">\n		<use xlink:href=\"#SVGID_7_\"  overflow=\"visible\"/>\n	</clipPath>\n	<rect x=\"48.8\" y=\"6.5\" clip-path=\"url(#SVGID_8_)\" fill=\"#446CB3\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 51.4746 10.6309)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">A</tspan><tspan x=\"1.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> li</tspan><tspan x=\"3.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">f</tspan><tspan x=\"4.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"5.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"6.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ourse perspecti</tspan><tspan x=\"23.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">v</tspan><tspan x=\"25\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e on </tspan></text>\n<text transform=\"matrix(1 0 0 1 55.8741 13.8438)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">health d</tspan><tspan x=\"9.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"10.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">t</tspan><tspan x=\"11.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ermina</tspan><tspan x=\"19.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"20.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ts</tspan></text>\n<text transform=\"matrix(1 0 0 1 104.1641 62.7325)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">I</tspan><tspan x=\"0.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"2.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ectious diseases</tspan></text>\n<text transform=\"matrix(1 0 0 1 110.7481 65.9454)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">(HI</tspan><tspan x=\"3.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">V</tspan><tspan x=\"4.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">,</tspan><tspan x=\"5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> </tspan><tspan x=\"5.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">TB)</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_9_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_10_\">\n		<use xlink:href=\"#SVGID_9_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"96.4\" y=\"58.9\" clip-path=\"url(#SVGID_10_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 111.9121 30.9708)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ealth </tspan><tspan x=\"7.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">s</tspan><tspan x=\"9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"10.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">s</tspan><tspan x=\"11.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"12.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ems </tspan></text>\n<text transform=\"matrix(1 0 0 1 110.544 34.1827)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">and o</tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ganiz</tspan><tspan x=\"13.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"14.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_11_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_12_\">\n		<use xlink:href=\"#SVGID_11_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"107.1\" y=\"27.2\" clip-path=\"url(#SVGID_12_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 75.6324 32.8399)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ealt</tspan><tspan x=\"5.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">h</tspan><tspan x=\"7.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"8.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> li</tspan><tspan x=\"10.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"11.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">estyles</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_13_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_14_\">\n		<use xlink:href=\"#SVGID_13_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"71.9\" y=\"27.2\" clip-path=\"url(#SVGID_14_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 40.1094 29.5772)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">O</tspan><tspan x=\"1.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">cup</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"8.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tiona</tspan><tspan x=\"14.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"14.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> and</tspan></text>\n<text transform=\"matrix(1 0 0 1 42.0772 32.7901)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"1.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">vi</tspan><tspan x=\"4.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"5.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onme</tspan><tspan x=\"12\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"13.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tal</tspan></text>\n<text transform=\"matrix(1 0 0 1 45.8184 36.004)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> haza</tspan><tspan x=\"5.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"6.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ds</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_15_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_16_\">\n		<use xlink:href=\"#SVGID_15_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"36.7\" y=\"27.2\" clip-path=\"url(#SVGID_16_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 6.168 30.9708)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">Socioe</tspan><tspan x=\"7.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"8.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onomic</tspan></text>\n<text transform=\"matrix(1 0 0 1 9.3467 34.1827)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"1.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onditions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_17_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_18_\">\n		<use xlink:href=\"#SVGID_17_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"27.2\" clip-path=\"url(#SVGID_18_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n	<rect x=\"96.4\" y=\"82.9\" clip-path=\"url(#SVGID_18_)\" fill=\"#414141\" width=\"39.4\" height=\"14.7\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 100.1407 86.338)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Public health g</tspan><tspan x=\"16.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ov</tspan><tspan x=\"19.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ernan</tspan><tspan x=\"25.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"27\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan></text>\n<text transform=\"matrix(1 0 0 1 102.7285 89.5499)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Financing, in</tspan><tspan x=\"14.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"16.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"18.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ti</tspan><tspan x=\"19.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">v</tspan><tspan x=\"21\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">es,</tspan></text>\n<text transform=\"matrix(1 0 0 1 100.7959 92.7637)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">manageme</tspan><tspan x=\"12.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"14.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">t, e</tspan><tspan x=\"17.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"18.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">onomic </tspan></text>\n<text transform=\"matrix(1 0 0 1 109.5127 95.9766)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ev</tspan><tspan x=\"2.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">alu</tspan><tspan x=\"6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">a</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tion</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_19_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_20_\">\n		<use xlink:href=\"#SVGID_19_\"  overflow=\"visible\"/>\n	</clipPath>\n	<rect x=\"2.4\" y=\"1.3\" clip-path=\"url(#SVGID_20_)\" fill=\"#414141\" width=\"39.4\" height=\"14.7\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 8.147 4.5343)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Public health </tspan><tspan x=\"15.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"15.9\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">esea</tspan><tspan x=\"21\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"21.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ch</tspan></text>\n<text transform=\"matrix(1 0 0 1 10.7784 7.7471)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ealth p</tspan><tspan x=\"9.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"10.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">om</tspan><tspan x=\"14\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">o</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tion, </tspan></text>\n<text transform=\"matrix(1 0 0 1 4.752 10.96)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">epidemiolog</tspan><tspan x=\"14.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">y</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">, o</tspan><tspan x=\"18\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"19.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">cup</tspan><tspan x=\"23.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">a</tspan><tspan x=\"24.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tional </tspan></text>\n<text transform=\"matrix(1 0 0 1 9.271 14.1739)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">health, globa</tspan><tspan x=\"14.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">l</tspan><tspan x=\"15.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> health</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_21_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_22_\">\n		<use xlink:href=\"#SVGID_21_\"  overflow=\"visible\"/>\n	</clipPath>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.5,16 \n		68.5,21.1 15.7,21.1 15.7,27.2 	\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.5,16 \n		68.5,21.1 121.2,21.1 121.2,27.2 	\"/>\n	\n		<line clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"51\" y1=\"21.1\" x2=\"51\" y2=\"27.2\"/>\n	\n		<line clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"86.2\" y1=\"27.2\" x2=\"86.2\" y2=\"21.1\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.3,79 \n		68.3,73.7 68.3,68.4 	\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"20.9,68.4 \n		20.9,73.7 68.3,73.7 116.1,73.7 116.1,68.4 	\"/>\n	<polygon clip-path=\"url(#SVGID_22_)\" fill=\"#414141\" points=\"71.1,41.6 68.5,39 65.8,41.6 	\"/>\n	<polygon clip-path=\"url(#SVGID_22_)\" fill=\"#414141\" points=\"65.8,54.3 68.5,57 71.1,54.3 	\"/>\n</g>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_pause.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M14,19.14H18V5.14H14M6,19.14H10V5.14H6V19.14Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_phone.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_pin.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n	<path d=\"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z\" />\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/members/associatedList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["app/scripts/templates/members/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"member__detail__column__email\">\n				<span>EMAIL:</span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.member_email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n			</div>\n		";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"member__detail__column__orcid\">\n				<span>ORCID:</span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.member_orcid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n			</div>\n		";
  return buffer;
  }

  buffer += "<a href=\"#membros\" class=\"member__detail__close\" id=\"detail-close\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_close", options) : helperMissing.call(depth0, "view", "icons/ic_close", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n<div class=\"member__detail__wrapper\">\n	<section class=\"member__detail__column member__detail__column--person\">\n		<div class=\"member__detail__thumbnail\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"> </div>\n\n		<h2 class=\"member__detail__name\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	</section>\n\n	<section class=\"member__detail__column member__detail__column--info\">\n		<p>";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.member_email), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.member_email), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</section>\n\n	<section class=\"member__detail__column member__detail__column--details\" id=\"member-publications\">\n	";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</section>\n\n	<section class=\"member__detail__column member__detail__column--details\" id=\"member-projects\">\n	";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</section>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/effectiveList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["app/scripts/templates/members/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h3 class=\"post-list__title\">Membros Efetivos</h3>\n<div id=\"effective-list\">\n	<div id=\"members-effective\" class=\"post-list__members__effective\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</div>\n\n<h3 class=\"post-list__title post-list__title--associated\">Membros Associados</h3>\n<div id=\"members-associated\" class=\"post-list__members__associated\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#membros/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	<div class=\"post-list__member__thumbnail\" \n	style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\n	</div>\n\n	<section class=\"post-list__member__content\">\n		\n\n		<h2 class=\"post-list__member__content__name\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	</section>\n</a>";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/memberProject.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"member__detail__article\">\n	\n	\n	<h5 class=\"member__detail__article__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n	<div class=\"member__detail__article__text\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</article>";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/memberProjects.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n<article class=\"member__detail__article\">\n	<p>Sem publicações para apresentar</p>\n</article>\n";
  }

  buffer += "<h2 class=\"member__detail__article__title\">PROJETOS</h2>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "===", 0, options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "===", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/memberPublication.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"member__detail__article\">\n	\n	\n	<h5 class=\"member__detail__article__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n	<div class=\"member__detail__article__text\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</article>";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/memberPublications.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n<article class=\"member__detail__article\">\n	<p>Sem publicações para apresentar</p>\n</article>\n";
  }

  buffer += "<h2 class=\"member__detail__article__title\">PUBLICAÇÔES</h2>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "===", 0, options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "===", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["app/scripts/templates/news/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#noticias\" class=\"close\">+</a>\n<div class=\"event__detail__wrapper\">\n	<section class=\"event__detail__column\">\n		<div class=\"post__thumbnail\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			<!-- <time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__date\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time> -->\n		</div>\n\n		<h2 class=\"event__detail__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	</section>\n	<section class=\"event__detail__column\">\n\n		<div class=\"content\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</section>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/news/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n<div class=\"post-list__header__no-content\">\n\n	<p>Pedimos desculpa, não foram encontrados resultados.</p>\n</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n<div id=\"load-more-posts\" class=\"load-more\">MAIS</div>\n";
  }

  buffer += "<div class=\"post-list__header\">\n	<div class=\"post-list__header__title\"></div>\n\n	<div class=\"post-list__header__search\">\n		<input id=\"post-list-search\" type=\"text\" placeholder=\"Pesquisar\">\n		<button id=\"news-search-button\" class=\"hidden\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_search", options) : helperMissing.call(depth0, "view", "icons/ic_search", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	</div>\n</div>\n\n<div id=\"post-list-container\" class=\"post-list__container\">\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "===", 0, options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "===", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/news/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<div class=\"post-list__new__thumbnail\"\nstyle=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\n\n	<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post-list__new__thumbnail__date\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time>\n</div>\n\n<section class=\"post-list__new__content\">\n	\n\n	<h2 class=\"post-list__new__content__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n	<div class=\"post-list__new__content__text\">";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n    <a href=\"#noticias/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post-list__new__content__button\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Saber mais</a>\n</section>\n";
  return buffer;
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
    + "</time>\n\n	<a href=\"#\" class=\"post__content__details__social\">56 partilhas</a>\n</div>\n\n<div id=\"excerpt\" class=\"detail__excerpt\">\n	<div class=\"detail__excerpt__wrapper\">\n		";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/posts/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>this is post index view</p>";
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

this["JST"]["app/scripts/templates/projects/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#projetos\" class=\"close\">+</a>\n<div class=\"project__detail__wrapper\">\n	<section class=\"project__detail__column\">\n		<div class=\"post__thumbnail\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			\n		</div>\n\n		<h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n		<h2>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n	</section>\n	<section class=\"project__detail__column\">\n\n		<div class=\"content\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</section>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/projects/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n<div id=\"load-more-posts\" class=\"load-more\">MAIS</div>\n";
  }

  buffer += "<div id=\"projects-container\" class=\"projects-container\"></div>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/projects/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\"";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program4(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#projetos/";
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
  buffer += "\"></a>\n\n<section class=\"post__content\">\n	\n\n	<a href=\"#\" class=\"post__content__author\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.nickname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n\n	<div class=\"post__content__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n	<div class=\"post__content__excerpt\">";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n	<a href=\"#projetos/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__btn\">mais</a>\n\n</section>\n\n<a href=\"#projetos\" class=\"post__category\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/publications/filters.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"tab\">Pesquisar por Autor</div>\n\n<select name=\"authors-list\" id=\"authors-list\" class=\"dropdown\">\n	<option value=\"all\" selected=\"selected\">todos</option>\n</select>\n<div id=\"search\" class=\"search\">Pesquisar</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/publications/filtersitem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  });

this["JST"]["app/scripts/templates/publications/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"post-list__header__title\"></div>\n<div id=\"publications-filter\" class=\"publications-filter\">\n	\n</div>\n<div id=\"publications-container\" class=\"publications-container\"></div>\n\n\n<div id=\"load-more-posts\" class=\"load-more\">MAIS</div>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/publications/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"home__section__publication__content\">\n	<div class=\"publication__item\">\n		<div class=\"publication__item__column\">\n			<h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n			<p>";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n			\n			<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time>\n		</div>\n		\n	</div>\n</div>\n";
  return buffer;
  });

return this["JST"];

});