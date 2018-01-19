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

const React = require('react');

class Footer extends React.Component {

  render() {
    return (
      <div className="footer ">
          <span className="links">
              <a href={global.Retro.config.contact}>Contact Us</a>
              <a target="_blank" href={global.Retro.config.terms}>Terms & Conditions</a>
              <a target="_blank" href={global.Retro.config.privacy}>Privacy Policy</a>
          </span>
      </div>
    );
  }
}

module.exports = Footer;
