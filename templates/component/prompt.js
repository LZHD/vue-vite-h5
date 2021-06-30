// eslint-disable-next-line @typescript-eslint/no-var-requires
const { notEmpty } = require('../utils');

module.exports = {
  description: 'generate Vue3 component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (
          value.indexOf('script') === -1 &&
          value.indexOf('template') === -1
        ) {
          return 'Components require at least a script or template tag.';
        }
        return true;
      }
    }
  ],
  actions: data => {
    const name = '{{properCase name}}';
    return [
      {
        type: 'add',
        path: `src/components/${name}/${name}.vue`,
        templateFile: 'templates/component/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      }
    ];
  }
};
