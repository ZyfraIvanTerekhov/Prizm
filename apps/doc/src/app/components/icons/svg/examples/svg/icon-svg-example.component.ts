import { Component } from '@angular/core';
import {
  PRIZM_ICONS_SVG_SET,
  prizmIconSvgDateTimeCalendarPlus,
  PrizmIconSvgEnum,
  prizmIconSvgProductionIndustrySnakeCup,
  prizmIconSvgSettingsToolsBan,
  PrizmIconSvgsRegistry,
} from '@prizm/icons';

@Component({
  selector: 'prizm-icon-svg-example',
  templateUrl: './icon-svg-example.component.html',
})
export class PrizmIconSvgSvgExampleComponent {
  readonly PrizmIconSvgEnum = PrizmIconSvgEnum;
  constructor(private readonly iconRegistry: PrizmIconSvgsRegistry) {
    /** Также можете добавить свою иконку */
    this.iconRegistry.registerIcons([
      prizmIconSvgSettingsToolsBan,
      prizmIconSvgProductionIndustrySnakeCup,
      prizmIconSvgDateTimeCalendarPlus,
    ]);

    /** для добавление всего сета наших иконок
     * используйте PRIZM_ICONS_SVG_SET
     * */
    // this.iconRegistry.registerIcons([
    //   ...PRIZM_ICONS_SVG_SET
    // ]);
  }
}
