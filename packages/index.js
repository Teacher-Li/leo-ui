import "./styles/index.less"

import Icon from './components/Icon';
import Load from './components/Load';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';
import Input from './components/Input';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Form from './components/Form';
import FormItem from './components/FormItem';
import Table from './components/Table';
import TableSort from './components/TableSort';
import Page from './components/Page';
import Edit from './components/Edit';
import Select from './components/Select';
import Upload from './components/Upload';
import Masonry from './components/Masonry';
import MasonryItem from './components/MasonryItem';
import Carousels from './components/Carousels';
import CarouselsItem from './components/CarouselsItem';

import Heart from './directives/heart';
import Tooltip from './directives/tooltip';
import DragSelect from './directives/dragSelect';

import CSV from './utils/csv';

const components = {
  oIcon: Icon,
  oLoad: Load,
  oRadio: Radio,
  oRadioGroup: RadioGroup,
  oCheckbox: Checkbox,
  oCheckboxGroup: CheckboxGroup,
  oInput: Input,
  oButton: Button,
  oButtonGroup: ButtonGroup,
  oForm: Form,
  oFormItem: FormItem,
  oTable: Table,
  oTableSort: TableSort,
  oPage: Page,
  oEdit: Edit,
  oSelect: Select,
  oUpload: Upload,
  oMasonry: Masonry,
  oMasonryItem: MasonryItem,
  oCarousels: Carousels,
  oCarouselsItem: CarouselsItem
};

const directives = {
  Heart,
  Tooltip,
  DragSelect
};

const install = (Vue, opts = {}) => {
  if (install.installed) return;

  // 组件
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  // 指令
  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
  });

  Vue.prototype.$LEO = {
    version : process.env.VERSION,
    prefix  : opts.prefix || 'leo'
  };

  Vue.prototype.$CSV = CSV;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
}