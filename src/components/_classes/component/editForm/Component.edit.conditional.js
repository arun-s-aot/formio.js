import EditFormUtils from './utils';
import { getContextComponents } from '../../../../utils/utils';
/* eslint-disable quotes, max-len */
export default [
  {
    type: 'panel',
    title: 'Simple',
    key: 'simple-conditional',
    theme: 'default',
    weight: 105,
    components: [
      {
        type: 'select',
        input: true,
        label: 'This component should Display:',
        key: 'conditional.show',
        dataSrc: 'values',
        data: {
          values: [
            { label: 'True', value: 'true' },
            { label: 'False', value: 'false' }
          ]
        }
      },
      {
        type: 'select',
        input: true,
        label: 'When the form component:',
        key: 'conditional.when',
        dataSrc: 'custom',
        valueProperty: 'value',
        data: {
          custom(context) {
            return getContextComponents(context);
          }
        }
      },
      {
        type: 'textfield',
        input: true,
        label: 'Has the value:',
        key: 'conditional.eq'
      },
    ],
  },
  {
    weight: 0,
    input: true,
    label: 'Conditions',
    key: 'conditional.conditions',
    templates: {
      header: '<div class="row"> \n  <div class="col-sm-3">\n    <strong>{{ ctx.t("When") }}</strong>\n  </div>\n<div class="col-sm-3">\n    <strong>{{ ctx.t("Is") }}</strong>\n  </div>\n<div class="col-sm-3">\n    <strong>{{ ctx.t("Value") }}</strong>\n  </div>\n<div class="col-sm-3">\n </div>\n</div>',
      row: '<div class="row"> \n  <div class="col-sm-3">\n    <div>{{ row.component }} </div>\n  </div>\n <div class="col-sm-3">\n    <div>{{ row.operator }} </div>\n  </div>\n <div class="col-sm-3">\n    <div>{{ row.value }} </div>\n  </div>\n  <div class="col-sm-3"> \n    <div class="btn-group pull-right"> \n      <button class="btn btn-default editRow">{{ ctx.t("Edit") }}</button> \n      <button class="btn btn-danger removeRow">{{ ctx.t("Delete") }}</button> \n    </div> \n  </div> \n</div>',
      footer: '',
    },
    type: 'editgrid',
    addAnother: 'Add Condition',
    saveRow: 'Save Condition',
    components: [
      {
        // weight: 10,
        // key: 'triggerPanel',
        // input: false,
        // title: 'Trigger',
        // tableView: false,
        // components: [
        //   {
            weight: 0,
            input: true,
            tableView: false,
            components: [
              {
                weight: 10,
                label: 'When:',
                input: true,
                key: 'component',
                type: 'select',
                dataSrc: 'custom',
                valueProperty: 'value',
                data: {
                  custom(context) {
                    return getContextComponents(context);
                  }
                }
              },
              {
                weight: 0,
                input: true,
                label: 'Is:',
                key: 'operator',
                tableView: false,
                data: {
                  values: [
                    { "value": "isEqual", "label": "is Equal To" },
                    { "value": "isNotEqual", "label": "is Not Equal To" },
                    { "value": "isEmpty", "label": "is Empty" },
                    { "value": "isNotEmpty", "label": "is Not Empty" },
                    { "value": "includes", "label": "includes" },
                    { "value": "notIncludes", "label": "not Includes" },
                    { "value": "endsWith", "label": "ends With" }
                  ],
                },
                dataSrc: 'values',
                template: '<span>{{ item.label }}</span>',
                type: 'select',
              },
              {
                type: 'textfield',
                input: true,
                label: 'Value:',
                key: 'value'
              },
          //   ],
          //   key: 'trigger',
          //   type: 'container',
          // },
        ],
        type: 'panel',
      },
    ],
  },
  EditFormUtils.javaScriptValue('Advanced Conditions', 'customConditional', 'conditional.json', 110,
    '<p>You must assign the <strong>show</strong> variable a boolean result.</p>' +
    '<p><strong>Note: Advanced Conditional logic will override the results of the Simple Conditional logic.</strong></p>' +
    '<h5>Example</h5><pre>show = !!data.showMe;</pre>',
    '<p><a href="http://formio.github.io/formio.js/app/examples/conditions.html" target="_blank" rel="noopener noreferrer">Click here for an example</a></p>'
  )
];
/* eslint-enable quotes, max-len */
