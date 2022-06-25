'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">school-management-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClassModule.html" data-type="entity-link" >ClassModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' : 'data-target="#xs-controllers-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' :
                                            'id="xs-controllers-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' }>
                                            <li class="link">
                                                <a href="controllers/ClassController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' : 'data-target="#xs-injectables-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' :
                                        'id="xs-injectables-links-module-ClassModule-92fe45e0fd11e41e19c208e189b8806149fd93ab6c916d207e2ed10bfb1bebbc45a976c30945c9716f6fdcf1eb183a2a846b58f213c1a5fe9b4820d15449e898"' }>
                                        <li class="link">
                                            <a href="injectables/ClassService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DepartmentModule.html" data-type="entity-link" >DepartmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' : 'data-target="#xs-controllers-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' :
                                            'id="xs-controllers-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' }>
                                            <li class="link">
                                                <a href="controllers/DepartmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' : 'data-target="#xs-injectables-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' :
                                        'id="xs-injectables-links-module-DepartmentModule-ec671a03cf738326063757fba216c70217056a31f74987fec623a856e08daa7ecc4775263975d53bf150a3c2f1b3bf1852774db97422f782c68ec71c73b756c4"' }>
                                        <li class="link">
                                            <a href="injectables/DepartmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionModule.html" data-type="entity-link" >SectionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' : 'data-target="#xs-controllers-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' :
                                            'id="xs-controllers-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' }>
                                            <li class="link">
                                                <a href="controllers/SectionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' : 'data-target="#xs-injectables-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' :
                                        'id="xs-injectables-links-module-SectionModule-a9a61037e6eb334c2a0f9b4ebd05270f53b9bead4bfdf514c8fefbe32268cf176fb804e43541b3c07dfa0b607ce21bfe2470df96c942ec42a3ade1c3873bf567"' }>
                                        <li class="link">
                                            <a href="injectables/SectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentModule.html" data-type="entity-link" >StudentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' : 'data-target="#xs-controllers-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' :
                                            'id="xs-controllers-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' }>
                                            <li class="link">
                                                <a href="controllers/StudentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' : 'data-target="#xs-injectables-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' :
                                        'id="xs-injectables-links-module-StudentModule-ca1f33b5139620dda7ce52c4501ee09cd1027e03d2b8b13af8be68f276511bd4a82ca0e3248627ee5a1d618a47fa4ad65ebc4ddc1eae3be8236f9190d3e1f8a1"' }>
                                        <li class="link">
                                            <a href="injectables/StudentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectModule.html" data-type="entity-link" >SubjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' : 'data-target="#xs-controllers-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' :
                                            'id="xs-controllers-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' }>
                                            <li class="link">
                                                <a href="controllers/SubjectController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' : 'data-target="#xs-injectables-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' :
                                        'id="xs-injectables-links-module-SubjectModule-30f5ef84b649874432b54a7e2a2faf7af0ef1ad7a352240897e4be5ad1c895d35f9cc37c46b9fbd5cd16b7cdee7e9bafaa8e21107f0e3dfdd4ae008c193054f2"' }>
                                        <li class="link">
                                            <a href="injectables/SubjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeacherModule.html" data-type="entity-link" >TeacherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' : 'data-target="#xs-controllers-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' :
                                            'id="xs-controllers-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' }>
                                            <li class="link">
                                                <a href="controllers/TeacherController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' : 'data-target="#xs-injectables-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' :
                                        'id="xs-injectables-links-module-TeacherModule-1de866e4d8ab2f1932aa0c683dae4acbbfffd5452b4ec917e0620e3cc71ba9d8a0283ff90105d013a4929ab66a5390b49146acd42e9befb94b0e510cecb7b4d6"' }>
                                        <li class="link">
                                            <a href="injectables/TeacherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Class.html" data-type="entity-link" >Class</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Department.html" data-type="entity-link" >Department</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Designation.html" data-type="entity-link" >Designation</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Section.html" data-type="entity-link" >Section</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Student.html" data-type="entity-link" >Student</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Subject.html" data-type="entity-link" >Subject</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Teacher.html" data-type="entity-link" >Teacher</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseModel.html" data-type="entity-link" >BaseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateClassDto.html" data-type="entity-link" >CreateClassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDepartmentDto.html" data-type="entity-link" >CreateDepartmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSectionDto.html" data-type="entity-link" >CreateSectionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStudentDto.html" data-type="entity-link" >CreateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubjectDto.html" data-type="entity-link" >CreateSubjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeacherDto.html" data-type="entity-link" >CreateTeacherDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClassDto.html" data-type="entity-link" >UpdateClassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDepartmentDto.html" data-type="entity-link" >UpdateDepartmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSectionDto.html" data-type="entity-link" >UpdateSectionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStudentDto.html" data-type="entity-link" >UpdateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubjectDto.html" data-type="entity-link" >UpdateSubjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeacherDto.html" data-type="entity-link" >UpdateTeacherDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});