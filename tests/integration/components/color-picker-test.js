import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-headless-color-picker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | color-picker', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ColorPicker />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ColorPicker>
        template block text
      </ColorPicker>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
