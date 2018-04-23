import { NgModule } from '@angular/core';

import {
	MatButtonModule
	// Add more material modules here.
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule
	],
	exports: [
		MatButtonModule
	]
})
export class MaterialModule {}
