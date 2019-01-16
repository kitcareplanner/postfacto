/*
 * Postfacto, a free, open-source and self-hosted retro tool aimed at helping
 * remote teams.
 *
 * Copyright (C) 2016 - Present Pivotal Software, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 *
 * it under the terms of the GNU Affero General Public License as
 *
 * published by the Free Software Foundation, either version 3 of the
 *
 * License, or (at your option) any later version.
 *
 *
 *
 * This program is distributed in the hope that it will be useful,
 *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *
 * GNU Affero General Public License for more details.
 *
 *
 *
 * You should have received a copy of the GNU Affero General Public License
 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/application.scss';
import EnhancedApplication from './components/Application';
import * as serviceWorker from './serviceWorker';

// TODO: polyfills?

const {config} = global.Retro;

if (process.env.REACT_APP_USE_MOCK_GOOGLE) {
  config.mock_google_auth = true;
  config.google_oauth_client_id = null;
  window.mock_google_auth = 'expected-valid-access-token_manual-testing';
} else if (process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID) {
  config.google_oauth_client_id = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;
}

window.Retro = {config};

ReactDOM.render(<EnhancedApplication {...{config}}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
