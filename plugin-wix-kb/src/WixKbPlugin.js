import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'WixKbPlugin';

export default class WixKbPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    flex.CRMContainer
  .defaultProps
  .uriCallback = (task) => task
  ? `https://tammy-twilio.wixanswers.com/apps/widget/v1/tammy-twilio/de504b8b-207b-4627-b33f-676d665b6c02/view/en/`
  : "https://tammy-twilio.wixanswers.com/apps/widget/v1/tammy-twilio/de504b8b-207b-4627-b33f-676d665b6c02/view/en";

  //<iframe id="answers-widget-frame" allowfullscreen="" style="width: 100%; min-width: 100%; height: 100%; border: 0px; overflow: hidden; background: white;" src="https://tammy-twilio.wixanswers.com/apps/widget/v1/tammy-twilio/de504b8b-207b-4627-b33f-676d665b6c02/view/en"></iframe>

    //const options = { sortOrder: -1 };
    //flex.AgentDesktopView
     // .Panel1
     // .Content
     // .add(<CustomTaskListContainer key="demo-component" />, options);
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
