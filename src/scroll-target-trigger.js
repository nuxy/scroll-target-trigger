/**
 *  Scroll Target Trigger
 *  Lightweight, dependency free, scroll event methods.
 *
 *  Copyright 2023-2026, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

/**
 * Provides scroll event methods.
 */
class ScrollTargetTrigger {

  /**
   * @type {Function}
   */
  listener = null;

  /**
   * @type {Boolean}
   */
  disabled = false;

  /**
   * Create a new instance of ScrollTargetTrigger.
   *
   * @param {Element|HTMLElement|Number} value
   *   Element or position from top of document.
   *
   * @param {Function} callback
   *   Callback function triggered on success.
   */
  constructor(value, callback) {
    if (value instanceof Element || value instanceof HTMLElement) {
      this.element = value;
    }

    if (typeof value === 'number' && value > 0) {
      this.position = value;
    }

    if (typeof callback === 'function') {
      this.callback = callback;
    }
  }

  /**
   * Scroll to an Element or document position when executed.
   *
   * @param {String} behavior
   *   Scrolling event behavior (auto|instant|smooth).
   */
  target(behavior = 'auto') {
    let targetPos = this.position;

    if (this.element) {
      const rect = this.element.getBoundingClientRect();
      targetPos = rect.top;
    }

    // Perform action on scroll event.
    this.listener = event => {
      const scrollPos = event.view.scrollY;

      if (scrollPos === targetPos && this.callback) {
        this.callback();
      }
    };

    window.addEventListener('scroll', this.listener);

    window.scrollTo({
      behavior,
      left: 0,
      top: targetPos
    });
  }

  /**
   * Run callback when scrolled to Element or document position.
   *
   * @param {Number} threshold
   *   Threshold from target to re-enable event (default: 100).
   */
  trigger(threshold = 100) {
    if ((this.element || this.position) && this.callback) {

      // Perform action on scroll event.
      this.listener = event => {
        const scrollPos = event.view.scrollY;

        let targetPos = this.position;

        if (this.element) {
          const rect = this.element.getBoundingClientRect();
          targetPos = scrollPos + rect.top;
        }

        if (scrollPos >= targetPos && this.disabled === false) {
          this.disabled = true;
        } else if (scrollPos <= (targetPos - threshold)) {
          this.disabled = false;
        }

        this.callback(this.disabled);
      };

      window.addEventListener('scroll', this.listener);
    }
  }

  /**
   * Remove registered scroll event listener.
   */
  destroy() {
    if (this.listener) {
      window.removeEventListener('scroll', this.listener);
    }
  }
}

/**
 * Set global/exportable instance, where supported.
 */
window.scrollTargetTrigger = function(value, callback) {
  return new ScrollTargetTrigger(value, callback);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScrollTargetTrigger;
}
