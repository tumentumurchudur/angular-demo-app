import { APP_INITIALIZER, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		CommonModule
	]
})
export class SharedModule {
	public static forRoot() {
		return {
			ngModule: SharedModule
		};
	}
}
