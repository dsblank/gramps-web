import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';
import '@material/mwc-drawer'
import '@material/mwc-tab'
import '@material/mwc-tab-bar'
import '@material/mwc-top-app-bar'
import '@material/mwc-icon'
import '@material/mwc-icon-button'
import '@material/mwc-list'
import '@material/mwc-list/mwc-list-item'
import './components/GrampsJsListItem.js'


import './views/GrampsjsViewPerson.js'
import './views/GrampsjsViewPeople.js'
import { sharedStyles } from './SharedStyles.js';

export class GrampsJs extends LitElement {
  static get properties() {
    return {
      strings: { type: Object },
      _page: { type: String },
      _pageId: { type: String },
    };
  }

  constructor() {
    super();
    this.strings = {};
    this._page = 'home';
    this._pageId = '';
  }

  static get styles() {
    return [
      sharedStyles,
      css`
      :host {
        min-height: 100vh;
      }

      main {
        padding: 25px;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      mwc-tab-bar {
        --mdc-typography-button-text-transform: none;
        --mdc-typography-button-font-weight: 400;
        --mdc-typography-button-letter-spacing: 0px;
        --mdc-typography-button-font-size: 16px;
      }

      mwc-tab {
        flex-grow: 0;
      }

    `
    ]
  }

  render() {

    const tabs = {
      people: 'People',
      events: 'Events',
      places: 'Places',
    }

    return html`
      <mwc-drawer hasHeader type="dismissible" id="app-drawer">
        <span slot="title">Menu</span>
        <div>
          <mwc-list>
            <grampsjs-list-item href="/">
              Home
            </grampsjs-list-item>
            <grampsjs-list-item href="/people">
              Lists
            </grampsjs-list-item>
          </mwc-list>
        </div>
        <div slot="appContent" id="top-app-bar-parent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
            <mwc-icon-button icon="home" slot="actionItems" @click="${() => this._handleTab('')}"></mwc-icon-button>
            <mwc-icon-button icon="list" slot="actionItems" @click="${() => this._handleTab('people')}"></mwc-icon-button>
            <mwc-icon-button icon="map" slot="actionItems" @click="${() => this._handleTab('map')}"></mwc-icon-button>
            <mwc-icon-button icon="account_tree" slot="actionItems"></mwc-icon-button>
            <div slot="title">Gramps.js</div>
          </mwc-top-app-bar>

        <main>

        ${this._tabHtml(tabs)}

        <grampsjs-view-people class="page" ?active=${this._page === 'people'}></grampsjs-view-people>
        <grampsjs-view-person class="page" ?active=${this._page === 'person'} grampsId="${this._pageId}"></grampsjs-view-person>

        </main>

      </div>
      </mwc-drawer>

    `;
  }

  _tabHtml(tabs) {
    if (!(this._page in tabs)) {
      return ``
    }
    return html`
    <mwc-tab-bar activeIndex="${Object.keys(tabs).indexOf(this._page)}">
    ${Object.keys(tabs).map(key => {
      return html`<mwc-tab label="${tabs[key]}" @click="${() => this._handleTab(key)}"></mwc-tab>`
    })}
    </mwc-tab-bar>
  `
  }

  _toggleDrawer() {
    const drawer = this.shadowRoot.getElementById('app-drawer');
    drawer.open = !drawer.open;
  }

  firstUpdated() {
    installRouter((location) => this._loadPage(decodeURIComponent(location.pathname)));
    const container = this.shadowRoot.getElementById('top-app-bar-parent');
    this.boundToggleDrawer = this._toggleDrawer.bind(this);
    container.addEventListener('MDCTopAppBar:nav', this.boundToggleDrawer);
  }

  _loadPage(path) {
    if (path === "/") {
      this._page = 'home';
      this._pageId = '';
    } else{
      const pathId = path.slice(1);
      const page = pathId.split('/')[0]
      const pageId = pathId.split('/')[1]
      this._page = page;
      this._pageId = pageId || '';
    }
  }

  _handleTab(page) {
    if (page !== this._page) {
      const href = `/${page}`
      this._loadPage(href)
      window.history.pushState({}, '', href)
    }
  }

}
