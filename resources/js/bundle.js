
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var App = (function () {
	'use strict';

	function noop() {}

	function run(fn) {
		return fn();
	}

	function blankObject() {
		return Object.create(null);
	}

	function run_all(fns) {
		fns.forEach(run);
	}

	function is_function(thing) {
		return typeof thing === 'function';
	}

	function safe_not_equal(a, b) {
		return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function append(target, node) {
		target.appendChild(node);
	}

	function insert(target, node, anchor) {
		target.insertBefore(node, anchor);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function destroyEach(iterations, detach) {
		for (var i = 0; i < iterations.length; i += 1) {
			if (iterations[i]) iterations[i].d(detach);
		}
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function createComment() {
		return document.createComment('');
	}

	function setAttribute(node, attribute, value) {
		if (value == null) node.removeAttribute(attribute);
		else node.setAttribute(attribute, value);
	}

	function children (element) {
		return Array.from(element.childNodes);
	}

	function setData(text, data) {
		text.data = '' + data;
	}

	let outros;

	function group_outros() {
		outros = {
			remaining: 0,
			callbacks: []
		};
	}

	function check_outros() {
		if (!outros.remaining) {
			run_all(outros.callbacks);
		}
	}

	function on_outro(callback) {
		outros.callbacks.push(callback);
	}

	let current_component;

	function set_current_component(component) {
		current_component = component;
	}

	let dirty_components = [];

	let update_promise;
	const binding_callbacks = [];
	const render_callbacks = [];

	function schedule_update() {
		if (!update_promise) {
			update_promise = Promise.resolve();
			update_promise.then(flush);
		}
	}

	function add_render_callback(fn) {
		render_callbacks.push(fn);
	}

	function flush() {
		const seen_callbacks = new Set();

		do {
			// first, call beforeUpdate functions
			// and update components
			while (dirty_components.length) {
				const component = dirty_components.shift();
				set_current_component(component);
				update(component.$$);
			}

			while (binding_callbacks.length) binding_callbacks.shift()();

			// then, once components are updated, call
			// afterUpdate functions. This may cause
			// subsequent updates...
			while (render_callbacks.length) {
				const callback = render_callbacks.pop();
				if (!seen_callbacks.has(callback)) {
					callback();

					// ...so guard against infinite loops
					seen_callbacks.add(callback);
				}
			}
		} while (dirty_components.length);

		update_promise = null;
	}

	function update($$) {
		if ($$.fragment) {
			$$.update($$.dirty);
			run_all($$.before_render);
			$$.fragment.p($$.dirty, $$.ctx);
			$$.dirty = null;

			$$.after_render.forEach(add_render_callback);
		}
	}

	function mount_component(component, target, anchor) {
		const { fragment, on_mount, on_destroy, after_render } = component.$$;

		fragment.m(target, anchor);

		// onMount happens after the initial afterUpdate. Because
		// afterUpdate callbacks happen in reverse order (inner first)
		// we schedule onMount callbacks before afterUpdate callbacks
		add_render_callback(() => {
			const new_on_destroy = on_mount.map(run).filter(is_function);
			if (on_destroy) {
				on_destroy.push(...new_on_destroy);
			} else {
				// Edge case — component was destroyed immediately,
				// most likely as a result of a binding initialising
				run_all(new_on_destroy);
			}
			component.$$.on_mount = [];
		});

		after_render.forEach(add_render_callback);
	}

	function destroy(component, detach) {
		if (component.$$) {
			run_all(component.$$.on_destroy);
			component.$$.fragment.d(detach);

			// TODO null out other refs, including component.$$ (but need to
			// preserve final state?)
			component.$$.on_destroy = component.$$.fragment = null;
			component.$$.ctx = {};
		}
	}

	function make_dirty(component, key) {
		if (!component.$$.dirty) {
			dirty_components.push(component);
			schedule_update();
			component.$$.dirty = {};
		}
		component.$$.dirty[key] = true;
	}

	function init(component, options, instance, create_fragment, not_equal$$1) {
		const parent_component = current_component;
		set_current_component(component);

		const props = options.props || {};

		const $$ = component.$$ = {
			fragment: null,
			ctx: null,

			// state
			update: noop,
			not_equal: not_equal$$1,
			bound: blankObject(),

			// lifecycle
			on_mount: [],
			on_destroy: [],
			before_render: [],
			after_render: [],
			context: new Map(parent_component ? parent_component.$$.context : []),

			// everything else
			callbacks: blankObject(),
			dirty: null
		};

		let ready = false;

		$$.ctx = instance
			? instance(component, props, (key, value) => {
				if ($$.bound[key]) $$.bound[key](value);

				if ($$.ctx) {
					const changed = not_equal$$1(value, $$.ctx[key]);
					if (ready && changed) {
						make_dirty(component, key);
					}

					$$.ctx[key] = value;
					return changed;
				}
			})
			: props;

		$$.update();
		ready = true;
		run_all($$.before_render);
		$$.fragment = create_fragment($$.ctx);

		if (options.target) {
			if (options.hydrate) {
				$$.fragment.l(children(options.target));
			} else {
				$$.fragment.c();
			}

			if (options.intro && component.$$.fragment.i) component.$$.fragment.i();
			mount_component(component, options.target, options.anchor);
			flush();
		}

		set_current_component(parent_component);
	}

	class SvelteComponent {
		$destroy() {
			destroy(this, true);
			this.$destroy = noop;
		}

		$on(type, callback) {
			const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
			callbacks.push(callback);

			return () => {
				const index = callbacks.indexOf(callback);
				if (index !== -1) callbacks.splice(index, 1);
			};
		}

		$set() {
			// overridden by instance, if it has props
		}
	}

	/* src\navbar.html generated by Svelte v3.0.0-beta.3 */

	function create_fragment(ctx) {
		var nav;

		return {
			c() {
				nav = createElement("nav");
				nav.innerHTML = `<div class="navbar-brand" data-aos="zoom-out-down"><a class="navbar-item" href="#"><div class="logo js-logo">
			                ismaïl
			            </div></a>

			        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar"><span aria-hidden="true"></span>
			            <span aria-hidden="true"></span>
			            <span aria-hidden="true"></span></a></div>

			    <div id="navbar" class="navbar-menu" data-aos="zoom-out-down"><div class="navbar-start"><a href="#about-me" class="navbar-item is-tab js-scrollTo">
			                About me
			            </a>

			            <a href="#works" class="navbar-item is-tab js-scrollTo">
			                My works
			            </a>

			            <a href="https://www.ismailnguyen.com/docs/CV_Ismail-Nguyen.pdf" target="_blank" class="navbar-item is-tab">
			                Resumé
			            </a></div>

			        <div class="navbar-end"><div class="navbar-item"><div class="buttons"><a class="button is-light"><i class="fab fa-github"></i></a>

			                    <a class="button is-light"><i class="fab fa-twitter"></i></a>

			                    <a href="#get-in-touch" class="button is-primary is-light is-outlined js-scrollTo"><strong>Get in touch</strong></a></div></div></div></div>`;
				nav.className = "navbar is-transparent is-light";
				setAttribute(nav, "role", "navigation");
				setAttribute(nav, "aria-label", "main navigation");
			},

			m(target, anchor) {
				insert(target, nav, anchor);
			},

			p: noop,
			i: noop,
			o: noop,

			d(detach) {
				if (detach) {
					detachNode(nav);
				}
			}
		};
	}

	class Navbar extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, null, create_fragment, safe_not_equal);
		}
	}

	/* src\presentation.html generated by Svelte v3.0.0-beta.3 */

	function create_fragment$1(ctx) {
		var section;

		return {
			c() {
				section = createElement("section");
				section.innerHTML = `<div class="hero-body" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><div class="container has-text-left"><div class="columns"><div class="column"><h1 class="title is-1">Hey, I'm Ismaïl Nguyen.</h1>

			                    <h2 class="subtitle is-4"><span>&lt; ⁄ I'm a</span>
			                        <span class="typed-animation"></span>
			                        <span>&gt;</span></h2></div>

			                <div class="column"><div class="box"><article class="media"><div class="media-left"><figure class="image is-64x64"><img data-src="https://ih0.redbubble.net/image.293388391.7026/flat,1000x1000,075,f.jpg" alt="Image" class="lazyload"></figure></div>
			                            <div class="media-content"><div class="content"><p><strong>Leonardo da Vinci</strong> <small>@leonardoDaVinci</small> <small>520 years ago</small>
			                                        <br> Simplicity is the ultimate sophistication.
			                                    </p></div>
			                                <nav class="level is-mobile"><div class="level-left"><a class="level-item" aria-label="reply"><span class="icon is-small"><i class="fas fa-reply" aria-hidden="true"></i></span></a>
			                                        <a class="level-item" aria-label="retweet"><span class="icon is-small"><i class="fas fa-retweet" aria-hidden="true"></i></span></a>
			                                        <a class="level-item" aria-label="like"><span class="icon is-small"><i class="fas fa-heart" aria-hidden="true"></i></span></a></div></nav></div></article></div></div></div></div></div>`;
				section.className = "hero is-light is-fullheight-with-navbar";
			},

			m(target, anchor) {
				insert(target, section, anchor);
			},

			p: noop,
			i: noop,
			o: noop,

			d(detach) {
				if (detach) {
					detachNode(section);
				}
			}
		};
	}

	class Presentation extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, null, create_fragment$1, safe_not_equal);
		}
	}

	/* src\about-me.html generated by Svelte v3.0.0-beta.3 */

	function create_fragment$2(ctx) {
		var section;

		return {
			c() {
				section = createElement("section");
				section.innerHTML = `<div class="container" data-aos="zoom-in"><h1 class="title">Who am I ?</h1>

			        <blockquote>"I have no special talent. I am only passionately curious."</blockquote>
			        <blockquote>- A. Einstein</blockquote></div>`;
				section.id = "about-me";
				section.className = "section is-large has-text-centered has-background-light";
			},

			m(target, anchor) {
				insert(target, section, anchor);
			},

			p: noop,
			i: noop,
			o: noop,

			d(detach) {
				if (detach) {
					detachNode(section);
				}
			}
		};
	}

	class About_me extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, null, create_fragment$2, safe_not_equal);
		}
	}

	/* src\work-modal.html generated by Svelte v3.0.0-beta.3 */

	function get_each_context(ctx, list, i) {
		const child_ctx = Object.create(ctx);
		child_ctx.tag = list[i];
		return child_ctx;
	}

	// (10:24) {#if work.primaryImage}
	function create_if_block_6(ctx) {
		var div, figure, img, img_data_src_value, img_alt_value;

		return {
			c() {
				div = createElement("div");
				figure = createElement("figure");
				img = createElement("img");
				img.dataset.src = img_data_src_value = ctx.work.primaryImage.src;
				img.alt = img_alt_value = ctx.work.primaryImage.alt;
				img.className = "lazyload";
				figure.className = "image is-square";
				div.className = "column";
			},

			m(target, anchor) {
				insert(target, div, anchor);
				append(div, figure);
				append(figure, img);
			},

			p(changed, ctx) {
				if ((changed.work) && img_data_src_value !== (img_data_src_value = ctx.work.primaryImage.src)) {
					img.dataset.src = img_data_src_value;
				}

				if ((changed.work) && img_alt_value !== (img_alt_value = ctx.work.primaryImage.alt)) {
					img.alt = img_alt_value;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}
			}
		};
	}

	// (21:32) {#if work.secondaryImage}
	function create_if_block_5(ctx) {
		var div, figure, img, img_data_src_value, img_alt_value;

		return {
			c() {
				div = createElement("div");
				figure = createElement("figure");
				img = createElement("img");
				img.dataset.src = img_data_src_value = ctx.work.secondaryImage.src;
				img.alt = img_alt_value = ctx.work.secondaryImage.alt;
				img.className = "lazyload";
				figure.className = "image is-48x48";
				div.className = "media-left";
			},

			m(target, anchor) {
				insert(target, div, anchor);
				append(div, figure);
				append(figure, img);
			},

			p(changed, ctx) {
				if ((changed.work) && img_data_src_value !== (img_data_src_value = ctx.work.secondaryImage.src)) {
					img.dataset.src = img_data_src_value;
				}

				if ((changed.work) && img_alt_value !== (img_alt_value = ctx.work.secondaryImage.alt)) {
					img.alt = img_alt_value;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}
			}
		};
	}

	// (31:36) {#if work.tags}
	function create_if_block_4(ctx) {
		var div;

		var each_value = ctx.work.tags;

		var each_blocks = [];

		for (var i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
		}

		return {
			c() {
				div = createElement("div");

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}
				div.className = "tags";
			},

			m(target, anchor) {
				insert(target, div, anchor);

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(div, null);
				}
			},

			p(changed, ctx) {
				if (changed.work) {
					each_value = ctx.work.tags;

					for (var i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(changed, child_ctx);
						} else {
							each_blocks[i] = create_each_block(child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(div, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}
					each_blocks.length = each_value.length;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}

				destroyEach(each_blocks, detach);
			}
		};
	}

	// (33:44) {#each work.tags as tag}
	function create_each_block(ctx) {
		var span, text_value = ctx.tag, text;

		return {
			c() {
				span = createElement("span");
				text = createText(text_value);
				span.className = "tag is-rounded is-link has-text-weight-bold";
			},

			m(target, anchor) {
				insert(target, span, anchor);
				append(span, text);
			},

			p(changed, ctx) {
				if ((changed.work) && text_value !== (text_value = ctx.tag)) {
					setData(text, text_value);
				}
			},

			d(detach) {
				if (detach) {
					detachNode(span);
				}
			}
		};
	}

	// (50:63) 
	function create_if_block_3(ctx) {
		var text_value = ctx.work.subTitle.text, text;

		return {
			c() {
				text = createText(text_value);
			},

			m(target, anchor) {
				insert(target, text, anchor);
			},

			p(changed, ctx) {
				if ((changed.work) && text_value !== (text_value = ctx.work.subTitle.text)) {
					setData(text, text_value);
				}
			},

			d(detach) {
				if (detach) {
					detachNode(text);
				}
			}
		};
	}

	// (46:40) {#if work.subTitle && work.subTitle.link}
	function create_if_block_2(ctx) {
		var a, text_value = ctx.work.subTitle.text, text, a_href_value;

		return {
			c() {
				a = createElement("a");
				text = createText(text_value);
				a.href = a_href_value = ctx.work.subTitle.link;
				a.target = "_blank";
				a.rel = "noopener";
			},

			m(target, anchor) {
				insert(target, a, anchor);
				append(a, text);
			},

			p(changed, ctx) {
				if ((changed.work) && text_value !== (text_value = ctx.work.subTitle.text)) {
					setData(text, text_value);
				}

				if ((changed.work) && a_href_value !== (a_href_value = ctx.work.subTitle.link)) {
					a.href = a_href_value;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(a);
				}
			}
		};
	}

	// (61:40) {#if work.readMoreLink}
	function create_if_block_1(ctx) {
		var a, text, a_href_value;

		return {
			c() {
				a = createElement("a");
				text = createText("Read more");
				a.href = a_href_value = ctx.work.readMoreLink;
				a.target = "_blank";
				a.className = "button is-link is-light";
				a.rel = "noopener";
			},

			m(target, anchor) {
				insert(target, a, anchor);
				append(a, text);
			},

			p(changed, ctx) {
				if ((changed.work) && a_href_value !== (a_href_value = ctx.work.readMoreLink)) {
					a.href = a_href_value;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(a);
				}
			}
		};
	}

	// (67:40) {#if work.subTitle && work.subTitle.link}
	function create_if_block(ctx) {
		var a, text, a_href_value;

		return {
			c() {
				a = createElement("a");
				text = createText("View project");
				a.href = a_href_value = ctx.work.subTitle.link;
				a.target = "_blank";
				a.className = "button is-link is-light";
				a.rel = "noopener";
			},

			m(target, anchor) {
				insert(target, a, anchor);
				append(a, text);
			},

			p(changed, ctx) {
				if ((changed.work) && a_href_value !== (a_href_value = ctx.work.subTitle.link)) {
					a.href = a_href_value;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(a);
				}
			}
		};
	}

	function create_fragment$3(ctx) {
		var div10, div0, text0, div9, section, div8, div7, div6, text1, div5, div4, text2, div3, text3, p0, text4_value = ctx.work.title, text4, text5, p1, text6, div1, raw_value = ctx.work.description, text7, div2, text8, text9, button;

		var if_block0 = (ctx.work.primaryImage) && create_if_block_6(ctx);

		var if_block1 = (ctx.work.secondaryImage) && create_if_block_5(ctx);

		var if_block2 = (ctx.work.tags) && create_if_block_4(ctx);

		function select_block_type(ctx) {
			if (ctx.work.subTitle && ctx.work.subTitle.link) return create_if_block_2;
			if (ctx.work.subTitle) return create_if_block_3;
		}

		var current_block_type = select_block_type(ctx);
		var if_block3 = current_block_type && current_block_type(ctx);

		var if_block4 = (ctx.work.readMoreLink) && create_if_block_1(ctx);

		var if_block5 = (ctx.work.subTitle && ctx.work.subTitle.link) && create_if_block(ctx);

		return {
			c() {
				div10 = createElement("div");
				div0 = createElement("div");
				text0 = createText("\r\n\r\n    ");
				div9 = createElement("div");
				section = createElement("section");
				div8 = createElement("div");
				div7 = createElement("div");
				div6 = createElement("div");
				if (if_block0) if_block0.c();
				text1 = createText("\r\n\r\n                        ");
				div5 = createElement("div");
				div4 = createElement("div");
				if (if_block1) if_block1.c();
				text2 = createText("\r\n\r\n                                ");
				div3 = createElement("div");
				if (if_block2) if_block2.c();
				text3 = createText("\r\n\r\n                                    ");
				p0 = createElement("p");
				text4 = createText(text4_value);
				text5 = createText("\r\n\r\n                                    ");
				p1 = createElement("p");
				if (if_block3) if_block3.c();
				text6 = createText("\r\n\r\n                                    ");
				div1 = createElement("div");
				text7 = createText("\r\n                                    \r\n                                    ");
				div2 = createElement("div");
				if (if_block4) if_block4.c();
				text8 = createText("\r\n\r\n                                        ");
				if (if_block5) if_block5.c();
				text9 = createText("\r\n\r\n    ");
				button = createElement("button");
				div0.className = "modal-background";
				p0.className = "title is-4 has-text-white";
				p1.className = "subtitle is-6";
				div1.className = "content is-medium has-text-white has-text-justified";
				div2.className = "buttons";
				div3.className = "media-content has-text-light";
				div4.className = "media";
				div5.className = "column ";
				div6.className = "columns is-vcentered";
				div7.className = "container is-fluid";
				div8.className = "hero-body";
				section.className = "hero has-background-dark is-fullheight";
				div9.className = "modal-content";
				button.className = "modal-close has-background-white has-text-dark is-large";
				setAttribute(button, "aria-label", "close");
				div10.id = ctx.modalId;
				div10.className = "modal modal-full-screen modal-fx-slideBottom";
			},

			m(target, anchor) {
				insert(target, div10, anchor);
				append(div10, div0);
				append(div10, text0);
				append(div10, div9);
				append(div9, section);
				append(section, div8);
				append(div8, div7);
				append(div7, div6);
				if (if_block0) if_block0.m(div6, null);
				append(div6, text1);
				append(div6, div5);
				append(div5, div4);
				if (if_block1) if_block1.m(div4, null);
				append(div4, text2);
				append(div4, div3);
				if (if_block2) if_block2.m(div3, null);
				append(div3, text3);
				append(div3, p0);
				append(p0, text4);
				append(div3, text5);
				append(div3, p1);
				if (if_block3) if_block3.m(p1, null);
				append(div3, text6);
				append(div3, div1);
				div1.innerHTML = raw_value;
				append(div3, text7);
				append(div3, div2);
				if (if_block4) if_block4.m(div2, null);
				append(div2, text8);
				if (if_block5) if_block5.m(div2, null);
				append(div10, text9);
				append(div10, button);
			},

			p(changed, ctx) {
				if (ctx.work.primaryImage) {
					if (if_block0) {
						if_block0.p(changed, ctx);
					} else {
						if_block0 = create_if_block_6(ctx);
						if_block0.c();
						if_block0.m(div6, text1);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (ctx.work.secondaryImage) {
					if (if_block1) {
						if_block1.p(changed, ctx);
					} else {
						if_block1 = create_if_block_5(ctx);
						if_block1.c();
						if_block1.m(div4, text2);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}

				if (ctx.work.tags) {
					if (if_block2) {
						if_block2.p(changed, ctx);
					} else {
						if_block2 = create_if_block_4(ctx);
						if_block2.c();
						if_block2.m(div3, text3);
					}
				} else if (if_block2) {
					if_block2.d(1);
					if_block2 = null;
				}

				if ((changed.work) && text4_value !== (text4_value = ctx.work.title)) {
					setData(text4, text4_value);
				}

				if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block3) {
					if_block3.p(changed, ctx);
				} else {
					if (if_block3) if_block3.d(1);
					if_block3 = current_block_type && current_block_type(ctx);
					if (if_block3) {
						if_block3.c();
						if_block3.m(p1, null);
					}
				}

				if ((changed.work) && raw_value !== (raw_value = ctx.work.description)) {
					div1.innerHTML = raw_value;
				}

				if (ctx.work.readMoreLink) {
					if (if_block4) {
						if_block4.p(changed, ctx);
					} else {
						if_block4 = create_if_block_1(ctx);
						if_block4.c();
						if_block4.m(div2, text8);
					}
				} else if (if_block4) {
					if_block4.d(1);
					if_block4 = null;
				}

				if (ctx.work.subTitle && ctx.work.subTitle.link) {
					if (if_block5) {
						if_block5.p(changed, ctx);
					} else {
						if_block5 = create_if_block(ctx);
						if_block5.c();
						if_block5.m(div2, null);
					}
				} else if (if_block5) {
					if_block5.d(1);
					if_block5 = null;
				}

				if (changed.modalId) {
					div10.id = ctx.modalId;
				}
			},

			i: noop,
			o: noop,

			d(detach) {
				if (detach) {
					detachNode(div10);
				}

				if (if_block0) if_block0.d();
				if (if_block1) if_block1.d();
				if (if_block2) if_block2.d();
				if (if_block3) if_block3.d();
				if (if_block4) if_block4.d();
				if (if_block5) if_block5.d();
			}
		};
	}

	function instance($$self, $$props, $$invalidate) {
		let { modalId, work } = $$props;

		$$self.$set = $$props => {
			if ('modalId' in $$props) $$invalidate('modalId', modalId = $$props.modalId);
			if ('work' in $$props) $$invalidate('work', work = $$props.work);
		};

		return { modalId, work };
	}

	class Work_modal extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, instance, create_fragment$3, safe_not_equal);
		}

		get modalId() {
			return this.$$.ctx.modalId;
		}

		set modalId(modalId) {
			this.$set({ modalId });
			flush();
		}

		get work() {
			return this.$$.ctx.work;
		}

		set work(work) {
			this.$set({ work });
			flush();
		}
	}

	/* src\my-works.html generated by Svelte v3.0.0-beta.3 */

	function get_each_context$1(ctx, list, i) {
		const child_ctx = Object.create(ctx);
		child_ctx.work = list[i];
		child_ctx.index = i;
		return child_ctx;
	}

	function get_each_context_1(ctx, list, i) {
		const child_ctx = Object.create(ctx);
		child_ctx.work = list[i];
		child_ctx.index = i;
		return child_ctx;
	}

	// (11:24) {#if work.primaryImage}
	function create_if_block_7(ctx) {
		var div, figure, img, img_data_src_value, img_alt_value;

		return {
			c() {
				div = createElement("div");
				figure = createElement("figure");
				img = createElement("img");
				img.dataset.src = img_data_src_value = ctx.work.primaryImage.src;
				img.alt = img_alt_value = ctx.work.primaryImage.alt;
				img.className = "lazyload";
				figure.className = "image is-4by3";
				div.className = "card-image";
			},

			m(target, anchor) {
				insert(target, div, anchor);
				append(div, figure);
				append(figure, img);
			},

			p: noop,

			d(detach) {
				if (detach) {
					detachNode(div);
				}
			}
		};
	}

	// (22:32) {#if work.secondaryImage}
	function create_if_block_6$1(ctx) {
		var div, figure, img, img_data_src_value, img_alt_value;

		return {
			c() {
				div = createElement("div");
				figure = createElement("figure");
				img = createElement("img");
				img.dataset.src = img_data_src_value = ctx.work.secondaryImage.src;
				img.alt = img_alt_value = ctx.work.secondaryImage.alt;
				img.className = "lazyload";
				figure.className = "image is-48x48";
				div.className = "media-left";
			},

			m(target, anchor) {
				insert(target, div, anchor);
				append(div, figure);
				append(figure, img);
			},

			p: noop,

			d(detach) {
				if (detach) {
					detachNode(div);
				}
			}
		};
	}

	// (33:36) {#if work.subTitle}
	function create_if_block_4$1(ctx) {
		var p;

		function select_block_type(ctx) {
			if (ctx.work.subTitle.link) return create_if_block_5$1;
			return create_else_block;
		}

		var current_block_type = select_block_type(ctx);
		var if_block = current_block_type(ctx);

		return {
			c() {
				p = createElement("p");
				if_block.c();
				p.className = "subtitle is-6";
			},

			m(target, anchor) {
				insert(target, p, anchor);
				if_block.m(p, null);
			},

			p(changed, ctx) {
				if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block.d(1);
					if_block = current_block_type(ctx);
					if (if_block) {
						if_block.c();
						if_block.m(p, null);
					}
				}
			},

			d(detach) {
				if (detach) {
					detachNode(p);
				}

				if_block.d();
			}
		};
	}

	// (39:44) {:else}
	function create_else_block(ctx) {
		var text_value = ctx.work.subTitle.text, text;

		return {
			c() {
				text = createText(text_value);
			},

			m(target, anchor) {
				insert(target, text, anchor);
			},

			p: noop,

			d(detach) {
				if (detach) {
					detachNode(text);
				}
			}
		};
	}

	// (35:44) {#if work.subTitle.link}
	function create_if_block_5$1(ctx) {
		var a, text_value = ctx.work.subTitle.text, text, a_href_value;

		return {
			c() {
				a = createElement("a");
				text = createText(text_value);
				a.href = a_href_value = ctx.work.subTitle.link;
				a.target = "_blank";
				a.rel = "noopener";
			},

			m(target, anchor) {
				insert(target, a, anchor);
				append(a, text);
			},

			p: noop,

			d(detach) {
				if (detach) {
					detachNode(a);
				}
			}
		};
	}

	// (49:24) {#if work.readMoreLink}
	function create_if_block$1(ctx) {
		var footer, p, span, a, text0, a_href_value, text1;

		var if_block = (ctx.work.socialShare) && create_if_block_1$1(ctx);

		return {
			c() {
				footer = createElement("footer");
				p = createElement("p");
				span = createElement("span");
				a = createElement("a");
				text0 = createText("Read");
				text1 = createText("\r\n                               \r\n                                ");
				if (if_block) if_block.c();
				a.href = a_href_value = ctx.work.readMoreLink;
				a.target = "_blank";
				a.rel = "noopener";
				p.className = "card-footer-item";
				footer.className = "card-footer";
			},

			m(target, anchor) {
				insert(target, footer, anchor);
				append(footer, p);
				append(p, span);
				append(span, a);
				append(a, text0);
				append(footer, text1);
				if (if_block) if_block.m(footer, null);
			},

			p(changed, ctx) {
				if (ctx.work.socialShare) {
					if (if_block) {
						if_block.p(changed, ctx);
					} else {
						if_block = create_if_block_1$1(ctx);
						if_block.c();
						if_block.m(footer, null);
					}
				} else if (if_block) {
					if_block.d(1);
					if_block = null;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(footer);
				}

				if (if_block) if_block.d();
			}
		};
	}

	// (57:32) {#if work.socialShare}
	function create_if_block_1$1(ctx) {
		var text, if_block1_anchor;

		var if_block0 = (ctx.work.socialShare.twitter) && create_if_block_3$1(ctx);

		var if_block1 = (ctx.work.socialShare.linkedIn) && create_if_block_2$1(ctx);

		return {
			c() {
				if (if_block0) if_block0.c();
				text = createText("\r\n\r\n                                    ");
				if (if_block1) if_block1.c();
				if_block1_anchor = createComment();
			},

			m(target, anchor) {
				if (if_block0) if_block0.m(target, anchor);
				insert(target, text, anchor);
				if (if_block1) if_block1.m(target, anchor);
				insert(target, if_block1_anchor, anchor);
			},

			p(changed, ctx) {
				if (ctx.work.socialShare.twitter) {
					if (if_block0) {
						if_block0.p(changed, ctx);
					} else {
						if_block0 = create_if_block_3$1(ctx);
						if_block0.c();
						if_block0.m(text.parentNode, text);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (ctx.work.socialShare.linkedIn) {
					if (if_block1) {
						if_block1.p(changed, ctx);
					} else {
						if_block1 = create_if_block_2$1(ctx);
						if_block1.c();
						if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}
			},

			d(detach) {
				if (if_block0) if_block0.d(detach);

				if (detach) {
					detachNode(text);
				}

				if (if_block1) if_block1.d(detach);

				if (detach) {
					detachNode(if_block1_anchor);
				}
			}
		};
	}

	// (58:36) {#if work.socialShare.twitter}
	function create_if_block_3$1(ctx) {
		var p, span1, a, span0, a_href_value;

		return {
			c() {
				p = createElement("p");
				span1 = createElement("span");
				a = createElement("a");
				span0 = createElement("span");
				span0.innerHTML = `<i class="fab fa-twitter"></i>`;
				span0.className = "icon";
				a.className = "button is-white is-small";
				a.href = a_href_value = twitterShareLink(ctx.work);
				a.target = "_blank";
				a.rel = "noopener";
				setAttribute(a, "aria-label", "Share on Twitter");
				p.className = "card-footer-item";
			},

			m(target, anchor) {
				insert(target, p, anchor);
				append(p, span1);
				append(span1, a);
				append(a, span0);
			},

			p: noop,

			d(detach) {
				if (detach) {
					detachNode(p);
				}
			}
		};
	}

	// (70:36) {#if work.socialShare.linkedIn}
	function create_if_block_2$1(ctx) {
		var p, span1, a, span0, a_href_value;

		return {
			c() {
				p = createElement("p");
				span1 = createElement("span");
				a = createElement("a");
				span0 = createElement("span");
				span0.innerHTML = `<i class="fab fa-linkedin"></i>`;
				span0.className = "icon";
				a.className = "button is-white is-small";
				a.href = a_href_value = linkedInShareLink(ctx.work);
				a.target = "_blank";
				a.rel = "noopener";
				setAttribute(a, "aria-label", "Share on LinkedIn");
				p.className = "card-footer-item";
			},

			m(target, anchor) {
				insert(target, p, anchor);
				append(p, span1);
				append(span1, a);
				append(a, span0);
			},

			p: noop,

			d(detach) {
				if (detach) {
					detachNode(p);
				}
			}
		};
	}

	// (7:12) {#each works as work, index}
	function create_each_block_1(ctx) {
		var div4, div3, text0, div2, div1, text1, div0, p, text2_value = ctx.work.title, text2, text3, text4;

		var if_block0 = (ctx.work.primaryImage) && create_if_block_7(ctx);

		var if_block1 = (ctx.work.secondaryImage) && create_if_block_6$1(ctx);

		var if_block2 = (ctx.work.subTitle) && create_if_block_4$1(ctx);

		var if_block3 = (ctx.work.readMoreLink) && create_if_block$1(ctx);

		return {
			c() {
				div4 = createElement("div");
				div3 = createElement("div");
				if (if_block0) if_block0.c();
				text0 = createText("\r\n\r\n                        ");
				div2 = createElement("div");
				div1 = createElement("div");
				if (if_block1) if_block1.c();
				text1 = createText("\r\n\r\n                                ");
				div0 = createElement("div");
				p = createElement("p");
				text2 = createText(text2_value);
				text3 = createText("\r\n                                    \r\n                                    ");
				if (if_block2) if_block2.c();
				text4 = createText("\r\n                        \r\n                        ");
				if (if_block3) if_block3.c();
				p.className = "title is-4";
				div0.className = "media-content";
				div1.className = "media";
				div2.className = "card-content";
				div3.className = "card work-item modal-link";
				div3.dataset.target = "work-modal-" + ctx.index;
				div4.className = "column";
			},

			m(target, anchor) {
				insert(target, div4, anchor);
				append(div4, div3);
				if (if_block0) if_block0.m(div3, null);
				append(div3, text0);
				append(div3, div2);
				append(div2, div1);
				if (if_block1) if_block1.m(div1, null);
				append(div1, text1);
				append(div1, div0);
				append(div0, p);
				append(p, text2);
				append(div0, text3);
				if (if_block2) if_block2.m(div0, null);
				append(div3, text4);
				if (if_block3) if_block3.m(div3, null);
			},

			p(changed, ctx) {
				if (ctx.work.primaryImage) {
					if (if_block0) {
						if_block0.p(changed, ctx);
					} else {
						if_block0 = create_if_block_7(ctx);
						if_block0.c();
						if_block0.m(div3, text0);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (ctx.work.secondaryImage) {
					if (if_block1) {
						if_block1.p(changed, ctx);
					} else {
						if_block1 = create_if_block_6$1(ctx);
						if_block1.c();
						if_block1.m(div1, text1);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}

				if (ctx.work.subTitle) {
					if (if_block2) {
						if_block2.p(changed, ctx);
					} else {
						if_block2 = create_if_block_4$1(ctx);
						if_block2.c();
						if_block2.m(div0, null);
					}
				} else if (if_block2) {
					if_block2.d(1);
					if_block2 = null;
				}

				if (ctx.work.readMoreLink) {
					if (if_block3) {
						if_block3.p(changed, ctx);
					} else {
						if_block3 = create_if_block$1(ctx);
						if_block3.c();
						if_block3.m(div3, null);
					}
				} else if (if_block3) {
					if_block3.d(1);
					if_block3 = null;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div4);
				}

				if (if_block0) if_block0.d();
				if (if_block1) if_block1.d();
				if (if_block2) if_block2.d();
				if (if_block3) if_block3.d();
			}
		};
	}

	// (94:0) {#each works as work, index}
	function create_each_block$1(ctx) {
		var current;

		var workmodal = new Work_modal({
			props: {
			modalId: "work-modal-" + ctx.index,
			work: ctx.work
		}
		});

		return {
			c() {
				workmodal.$$.fragment.c();
			},

			m(target, anchor) {
				mount_component(workmodal, target, anchor);
				current = true;
			},

			p(changed, ctx) {
				var workmodal_changes = {};
				if (changed.works) workmodal_changes.work = ctx.work;
				workmodal.$set(workmodal_changes);
			},

			i(local) {
				if (current) return;
				workmodal.$$.fragment.i(local);

				current = true;
			},

			o(local) {
				workmodal.$$.fragment.o(local);
				current = false;
			},

			d(detach) {
				workmodal.$destroy(detach);
			}
		};
	}

	function create_fragment$4(ctx) {
		var section, div1, h2, text1, div0, text2, each1_anchor, current;

		var each_value_1 = ctx.works;

		var each_blocks_1 = [];

		for (var i = 0; i < each_value_1.length; i += 1) {
			each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
		}

		var each_value = ctx.works;

		var each_blocks = [];

		for (var i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
		}

		function outroBlock(i, detach, local) {
			if (each_blocks[i]) {
				if (detach) {
					on_outro(() => {
						each_blocks[i].d(detach);
						each_blocks[i] = null;
					});
				}

				each_blocks[i].o(local);
			}
		}

		return {
			c() {
				section = createElement("section");
				div1 = createElement("div");
				h2 = createElement("h2");
				h2.textContent = "Works";
				text1 = createText("\r\n\r\n        ");
				div0 = createElement("div");

				for (var i = 0; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].c();
				}

				text2 = createText("\r\n\r\n");

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				each1_anchor = createComment();
				h2.className = "title";
				div0.id = "works-carousel";
				div0.className = "columns is-vcentered carousel has-dark-arrows";
				div1.className = "container";
				div1.dataset.aos = "fade-left";
				div1.dataset.aosDuration = "3000";
				section.id = "works";
				section.className = "section has-background-light";
			},

			m(target, anchor) {
				insert(target, section, anchor);
				append(section, div1);
				append(div1, h2);
				append(div1, text1);
				append(div1, div0);

				for (var i = 0; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].m(div0, null);
				}

				insert(target, text2, anchor);

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(target, anchor);
				}

				insert(target, each1_anchor, anchor);
				current = true;
			},

			p(changed, ctx) {
				if (changed.works || changed.linkedInShareLink || changed.twitterShareLink) {
					each_value_1 = ctx.works;

					for (var i = 0; i < each_value_1.length; i += 1) {
						const child_ctx = get_each_context_1(ctx, each_value_1, i);

						if (each_blocks_1[i]) {
							each_blocks_1[i].p(changed, child_ctx);
						} else {
							each_blocks_1[i] = create_each_block_1(child_ctx);
							each_blocks_1[i].c();
							each_blocks_1[i].m(div0, null);
						}
					}

					for (; i < each_blocks_1.length; i += 1) {
						each_blocks_1[i].d(1);
					}
					each_blocks_1.length = each_value_1.length;
				}

				if (changed.works) {
					each_value = ctx.works;

					for (var i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context$1(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(changed, child_ctx);
							each_blocks[i].i(1);
						} else {
							each_blocks[i] = create_each_block$1(child_ctx);
							each_blocks[i].c();
							each_blocks[i].i(1);
							each_blocks[i].m(each1_anchor.parentNode, each1_anchor);
						}
					}

					group_outros();
					for (; i < each_blocks.length; i += 1) outroBlock(i, 1, 1);
					check_outros();
				}
			},

			i(local) {
				if (current) return;
				for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

				current = true;
			},

			o(local) {
				each_blocks = each_blocks.filter(Boolean);
				for (let i = 0; i < each_blocks.length; i += 1) outroBlock(i, 0);

				current = false;
			},

			d(detach) {
				if (detach) {
					detachNode(section);
				}

				destroyEach(each_blocks_1, detach);

				if (detach) {
					detachNode(text2);
				}

				destroyEach(each_blocks, detach);

				if (detach) {
					detachNode(each1_anchor);
				}
			}
		};
	}

	function twitterShareLink (work) {
	    return 'https://twitter.com/intent/tweet/'
	            + '?text=' + work.title
	            + '&url=' + work.readMoreLink;
	}

	function linkedInShareLink (work) {
	    return 'https://www.linkedin.com/shareArticle?mini=true'
	    + '&url=' + work.readMoreLink
	    + '&title=' + work.title
	    + '&source=https://www.ismailnguyen.com';
	}

	function instance$1($$self) {
		

	    const works = [
	        {
	          primaryImage: {
	              src: './resources/images/works/ncrafts-pwa.webp',
	              alt: 'NCrafts PWA'
	          },
	          secondaryImage: {
	              src: 'https://pbs.twimg.com/profile_images/1065610855604252672/q3HvTFdY_400x400.jpg',
	              alt: 'NewCrafts'
	          },
	          title: 'NewCrafts',
	          subTitle: {
	              text: 'app.ncrafts.io',
	              link: 'https://app.ncrafts.io/'
	          },
	          description: '',
	          tags: [
	              'Vue JS',
	              'PWA',
	              'Heroku'
	            ]
	        },
	        {
	          title: 'Feedback-storming : Event Storming of feedback ?',
	          subTitle: {
	              text: 'Event storming revisited to collect feedbacks'
	          },
	          readMoreLink: 'https://github.com/ismailnguyen/feedback-storming/',
	          socialShare: {
	              twitter: true,
	              linkedIn: true
	          },
	          description: `
            <h1 class="title has-text-white" class="title">Why ?</h1>
            <p>
                Collect feedback Initiate to Event Storming
            </p>

            <h1 class="title has-text-white">How ?</h1>
            <p>
                Organize a "revisited" storming event session based on participants' feedback.
            </p>

            <h1 class="title has-text-white">What ?</h1>
            <p>
                Paste "event" post-it notes to mark each event experienced by the participants during the session, then paste "question" post-it notes on the questions that everyone asked themselves, paste "idea" post-it notes for each idea or area of improvement. All this while respecting the timeline with an event that marks the beginning of the session and one for the end of the session.
            </p>

            <h1 class="title has-text-white">When ?</h1>
            <p>
                At the end of an event (ceremony, presentation, workshop, training,...).
            </p>
          `,
	          tags: [
	              'Event Storming',
	              'Feedback'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/ncrafts-training.webp',
	              alt: 'NewCrafts Training'
	          },
	          secondaryImage: {
	              src: 'https://pbs.twimg.com/profile_images/1065610855604252672/q3HvTFdY_400x400.jpg',
	              alt: 'NewCrafts'
	          },
	          title: 'NewCrafts Trainings',
	          subTitle: {
	              text: 'training.ncrafts.io',
	              link: 'https://training.ncrafts.io/'
	          },
	          description: '',
	          tags: [
	              'HTML',
	              'CSS',
	              'Azure'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/crafter-journey.webp',
	              alt: `A Software Crafter's Journey`
	          },
	          secondaryImage: {
	              src: 'https://la-combe-du-lion-vert.fr/wp-content/uploads/2016/11/logo_La_Combe_du_Lion_Vert_small.png',
	              alt: 'La Combe du Lion Vert'
	          },
	          title: `A Software Crafter's Journey`,
	          subTitle: {
	              text: 'a-software-crafter-s-journey.now.sh',
	              link: 'https://a-software-crafter-s-journey.now.sh/'
	          },
	          description: '',
	          tags: [
	              'React JS',
	              'PWA',
	              'Firebase'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/application-weekend.webp',
	              alt: `Comment j'ai crée une application en un week-end`
	          },
	          title: `“Comment j'ai crée une application en un week-end”`,
	          description: '',
	          readMoreLink: 'https://docs.google.com/presentation/d/14sLubBl04_m547yxraSP1mO-_R5Bf9ClwuyX9s-TjPs/',
	          socialShare: {
	            twitter: true,
	            linkedIn: true
	          },
	          tags: [
	              'Vue JS',
	              'PWA',
	              'Heroku'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/agile-france-pwa.webp',
	              alt: 'Agile France PWA'
	          },
	          secondaryImage: {
	              src: 'https://agile-france.web.app/assets/img/favicon-96x96.png',
	              alt: 'Agile France'
	          },
	          title: 'Agile France',
	          subTitle: {
	              text: 'agile-france.web.app',
	              link: 'https://agile-france.web.app/'
	          },
	          description: '',
	          tags: [
	              'React JS',
	              'PWA',
	              'Firebase'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/humans-relais.webp',
	              alt: `Humans Relais Android application`
	          },
	          secondaryImage: {
	              src: './resources/images/works/humans-relais-logo.webp',
	              alt: 'Humans Relais'
	          },
	          title: `Humans Relais`,
	          subTitle: {
	              text: '@humansrelais'
	          },
	          description: '',
	          tags: [
	              'Android',
	              'Java',
	              'Play Store'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/dry-principle.webp',
	              alt: 'DRY Principle'
	          },
	         
	          title: 'DRY Principle',
	          subTitle: {
	              text: 'Clean Code',
	          },
	          description: '',
	          readMoreLink: 'https://docs.google.com/presentation/d/1RqId9XV6FtQ0_hYC26qG03rkEHc-ylODwF1FwilaBxo/',
	          socialShare: {
	              twitter: true,
	              linkedIn: true
	          },
	          tags: [
	              'Clean Code',
	              'Software Craftsmanship'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/bac-a-lettre.webp',
	              alt: 'Bac à lettre PWA'
	          },
	          secondaryImage: {
	              src: 'https://bac-a-lettre.netlify.com/assets/img/logo.svg',
	              alt: 'Bac à lettre'
	          },
	          title: 'Bac à lettre',
	          subTitle: {
	              text: 'bac-a-lettre.netlify.com',
	              link: 'https://bac-a-lettre.netlify.com/'
	          },
	          description: '',
	          tags: [
	              'React JS',
	              'PWA',
	              'Netlify'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/golden-circle.webp',
	              alt: 'The Golden Circle'
	          },
	          title: '“The Golden Circle”',
	          subTitle: {
	              text: 'A brief introduction'
	          },
	          description: '',
	          readMoreLink: 'https://docs.google.com/presentation/d/1lK0SjbXAwa2BeCO3kOeRipuXO5ywS-1XLIwJppP86Ro/',
	          socialShare: {
	              twitter: true,
	              linkedIn: true
	          }          
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/tryeat.webp',
	              alt: 'Try Eat PWA'
	          },
	          secondaryImage: {
	              src: './resources/images/works/tryeat-logo.webp',
	              alt: 'Try Eat'
	          },
	          title: 'Try Eat',
	          subTitle: {
	              text: 'tryeat.me',
	              link: 'https://tryeat.me/'
	          },
	          description: '',
	          tags: [
	              'Vue JS',
	              'PWA',
	              'Semantic UI',
	              'Firebase'
	            ]
	        },
	        {
	          primaryImage: {
	              src: 'https://raw.githubusercontent.com/ismailnguyen/Wedding-Invitation/master/screen1.png',
	              alt: 'My wedding invitation'
	          },
	          title: 'My wedding invitation',
	          subTitle: {
	              text: 'github/Wedding-Invitation',
	              link: 'https://github.com/ismailnguyen/Wedding-Invitation'
	          },
	          description: '',
	          tags: [
	              'HTML',
	              'JavaScipt',
	              'CSS'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/joyti-restaurant.webp',
	              alt: 'Joyti Restaurant'
	          },
	          title: 'Joyti Restaurant',
	          subTitle: {
	              text: 'github/joyti-restauran',
	              link: 'https://github.com/ismailnguyen/joyti-restaurant'
	          },
	          description: '',
	          tags: [
	              'HTML',
	              'Google Sheets API'
	            ]
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/ismailnguyen.webp',
	              alt: 'My portfolio'
	          },
	          secondaryImage: {
	              src: './resources/images/profile.webp',
	              alt: 'Ismaïl NGUYEN'
	          },
	          title: 'My portfolio',
	          subTitle: {
	              text: 'github/ismailnguyen',
	              link: 'https://github.com/ismailnguyen/ismailnguyen.github.io'
	          },
	          description: '',
	          tags: [
	              'Svelte JS',
	              'Bulma',
	              'HTML',
	              'Github Pages'
	            ]
	        },
	        {
	          title: 'Imperfection is the new perfection',
	          readMoreLink: 'https://docs.google.com/presentation/d/1XFsJ-2ZMRti-iwg4UQ4HFEvja8FggakO_adyLMCWZOA/',
	          socialShare: {
	              twitter: true,
	              linkedIn: true
	          },
	          description: ''
	        },
	        {
	          primaryImage: {
	              src: './resources/images/works/open-closed-principle.webp',
	              alt: 'Open/Closed Principle'
	          },
	          title: 'Open/Closed Principle',
	          subTitle: {
	              text: 'SOLID Principle'
	          },
	          description: '',
	          readMoreLink: 'https://docs.google.com/presentation/d/1Ame_zMdo07S4OcmEAyEjwLFZkYRsnS-unnHZcaP_-xM/',
	          socialShare: {
	              twitter: true,
	              linkedIn: true
	          },
	          tags: [
	              'SOLID',
	              'Clean Code',
	              'Software Craftmanship'
	            ]
	        },
	        {
	          title: '“Comment le Big Data peut influencer notre vie quotidienne ?”',
	          subTitle: {
	              text: 'Ismaïl NGUYEN & Valentin MEYNE'
	          },
	          readMoreLink: 'https://www.ismailnguyen.com/docs/Memoire_Big-Data_Influence-sur-notre-vie-quotidienne_MEYNE-Valentin_NGUYEN-Ismail.pdf',
	          socialShare: {
	              twitter: true,
	              linkedIn: true
	          },
	          description: `
          Wanting to understand the past and foresee the future. It is from now on a dream
within the reach of Humanity.
Immeasurable power to foresee the comings and goings of an individual. Basing on
this individual tastes, preferences, experiences, body and acts, this data allows to
identify him. We all produce them, at any time. It is harvested on websites and
places on Earth we visited. Nevertheless, the main source to this day is our
connected objects.
Don’t believe you are spared if you are not passionate about new technologies
because today we all possess at least one. It is our smartphone.
This huge amount of Data, so big that it challenges the giants of IT industry that
collect it to obtain relevant informations.
It is called Big Data.
With this huge power in the hands of the most powerful companies in the world we
can ask ourselves :
How Big Data can influence our everyday life ?

This is where we come up with this document. We, two students who growth with
computers, try to bring an answer by searching, grouping, analysing numerous press
articles, conferences, books, from experts or thinkers.
It appears that this technological progress have a global impact. Indeed, many field
have started to mutate.
From optimisation of production to anticipating consumer needs, the large retailers
seems to benefit from it.
The citizen security can be improved too. It can be trips, domestic accidents or
health, by analysing each situation, the everyday life will be more secure than we
could imagine.
Our everyday life will be more secure and our consommation will be optimized at the
expense of our independence and freedom.
Actually, in politics, we can see there is a research for methods to obtain electors
favours. Adapting a speech according to the results of the analyse of what people
want is already an existing method. Also, governments are tempted to use the informations collected on everyone to detect the ones that can make trouble. The
definition of someone who make trouble in the eyes of a government can change in
the long run. An exception created today for anti-terrorism can become the norm
tomorrow.
Each company can be tempted, to stay competitive, to take advantage of consumer
addiction predispositions, known or not by the client and keep him captive. In this
way, our private life could be revealed without any possibility to fight back against
entities that don’t have the same goal as our.
All this points sum up in one word : “Control”. In fact, the greatest danger is to,
knowing the future and his levers, a player influences it in his own interest.
We will conclude by saying that Big Data and the changements it involves are greater
than the discovery of atom in its time and despite its devastating potential, Big Data
can improve the everyday life of each of us. Only History will tell us with certainty
which use of it will be done in the long run but it will influence our everyday life.
          `,
	          tags: [
	              'Big Data',
	              'IoT',
	              'AI',
	              'Linked data',
	              'Machine learning',
	              'Technology',
	              'Algorithm'
	            ]
	        }
	    ];

		return { works };
	}

	class My_works extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, instance$1, create_fragment$4, safe_not_equal);
		}
	}

	/* src\get-in-touch.html generated by Svelte v3.0.0-beta.3 */

	function create_fragment$5(ctx) {
		var section, div9, div8, div1, text12, div7, div6, div5, div2, text13, div4, div3, text15, br0, text16, br1, text17, br2, text18, strong, text21, br3, text22, br4, text23, br5, text24, i_3, text25, raw_before;

		return {
			c() {
				section = createElement("section");
				div9 = createElement("div");
				div8 = createElement("div");
				div1 = createElement("div");
				div1.innerHTML = `<h1 class="title is-1">Get in touch</h1>
			                <p class="is-size-4">Follow me on social medias</p>
			                <div class="social-media"><a href="https://twitter.com/ishmaa_el" target="_blank" class="button is-medium is-light" rel="noopener"><span class="icon is-medium"><i class="fab fa-twitter"></i></span>
			                        <span>Twitter</span></a>
			                    <a href="https://www.linkedin.com/in/ismailnguyen" target="_blank" class="button is-medium is-light" rel="noopener"><span class="icon is-medium"><i class="fab fa-linkedin"></i></span>
			                        <span>LinkedIn</span></a>
			                    <a href="https://github.com/ismailnguyen/" target="_blank" class="button is-medium is-light" rel="noopener"><span class="icon is-medium"><i class="fab fa-github"></i></span>
			                        <span>GitHub</span></a></div>`;
				text12 = createText("\r\n            ");
				div7 = createElement("div");
				div6 = createElement("div");
				div5 = createElement("div");
				div2 = createElement("div");
				div2.innerHTML = `<img data-src="./resources/images/profile.png" alt="Image" class="lazyload">`;
				text13 = createText("\r\n                        ");
				div4 = createElement("div");
				div3 = createElement("div");
				div3.innerHTML = `<span class="title">Nota bene</span>`;
				text15 = createText("\r\n                            ");
				br0 = createElement("br");
				text16 = createText("\r\n                            ");
				br1 = createElement("br");
				text17 = createText("\r\n                            ");
				br2 = createElement("br");
				text18 = createText("\r\n                            Currently working ");
				strong = createElement("strong");
				strong.innerHTML = `@<a href="http://la-combe-du-lion-vert.fr/" target="_blank" rel="noopener">LeLion_Vert</a>`;
				text21 = createText(", as a software craftsman and craft coach.\r\n                            ");
				br3 = createElement("br");
				text22 = createText("\r\n                            ");
				br4 = createElement("br");
				text23 = createText("\r\n                            ");
				br5 = createElement("br");
				text24 = createText("\r\n                            ");
				i_3 = createElement("i");
				text25 = createText(" ");
				raw_before = createElement('noscript');
				div1.className = "column";
				div2.className = "column";
				div3.className = "neon-container";
				i_3.className = "fa fa-map-marker-alt";
				div4.className = "column";
				div5.className = "columns";
				div6.className = "notification is-warning";
				div7.className = "column";
				div8.className = "columns";
				div9.className = "container";
				section.id = "get-in-touch";
				section.className = "section is-large has-background-light";
			},

			m(target, anchor) {
				insert(target, section, anchor);
				append(section, div9);
				append(div9, div8);
				append(div8, div1);
				append(div8, text12);
				append(div8, div7);
				append(div7, div6);
				append(div6, div5);
				append(div5, div2);
				append(div5, text13);
				append(div5, div4);
				append(div4, div3);
				append(div4, text15);
				append(div4, br0);
				append(div4, text16);
				append(div4, br1);
				append(div4, text17);
				append(div4, br2);
				append(div4, text18);
				append(div4, strong);
				append(div4, text21);
				append(div4, br3);
				append(div4, text22);
				append(div4, br4);
				append(div4, text23);
				append(div4, br5);
				append(div4, text24);
				append(div4, i_3);
				append(div4, text25);
				append(div4, raw_before);
				raw_before.insertAdjacentHTML("afterend", coordinates);
			},

			p: noop,
			i: noop,
			o: noop,

			d(detach) {
				if (detach) {
					detachNode(section);
				}
			}
		};
	}

	let coordinates= '{ `lat`: 2.33, `lon`: 48.86 }';

	class Get_in_touch extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, null, create_fragment$5, safe_not_equal);
		}
	}

	/* src\footer.html generated by Svelte v3.0.0-beta.3 */

	function create_fragment$6(ctx) {
		var footer;

		return {
			c() {
				footer = createElement("footer");
				footer.innerHTML = `<div class="content has-text-centered"><p>
			            Handcrafted with <i class="fa fa-heart" style="color:red;"></i>. Under <a href="https://www.wtfpl.net/" target="_blank" rel="noopener">WTFP licence</a>.
			        </p></div>`;
				footer.className = "footer has-background-light";
			},

			m(target, anchor) {
				insert(target, footer, anchor);
			},

			p: noop,
			i: noop,
			o: noop,

			d(detach) {
				if (detach) {
					detachNode(footer);
				}
			}
		};
	}

	class Footer extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, null, create_fragment$6, safe_not_equal);
		}
	}

	/* src\app.html generated by Svelte v3.0.0-beta.3 */

	function create_fragment$7(ctx) {
		var text0, text1, text2, text3, text4, current;

		var navbar = new Navbar({});

		var presentation = new Presentation({});

		var aboutme = new About_me({});

		var myworks = new My_works({});

		var getintouch = new Get_in_touch({});

		var footer = new Footer({});

		return {
			c() {
				navbar.$$.fragment.c();
				text0 = createText("\r\n\r\n");
				presentation.$$.fragment.c();
				text1 = createText("\r\n\r\n");
				aboutme.$$.fragment.c();
				text2 = createText("\r\n\r\n");
				myworks.$$.fragment.c();
				text3 = createText("\r\n\r\n");
				getintouch.$$.fragment.c();
				text4 = createText("\r\n\r\n");
				footer.$$.fragment.c();
			},

			m(target, anchor) {
				mount_component(navbar, target, anchor);
				insert(target, text0, anchor);
				mount_component(presentation, target, anchor);
				insert(target, text1, anchor);
				mount_component(aboutme, target, anchor);
				insert(target, text2, anchor);
				mount_component(myworks, target, anchor);
				insert(target, text3, anchor);
				mount_component(getintouch, target, anchor);
				insert(target, text4, anchor);
				mount_component(footer, target, anchor);
				current = true;
			},

			p: noop,

			i(local) {
				if (current) return;
				navbar.$$.fragment.i(local);

				presentation.$$.fragment.i(local);

				aboutme.$$.fragment.i(local);

				myworks.$$.fragment.i(local);

				getintouch.$$.fragment.i(local);

				footer.$$.fragment.i(local);

				current = true;
			},

			o(local) {
				navbar.$$.fragment.o(local);
				presentation.$$.fragment.o(local);
				aboutme.$$.fragment.o(local);
				myworks.$$.fragment.o(local);
				getintouch.$$.fragment.o(local);
				footer.$$.fragment.o(local);
				current = false;
			},

			d(detach) {
				navbar.$destroy(detach);

				if (detach) {
					detachNode(text0);
				}

				presentation.$destroy(detach);

				if (detach) {
					detachNode(text1);
				}

				aboutme.$destroy(detach);

				if (detach) {
					detachNode(text2);
				}

				myworks.$destroy(detach);

				if (detach) {
					detachNode(text3);
				}

				getintouch.$destroy(detach);

				if (detach) {
					detachNode(text4);
				}

				footer.$destroy(detach);
			}
		};
	}

	class App extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, null, create_fragment$7, safe_not_equal);
		}
	}

	const app = new App({
	  target: document.body,
	});

	return app;

}());
