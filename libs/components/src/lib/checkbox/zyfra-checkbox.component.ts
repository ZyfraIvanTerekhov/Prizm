import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-checkbox',
  templateUrl: './zyfra-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraCheckboxComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() name: string = null;
  @Input() value: any = null;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() binary: boolean = true;
  @Input() tabindex: number = null;
  @Input() inputId: string = null;
  @Input() ariaLabelledBy: string = null;
  @Input() ariaLabel: string = null;
  @Input() style: object = null;
  @Input() styleClass: string = null;
  @Input() labelStyleClass: string = null;
  @Input() checkboxIcon = 'zyfra-icon selection-check-simple';
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() trueValue: any = null;
  @Input() falseValue: any = null;
  @Input() model: any;

  @Output() modelChange = new EventEmitter<boolean | null>();

  public override setDisabledState(): void {
    // do nothing
  }
}
