/*
 * Copyright (C) 2022  Aravinth Manivannan <realaravinth@batsense.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

class LazyElement {
  id: string;
  element: HTMLElement;
  constructor(id: string) {
    this.id = id;
  }

  get(): HTMLElement {
    if (this.element === null || this.element === undefined) {
      const element = document.getElementById(this.id);
      if (element === null || element === undefined) {
        throw new Error(`Element ${this.id} is undefined`);
      } else {
        this.element = element;
      }
    }
    return this.element;
  }
}

export default LazyElement;
