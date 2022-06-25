'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">school-management-app documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ClassModule.html\" data-type=\"entity-link\" >ClassModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' : 'data-target="#xs-controllers-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' : 'id="xs-controllers-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/ClassController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ClassController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' : 'data-target="#xs-injectables-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' : 'id="xs-injectables-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ClassService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ClassService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DepartmentModule.html\" data-type=\"entity-link\" >DepartmentModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' : 'data-target="#xs-controllers-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' : 'id="xs-controllers-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/DepartmentController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DepartmentController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' : 'data-target="#xs-injectables-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' : 'id="xs-injectables-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DepartmentService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DepartmentService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SectionModule.html\" data-type=\"entity-link\" >SectionModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' : 'data-target="#xs-controllers-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' : 'id="xs-controllers-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/SectionController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SectionController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' : 'data-target="#xs-injectables-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' : 'id="xs-injectables-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/SectionService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SectionService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StudentModule.html\" data-type=\"entity-link\" >StudentModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' : 'data-target="#xs-controllers-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' : 'id="xs-controllers-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/StudentController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StudentController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' : 'data-target="#xs-injectables-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' : 'id="xs-injectables-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/StudentService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StudentService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SubjectModule.html\" data-type=\"entity-link\" >SubjectModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' : 'data-target="#xs-controllers-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' : 'id="xs-controllers-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/SubjectController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SubjectController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' : 'data-target="#xs-injectables-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' : 'id="xs-injectables-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/SubjectService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SubjectService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TeacherModule.html\" data-type=\"entity-link\" >TeacherModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' : 'data-target="#xs-controllers-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' : 'id="xs-controllers-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/TeacherController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TeacherController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' : 'data-target="#xs-injectables-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' : 'id="xs-injectables-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/TeacherService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TeacherService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#entities-links"' : 'data-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/Class.html\" data-type=\"entity-link\" >Class</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Department.html\" data-type=\"entity-link\" >Department</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Designation.html\" data-type=\"entity-link\" >Designation</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Section.html\" data-type=\"entity-link\" >Section</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Student.html\" data-type=\"entity-link\" >Student</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Subject.html\" data-type=\"entity-link\" >Subject</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Teacher.html\" data-type=\"entity-link\" >Teacher</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/BaseModel.html\" data-type=\"entity-link\" >BaseModel</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateClassDto.html\" data-type=\"entity-link\" >CreateClassDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateDepartmentDto.html\" data-type=\"entity-link\" >CreateDepartmentDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateSectionDto.html\" data-type=\"entity-link\" >CreateSectionDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateStudentDto.html\" data-type=\"entity-link\" >CreateStudentDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateSubjectDto.html\" data-type=\"entity-link\" >CreateSubjectDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateTeacherDto.html\" data-type=\"entity-link\" >CreateTeacherDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateClassDto.html\" data-type=\"entity-link\" >UpdateClassDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateDepartmentDto.html\" data-type=\"entity-link\" >UpdateDepartmentDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateSectionDto.html\" data-type=\"entity-link\" >UpdateSectionDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateStudentDto.html\" data-type=\"entity-link\" >UpdateStudentDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateSubjectDto.html\" data-type=\"entity-link\" >UpdateSubjectDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateTeacherDto.html\" data-type=\"entity-link\" >UpdateTeacherDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));